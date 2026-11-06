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
// home page and scroll to that section if it exists there.
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

export const App: React.FC = () => {
  const [route, setRoute] = useState<string>(readRoute);
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
    // its saved scroll position on traversal instead of forcing a
    // fragment scroll.
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
        // below) move to the section.
        const targetId = next.startsWith('#') ? next.slice(1) : next;
        if (targetId) {
          requestAnimationFrame(() => {
            scrollToFragment(targetId);
          });
        }
        return;
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

  const isContactRoute = route.startsWith('#/contact');

  useEffect(() => {
    if (isContactRoute) {
      // ContactPage scrolls itself to the top on mount.
      return;
    }
    if (isPageRoute(route)) {
      // Navigating to a page: start at the top of the new page.
      const frame = requestAnimationFrame(() => {
        window.scrollTo({
          top: 0,
          behavior: prefersReducedMotion() ? 'auto' : 'smooth',
        });
      });
      return () => cancelAnimationFrame(frame);
    }
    // Fragment navigation to the home page (for example "#search" from
    // another page, or a legacy section anchor). The browser's native
    // fragment scroll fires before React swaps the content in, so scroll
    // to the target after the home branch mounts.
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
  }, [route, isContactRoute]);

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
