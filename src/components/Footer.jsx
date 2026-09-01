import React from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, MessageCircle, ArrowUp, FileText, Calendar, HeartHandshake } from 'lucide-react';
import { siteData } from '../data/siteData';

export const Footer = ({ navigateTo }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { label: 'Home', path: 'home' },
    { label: 'Programs', path: 'programs' },
    { label: 'Admissions', path: 'admissions' },
    { label: 'Parents', path: 'parents' },
    { label: 'About', path: 'about' },
    { label: 'Enrichments', path: 'enrichments' },
    { label: 'Locations', path: 'locations' },
    { label: 'Contact Us', path: 'contact' }
  ];

  const footerResources = [
    { label: 'Enrollment Form', href: '/assets/Downloadable-Enrolement-Form.pdf', icon: FileText },
    { label: 'Book a Visit', action: () => navigateTo('admissions'), icon: Calendar },
    { label: 'Family Inquiries', href: `mailto:${siteData.socials.email}`, icon: HeartHandshake }
  ];

  return (
    <footer style={{ position: 'relative', background: '#FFFFFF' }}>
      
      {/* TOP PHOTO CAROUSEL */}
      <div style={{ padding: '30px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
            gap: '12px'
          }}>
            {siteData.gallery.map((g, i) => (
              <div key={i} style={{ height: '140px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}>
                <img src={g.img} alt={g.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.target.src = "/assets/1.jpg"; }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MAIN FOOTER WITH WAVE-BRUSH DIVIDER AND GRADIENT BACKGROUND */}
      <div style={{
        position: 'relative',
        background: '#D47B55',
        color: '#FFFFFF',
        padding: '90px 0 60px'
      }}>
        {/* Top Wave Brush Divider */}
        <div className="shape-divider-wave-brush top">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.5 27.8" preserveAspectRatio="none">
            <path className="elementor-shape-fill" d="M283.5,9.7c0,0-7.3,4.3-14,4.6c-6.8,0.3-12.6,0-20.9-1.5c-11.3-2-33.1-10.1-44.7-5.7s-12.1,4.6-18,7.4c-6.6,3.2-20,9.6-36.6,9.3C131.6,23.5,99.5,7.2,86.3,8c-1.4,0.1-6.6,0.8-10.5,2c-3.8,1.2-9.4,3.8-17,4.7c-3.2,0.4-8.3,1.1-14.2,0.9c-1.5-0.1-6.3-0.4-12-1.6c-5.7-1.2-11-3.1-15.8-3.7C6.5,9.2,0,10.8,0,10.8V0h283.5V9.7z"/>
          </svg>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.25fr 0.8fr 0.95fr 1fr 1fr',
            gap: '36px'
          }} className="wp-footer-grid">
            
            {/* Col 1: Logo & Tagline */}
            <div>
              <img 
                src="/assets/Logo-19-April-2021.png" 
                alt="Shomoukh Logo" 
                style={{ maxHeight: '60px', width: 'auto', marginBottom: '18px' }}
                onError={(e) => { e.target.src = "/assets/Shomoukh-without-Tag-Logo.png"; }}
              />
              <p style={{ fontSize: '0.95rem', lineHeight: 1.6, opacity: 0.95, marginBottom: '16px' }}>
                {siteData.brand.subtitle}.
              </p>
              <a href={`mailto:${siteData.socials.email}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#FFFFFF', fontWeight: 700 }}>
                <Mail size={16} />
                {siteData.socials.email}
              </a>
            </div>

            {/* Col 2: Site Links */}
            <div>
              <h4 className="font-rounded" style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '18px', color: '#FFFFFF' }}>
                Site Links
              </h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {navItems.map((item) => (
                  <li key={item.path}>
                    <button
                      onClick={() => navigateTo(item.path)}
                      style={{ color: '#FFFFFF', fontSize: '0.95rem', opacity: 0.9, textAlign: 'left', lineHeight: 1.45 }}
                      onMouseEnter={(e) => e.target.style.opacity = 1}
                      onMouseLeave={(e) => e.target.style.opacity = 0.9}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Parent Resources */}
            <div>
              <h4 className="font-rounded" style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '18px', color: '#FFFFFF' }}>
                Parent Resources
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.92rem' }}>
                {footerResources.map((resource) => {
                  const Icon = resource.icon;
                  const content = (
                    <>
                      <Icon size={16} style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{resource.label}</span>
                    </>
                  );
                  return resource.href ? (
                    <a key={resource.label} href={resource.href} style={{ display: 'flex', gap: '8px', color: '#FFFFFF', fontWeight: 700, opacity: 0.94 }}>
                      {content}
                    </a>
                  ) : (
                    <button key={resource.label} onClick={resource.action} style={{ display: 'flex', gap: '8px', color: '#FFFFFF', fontWeight: 700, opacity: 0.94, textAlign: 'left' }}>
                      {content}
                    </button>
                  );
                })}
              </div>
            </div>

            {siteData.campuses.map((campus) => (
              <div key={campus.id}>
                <h4 className="font-rounded" style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '18px', color: '#FFFFFF' }}>
                  {campus.name}
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem', opacity: 0.95 }}>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <MapPin size={16} style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span>{campus.address}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <Phone size={16} style={{ flexShrink: 0 }} />
                    <a href={campus.phoneLink} style={{ color: '#FFFFFF', fontWeight: 700 }}>{campus.phone}</a>
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <Clock size={16} style={{ flexShrink: 0 }} />
                    <span>{campus.hours}</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Col 5: Follow us */}
            <div>
              <h4 className="font-rounded" style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '18px', color: '#FFFFFF' }}>
                Follow us
              </h4>
              <div style={{ display: 'flex', gap: '10px' }}>
                <a
                  href={siteData.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF' }}
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href={siteData.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF' }}
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href={siteData.socials.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF' }}
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={18} />
                </a>
              </div>
              <p style={{ marginTop: '16px', fontSize: '0.88rem', lineHeight: 1.55, opacity: 0.92 }}>
                Follow campus moments, admissions updates, and family announcements.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* COPYRIGHT BOTTOM BAR */}
      <div style={{ background: '#D47B55', padding: '18px 0', color: '#FFFFFF', fontSize: '0.85rem' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            © {new Date().getFullYear()} Shomoukh Early Childhood Education Center. All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span>Muscat, Sultanate of Oman</span>
            <button
              onClick={scrollToTop}
              style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF' }}
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
