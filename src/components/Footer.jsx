import React from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, MessageCircle, ArrowUp } from 'lucide-react';
import { siteData } from '../data/siteData';

export const Footer = ({ navigateTo }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { label: 'Home', path: 'home' },
    { label: 'Programs', path: 'programs' },
    { label: 'Admission', path: 'admissions' },
    { label: 'About', path: 'about' },
    { label: 'Enrichments', path: 'enrichments' },
    { label: 'Locations', path: 'locations' },
    { label: 'Contact Us', path: 'contact' }
  ];

  return (
    <footer style={{ position: 'relative', background: '#FFFFFF' }}>
      
      {/* TOP PHOTO CAROUSEL */}
      <div style={{ padding: '36px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
            gap: '14px'
          }}>
            {siteData.gallery.map((g, i) => (
              <div 
                key={i} 
                className="modern-card"
                style={{ height: '140px', overflow: 'hidden', borderRadius: '18px' }}
              >
                <img 
                  src={g.img} 
                  alt={g.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }} 
                  onError={(e) => { e.target.src = "/assets/1.jpg"; }} 
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MAIN FOOTER WITH WAVE-BRUSH DIVIDER AND GRADIENT BACKGROUND */}
      <div style={{
        position: 'relative',
        background: 'linear-gradient(135deg, #F0A17F 0%, #D47B55 100%)',
        backgroundImage: 'linear-gradient(rgba(240, 161, 127, 0.94), rgba(212, 123, 85, 0.96)), url(/assets/6.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#FFFFFF',
        padding: '100px 0 60px'
      }}>
        {/* Top Wave Brush Divider */}
        <div className="shape-divider-wave-brush top fill-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.5 27.8" preserveAspectRatio="none">
            <path className="elementor-shape-fill" d="M283.5,9.7c0,0-7.3,4.3-14,4.6c-6.8,0.3-12.6,0-20.9-1.5c-11.3-2-33.1-10.1-44.7-5.7s-12.1,4.6-18,7.4c-6.6,3.2-20,9.6-36.6,9.3C131.6,23.5,99.5,7.2,86.3,8c-1.4,0.1-6.6,0.8-10.5,2c-3.8,1.2-9.4,3.8-17,4.7c-3.2,0.4-8.3,1.1-14.2,0.9c-1.5-0.1-6.3-0.4-12-1.6c-5.7-1.2-11-3.1-15.8-3.7C6.5,9.2,0,10.8,0,10.8V0h283.5V9.7z"/>
          </svg>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr 1fr 1fr 0.8fr',
            gap: '40px'
          }} className="wp-footer-grid">
            
            {/* Col 1: Logo & Tagline */}
            <div>
              <img 
                src="/assets/Logo-19-April-2021.png" 
                alt="Shomoukh Logo" 
                style={{ maxHeight: '64px', width: 'auto', marginBottom: '20px' }}
                onError={(e) => { e.target.src = "/assets/Shomoukh-without-Tag-Logo.png"; }}
              />
              <p style={{ fontSize: '0.95rem', lineHeight: 1.65, opacity: 0.95, maxWidth: '260px' }}>
                The First and Only Reggio Emilia Inspired Institute in the Sultanate of Oman.
              </p>
            </div>

            {/* Col 2: Site Links */}
            <div>
              <h4 className="font-rounded" style={{ fontSize: '1.25rem', fontWeight: 900, marginBottom: '20px', color: '#FFFFFF' }}>
                Site Links
              </h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {navItems.map((item) => (
                  <li key={item.path}>
                    <button
                      onClick={() => navigateTo(item.path)}
                      style={{ color: '#FFFFFF', fontSize: '0.96rem', opacity: 0.9, textAlign: 'left', transition: 'all 0.2s ease' }}
                      onMouseEnter={(e) => {
                        e.target.style.opacity = 1;
                        e.target.style.transform = 'translateX(4px)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.opacity = 0.9;
                        e.target.style.transform = 'translateX(0)';
                      }}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Al Mouj Campus */}
            <div>
              <h4 className="font-rounded" style={{ fontSize: '1.25rem', fontWeight: 900, marginBottom: '20px', color: '#FFFFFF' }}>
                Al Mouj Campus
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.92rem', opacity: 0.95 }}>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <MapPin size={16} style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>Street 6, Al Mouj, Muscat</span>
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <Phone size={16} style={{ flexShrink: 0 }} />
                  <a href="tel:+96891400055" style={{ color: '#FFFFFF', fontWeight: 800 }}>+968 9140 0055</a>
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <Clock size={16} style={{ flexShrink: 0 }} />
                  <span>Sun – Thu: 7am – 5pm</span>
                </div>
              </div>
            </div>

            {/* Col 4: Al Qurm Campus */}
            <div>
              <h4 className="font-rounded" style={{ fontSize: '1.25rem', fontWeight: 900, marginBottom: '20px', color: '#FFFFFF' }}>
                Al Qurm Campus
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.92rem', opacity: 0.95 }}>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <MapPin size={16} style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>Way 2035, Qurm, Muscat</span>
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <Phone size={16} style={{ flexShrink: 0 }} />
                  <a href="tel:+96891400066" style={{ color: '#FFFFFF', fontWeight: 800 }}>+968 9140 0066</a>
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <Clock size={16} style={{ flexShrink: 0 }} />
                  <span>Sun – Thu: 7am – 5pm</span>
                </div>
              </div>
            </div>

            {/* Col 5: Follow us */}
            <div>
              <h4 className="font-rounded" style={{ fontSize: '1.25rem', fontWeight: 900, marginBottom: '20px', color: '#FFFFFF' }}>
                Follow us
              </h4>
              <div style={{ display: 'flex', gap: '12px' }}>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    backdropFilter: 'blur(6px)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#FFFFFF';
                    e.currentTarget.style.color = 'var(--vamtam-accent-color-1)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                  aria-label="Instagram"
                >
                  <Instagram size={19} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    backdropFilter: 'blur(6px)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#FFFFFF';
                    e.currentTarget.style.color = 'var(--vamtam-accent-color-1)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                  aria-label="Facebook"
                >
                  <Facebook size={19} />
                </a>
                <a
                  href="https://wa.me/96891400055"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    backdropFilter: 'blur(6px)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#FFFFFF';
                    e.currentTarget.style.color = '#25D366';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={19} />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Wave Brush Divider */}
        <div className="shape-divider-wave-brush bottom">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.5 27.8" preserveAspectRatio="none">
            <path className="elementor-shape-fill" d="M283.5,9.7c0,0-7.3,4.3-14,4.6c-6.8,0.3-12.6,0-20.9-1.5c-11.3-2-33.1-10.1-44.7-5.7s-12.1,4.6-18,7.4c-6.6,3.2-20,9.6-36.6,9.3C131.6,23.5,99.5,7.2,86.3,8c-1.4,0.1-6.6,0.8-10.5,2c-3.8,1.2-9.4,3.8-17,4.7c-3.2,0.4-8.3,1.1-14.2,0.9c-1.5-0.1-6.3-0.4-12-1.6c-5.7-1.2-11-3.1-15.8-3.7C6.5,9.2,0,10.8,0,10.8V0h283.5V9.7z"/>
          </svg>
        </div>
      </div>

      {/* COPYRIGHT BOTTOM BAR */}
      <div style={{ background: '#0A303A', padding: '20px 0', color: '#D5DFE5', fontSize: '0.88rem' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px' }}>
          <div>
            © {new Date().getFullYear()} Shomoukh Early Childhood Education Center. All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <span>Muscat, Sultanate of Oman</span>
            <button
              onClick={scrollToTop}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--vamtam-accent-color-1)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .wp-footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 30px !important;
          }
        }
        @media (max-width: 540px) {
          .wp-footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
};
