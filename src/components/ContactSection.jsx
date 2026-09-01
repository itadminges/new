import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { siteData } from '../data/siteData';
import { submitWebsiteForm } from '../utils/formSubmission';

export const ContactSection = ({ onShowToast }) => {
  const [selectedCampusIdx, setSelectedCampusIdx] = useState(0);
  const [openFaqIdx, setOpenFaqIdx] = useState(0);

  // Form State
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childAge: 'Toddler (1-2 Years)',
    campus: 'Al Mouj Campus',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const activeCampus = siteData.campuses[selectedCampusIdx];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const result = await submitWebsiteForm('contact-section', formData);
    setIsSubmitting(false);

    if (result.ok) {
      onShowToast(`Thank you, ${formData.parentName}! Your message has been sent to ${formData.campus}. Our team will contact you shortly.`);
      setFormData({
        parentName: '',
        email: '',
        phone: '',
        childAge: 'Toddler (1-2 Years)',
        campus: 'Al Mouj Campus',
        message: ''
      });
    } else {
      onShowToast(result.message);
    }
  };

  return (
    <section id="locations" className="section-padding" style={{ background: '#FFFFFF', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 60px' }}>
          <div className="section-tag">
            <MapPin size={16} />
            <span>Our Locations</span>
          </div>
          <h2 className="section-title">In the Heart of Muscat</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Visit our state-of-the-art early childhood campuses located in Al Mouj and Al Qurm.
          </p>
        </div>

        {/* Campus Selection Buttons */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '16px',
          marginBottom: '40px'
        }}>
          {siteData.campuses.map((campus, idx) => {
            const isActive = selectedCampusIdx === idx;
            return (
              <button
                key={campus.id}
                onClick={() => {
                  setSelectedCampusIdx(idx);
                  setFormData((prev) => ({ ...prev, campus: campus.name }));
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '14px 28px',
                  borderRadius: 'var(--radius-full)',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: '1.05rem',
                  background: isActive ? 'var(--primary-coral-dark)' : 'var(--bg-cream)',
                  color: isActive ? '#FFFFFF' : 'var(--text-main)',
                  boxShadow: isActive ? '0 10px 25px rgba(214, 120, 82, 0.25)' : 'none',
                  border: isActive ? 'none' : '1px solid rgba(0,0,0,0.06)',
                  transition: 'all var(--transition-fast)'
                }}
              >
                <MapPin size={18} />
                <span>{campus.name}</span>
              </button>
            );
          })}
        </div>

        {/* Campus Details & Map Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '36px',
          marginBottom: '80px'
        }} className="contact-grid">
          
          {/* Left: Campus Information Card */}
          <div className="card" style={{
            padding: '36px',
            borderRadius: '32px',
            background: 'var(--bg-warm-light)',
            border: '1px solid rgba(240, 161, 127, 0.25)'
          }}>
            <div style={{
              display: 'inline-block',
              background: 'var(--primary-coral-light)',
              color: 'var(--primary-coral-dark)',
              fontWeight: 700,
              fontSize: '0.85rem',
              padding: '4px 14px',
              borderRadius: '20px',
              marginBottom: '12px'
            }}>
              {activeCampus.tag}
            </div>

            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 700, marginBottom: '20px' }}>
              {activeCampus.name}
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginBottom: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <MapPin size={20} color="var(--primary-coral-dark)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>Address</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>{activeCampus.address}</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <Clock size={20} color="var(--secondary-teal-dark)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>Working Hours</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>{activeCampus.hours}</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <Phone size={20} color="var(--accent-green)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>Direct Line</div>
                  <a href={activeCampus.phoneLink} style={{ color: 'var(--primary-coral-dark)', fontWeight: 600 }}>
                    {activeCampus.phone}
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <Mail size={20} color="var(--accent-sun)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>Email Inquiries</div>
                  <a href={`mailto:${activeCampus.email}`} style={{ color: 'var(--text-main)', fontSize: '0.92rem' }}>
                    {activeCampus.email}
                  </a>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a 
                href={activeCampus.phoneLink} 
                className="btn btn-primary btn-sm"
              >
                <Phone size={16} />
                <span>Call Campus</span>
              </a>
              <a 
                href={activeCampus.whatsappLink} 
                target="_blank" 
                rel="noreferrer"
                className="btn btn-outline btn-sm"
                style={{ borderColor: '#25D366', color: '#128C7E' }}
              >
                <MessageCircle size={16} color="#25D366" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right: Embedded Interactive Map */}
          <div style={{
            borderRadius: '32px',
            overflow: 'hidden',
            boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
            minHeight: '380px',
            border: '4px solid #FFFFFF'
          }}>
            <iframe
              src={activeCampus.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${activeCampus.name} Map`}
            />
          </div>

        </div>

        {/* Contact Form & FAQs Split Grid */}
        <div id="contact" style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 1fr',
          gap: '48px',
          alignItems: 'flex-start'
        }} className="contact-grid">
          
          {/* Quick Inquiry Form */}
          <div className="card" style={{
            borderRadius: '32px',
            padding: '40px',
            background: '#FFFFFF',
            border: '1px solid rgba(0,0,0,0.06)'
          }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 700, marginBottom: '6px' }}>
              Send Us a Message
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '28px' }}>
              Have questions about our programs, tuition, or admissions? Fill out the form below.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Parent / Guardian Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Al-Balushi"
                  className="form-input"
                  value={formData.parentName}
                  onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-row-2">
                <div className="form-group">
                  <label className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+968 9123 4567"
                    className="form-input"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@example.com"
                    className="form-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-row-2">
                <div className="form-group">
                  <label className="form-label">Preferred Campus</label>
                  <select
                    className="form-select"
                    value={formData.campus}
                    onChange={(e) => setFormData({ ...formData, campus: e.target.value })}
                  >
                    <option value="Al Mouj Campus">Al Mouj Campus</option>
                    <option value="Al Qurm Campus">Al Qurm Campus</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Child Age Group</label>
                  <select
                    className="form-select"
                    value={formData.childAge}
                    onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                  >
                    <option value="Infants (6-12 Months)">Infants (6-12 Months)</option>
                    <option value="Toddler (1-2 Years)">Toddler (1-2 Years)</option>
                    <option value="Preschool (2-3 Years)">Preschool (2-3 Years)</option>
                    <option value="Flex-Care / Pre-K (3-4 Years)">Flex-Care / Pre-K (3-4 Years)</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Your Message or Questions</label>
                <textarea
                  placeholder="How can we assist you and your child?"
                  className="form-textarea"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
                style={{ width: '100%', padding: '16px', fontSize: '1.05rem' }}
              >
                {isSubmitting ? (
                  <span>Submitting Message...</span>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* FAQs Accordion */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--primary-coral-dark)', fontWeight: 700, marginBottom: '8px' }}>
              <HelpCircle size={20} />
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.85rem' }}>Frequently Asked Questions</span>
            </div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 700, marginBottom: '24px' }}>
              Everything Parents Need to Know
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {siteData.faqs.map((faq, idx) => {
                const isOpen = openFaqIdx === idx;
                return (
                  <div
                    key={idx}
                    style={{
                      background: 'var(--bg-cream)',
                      borderRadius: '18px',
                      overflow: 'hidden',
                      border: '1px solid rgba(0,0,0,0.06)',
                      transition: 'all var(--transition-fast)'
                    }}
                  >
                    <button
                      onClick={() => setOpenFaqIdx(isOpen ? -1 : idx)}
                      style={{
                        width: '100%',
                        padding: '18px 20px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        textAlign: 'left',
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 700,
                        fontSize: '1.05rem',
                        color: 'var(--text-main)'
                      }}
                    >
                      <span>{faq.q}</span>
                      {isOpen ? <ChevronUp size={20} color="var(--primary-coral-dark)" /> : <ChevronDown size={20} />}
                    </button>

                    {isOpen && (
                      <div style={{
                        padding: '0 20px 20px',
                        fontSize: '0.95rem',
                        color: 'var(--text-muted)',
                        lineHeight: 1.6
                      }}>
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .form-row-2 {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
