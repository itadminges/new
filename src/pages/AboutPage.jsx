import React from 'react';
import { siteData } from '../data/siteData';

export const AboutPage = ({ navigateTo, onOpenTourModal }) => {
  return (
    <div className="about-page-wp">
      
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
        {/* Top Wave Brush Divider */}
        <div className="shape-divider-wave-brush top">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.5 27.8" preserveAspectRatio="none">
            <path className="elementor-shape-fill" d="M283.5,9.7c0,0-7.3,4.3-14,4.6c-6.8,0.3-12.6,0-20.9-1.5c-11.3-2-33.1-10.1-44.7-5.7s-12.1,4.6-18,7.4c-6.6,3.2-20,9.6-36.6,9.3C131.6,23.5,99.5,7.2,86.3,8c-1.4,0.1-6.6,0.8-10.5,2c-3.8,1.2-9.4,3.8-17,4.7c-3.2,0.4-8.3,1.1-14.2,0.9c-1.5-0.1-6.3-0.4-12-1.6c-5.7-1.2-11-3.1-15.8-3.7C6.5,9.2,0,10.8,0,10.8V0h283.5V9.7z"/>
          </svg>
        </div>

        {/* Decorative Assets */}
        <img src="/assets/dots-1.svg" alt="" style={{ position: 'absolute', top: '70px', left: '6%', width: '120px', opacity: 0.8 }} />
        <img src="/assets/illustration-tree-2-1.svg" alt="" style={{ position: 'absolute', bottom: '60px', right: '8%', width: '100px' }} />

        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <div className="font-sensei" style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', color: 'var(--vamtam-accent-color-2)', lineHeight: 1, marginBottom: '6px' }}>
            Welcome
          </div>
          <h1 className="font-rounded" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', fontWeight: 900, color: 'var(--vamtam-accent-color-2)', marginBottom: '4px' }}>
            To Shomoukh Early Childhood
          </h1>
          <div className="font-rounded" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 900, color: 'var(--vamtam-accent-color-2)' }}>
            Education Center
          </div>
        </div>

        {/* Bottom Wave Brush Divider */}
        <div className="shape-divider-wave-brush bottom">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.5 27.8" preserveAspectRatio="none">
            <path className="elementor-shape-fill" d="M283.5,9.7c0,0-7.3,4.3-14,4.6c-6.8,0.3-12.6,0-20.9-1.5c-11.3-2-33.1-10.1-44.7-5.7s-12.1,4.6-18,7.4c-6.6,3.2-20,9.6-36.6,9.3C131.6,23.5,99.5,7.2,86.3,8c-1.4,0.1-6.6,0.8-10.5,2c-3.8,1.2-9.4,3.8-17,4.7c-3.2,0.4-8.3,1.1-14.2,0.9c-1.5-0.1-6.3-0.4-12-1.6c-5.7-1.2-11-3.1-15.8-3.7C6.5,9.2,0,10.8,0,10.8V0h283.5V9.7z"/>
          </svg>
        </div>
      </section>

      {/* INTRO TEXT & 4 PHOTOS */}
      <section style={{ padding: '80px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '48px',
            alignItems: 'center'
          }} className="wp-grid-2">
            
            <div style={{ background: '#FAF5F0', padding: '36px', borderRadius: '28px' }}>
              <p style={{ color: 'var(--text-main)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '20px' }}>
                Thank you for your interest to learn more about us. We are happy to welcome you to our center. Shomoukh operates twelve (12) months per year, following a three-term academic year and an eight-week summer camp. It offers various learning opportunities throughout the day. Working in small groups, our students explore their environment, improve their skills, and enhance their potential.
              </p>
              <p style={{ color: 'var(--text-main)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '28px' }}>
                Our school’s ethos and culture promote positive relations among its members and provide opportunities for students to develop self-confidence and a love of learning.
              </p>
              <button 
                onClick={() => onOpenTourModal()}
                className="wp-btn wp-btn-outline font-sensei"
                style={{ fontSize: '1.3rem', padding: '12px 30px' }}
              >
                Learn more
              </button>
            </div>

            {/* 4-Image Collage Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px'
            }}>
              <div style={{ borderRadius: '20px', overflow: 'hidden', height: '180px' }}>
                <img src="/assets/Al-Shomouk-Nursery-6.jpg" alt="Campus Life" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ borderRadius: '20px', overflow: 'hidden', height: '180px' }}>
                <img src="/assets/Al-Shomouk-Nursery-5.jpg" alt="Campus Life" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ borderRadius: '20px', overflow: 'hidden', height: '180px' }}>
                <img src="/assets/Al-Shomouk-Nursery-2.jpg" alt="Campus Life" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ borderRadius: '20px', overflow: 'hidden', height: '180px' }}>
                <img src="/assets/h-02-1.jpg" alt="Campus Life" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* VISION & MISSION INFOGRAPHIC */}
      <section style={{ padding: '60px 0', background: '#FAF7F2' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <img 
            src="/assets/vision-mission-value-01.png" 
            alt="Vision, Mission, Values" 
            style={{ maxWidth: '900px', margin: '0 auto', width: '100%' }}
          />
        </div>
      </section>

      {/* PHILOSOPHY & VIDEO SECTION */}
      <section style={{ padding: '80px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '48px',
            alignItems: 'center'
          }} className="wp-grid-2">
            <div>
              <h2 className="font-rounded" style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--vamtam-accent-color-2)', marginBottom: '16px' }}>
                Our Philosophy
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '28px' }}>
                We believe that students are curious and creative in nature and deserve the opportunity to discover and explore. We pride in providing a positive child-centered learning environment that allows our students to thrive.
              </p>
              <button 
                onClick={() => navigateTo('programs')}
                className="wp-btn wp-btn-primary"
              >
                Learn more
              </button>
            </div>

            {/* TV Illustration Box */}
            <div style={{ textAlign: 'center' }}>
              <img src="/assets/tv-top-1.svg" alt="" style={{ maxWidth: '280px', margin: '0 auto' }} />
              <div style={{
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                margin: '-10px auto',
                maxWidth: '420px'
              }}>
                <img src="/assets/Community-image.jpg" alt="Philosophy video cover" style={{ width: '100%', height: '240px', objectFit: 'cover' }} />
              </div>
              <img src="/assets/tv-bottom-1.svg" alt="" style={{ maxWidth: '280px', margin: '0 auto' }} />
            </div>
          </div>
        </div>
      </section>

      {/* EXPECTATION & COMMUNITY */}
      <section style={{ padding: '80px 0', background: '#FAF7F2' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '48px',
            alignItems: 'center'
          }} className="wp-grid-2">
            <div>
              <h3 className="font-rounded" style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--vamtam-accent-color-2)', marginBottom: '12px' }}>
                EXPECTATION
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '28px' }}>
                The Shomoukh Early Childhood Education Center is a place where families feel confident their children are receiving high-quality care and education.
              </p>

              <h3 className="font-rounded" style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--vamtam-accent-color-2)', marginBottom: '12px' }}>
                Community
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '28px' }}>
                At Shomoukh, we believe in diversity while deeply respecting Omani values. We want our students to understand that although we are all different in many ways, we share universal empathy and mutual respect.
              </p>
              <button 
                onClick={() => onOpenTourModal()}
                className="wp-btn wp-btn-primary"
              >
                Learn more
              </button>
            </div>

            <div style={{ borderRadius: '28px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <img src="/assets/h-02-1.jpg" alt="Community" style={{ width: '100%', height: '360px', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* GIVING BACK, ENVIRONMENT, HEALTH & SAFETY */}
      <section style={{ padding: '80px 0', background: '#FFFFFF' }}>
        <div className="container">
          
          {/* Giving Back */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '48px',
            alignItems: 'center',
            marginBottom: '70px'
          }} className="wp-grid-2">
            <div style={{ borderRadius: '28px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <img src="/assets/Community-image.jpg" alt="Giving Back" style={{ width: '100%', height: '320px', objectFit: 'cover' }} />
            </div>
            <div>
              <h3 className="font-rounded" style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--vamtam-accent-color-2)', marginBottom: '16px' }}>
                Giving Back
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7 }}>
                Our school has close ties with the local community and organizes various events during the academic year to support those in need. We believe it is our responsibility to teach our students how to give back to the community.
              </p>
            </div>
          </div>

          {/* Environment */}
          <div style={{
            background: '#FAF5F0',
            borderRadius: '28px',
            padding: '40px',
            marginBottom: '70px'
          }}>
            <h3 className="font-rounded" style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--vamtam-accent-color-2)', marginBottom: '16px' }}>
              Environment
            </h3>
            <p style={{ color: 'var(--text-main)', fontSize: '1.05rem', lineHeight: 1.7 }}>
              At Shomoukh Early Childhood Education Centers, we constantly promote environmental sustainability and awareness through our activities. Our students show respect for the environment and an understanding of how to protect it.
            </p>
          </div>

          {/* Health & Safety */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '48px',
            alignItems: 'center'
          }} className="wp-grid-2">
            <div>
              <h3 className="font-rounded" style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--vamtam-accent-color-2)', marginBottom: '16px' }}>
                Health & Safety
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '24px' }}>
                Your child’s health and safety are our top priority. Our centers have strict guidelines for cleanliness and security and we’re proud to be recognized as a healthy, safe, and clean learning environment.
              </p>
              <button 
                onClick={() => navigateTo('programs')}
                className="wp-btn wp-btn-primary"
              >
                Learn more
              </button>
            </div>
            <div style={{ borderRadius: '28px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <img src="/assets/h-15-1.jpg" alt="Health and Safety" style={{ width: '100%', height: '320px', objectFit: 'cover' }} />
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
