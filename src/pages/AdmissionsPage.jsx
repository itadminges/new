import React from 'react';
import { Download, FileText, BookOpen, FileCheck } from 'lucide-react';
import { PremiumIllustration } from '../components/PremiumIllustration';
import { siteData } from '../data/siteData';

export const AdmissionsPage = ({ navigateTo, onOpenTourModal, onShowToast }) => {
  const documents = siteData.admissions.downloads;

  const getFileIcon = (iconName) => {
    if (iconName === 'BookOpen') return <BookOpen size={24} />;
    if (iconName === 'FileCheck') return <FileCheck size={24} />;
    return <FileText size={24} />;
  };

  const handleDownload = (title) => {
    onShowToast(`Opening ${title}...`);
  };

  return (
    <div className="admissions-page-wp">
      
      {/* HERO SECTION */}
      <section style={{
        position: 'relative',
        background: '#A0C3CE',
        backgroundImage: 'linear-gradient(180deg, #A0C3CE 0%, #C4DCE3 100%)',
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

        <img src="/assets/dots-1.svg" alt="" style={{ position: 'absolute', top: '70px', left: '6%', width: '120px', opacity: 0.8 }} />
        <img src="/assets/butterfly.png" alt="" className="animate-float" style={{ position: 'absolute', top: '90px', right: '10%', width: '110px' }} />

        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <div className="font-sensei" style={{ fontSize: 'clamp(2.8rem, 5.5vw, 4.2rem)', color: 'var(--vamtam-accent-color-2)', lineHeight: 1, marginBottom: '6px' }}>
            Enquire About
          </div>
          <h1 className="font-rounded" style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.8rem)', fontWeight: 900, color: 'var(--vamtam-accent-color-2)', marginBottom: '4px' }}>
            Admission
          </h1>
          <div className="font-sensei" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--vamtam-accent-color-2)' }}>
            For Your Child Now!
          </div>
        </div>

        <div className="shape-divider-wave-brush bottom">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.5 27.8" preserveAspectRatio="none">
            <path className="elementor-shape-fill" d="M283.5,9.7c0,0-7.3,4.3-14,4.6c-6.8,0.3-12.6,0-20.9-1.5c-11.3-2-33.1-10.1-44.7-5.7s-12.1,4.6-18,7.4c-6.6,3.2-20,9.6-36.6,9.3C131.6,23.5,99.5,7.2,86.3,8c-1.4,0.1-6.6,0.8-10.5,2c-3.8,1.2-9.4,3.8-17,4.7c-3.2,0.4-8.3,1.1-14.2,0.9c-1.5-0.1-6.3-0.4-12-1.6c-5.7-1.2-11-3.1-15.8-3.7C6.5,9.2,0,10.8,0,10.8V0h283.5V9.7z"/>
          </svg>
        </div>
      </section>

      {/* EDUCATION FOR YOUR CHILD & 6 DOWNLOADS */}
      <section style={{ padding: '90px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '48px',
            alignItems: 'center',
            marginBottom: '70px'
          }} className="wp-grid-2">
            <div>
              <h2 className="font-rounded" style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--vamtam-accent-color-2)', marginBottom: '16px' }}>
                Education for your child at Shomoukh
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '28px' }}>
                Admission to Shomoukh Early Childhood Education Center Almouj Campus and Al Qurm Campus is on a rolling, ongoing basis beginning each September. We operate 12 months a year across 3 academic terms plus an enriching 8-week summer camp.
              </p>
              <button 
                onClick={() => navigateTo('about')}
                className="wp-btn wp-btn-primary"
              >
                Read more
              </button>
            </div>

            <div style={{ textAlign: 'center' }}>
              <PremiumIllustration variant="admissions" title="Admissions journey illustration for Shomoukh families" />
            </div>
          </div>

          {/* 6 Download Documents Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '20px'
          }}>
            {documents.map((doc, idx) => (
              <div
                key={idx}
                style={{
                  background: '#FAF7F2',
                  borderRadius: '18px',
                  padding: '22px 24px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '16px',
                  border: '1px solid rgba(0,0,0,0.06)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: '#FFFFFF',
                    color: 'var(--vamtam-accent-color-1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>{getFileIcon(doc.icon)}</div>
                  <div>
                    <h3 className="font-rounded" style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--vamtam-accent-color-2)' }}>
                      {doc.title}
                    </h3>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                      {doc.fileType} | {doc.size}
                    </p>
                  </div>
                </div>

                <a
                  href={doc.href}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => handleDownload(doc.title)}
                  className="wp-btn wp-btn-outline"
                  style={{ padding: '6px 16px', fontSize: '0.85rem', flexShrink: 0 }}
                >
                  <Download size={14} />
                  <span>Download</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 STEPS JOURNEY */}
      <section style={{ padding: '90px 0', background: '#FAF7F2' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 60px' }}>
            <div className="font-sensei" style={{ fontSize: '3rem', color: 'var(--vamtam-accent-color-2)' }}>
              Our
            </div>
            <h2 className="font-rounded" style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--vamtam-accent-color-2)' }}>
              admissions team at Shomoukh looks forward to learning about you and your family.
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px'
          }}>
            {/* Step 1 */}
            <div style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              padding: '36px 28px',
              textAlign: 'center',
              boxShadow: '0 8px 24px rgba(0,0,0,0.04)'
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'var(--vamtam-accent-color-1)',
                color: '#FFFFFF',
                fontSize: '1.6rem',
                fontWeight: 800,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px'
              }}>
                1
              </div>
              <h3 className="font-rounded" style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--vamtam-accent-color-2)', marginBottom: '12px' }}>
                First step
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '24px' }}>
                Visit Shomoukh Center near you during working hours to meet our educators and explore our classrooms.
              </p>
              <button 
                onClick={() => onOpenTourModal()}
                className="wp-btn wp-btn-primary"
                style={{ width: '100%', fontSize: '0.92rem' }}
              >
                Schedule a Tour
              </button>
            </div>

            {/* Step 2 */}
            <div style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              padding: '36px 28px',
              textAlign: 'center',
              boxShadow: '0 8px 24px rgba(0,0,0,0.04)'
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'var(--vamtam-accent-color-6)',
                color: '#FFFFFF',
                fontSize: '1.6rem',
                fontWeight: 800,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px'
              }}>
                2
              </div>
              <h3 className="font-rounded" style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--vamtam-accent-color-2)', marginBottom: '12px' }}>
                Second step
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '24px' }}>
                Submit your details including your child's information, registration forms, and medical records.
              </p>
              <button 
                onClick={() => navigateTo('contact')}
                className="wp-btn wp-btn-outline"
                style={{ width: '100%', fontSize: '0.92rem' }}
              >
                Submit Details
              </button>
            </div>

            {/* Step 3 */}
            <div style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              padding: '36px 28px',
              textAlign: 'center',
              boxShadow: '0 8px 24px rgba(0,0,0,0.04)'
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: '#8AB73A',
                color: '#FFFFFF',
                fontSize: '1.6rem',
                fontWeight: 800,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px'
              }}>
                3
              </div>
              <h3 className="font-rounded" style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--vamtam-accent-color-2)', marginBottom: '12px' }}>
                Third step
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '24px' }}>
                Visit our admissions team and get enrolled depending on availability, receiving your welcome packet!
              </p>
              <button 
                onClick={() => onOpenTourModal()}
                className="wp-btn wp-btn-primary"
                style={{ width: '100%', fontSize: '0.92rem' }}
              >
                Enroll Your Child
              </button>
            </div>
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
