import React from 'react';
import { Download, ArrowRight, CheckCircle2, FileText, Calendar } from 'lucide-react';

export const AdmissionsPage = ({ navigateTo, onOpenTourModal, onShowToast }) => {
  const documents = [
    { title: 'Elementary School Admissions Checklist', icon: '📄', size: '240 KB PDF' },
    { title: 'Elementary School New Student Record Form', icon: '📝', size: '180 KB PDF' },
    { title: 'Kindergarten & Grade 1 Student Evaluation Form', icon: '📋', size: '310 KB PDF' },
    { title: 'Grade 2-6 Student Evaluation Form', icon: '📊', size: '290 KB PDF' },
    { title: 'Preschool Admissions Checklist', icon: '✅', size: '190 KB PDF' },
    { title: 'General Nursery Enrollment Packet & Guide', icon: '📁', size: '450 KB PDF' }
  ];

  const handleDownload = (title) => {
    onShowToast(`Downloading ${title}...`);
  };

  return (
    <div className="admissions-page-wp">
      
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
        <img src="/assets/butterfly.png" alt="" className="animate-float" style={{ position: 'absolute', top: '90px', right: '10%', width: '110px', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <div className="font-sensei" style={{ fontSize: 'clamp(2.8rem, 5.5vw, 4.2rem)', color: 'var(--vamtam-accent-color-2)', lineHeight: 1, marginBottom: '6px' }}>
            Enquire About
          </div>
          <h1 className="font-rounded" style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.8rem)', fontWeight: 900, color: 'var(--vamtam-accent-color-2)', marginBottom: '4px' }}>
            Admission
          </h1>
          <div className="font-sensei" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: 'var(--vamtam-accent-color-2)' }}>
            For Your Child Now!
          </div>
        </div>

        <div className="shape-divider-wave-brush bottom fill-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.5 27.8" preserveAspectRatio="none">
            <path className="elementor-shape-fill" d="M283.5,9.7c0,0-7.3,4.3-14,4.6c-6.8,0.3-12.6,0-20.9-1.5c-11.3-2-33.1-10.1-44.7-5.7s-12.1,4.6-18,7.4c-6.6,3.2-20,9.6-36.6,9.3C131.6,23.5,99.5,7.2,86.3,8c-1.4,0.1-6.6,0.8-10.5,2c-3.8,1.2-9.4,3.8-17,4.7c-3.2,0.4-8.3,1.1-14.2,0.9c-1.5-0.1-6.3-0.4-12-1.6c-5.7-1.2-11-3.1-15.8-3.7C6.5,9.2,0,10.8,0,10.8V0h283.5V9.7z"/>
          </svg>
        </div>
      </section>

      {/* EDUCATION FOR YOUR CHILD & 6 DOWNLOADS */}
      <section style={{ padding: '100px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '48px',
            alignItems: 'center',
            marginBottom: '80px'
          }} className="wp-grid-2">
            <div>
              <div style={{
                display: 'inline-block',
                background: 'var(--primary-coral-light)',
                color: 'var(--vamtam-accent-color-1)',
                padding: '4px 14px',
                borderRadius: 'var(--radius-full)',
                fontWeight: 800,
                fontSize: '0.85rem',
                marginBottom: '16px'
              }}>
                Rolling Admissions
              </div>
              <h2 className="font-rounded" style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--vamtam-accent-color-2)', marginBottom: '18px' }}>
                Education for your child at Shomoukh
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '32px' }}>
                Admission to Shomoukh Early Childhood Education Center Almouj Campus and Al Qurm Campus is on a rolling, ongoing basis beginning each September. We operate 12 months a year across 3 academic terms plus an enriching 8-week summer camp.
              </p>
              <button 
                onClick={() => onOpenTourModal()}
                className="wp-btn wp-btn-primary"
              >
                <span>Book a Campus Tour</span>
                <ArrowRight size={16} />
              </button>
            </div>

            <div style={{ textAlign: 'center' }}>
              <img src="/assets/illustration-mountain-1.svg" alt="Admissions" style={{ maxWidth: '380px', margin: '0 auto' }} />
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
                className="modern-card"
                style={{
                  padding: '24px 28px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '16px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '14px',
                    background: '#FAF7F2',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    flexShrink: 0
                  }}>
                    {doc.icon}
                  </div>
                  <div>
                    <h3 className="font-rounded" style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--vamtam-accent-color-2)', marginBottom: '2px' }}>
                      {doc.title}
                    </h3>
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{doc.size}</span>
                  </div>
                </div>

                <button
                  onClick={() => handleDownload(doc.title)}
                  className="wp-btn wp-btn-outline"
                  style={{ padding: '8px 18px', fontSize: '0.88rem', flexShrink: 0 }}
                >
                  <Download size={15} />
                  <span>Download</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 STEPS JOURNEY */}
      <section style={{ padding: '100px 0', background: '#FAF7F2' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px' }}>
            <div className="font-sensei" style={{ fontSize: '3.2rem', color: 'var(--vamtam-accent-color-2)' }}>
              Our
            </div>
            <h2 className="font-rounded" style={{ fontSize: '2.4rem', fontWeight: 900, color: 'var(--vamtam-accent-color-2)' }}>
              Admissions team looks forward to meeting your family
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px'
          }}>
            {/* Step 1 */}
            <div className="modern-card" style={{ padding: '40px 32px', textAlign: 'center' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'var(--vamtam-accent-color-1)',
                color: '#FFFFFF',
                fontSize: '1.6rem',
                fontWeight: 900,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                boxShadow: 'var(--shadow-coral)'
              }}>
                1
              </div>
              <h3 className="font-rounded" style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--vamtam-accent-color-2)', marginBottom: '12px' }}>
                First Step
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
            <div className="modern-card" style={{ padding: '40px 32px', textAlign: 'center' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'var(--vamtam-accent-color-6)',
                color: '#FFFFFF',
                fontSize: '1.6rem',
                fontWeight: 900,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                boxShadow: '0 8px 20px rgba(160, 195, 206, 0.4)'
              }}>
                2
              </div>
              <h3 className="font-rounded" style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--vamtam-accent-color-2)', marginBottom: '12px' }}>
                Second Step
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '24px' }}>
                Submit your details including your child's information, registration forms, and health records.
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
            <div className="modern-card" style={{ padding: '40px 32px', textAlign: 'center' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: '#66961E',
                color: '#FFFFFF',
                fontSize: '1.6rem',
                fontWeight: 900,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                boxShadow: '0 8px 20px rgba(102, 150, 30, 0.35)'
              }}>
                3
              </div>
              <h3 className="font-rounded" style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--vamtam-accent-color-2)', marginBottom: '12px' }}>
                Third Step
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
