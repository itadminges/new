import React, { useState } from 'react';
import { BookOpen, CalendarDays, ClipboardCheck, Download, FileCheck, FileText, HeartHandshake, Send } from 'lucide-react';
import { siteData } from '../data/siteData';
import { submitWebsiteForm } from '../utils/formSubmission';

export const ParentsPage = ({ navigateTo, onOpenTourModal, onShowToast }) => {
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    email: '',
    phone: '',
    campus: 'Al Mouj Campus',
    requestType: 'Admissions documents',
    notes: ''
  });

  const parentDocuments = [
    ...siteData.admissions.downloads,
    {
      title: 'Parent Communication Guide',
      fileType: 'PDF Document',
      size: 'Family guide',
      href: '/downloads/Brochure.pdf'
    }
  ];

  const checklist = [
    'Child passport or civil ID copy',
    'Parent or guardian ID copy',
    'Birth certificate copy',
    'Vaccination record',
    'Completed enrollment form',
    'Recent child photograph'
  ];

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const result = await submitWebsiteForm('parent-document-request', formData);
    setIsSubmitting(false);

    if (result.ok) {
      onShowToast(`Thanks, ${formData.parentName}. We received your ${formData.requestType.toLowerCase()} request.`);
      setFormData({
        parentName: '',
        childName: '',
        email: '',
        phone: '',
        campus: 'Al Mouj Campus',
        requestType: 'Admissions documents',
        notes: ''
      });
    } else {
      onShowToast(result.message);
    }
  };

  return (
    <div className="parents-page-wp">
      <section style={{
        position: 'relative',
        background: '#FFFFFF',
        padding: '80px 0 90px',
        overflow: 'hidden'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '0.95fr 1.05fr',
            gap: '46px',
            alignItems: 'center'
          }} className="wp-grid-2">
            <div>
              <div className="section-tag">
                <HeartHandshake size={16} />
                <span>Parent Hub</span>
              </div>
              <h1 className="font-rounded" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: 'var(--vamtam-accent-color-2)', lineHeight: 1.08, marginBottom: '18px' }}>
                Forms, guides, and family support in one place.
              </h1>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.08rem', lineHeight: 1.75, marginBottom: '28px' }}>
                Find the documents families usually need before joining Shomoukh, then send our team a quick request if you want help with enrollment, campus visits, or records.
              </p>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <button onClick={() => navigateTo('admissions')} className="wp-btn wp-btn-primary">
                  Admissions
                </button>
                <button onClick={() => onOpenTourModal()} className="wp-btn wp-btn-outline">
                  Book a Visit
                </button>
              </div>
            </div>

            <div style={{ borderRadius: '8px', overflow: 'hidden', boxShadow: '0 14px 34px rgba(10,48,58,0.12)' }}>
              <img src="/assets/Community-image.jpg" alt="Shomoukh family community" style={{ width: '100%', height: '420px', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#FAF7F2' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 46px' }}>
            <h2 className="font-rounded" style={{ fontSize: '2.35rem', fontWeight: 900, color: 'var(--vamtam-accent-color-2)', marginBottom: '12px' }}>
              Parent documents
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.02rem', lineHeight: 1.7 }}>
              Download enrollment and campus information without hunting through the site.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px'
          }}>
            {parentDocuments.map((doc) => (
              <a
                key={doc.title}
                href={doc.href}
                target="_blank"
                rel="noreferrer"
                className="parent-doc-card"
              >
                <span className="parent-doc-icon"><FileText size={22} /></span>
                <span>
                  <strong>{doc.title}</strong>
                  <small>{doc.fileType} | {doc.size}</small>
                </span>
                <Download size={18} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '90px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '0.9fr 1.1fr',
            gap: '44px',
            alignItems: 'start'
          }} className="wp-grid-2">
            <div>
              <h2 className="font-rounded" style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--vamtam-accent-color-2)', marginBottom: '18px' }}>
                Before you apply
              </h2>
              <div style={{ display: 'grid', gap: '12px' }}>
                {checklist.map((item) => (
                  <div key={item} style={{ display: 'flex', gap: '12px', alignItems: 'center', background: '#FAF7F2', borderRadius: '8px', padding: '14px 16px' }}>
                    <ClipboardCheck size={20} color="var(--vamtam-accent-color-1)" />
                    <span style={{ fontWeight: 700, color: 'var(--vamtam-accent-color-2)' }}>{item}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '28px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div style={{ background: '#E9F3F6', borderRadius: '8px', padding: '18px' }}>
                  <CalendarDays size={22} color="var(--secondary-teal-dark)" />
                  <strong style={{ display: 'block', marginTop: '8px' }}>Open 12 months</strong>
                  <small style={{ color: 'var(--text-muted)' }}>Three terms plus summer camp.</small>
                </div>
                <div style={{ background: '#FFF2EC', borderRadius: '8px', padding: '18px' }}>
                  <BookOpen size={22} color="var(--vamtam-accent-color-1)" />
                  <strong style={{ display: 'block', marginTop: '8px' }}>EYFS aligned</strong>
                  <small style={{ color: 'var(--text-muted)' }}>Reggio-inspired inquiry.</small>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} style={{ background: '#FAF7F2', borderRadius: '8px', padding: '34px', boxShadow: '0 10px 28px rgba(10,48,58,0.06)' }}>
              <h2 className="font-rounded" style={{ fontSize: '1.9rem', fontWeight: 900, color: 'var(--vamtam-accent-color-2)', marginBottom: '20px' }}>
                Family document request
              </h2>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }} className="wp-grid-2">
                <label className="form-group">
                  <span className="form-label">Parent Name *</span>
                  <input className="wp-input" required value={formData.parentName} onChange={(e) => setFormData({ ...formData, parentName: e.target.value })} />
                </label>
                <label className="form-group">
                  <span className="form-label">Child Name</span>
                  <input className="wp-input" value={formData.childName} onChange={(e) => setFormData({ ...formData, childName: e.target.value })} />
                </label>
                <label className="form-group">
                  <span className="form-label">Email *</span>
                  <input className="wp-input" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                </label>
                <label className="form-group">
                  <span className="form-label">Phone *</span>
                  <input className="wp-input" type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                </label>
                <label className="form-group">
                  <span className="form-label">Campus</span>
                  <select className="wp-select" value={formData.campus} onChange={(e) => setFormData({ ...formData, campus: e.target.value })}>
                    <option>Al Mouj Campus</option>
                    <option>Al Qurm Campus</option>
                  </select>
                </label>
                <label className="form-group">
                  <span className="form-label">Request Type</span>
                  <select className="wp-select" value={formData.requestType} onChange={(e) => setFormData({ ...formData, requestType: e.target.value })}>
                    <option>Admissions documents</option>
                    <option>Campus information</option>
                    <option>Payment or term dates</option>
                    <option>Health and safety records</option>
                  </select>
                </label>
              </div>

              <label className="form-group">
                <span className="form-label">Notes</span>
                <textarea className="wp-textarea" value={formData.notes} onChange={(e) => setFormData({ ...formData, notes: e.target.value })} />
              </label>

              <button type="submit" disabled={isSubmitting} className="wp-btn wp-btn-primary" style={{ width: '100%' }}>
                <Send size={17} />
                {isSubmitting ? 'Sending Request...' : 'Send Request'}
              </button>
            </form>
          </div>
        </div>
      </section>

      <style>{`
        .parent-doc-card {
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: 14px;
          align-items: center;
          background: #FFFFFF;
          border-radius: 8px;
          padding: 18px;
          box-shadow: 0 8px 22px rgba(10, 48, 58, 0.06);
          color: var(--vamtam-accent-color-2);
        }
        .parent-doc-card strong,
        .parent-doc-card small {
          display: block;
        }
        .parent-doc-card small {
          margin-top: 3px;
          color: var(--text-muted);
          font-size: 0.82rem;
        }
        .parent-doc-icon {
          width: 44px;
          height: 44px;
          border-radius: 8px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: var(--primary-coral-light);
          color: var(--vamtam-accent-color-1);
        }
      `}</style>
    </div>
  );
};
