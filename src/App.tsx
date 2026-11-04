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

export const App: React.FC = () => {
  const [route, setRoute] = useState<string>(readRoute);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchStatus, setSearchStatus] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResultItem[]>([]);
  const [activeDetail, setActiveDetail] = useState<DetailSelection | null>(null);
  const ignoreNextFragmentScroll = useRef(false);

  useEffect(() => {
    // Back/forward traversal also fires popstate (plain link clicks do
    // not, and popstate fires before hashchange). Let the browser restore
    // its saved scroll position on traversal instead of forcing a
    // fragment scroll.
    const handlePopState = () => {
      ignoreNextFragmentScroll.current = true;
    };
    const handleHashChange = () => setRoute(readRoute());
    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const isContactRoute = route.startsWith('#/contact');

  // Native fragment scrolling fires the moment the hash changes, before
  // React has swapped the route's content in. Navigating between pages
  // (for example #/contact -> #guides) would otherwise land at the top of
  // the newly mounted page instead of the target section. This effect
  // scrolls to the URL fragment's target after the home branch mounts.
  useEffect(() => {
    if (isContactRoute) {
      return;
    }
    const targetId = route.startsWith('#') ? route.slice(1) : route;
    if (!targetId || targetId.startsWith('/contact')) {
      return;
    }
    const frame = requestAnimationFrame(() => {
      if (ignoreNextFragmentScroll.current) {
        // History traversal: the browser already restored the saved
        // position; do not override it.
        ignoreNextFragmentScroll.current = false;
        return;
      }
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

    const searchSectionEl = document.getElementById('search');
    if (searchSectionEl) {
      searchSectionEl.scrollIntoView({
        behavior: prefersReducedMotion() ? 'auto' : 'smooth',
        block: 'start',
      });
    }
  }, []);

  return (
    <>
      <Header />
      <main id="main">
        {isContactRoute ? (
          <ContactPage />
        ) : (
          <>
            <HeroSection />
            <SearchSection
              query={searchQuery}
              onQueryChange={setSearchQuery}
              onRunSearch={handleRunSearch}
              statusMessage={searchStatus}
              results={searchResults}
              onOpenDetail={setActiveDetail}
            />
            <DiagnosticLab onOpenDetail={setActiveDetail} />
            <SymptomsSection onSelectSymptom={handleSelectSymptom} />
            <GuidedTriage />
            <CaseWorksheet />
            <GuidesSection onOpenDetail={setActiveDetail} />
            <LearningSection />
            <SafetyLessonQuiz />
            <SafetySection />
            <ReferenceDesk />
            <SiteNotices />
            <AboutSection />
          </>
        )}
      </main>
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
