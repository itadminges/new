import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { EnrichmentsPage } from './pages/EnrichmentsPage';
import { AdmissionsPage } from './pages/AdmissionsPage';
import { TourPage } from './pages/TourPage';
import { ContactPage } from './pages/ContactPage';
import { ParentsPage } from './pages/ParentsPage';
import { LocationsPage } from './pages/LocationsPage';
import { ScheduleTourModal } from './components/ScheduleTourModal';
import { NotificationToast } from './components/NotificationToast';

const routes = {
  home: {
    title: 'Shomoukh Early Childhood Education Center | Reggio Emilia Nursery in Muscat',
    description: "Discover Shomoukh, a Reggio Emilia inspired early childhood education center in Muscat with EYFS-aligned care for children from 6 months to 4 years."
  },
  about: {
    title: 'About Shomoukh | Reggio Emilia Inspired Nursery in Oman',
    description: "Learn about Shomoukh's story, philosophy, community values, health and safety approach, and warm early-years environment in Muscat."
  },
  programs: {
    title: 'Nursery Programs | Infants, Toddlers and Preschool at Shomoukh',
    description: 'Explore Shomoukh nursery programs for infants, toddlers, preschool, and pre-K children, guided by Reggio-inspired inquiry and EYFS principles.'
  },
  enrichments: {
    title: 'Enrichment and Atelier Programs | Shomoukh Nursery',
    description: 'Explore Shomoukh ateliers, sensory play, music, drama, physical education, and project-based learning experiences for young children.'
  },
  admissions: {
    title: 'Admissions | Enroll at Shomoukh Early Childhood Education Center',
    description: 'Review admissions steps, enrollment documents, campus information, and parent resources for joining Shomoukh in Muscat.'
  },
  parents: {
    title: 'Parent Hub | Shomoukh Forms, Guides and Family Support',
    description: 'Access parent documents, enrollment checklists, campus guides, and family support resources for Shomoukh Early Childhood Education Center.'
  },
  tour: {
    title: 'Schedule a Tour | Visit Shomoukh Nursery in Muscat',
    description: 'Request a guided family visit to Shomoukh Early Childhood Education Center at Al Mouj or Al Qurm campus.'
  },
  locations: {
    title: 'Locations | Shomoukh Al Mouj and Al Qurm Campuses',
    description: 'Find Shomoukh nursery campus locations, contact details, maps, and opening hours for Al Mouj and Al Qurm in Muscat.'
  },
  contact: {
    title: 'Contact Shomoukh | Nursery Enquiries in Muscat',
    description: 'Contact Shomoukh Early Childhood Education Center for nursery admissions, tours, program questions, and campus enquiries.'
  },
  notFound: {
    title: 'Page Not Found | Shomoukh Early Childhood Education Center',
    description: 'The requested Shomoukh page could not be found. Use the navigation to reach programs, admissions, locations, or contact.'
  }
};

const validHashRoutes = ['home', 'about', 'programs', 'enrichments', 'admissions', 'parents', 'locations', 'contact', 'schedule-a-tour'];

export function App() {
  const [currentRoute, setCurrentRoute] = useState('home');
  const [tourModalOpen, setTourModalOpen] = useState(false);
  const [initialProgram, setInitialProgram] = useState('');
  const [toastMessage, setToastMessage] = useState('');

  // Sync hash routing
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (validHashRoutes.includes(hash)) {
        setCurrentRoute(hash === 'schedule-a-tour' ? 'tour' : hash || 'home');
      } else if (hash) {
        setCurrentRoute('notFound');
      } else {
        setCurrentRoute('home');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  useEffect(() => {
    const meta = routes[currentRoute] || routes.notFound;
    document.title = meta.title;

    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute('content', meta.description);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    const canonicalRoute = currentRoute === 'home' ? '' : `#${currentRoute === 'tour' ? 'schedule-a-tour' : currentRoute}`;
    canonical.setAttribute('href', `${window.location.origin}${window.location.pathname}${canonicalRoute}`);
  }, [currentRoute]);

  const navigateTo = (route) => {
    window.location.hash = route === 'home' ? '' : route;
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenTour = (programName = '') => {
    setInitialProgram(programName);
    setTourModalOpen(true);
  };

  const handleShowToast = (msg) => {
    setToastMessage(msg);
  };

  return (
    <div className="shomoukh-app">
      {/* Global Header */}
      <Header
        currentRoute={currentRoute}
        navigateTo={navigateTo}
        onOpenTourModal={handleOpenTour}
      />

      {/* Main Page View based on Active Route */}
      <main>
        {currentRoute === 'home' && (
          <HomePage
            navigateTo={navigateTo}
            onOpenTourModal={handleOpenTour}
          />
        )}

        {currentRoute === 'about' && (
          <AboutPage
            navigateTo={navigateTo}
            onOpenTourModal={handleOpenTour}
          />
        )}

        {currentRoute === 'programs' && (
          <ProgramsPage
            navigateTo={navigateTo}
            onOpenTourModal={handleOpenTour}
          />
        )}

        {currentRoute === 'enrichments' && (
          <EnrichmentsPage
            navigateTo={navigateTo}
            onOpenTourModal={handleOpenTour}
          />
        )}

        {currentRoute === 'admissions' && (
          <AdmissionsPage
            navigateTo={navigateTo}
            onOpenTourModal={handleOpenTour}
            onShowToast={handleShowToast}
          />
        )}

        {currentRoute === 'parents' && (
          <ParentsPage
            navigateTo={navigateTo}
            onOpenTourModal={handleOpenTour}
            onShowToast={handleShowToast}
          />
        )}

        {currentRoute === 'tour' && (
          <TourPage
            onShowToast={handleShowToast}
          />
        )}

        {currentRoute === 'locations' && (
          <LocationsPage
            onOpenTourModal={handleOpenTour}
          />
        )}

        {currentRoute === 'contact' && (
          <ContactPage
            onShowToast={handleShowToast}
          />
        )}

        {currentRoute === 'notFound' && (
          <section className="section-padding not-found-page" style={{ background: '#FFFFFF', minHeight: '56vh' }}>
            <div className="container" style={{ textAlign: 'center', maxWidth: '720px' }}>
              <div className="section-tag">
                <span>Page Not Found</span>
              </div>
              <h1 className="section-title">We could not find that page.</h1>
              <p className="section-subtitle" style={{ margin: '0 auto 28px' }}>
                The page may have moved. You can return home, explore programs, or contact the admissions team.
              </p>
              <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button onClick={() => navigateTo('home')} className="wp-btn wp-btn-primary">Home</button>
                <button onClick={() => navigateTo('programs')} className="wp-btn wp-btn-outline">Programs</button>
                <button onClick={() => navigateTo('contact')} className="wp-btn wp-btn-outline">Contact</button>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Global Footer */}
      <Footer
        navigateTo={navigateTo}
      />

      {/* Tour Booking Modal Dialog */}
      <ScheduleTourModal
        isOpen={tourModalOpen}
        onClose={() => setTourModalOpen(false)}
        initialProgram={initialProgram}
        onShowToast={handleShowToast}
      />

      {/* Toast Notification */}
      <NotificationToast
        message={toastMessage}
        onClose={() => setToastMessage('')}
      />
    </div>
  );
}

export default App;
