import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Calendar, Sparkles, MapPin } from 'lucide-react';
import { siteData } from '../data/siteData';

export const Header = ({ currentRoute, navigateTo, onOpenTourModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Programs', path: 'programs' },
    { label: 'Admission', path: 'admissions' },
    { label: 'About', path: 'about' },
    { label: 'Enrichments', path: 'enrichments' },
    { label: 'Locations', path: 'locations' },
    { label: 'Contact Us', path: 'contact' }
  ];

  return (
    <>
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 900,
        background: isScrolled ? 'rgba(255, 255, 255, 0.92)' : 'rgba(250, 247, 242, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        boxShadow: isScrolled ? '0 10px 30px -10px rgba(10, 48, 58, 0.1)' : 'none',
        transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
        padding: isScrolled ? '12px 0' : '18px 0',
        borderBottom: '1px solid rgba(10, 48, 58, 0.06)'
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          {/* Logo */}
          <button 
            onClick={() => navigateTo('home')}
            style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', transition: 'transform 0.2s ease' }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <img 
              src="/assets/Shomoukh-without-Tag-Logo.png" 
              alt="Shomoukh Nursery Logo" 
              style={{ height: isScrolled ? '46px' : '52px', width: 'auto', transition: 'height 0.25s ease' }}
              onError={(e) => { e.target.src = "/assets/Logo-19-April-2021.png"; }}
            />
          </button>

          {/* Desktop Navigation Links */}
          <nav style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: isScrolled ? 'rgba(250, 247, 242, 0.6)' : 'rgba(255, 255, 255, 0.6)',
            padding: '4px 8px',
            borderRadius: 'var(--radius-full)',
            border: '1px solid rgba(10, 48, 58, 0.05)'
          }} className="desktop-menu">
            {navItems.map((item) => {
              const isActive = currentRoute === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => navigateTo(item.path)}
                  style={{
                    fontFamily: 'var(--font-rounded)',
                    fontWeight: 700,
                    fontSize: '0.96rem',
                    color: isActive ? '#FFFFFF' : 'var(--vamtam-accent-color-2)',
                    background: isActive ? 'var(--vamtam-accent-color-1)' : 'transparent',
                    cursor: 'pointer',
                    transition: 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    padding: '8px 18px',
                    borderRadius: 'var(--radius-full)',
                    boxShadow: isActive ? '0 4px 12px rgba(231, 76, 37, 0.3)' : 'none'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.target.style.color = 'var(--vamtam-accent-color-1)';
                      e.target.style.background = 'rgba(231, 76, 37, 0.08)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.target.style.color = 'var(--vamtam-accent-color-2)';
                      e.target.style.background = 'transparent';
                    }
                  }}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Contact & CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a 
              href="tel:+96891400055"
              className="desktop-phone"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontFamily: 'var(--font-rounded)',
                fontWeight: 700,
                color: 'var(--vamtam-accent-color-2)',
                fontSize: '0.94rem',
                padding: '8px 16px',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(255, 255, 255, 0.8)',
                border: '1px solid rgba(10, 48, 58, 0.06)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--vamtam-accent-color-1)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(10, 48, 58, 0.06)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                background: 'var(--primary-coral-light)',
                color: 'var(--vamtam-accent-color-1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Phone size={14} />
              </div>
              <span>+968 9140 0055</span>
            </a>

            <button
              onClick={() => onOpenTourModal()}
              className="wp-btn wp-btn-primary"
              style={{ padding: '10px 22px', fontSize: '0.94rem' }}
            >
              <Calendar size={15} />
              <span>Book a Visit</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="mobile-hamburger"
              style={{
                display: 'none',
                padding: '10px',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.8)',
                color: 'var(--vamtam-accent-color-2)',
                border: '1px solid rgba(10, 48, 58, 0.08)'
              }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(10, 48, 58, 0.6)',
          backdropFilter: 'blur(8px)',
          zIndex: 999
        }} onClick={() => setMobileOpen(false)}>
          <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '85%',
            maxWidth: '360px',
            height: '100%',
            background: '#FFFFFF',
            padding: '32px 28px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '-10px 0 40px rgba(0,0,0,0.2)'
          }} onClick={(e) => e.stopPropagation()}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                <img src="/assets/Shomoukh-without-Tag-Logo.png" alt="Logo" style={{ height: '42px' }} />
                <button 
                  onClick={() => setMobileOpen(false)}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: '#FAF5F0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <X size={20} />
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <button
                  onClick={() => { navigateTo('home'); setMobileOpen(false); }}
                  style={{
                    textAlign: 'left',
                    fontWeight: 700,
                    fontSize: '1.05rem',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    background: currentRoute === 'home' ? 'var(--primary-coral-light)' : 'transparent',
                    color: currentRoute === 'home' ? 'var(--vamtam-accent-color-1)' : 'var(--vamtam-accent-color-2)'
                  }}
                >
                  Home
                </button>
                {navItems.map((item) => (
                  <button
                    key={item.path}
                    onClick={() => { navigateTo(item.path); setMobileOpen(false); }}
                    style={{
                      textAlign: 'left',
                      fontWeight: 700,
                      fontSize: '1.05rem',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      background: currentRoute === item.path ? 'var(--primary-coral-light)' : 'transparent',
                      color: currentRoute === item.path ? 'var(--vamtam-accent-color-1)' : 'var(--vamtam-accent-color-2)'
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <button
                onClick={() => { setMobileOpen(false); onOpenTourModal(); }}
                className="wp-btn wp-btn-primary"
                style={{ width: '100%' }}
              >
                <Calendar size={16} />
                <span>Book a Visit</span>
              </button>
              <a
                href="tel:+96891400055"
                className="wp-btn wp-btn-outline"
                style={{ width: '100%' }}
              >
                <Phone size={16} />
                <span>Call +968 9140 0055</span>
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 992px) {
          .desktop-menu, .desktop-phone {
            display: none !important;
          }
          .mobile-hamburger {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
};
