import React, { useCallback, useEffect, useRef, useState } from 'react';
import { CaseWorksheet } from './components/CaseWorksheet';
import { ContactPage } from './components/ContactPage';
import { DetailDialog } from './components/DetailDialog';
import { DiagnosticLab } from './components/DiagnosticLab';
import { GuidedTriage } from './components/GuidedTriage';
import { GuidesSection } from './components/GuidesSection';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import {
  AboutSection,
  LearningSection,
  SafetySection,
  SiteFooter,
} from './components/InfoSections';
import { ReferenceDesk } from './components/ReferenceDesk';
import { SearchSection } from './components/SearchSection';
import { SafetyLessonQuiz } from './components/SafetyLessonQuiz';
import { SiteNotices } from './components/SiteNotices';
import { SymptomsSection } from './components/SymptomsSection';
import { searchDiagnosticLibrary } from './data/diagnosticsData';
import { DetailSelection, SearchResultItem } from './types/diagnostics';

function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

function readRoute(): string {
  return typeof window === 'undefined' ? '' : window.location.hash;
}

// Page routes live under "#/". Bare fragment hashes (for example
// "#search" or legacy section anchors) keep their old meaning: show the
// matching page content when one exists, and scroll to that section.
function isPageRoute(route: string): boolean {
  return route.startsWith('#/');
}

// Scroll to an in-page fragment target after React has (re)rendered the
// section that owns the id.
function scrollToFragment(targetId: string): void {
  const target = document.getElementById(targetId);
  if (!target) {
    return;
  }
  if (!target.hasAttribute('tabindex')) {
    // Make the section programmatically focusable (excluded from the
    // normal Tab order) so keyboard focus can follow the scroll.
    target.setAttribute('tabindex', '-1');
  }
  target.scrollIntoView({
    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    block: 'start',
  });
  target.focus({ preventScroll: true });
}

// Scroll back to the top of the current page.
function scrollToTop(): void {
  window.scrollTo({
    top: 0,
    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
  });
}

