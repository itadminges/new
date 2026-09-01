import React, { useState, useEffect, useRef } from 'react';
import { Phone, Menu, X, Calendar, ChevronDown, MapPin, Baby, Palette, Users, FileText, Home } from 'lucide-react';
import { siteData } from '../data/siteData';

export const Header = ({ currentRoute, navigateTo, onOpenTourModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const closeMenus = (event) => {
      if (event.type === 'keydown' && event.key !== 'Escape') return;
      if (event.type === 'pointerdown' && headerRef.current?.contains(event.target)) return;
      setOpenMenu(null);
    };

    document.addEventListener('pointerdown', closeMenus);
    document.addEventListener('keydown', closeMenus);
    return () => {
      document.removeEventListener('pointerdown', closeMenus);
      document.removeEventListener('keydown', closeMenus);
    };
  }, []);

  const navGroups = [
    {
      label: 'Explore',
      key: 'explore',
      items: [
        { label: 'About Shomoukh', path: 'about', desc: 'Mission, philosophy, community', icon: Users },
        { label: 'Programs', path: 'programs', desc: 'EYFS, Reggio, learning areas', icon: Baby },
        { label: 'Enrichments', path: 'enrichments', desc: 'Ateliers, projects, movement', icon: Palette }
      ]
    },
    {
      label: 'Admissions',
      key: 'admissions',
      items: [
        { label: 'Admission Process', path: 'admissions', desc: 'Steps, resources, enrollment', icon: FileText },
        { label: 'Parent Documents', path: 'parents', desc: 'Forms, guides, family checklist', icon: FileText },
        { label: 'Book a Visit', action: 'tour', desc: 'Schedule a guided campus tour', icon: Calendar }
      ]
    },
    {
      label: 'Campuses',
      key: 'campuses',
      items: siteData.campuses.map((campus) => ({
        label: campus.name,
        path: 'locations',
        desc: campus.address.replace(', Sultanate of Oman', ''),
        icon: MapPin
      }))
    }
  ];

  const groupActiveRoutes = {
    explore: ['about', 'programs', 'enrichments'],
    admissions: ['admissions', 'tour'],
    campuses: ['locations']
  };

  const flatNavItems = [
    { label: 'Home', path: 'home' },
    ...navGroups.flatMap((group) => group.items.map((item) => ({ label: item.label, path: item.path, action: item.action }))),
    { label: 'Parents', path: 'parents' },
    { label: 'Contact Us', path: 'contact' }
  ];

  const handleNavItem = (item) => {
    setOpenMenu(null);
    setMobileOpen(false);
    if (item.action === 'tour') {
      onOpenTourModal();
    } else {
      navigateTo(item.path);
    }
  };

  return (
    <>
      <header ref={headerRef} style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        zIndex: 900,
        background: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(8px)' : 'none',
        boxShadow: isScrolled ? '0 4px 20px rgba(0,0,0,0.06)' : 'none',
        transition: 'all 0.3s ease',
        padding: isScrolled ? '10px 0' : '16px 0',
        borderBottom: isScrolled ? '1px solid rgba(0,0,0,0.05)' : 'none'
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '24px'
        }}>
          {/* Logo */}
          <button 
            onClick={() => navigateTo('home')}
            style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', flexShrink: 0 }}
            aria-label="Go to home page"
          >
            <img 
              src="/assets/Shomoukh-without-Tag-Logo.png" 
              alt="Shomoukh Nursery Logo" 
              style={{ height: isScrolled ? '38px' : '54px', width: 'auto', transition: 'height 0.2s ease' }}
              onError={(e) => { e.target.src = "/assets/Logo-19-April-2021.png"; }}
            />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="desktop-menu header-nav">
            <button
              onClick={() => navigateTo('home')}
              className={`header-link ${currentRoute === 'home' ? 'is-active' : ''}`}
            >
              Home
            </button>
            {navGroups.map((group) => {
              const isActive = groupActiveRoutes[group.key]?.includes(currentRoute);
              return (
                <div
                  key={group.key}
                  className="header-menu-group"
                  onMouseEnter={() => setOpenMenu(group.key)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button
                    onClick={() => setOpenMenu(openMenu === group.key ? null : group.key)}
                    onFocus={() => setOpenMenu(group.key)}
                    className={`header-link ${isActive ? 'is-active' : ''}`}
                    aria-expanded={openMenu === group.key}
                    aria-haspopup="true"
                  >
                    <span>{group.label}</span>
                    <ChevronDown size={15} className="header-chevron" />
                  </button>
                  <div className="header-dropdown" data-open={openMenu === group.key}>
                    {group.items.map((item) => {
                      const Icon = item.icon;
                      return (
                        <button
                          key={`${group.key}-${item.label}`}
                          onClick={() => handleNavItem(item)}
                          className="header-dropdown-item"
                        >
                          <span className="header-dropdown-icon"><Icon size={18} /></span>
                          <span>
                            <strong>{item.label}</strong>
                            <small>{item.desc}</small>
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
            <button
              onClick={() => navigateTo('parents')}
              className={`header-link ${currentRoute === 'parents' ? 'is-active' : ''}`}
            >
              Parents
            </button>
            <button
              onClick={() => navigateTo('contact')}
              className={`header-link ${currentRoute === 'contact' ? 'is-active' : ''}`}
            >
              Contact Us
            </button>
          </nav>

          <div className="header-actions">
            <a
              href={siteData.campuses[0].phoneLink}
              className="desktop-phone"
            >
              <span className="header-phone-icon">
                <Phone size={16} />
              </span>
              <span>{siteData.campuses[0].phone}</span>
            </a>

            <button
              onClick={() => onOpenTourModal()}
              className="wp-btn wp-btn-primary header-visit-btn"
            >
              <Calendar size={16} />
              <span>Book a Visit</span>
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="mobile-hamburger"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu-overlay ${mobileOpen ? 'is-open' : ''}`} onClick={() => setMobileOpen(false)}>
        <div className="mobile-menu-panel" onClick={(e) => e.stopPropagation()}>
          <div>
            <div className="mobile-menu-head">
              <img src="/assets/Shomoukh-without-Tag-Logo.png" alt="Shomoukh Logo" style={{ height: '38px' }} />
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <X size={24} />
              </button>
            </div>

            <div className="mobile-menu-links">
              {flatNavItems.filter((item, idx, arr) => {
                const itemKey = item.action || item.path || item.label;
                return arr.findIndex((candidate) => (candidate.action || candidate.path || candidate.label) === itemKey) === idx;
              }).map((item) => (
                <button
                  key={`${item.label}-${item.path || item.action}`}
                  onClick={() => { handleNavItem(item); setMobileOpen(false); }}
                  className={currentRoute === item.path ? 'is-active' : ''}
                >
                  <Home size={18} />
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mobile-menu-actions">
            <button onClick={() => { setMobileOpen(false); onOpenTourModal(); }} className="wp-btn wp-btn-primary">
              Book a Visit
            </button>
            <a href={siteData.campuses[0].phoneLink} className="wp-btn wp-btn-outline">
              Call {siteData.campuses[0].phone}
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .header-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          flex: 1;
          min-width: 0;
        }
        .header-link {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          min-height: 40px;
          padding: 8px 11px;
          border-radius: 999px;
          color: var(--vamtam-accent-color-2);
          font-family: var(--font-rounded);
          font-weight: 700;
          font-size: 0.94rem;
          white-space: nowrap;
          transition: background 0.22s ease, color 0.22s ease, transform 0.22s ease;
        }
        .header-link:hover,
        .header-link.is-active {
          background: rgba(231, 76, 37, 0.1);
          color: var(--vamtam-accent-color-1);
        }
        .header-chevron {
          transition: transform 0.22s ease;
        }
        .header-menu-group {
          position: relative;
        }
        .header-menu-group:hover .header-chevron,
        .header-link[aria-expanded="true"] .header-chevron {
          transform: rotate(180deg);
        }
        .header-dropdown {
          position: absolute;
          top: calc(100% + 12px);
          left: 50%;
          width: 320px;
          padding: 10px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 0 20px 45px rgba(10, 48, 58, 0.16);
          border: 1px solid rgba(10, 48, 58, 0.08);
          opacity: 0;
          visibility: hidden;
          transform: translate(-50%, 8px) scale(0.98);
          transform-origin: top center;
          transition: opacity 0.22s ease, transform 0.22s ease, visibility 0.22s ease;
        }
        .header-dropdown[data-open="true"],
        .header-menu-group:focus-within .header-dropdown {
          opacity: 1;
          visibility: visible;
          transform: translate(-50%, 0) scale(1);
        }
        .header-dropdown-item {
          width: 100%;
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 12px;
          border-radius: 12px;
          text-align: left;
          color: var(--text-main);
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .header-dropdown-item:hover {
          background: var(--primary-coral-light);
          transform: translateX(2px);
        }
        .header-dropdown-icon {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: #FAF5F0;
          color: var(--vamtam-accent-color-1);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 auto;
        }
        .header-dropdown-item strong,
        .header-dropdown-item small {
          display: block;
        }
        .header-dropdown-item small {
          margin-top: 2px;
          color: var(--text-muted);
          font-size: 0.8rem;
          line-height: 1.35;
        }
        .header-actions,
        .desktop-phone,
        .header-phone-icon {
          display: flex;
          align-items: center;
        }
        .header-actions {
          gap: 14px;
          flex-shrink: 0;
        }
        .desktop-phone {
          gap: 8px;
          font-family: var(--font-rounded);
          font-weight: 700;
          color: var(--vamtam-accent-color-2);
          font-size: 0.95rem;
          white-space: nowrap;
        }
        .header-phone-icon {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: var(--primary-coral-light);
          color: var(--vamtam-accent-color-1);
          justify-content: center;
        }
        .header-visit-btn {
          padding: 10px 18px !important;
          font-size: 0.92rem !important;
          white-space: nowrap;
        }
        .mobile-hamburger {
          display: none;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: rgba(0,0,0,0.04);
          color: var(--vamtam-accent-color-2);
        }
        .mobile-menu-overlay {
          position: fixed;
          inset: 0;
          background: rgba(10, 48, 58, 0.52);
          backdrop-filter: blur(4px);
          z-index: 999;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.24s ease, visibility 0.24s ease;
        }
        .mobile-menu-overlay.is-open {
          opacity: 1;
          visibility: visible;
        }
        .mobile-menu-panel {
          position: absolute;
          top: 0;
          right: 0;
          width: min(86vw, 360px);
          height: 100%;
          background: #FFFFFF;
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: -8px 0 25px rgba(0,0,0,0.15);
          transform: translateX(100%);
          transition: transform 0.28s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .mobile-menu-overlay.is-open .mobile-menu-panel {
          transform: translateX(0);
        }
        .mobile-menu-head,
        .mobile-menu-links button {
          display: flex;
          align-items: center;
        }
        .mobile-menu-head {
          justify-content: space-between;
          margin-bottom: 28px;
        }
        .mobile-menu-links {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .mobile-menu-links button {
          gap: 10px;
          text-align: left;
          font-weight: 700;
          font-size: 1.05rem;
          padding: 12px 10px;
          border-radius: 12px;
          color: var(--text-main);
        }
        .mobile-menu-links button.is-active,
        .mobile-menu-links button:hover {
          background: var(--primary-coral-light);
          color: var(--vamtam-accent-color-1);
        }
        .mobile-menu-actions {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .mobile-menu-actions .wp-btn {
          width: 100%;
        }
        @media (max-width: 1160px) {
          .desktop-phone span:last-child {
            display: none;
          }
          .header-visit-btn {
            padding: 10px 14px !important;
          }
        }
        @media (max-width: 1040px) {
          .desktop-menu, .desktop-phone {
            display: none !important;
          }
          .mobile-hamburger {
            display: flex !important;
          }
          .header-actions {
            margin-left: auto;
          }
        }
        @media (max-width: 520px) {
          .header-visit-btn {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};
