import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, ArrowRight } from 'lucide-react';
import { siteData } from '../data/siteData';

export const ContactPage = ({ onShowToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    campus: 'Al Mouj Campus',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onShowToast(`Thank you, ${formData.name}! Your message has been sent to ${formData.campus}.`);
      setFormData({
        name: '',
        email: '',
        phone: '',
        campus: 'Al Mouj Campus',
        message: ''
      });
    }, 600);
  };

  return (
    <div className="contact-page-wp">
      
      {/* HERO SECTION */}
      <section style={{
        position: 'relative',
        background: 'linear-gradient(180deg, #A0C3CE 0%, #BBD6DE 60%, #FAF7F2 100%)',
        minHeight: '480px',
        padding: '100px 0 120px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div className="shape-divider-wave-brush top">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.5 27.8" preserveAspectRatio="none">
            <path className="elementor-shape-fill" d="M283.5,9.7c0,0-7.3,4.3-14,4.6c-6.8,0.3-12.6,0-20.9-1.5c-11.3-2-33.1-10.1-44.7-5.7s-12.1,4.6-18,7.4c-6.6,3.2-20,9.6-36.6,9.3C131.6,23.5,99.5,7.2,86.3,8c-1.4,0.1-6.6,0.8-10.5,2c-3.8,1.2-9.4,3.8-17,4.7c-3.2,0.4-8.3,1.1-14.2,0.9c-1.5-0.1-6.3-0.4-12-1.6c-5.7-1.2-11-3.1-15.8-3.7C6.5,9.2,0,10.8,0,10.8V0h283.5V9.7z"/>
          </svg>
        </div>

        <img src="/assets/dots-1.svg" alt="" style={{ position: 'absolute', top: '70px', left: '6%', width: '120px', opacity: 0.75, pointerEvents: 'none' }} />
        <img src="/assets/illustration-tree-2-1.svg" alt="" style={{ position: 'absolute', bottom: '60px', right: '8%', width: '110px', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <div className="font-sensei" style={{ fontSize: 'clamp(2.8rem, 5.5vw, 4.2rem)', color: 'var(--vamtam-accent-color-2)', lineHeight: 1, marginBottom: '6px' }}>
            Our
          </div>
          <h1 className="font-rounded" style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.8rem)', fontWeight: 900, color: 'var(--vamtam-accent-color-2)', marginBottom: '6px' }}>
            Locations
          </h1>
          <div className="font-rounded" style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--vamtam-accent-color-2)' }}>
            In The Heart Of The City
          </div>
        </div>

        <div className="shape-divider-wave-brush bottom fill-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.5 27.8" preserveAspectRatio="none">
            <path className="elementor-shape-fill" d="M283.5,9.7c0,0-7.3,4.3-14,4.6c-6.8,0.3-12.6,0-20.9-1.5c-11.3-2-33.1-10.1-44.7-5.7s-12.1,4.6-18,7.4c-6.6,3.2-20,9.6-36.6,9.3C131.6,23.5,99.5,7.2,86.3,8c-1.4,0.1-6.6,0.8-10.5,2c-3.8,1.2-9.4,3.8-17,4.7c-3.2,0.4-8.3,1.1-14.2,0.9c-1.5-0.1-6.3-0.4-12-1.6c-5.7-1.2-11-3.1-15.8-3.7C6.5,9.2,0,10.8,0,10.8V0h283.5V9.7z"/>
          </svg>
        </div>
      </section>

      {/* DUAL CAMPUS CARDS WITH MAPS */}
      <section style={{ padding: '100px 0', background: '#FFFFFF' }}>
        <div className="container">
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '40px',
            marginBottom: '90px'
          }} className="wp-grid-2">
            
            {/* Campus 1: Al Mouj */}
            <div className="modern-card" style={{ overflow: 'hidden' }}>
              <div style={{ height: '260px', overflow: 'hidden' }}>
                <img src="/assets/Al-Mouj-Front.jpg" alt="Al Mouj Campus" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.target.src = "/assets/1.jpg"; }} />
              </div>
              <div style={{ padding: '36px' }}>
                <div style={{
                  display: 'inline-block',
                  background: 'var(--primary-coral-light)',
                  color: 'var(--vamtam-accent-color-1)',
                  padding: '4px 14px',
                  borderRadius: 'var(--radius-full)',
                  fontWeight: 800,
                  fontSize: '0.82rem',
                  marginBottom: '12px'
                }}>
                  Muscat Waterfront
                </div>
                <h2 className="font-rounded" style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--vamtam-accent-color-2)', marginBottom: '18px' }}>
                  Al Mouj Campus
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px', fontSize: '0.96rem', color: 'var(--text-muted)' }}>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <MapPin size={18} color="var(--vamtam-accent-color-1)" style={{ flexShrink: 0 }} />
                    <span>Street 6, Al Mouj, Muscat, Sultanate of Oman</span>
                  </div>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <Phone size={18} color="var(--vamtam-accent-color-1)" style={{ flexShrink: 0 }} />
                    <a href="tel:+96891400055" style={{ color: 'var(--vamtam-accent-color-1)', fontWeight: 800 }}>+968 9140 0055</a>
                  </div>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <Clock size={18} color="var(--vamtam-accent-color-1)" style={{ flexShrink: 0 }} />
                    <span>Sunday – Thursday: 7:00 AM – 5:00 PM</span>
                  </div>
                </div>

                <div style={{ height: '220px', borderRadius: '18px', overflow: 'hidden', border: '1px solid #E5E9EC' }}>
                  <iframe
                    src={siteData.campuses[0].mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    title="Al Mouj Map"
                  />
                </div>
              </div>
            </div>

            {/* Campus 2: Al Qurm */}
            <div className="modern-card" style={{ overflow: 'hidden' }}>
              <div style={{ height: '260px', overflow: 'hidden' }}>
                <img src="/assets/Al-Qurum-Front.jpg" alt="Al Qurm Campus" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.target.src = "/assets/1.jpg"; }} />
              </div>
              <div style={{ padding: '36px' }}>
                <div style={{
                  display: 'inline-block',
                  background: 'var(--secondary-teal-light)',
                  color: 'var(--vamtam-accent-color-2)',
                  padding: '4px 14px',
                  borderRadius: 'var(--radius-full)',
                  fontWeight: 800,
                  fontSize: '0.82rem',
                  marginBottom: '12px'
                }}>
                  Qurm District
                </div>
                <h2 className="font-rounded" style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--vamtam-accent-color-2)', marginBottom: '18px' }}>
                  Al Quram Campus
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px', fontSize: '0.96rem', color: 'var(--text-muted)' }}>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <MapPin size={18} color="var(--vamtam-accent-color-6)" style={{ flexShrink: 0 }} />
                    <span>Way 2035, Qurm, Muscat, Sultanate of Oman</span>
                  </div>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <Phone size={18} color="var(--vamtam-accent-color-6)" style={{ flexShrink: 0 }} />
                    <a href="tel:+96891400066" style={{ color: 'var(--vamtam-accent-color-6)', fontWeight: 800 }}>+968 9140 0066</a>
                  </div>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <Clock size={18} color="var(--vamtam-accent-color-6)" style={{ flexShrink: 0 }} />
                    <span>Sunday – Thursday: 7:00 AM – 5:00 PM</span>
                  </div>
                </div>

                <div style={{ height: '220px', borderRadius: '18px', overflow: 'hidden', border: '1px solid #E5E9EC' }}>
                  <iframe
                    src={siteData.campuses[1].mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    title="Al Qurm Map"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* CONTACT US NOW FORM */}
          <div className="modern-card" style={{
            maxWidth: '840px',
            margin: '0 auto',
            background: '#FAF7F2',
            padding: '50px 44px'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <div style={{
                display: 'inline-block',
                background: 'var(--primary-coral-light)',
                color: 'var(--vamtam-accent-color-1)',
                padding: '4px 14px',
                borderRadius: 'var(--radius-full)',
                fontWeight: 800,
                fontSize: '0.85rem',
                marginBottom: '12px'
              }}>
                Get In Touch
              </div>
              <h2 className="font-rounded" style={{ fontSize: '2.4rem', fontWeight: 900, color: 'var(--vamtam-accent-color-2)', marginBottom: '8px' }}>
                Contact Us Now...
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.02rem' }}>
                We will be glad to answer all your inquiries and guide you through enrollment.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }} className="wp-grid-2">
                <div>
                  <label style={{ display: 'block', fontWeight: 700, marginBottom: '6px', fontSize: '0.92rem' }}>Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    className="wp-input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: 700, marginBottom: '6px', fontSize: '0.92rem' }}>Phone *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+968 9123 4567"
                    className="wp-input"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }} className="wp-grid-2">
                <div>
                  <label style={{ display: 'block', fontWeight: 700, marginBottom: '6px', fontSize: '0.92rem' }}>Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="email@example.com"
                    className="wp-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: 700, marginBottom: '6px', fontSize: '0.92rem' }}>Campus</label>
                  <select
                    className="wp-select"
                    value={formData.campus}
                    onChange={(e) => setFormData({ ...formData, campus: e.target.value })}
                  >
                    <option value="Al Mouj Campus">Al Mouj Campus</option>
                    <option value="Al Qurm Campus">Al Qurm Campus</option>
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: '28px' }}>
                <label style={{ display: 'block', fontWeight: 700, marginBottom: '6px', fontSize: '0.92rem' }}>Your Message</label>
                <textarea
                  placeholder="How can we assist you?"
                  className="wp-textarea"
                  style={{ minHeight: '110px' }}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="wp-btn wp-btn-primary"
                style={{ width: '100%', padding: '16px', fontSize: '1.05rem' }}
              >
                {isSubmitting ? 'Sending Message...' : 'Submit Inquiries'}
              </button>
            </form>
          </div>

        </div>
      </section>

      <style>{`
        @media (max-width: 860px) {
          .wp-grid-2 {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