export const App: React.FC = () => {
  const [route, setRoute] = useState<string>(readRoute);
  // Bumped on every user-initiated navigation to a page route (not on
  // history traversal), so re-activating a page route always re-runs the
  // scroll effect below even when the route string does not change.
  const [pageNavCounter, setPageNavCounter] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchStatus, setSearchStatus] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResultItem[]>([]);
  const [activeDetail, setActiveDetail] = useState<DetailSelection | null>(null);
  const ignoreNextFragmentScroll = useRef(false);
  const routeRef = useRef(route);
  routeRef.current = route;

  useEffect(() => {
    // Back/forward traversal also fires popstate (plain link clicks do
    // not, and popstate fires before hashchange). Let the browser restore
    // its saved scroll position on traversal instead of forcing a scroll.
    const handlePopState = () => {
      ignoreNextFragmentScroll.current = true;
    };
    const handleHashChange = () => {
      const next = readRoute();
      if (!isPageRoute(next) && isPageRoute(routeRef.current)) {
        // A bare fragment hash (for example "#safety-lesson" from the
        // learning page) while a page route is active is an in-page
        // anchor, not navigation. Keep the current page mounted and let
        // the browser's native fragment jump (plus the smooth scroll
        // below) move to the section. On history traversal the browser
        // has already restored the saved position.
        if (ignoreNextFragmentScroll.current) {
          ignoreNextFragmentScroll.current = false;
          return;
        }
        const targetId = next.startsWith('#') ? next.slice(1) : next;
        if (targetId) {
          requestAnimationFrame(() => {
            scrollToFragment(targetId);
          });
        }
        return;
      }
      if (isPageRoute(next) && !ignoreNextFragmentScroll.current) {
        // User-initiated page navigation: signal the scroll effect even
        // when the route string ends up unchanged.
        setPageNavCounter((count) => count + 1);
      }
      setRoute(next);
    };
    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  useEffect(() => {
    // A click on a link that points at the page route already active
    // (re-selecting "Diagnostic Lab" while on #/lab, the footer "back to
    // top" while on #/, and similar) fires no hashchange event, so handle
    // it here: scroll back to the top of the page.
    const handleAnchorClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }
      const anchor =
        event.target instanceof Element
          ? event.target.closest('a')
          : null;
      if (!anchor) {
        return;
      }
      const href = anchor.getAttribute('href');
      if (!href || !isPageRoute(href)) {
        return;
      }
      if (href === routeRef.current) {
        event.preventDefault();
        scrollToTop();
      }
    };
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  const isContactRoute = route.startsWith('#/contact');

  useEffect(() => {
    if (isContactRoute) {
      // ContactPage scrolls itself to the top on mount.
      return;
    }
    if (isPageRoute(route)) {
      if (ignoreNextFragmentScroll.current) {
        // History traversal: the browser already restored the saved
        // position; do not override it.
        ignoreNextFragmentScroll.current = false;
        return;
      }
      // Navigating to a page (route change or re-activation): start at
      // the top of the page.
      const frame = requestAnimationFrame(scrollToTop);
      return () => cancelAnimationFrame(frame);
    }
    // Fragment navigation (for example "#search" or a legacy section
    // anchor). The browser's native fragment scroll fires before React
    // swaps the content in, so scroll to the target after the matching
    // branch mounts.
    const targetId = route.startsWith('#') ? route.slice(1) : route;
    if (!targetId) {
      return;
    }
    const frame = requestAnimationFrame(() => {
      if (ignoreNextFragmentScroll.current) {
        // History traversal: the browser already restored the saved
        // position; do not override it.
        ignoreNextFragmentScroll.current = false;
        return;
      }
      scrollToFragment(targetId);
    });
    return () => cancelAnimationFrame(frame);
  }, [route, isContactRoute, pageNavCounter]);

  const handleRunSearch = useCallback(
    (queryValue: string, resultsEl?: HTMLDivElement | null) => {
      const { status, results } = searchDiagnosticLibrary(queryValue);
      setSearchStatus(status);
      setSearchResults(results);

      if (results.length > 0 && resultsEl) {
        requestAnimationFrame(() => {
          resultsEl.scrollIntoView({
            behavior: prefersReducedMotion() ? 'auto' : 'smooth',
            block: 'nearest',
          });
        });
      }
    },
    []
  );

  const handleSelectSymptom = useCallback((symptomQuery: string) => {
    setSearchQuery(symptomQuery);
    const { status, results } = searchDiagnosticLibrary(symptomQuery);
    setSearchStatus(status);
    setSearchResults(results);

    // The search section is rendered on the symptoms page itself, so the
    // results appear right below the symptom the visitor chose.
    const searchSectionEl = document.getElementById('search');
    if (searchSectionEl) {
      searchSectionEl.scrollIntoView({
        behavior: prefersReducedMotion() ? 'auto' : 'smooth',
        block: 'start',
      });
    }
  }, []);

  const searchSection = (
    <SearchSection
      query={searchQuery}
      onQueryChange={setSearchQuery}
      onRunSearch={handleRunSearch}
      statusMessage={searchStatus}
      results={searchResults}
      onOpenDetail={setActiveDetail}
    />
  );

  let pageContent: React.ReactNode;
  if (isContactRoute) {
    pageContent = <ContactPage />;
  } else if (route === '#/lab') {
    pageContent = (
      <>
        <DiagnosticLab onOpenDetail={setActiveDetail} />
        <CaseWorksheet />
      </>
    );
  } else if (route === '#/symptoms') {
    pageContent = (
      <>
        {searchSection}
        <SymptomsSection onSelectSymptom={handleSelectSymptom} />
      </>
    );
  } else if (route === '#/triage') {
    pageContent = <GuidedTriage />;
  } else if (route === '#/guides') {
    pageContent = <GuidesSection onOpenDetail={setActiveDetail} />;
  } else if (route === '#/learning') {
    pageContent = (
      <>
        <LearningSection />
        <SafetyLessonQuiz />
        <SafetySection />
      </>
    );
  } else if (route === '#/reference') {
    pageContent = <ReferenceDesk />;
  } else if (route === '#/about') {
    pageContent = (
      <>
        <SiteNotices />
        <AboutSection />
      </>
    );
  } else if (route === '#guides') {
    // Legacy section fragment: render the matching page content so the
    // fragment scroll below can reach its target.
    pageContent = <GuidesSection onOpenDetail={setActiveDetail} />;
  } else if (route === '#learning') {
    pageContent = (
      <>
        <LearningSection />
        <SafetyLessonQuiz />
        <SafetySection />
      </>
    );
  } else {
    // Home: also the fallback for legacy section fragments and unknown
    // routes, so old links keep working instead of dead-ending.
    pageContent = (
      <>
        <HeroSection />
        {searchSection}
      </>
    );
  }

  return (
    <>
      <Header />
      <main id="main">{pageContent}</main>
      <SiteFooter />
      <DetailDialog
        selection={activeDetail}
        onClose={() => setActiveDetail(null)}
        onOpenDetail={setActiveDetail}
      />
    </>
  );
};

export default App;
