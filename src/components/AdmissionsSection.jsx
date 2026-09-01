import React from 'react';
import { ClipboardList, Calendar, ArrowRight, Download, FileText, BookOpen, FileCheck, CheckCircle } from 'lucide-react';
import { siteData } from '../data/siteData';

export const AdmissionsSection = ({ onOpenTourModal, onShowToast }) => {
  const getFileIcon = (iconName) => {
    switch (iconName) {
      case 'BookOpen': return <BookOpen size={24} />;
      case 'Calendar': return <Calendar size={24} />;
      case 'FileCheck': return <FileCheck size={24} />;
      default: return <FileText size={24} />;
    }
  };

  const handleResourceClick = (docTitle) => {
    if (onShowToast) {
      onShowToast(`Opening ${docTitle}...`);
    }
  };

  return (
    <section id="admissions" className="section-padding" style={{
      background: 'var(--bg-cream)',
      position: 'relative'
    }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 60px' }}>
          <div className="section-tag">
            <ClipboardList size={16} />
            <span>Admissions & Enrolment</span>
          </div>
          <h2 className="section-title">Join the Shomoukh Family</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            {siteData.admissions.intro}
          </p>
        </div>

        {/* 3 Steps Process Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '28px',
          marginBottom: '64px'
        }}>
          {siteData.admissions.steps.map((st, idx) => (
            <div
              key={idx}
              className="card"
              style={{
                borderRadius: '28px',
                padding: '36px 28px',
                background: '#FFFFFF',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid rgba(0,0,0,0.06)'
              }}
            >
              <div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '20px'
                }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '16px',
                    background: idx === 0 ? 'var(--primary-coral-light)' : idx === 1 ? 'var(--secondary-teal-light)' : 'var(--accent-green-light)',
                    color: idx === 0 ? 'var(--primary-coral-dark)' : idx === 1 ? 'var(--secondary-teal-dark)' : 'var(--accent-green)',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '1.4rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {st.step}
                  </div>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                    Step {idx + 1}
                  </span>
                </div>

                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 700, marginBottom: '12px' }}>
                  {st.title}
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '24px' }}>
                  {st.desc}
                </p>
              </div>

              <div>
                {idx === 0 ? (
                  <button
                    onClick={() => onOpenTourModal()}
                    className="btn btn-primary btn-sm"
                    style={{ width: '100%' }}
                  >
                    <Calendar size={16} />
                    <span>{st.action}</span>
                  </button>
                ) : (
                  <a
                    href={st.link}
                    className="btn btn-outline btn-sm"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <span>{st.action}</span>
                    <ArrowRight size={16} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Downloadable Resources & Information Packets */}
        <div id="downloads" className="card" style={{
          borderRadius: '32px',
          padding: '40px',
          background: 'linear-gradient(135deg, #FFFFFF 0%, var(--bg-warm-light) 100%)',
          border: '1px solid rgba(240, 161, 127, 0.25)'
        }}>
          <div style={{ marginBottom: '28px' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '6px' }}>
              Parent Resources & Downloadable Forms
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Access our official fee schedules, academic calendar, and enrollment forms in PDF.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px'
          }}>
            {siteData.admissions.downloads.map((doc, idx) => (
              <div
                key={idx}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '20px',
                  padding: '20px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.04)',
                  border: '1px solid rgba(0,0,0,0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '14px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'var(--primary-coral-light)',
                    color: 'var(--primary-coral-dark)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    {getFileIcon(doc.icon)}
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-main)', marginBottom: '2px' }}>
                      {doc.title}
                    </h4>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      {doc.fileType} • {doc.size}
                    </span>
                  </div>
                </div>

                <a
                  href={doc.href}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => handleResourceClick(doc.title)}
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: 'var(--bg-cream)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--primary-coral-dark)',
                    transition: 'all var(--transition-fast)',
                    flexShrink: 0
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--primary-coral)';
                    e.currentTarget.style.color = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'var(--bg-cream)';
                    e.currentTarget.style.color = 'var(--primary-coral-dark)';
                  }}
                  aria-label={`Download ${doc.title}`}
                >
                  <Download size={18} />
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
