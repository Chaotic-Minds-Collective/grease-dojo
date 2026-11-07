import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
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
import { searchWithFallback } from './data/searchFallback';
import { useLang } from './i18n/LanguageContext';
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
  const { lang } = useLang();
  const [route, setRoute] = useState<string>(readRoute);
  // Bumped on every user-initiated navigation to a page route (not on
  // history traversal), so re-activating or changing pages always re-runs
  // the scroll effect below.
  const [pageNavCounter, setPageNavCounter] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchStatus, setSearchStatus] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResultItem[]>([]);
  const [activeDetail, setActiveDetail] = useState<DetailSelection | null>(null);

  // Set by the document-level click handler when the visitor activates a
  // page-route link (mouse or keyboard both dispatch click). Consumed by
  // handleHashChange: a user-initiated navigation always takes precedence
  // over a pending popstate mark, so back/forward bookkeeping can never
  // swallow a link click's scroll.
  const pendingUserNavRef = useRef(false);

  // Set by handlePopState together with the hash the traversal landed on.
  // A following hashchange counts as traversal only when its hash matches
  // the popped location, so no timer-order assumptions are needed: a
  // bare-fragment link click that arrives after a popstate (different
  // hash) is still treated as user-initiated, and a mark left behind by a
  // traversal with no following hashchange is inert for any later
  // different-hash event and simply overwritten by the next popstate.
  const pendingTraversalRef = useRef(false);
  const traversalHashRef = useRef('');

  // True when a pending traversal mark applies to this exact hash.
  const isTraversalFor = (hash: string): boolean =>
    pendingTraversalRef.current && traversalHashRef.current === hash;

  // Tracks the committed route only (updated after render), so handlers
  // never observe a route value from an interrupted render.
  const routeRef = useRef(route);
  useLayoutEffect(() => {
    routeRef.current = route;
  }, [route]);

  useEffect(() => {
    const handlePopState = () => {
      // History traversal (back/forward) fires popstate; same-document
      // link clicks do not. Record the hash the traversal landed on so
      // the following hashchange can be matched to it.
      pendingTraversalRef.current = true;
      traversalHashRef.current = readRoute();
    };
    const handleHashChange = () => {
      const next = readRoute();
      const userInitiated = pendingUserNavRef.current;
      pendingUserNavRef.current = false;
      const traversal = isTraversalFor(next);

      if (!isPageRoute(next) && isPageRoute(routeRef.current)) {
        // A bare fragment hash (for example "#safety-lesson" from the
        // learning page) while a page route is active is an in-page
        // anchor, not navigation. Keep the current page mounted and let
        // the browser's native fragment jump (plus the smooth scroll
        // below) move to the section. On history traversal the browser
        // has already restored the saved position.
        if (traversal) {
          pendingTraversalRef.current = false;
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
      if (isPageRoute(next)) {
        if (userInitiated || !traversal) {
          // Link click (marked by the click handler), or any other
          // user-facing hash source (address-bar edit, programmatic set):
          // always run the page-navigation scroll, even if a popstate
          // happened to precede this event with an unrelated hash.
          pendingTraversalRef.current = false;
          setPageNavCounter((count) => count + 1);
        }
        // True traversal: leave the mark for the scroll effect to consume
        // so the browser-restored position is preserved.
        setRoute(next);
        return;
      }
      // Bare fragment with no page route active (home fallback renders
      // below); the scroll effect scrolls to the fragment after render.
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
    // Anchor activation (mouse or keyboard) fires click even when the
    // browser handles the navigation itself, so this handler is the
    // reliable place to distinguish link clicks from history traversal.
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
        // Bare-fragment links keep native fragment navigation; the
        // hashchange handler performs the smooth scroll and focus.
        return;
      }
      if (href === routeRef.current) {
        // Re-activating the current page (re-selecting "Diagnostic Lab"
        // while on #/lab, the footer back-to-top while on #/) fires no
        // hashchange event: scroll back to the top directly.
        event.preventDefault();
        scrollToTop();
      } else {
        // Navigation to a different page: mark it so handleHashChange can
        // tell this click apart from back/forward traversal.
        pendingUserNavRef.current = true;
      }
    };
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  useEffect(() => {
    if (isPageRoute(route)) {
      if (isTraversalFor(route)) {
        // History traversal: the browser already restored the saved
        // position; do not override it. This covers every page route,
        // including contact.
        pendingTraversalRef.current = false;
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
      if (isTraversalFor(route)) {
        // History traversal: the browser already restored the saved
        // position; do not override it.
        pendingTraversalRef.current = false;
        return;
      }
      scrollToFragment(targetId);
    });
    return () => cancelAnimationFrame(frame);
  }, [route, pageNavCounter]);

  /** Runs the submitted search in the active language and scrolls to the results. */
  const handleRunSearch = useCallback(
    (queryValue: string, resultsEl?: HTMLDivElement | null) => {
      const { status, results } = searchWithFallback(queryValue, lang);
      setSearchStatus(status);
      setSearchResults(results);

      // Always bring the feedback into view, even when there are no
      // results: the status message is the answer, and on a phone the
      // results area sits below the fold, so a silent page read as
      // "search does nothing".
      if (resultsEl) {
        requestAnimationFrame(() => {
          resultsEl.scrollIntoView({
            behavior: prefersReducedMotion() ? 'auto' : 'smooth',
            block: 'nearest',
          });
        });
      }
    },
    [lang]
  );

  /** Runs a symptom-driven search in the active language and scrolls to the results. */
  const handleSelectSymptom = useCallback((symptomQuery: string) => {
    setSearchQuery(symptomQuery);
    const { status, results } = searchWithFallback(symptomQuery, lang);
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
  }, [lang]);

  // Re-run or clear the active search when the language changes so
  // results and status never stay in the previous language. Typed
  // searches keep going through handleRunSearch.
  useEffect(() => {
    if (searchQuery.trim()) {
      const { status, results } = searchWithFallback(searchQuery, lang);
      setSearchStatus(status);
      setSearchResults(results);
    } else {
      setSearchResults([]);
      setSearchStatus('');
    }
    // Responds to language changes by design; search submissions run
    // through handleRunSearch and handleSelectSymptom.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

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

  const learningContent = (
    <>
      <LearningSection />
      <SafetyLessonQuiz />
      <SafetySection />
    </>
  );

  let pageContent: React.ReactNode;
  if (route === '#/contact') {
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
    pageContent = learningContent;
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
  } else if (route === '#learning' || route === '#safety-lesson') {
    // Legacy section fragments for the learning page (including the
    // safety-lesson quiz anchor): render the learning content so fragment
    // scrolling reaches its target.
    pageContent = learningContent;
  } else {
    // Home: also the fallback for remaining legacy fragments and unknown
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
      <Header route={route} />
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
