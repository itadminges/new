import React from 'react';
import { CheckCircle2, GraduationCap, HandHeart } from 'lucide-react';
import { PremiumIllustration } from '../components/PremiumIllustration';
import { siteData } from '../data/siteData';

export const ProgramsPage = ({ navigateTo, onOpenTourModal }) => {
  const differenceCards = [
    {
      icon: HandHeart,
      title: 'Supportive Triad',
      desc: 'Continuous partnership between child, educator, and family with daily portfolio updates and conferences.',
      action: 'Learn more',
      onClick: onOpenTourModal
    },
    {
      icon: GraduationCap,
      title: 'Dedicated Teachers',
      desc: 'Certified early educators and Atelieristas trained in Reggio Emilia inquiry pedagogy.',
      action: 'Learn more',
      onClick: () => navigateTo('about')
    },
    {
      icon: CheckCircle2,
      title: 'Flexible Enrollment',
      desc: 'Rolling year-round admissions with flexible terms, extended hours, and summer camp programs.',
      action: 'Learn more',
      onClick: () => navigateTo('admissions')
    }
  ];

  return (
    <div className="programs-page-wp">
      
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
        <img src="/assets/illustration-tree-2-1.svg" alt="" style={{ position: 'absolute', bottom: '60px', right: '8%', width: '100px' }} />

        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <div className="font-sensei" style={{ fontSize: 'clamp(2.8rem, 5.5vw, 4rem)', color: 'var(--vamtam-accent-color-2)', lineHeight: 1, marginBottom: '6px' }}>
            Choose from our
          </div>
          <h1 className="font-rounded" style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)', fontWeight: 900, color: 'var(--vamtam-accent-color-2)', marginBottom: '4px' }}>
            Programs
          </h1>
          <div className="font-sensei" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--vamtam-accent-color-2)' }}>
            start now
          </div>
        </div>

        <div className="shape-divider-wave-brush bottom">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.5 27.8" preserveAspectRatio="none">
            <path className="elementor-shape-fill" d="M283.5,9.7c0,0-7.3,4.3-14,4.6c-6.8,0.3-12.6,0-20.9-1.5c-11.3-2-33.1-10.1-44.7-5.7s-12.1,4.6-18,7.4c-6.6,3.2-20,9.6-36.6,9.3C131.6,23.5,99.5,7.2,86.3,8c-1.4,0.1-6.6,0.8-10.5,2c-3.8,1.2-9.4,3.8-17,4.7c-3.2,0.4-8.3,1.1-14.2,0.9c-1.5-0.1-6.3-0.4-12-1.6c-5.7-1.2-11-3.1-15.8-3.7C6.5,9.2,0,10.8,0,10.8V0h283.5V9.7z"/>
          </svg>
        </div>
      </section>

      {/* OUR PROMISE TO FAMILIES */}
      <section style={{ padding: '80px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '48px',
            alignItems: 'center'
          }} className="wp-grid-2">
            <div>
              <div className="font-sensei" style={{ fontSize: '3rem', color: 'var(--vamtam-accent-color-2)' }}>
                Our
              </div>
              <h2 className="font-rounded" style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--vamtam-accent-color-2)', marginBottom: '16px' }}>
                Promise to families.
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '28px' }}>
                At Shomoukh, we know childhood is a treasured time. We believe it is our responsibility to provide environments and experiences that capture the joys of childhood, nurture each child's individual growth and development, and pave the way for success in school and life.
              </p>
              <button 
                onClick={() => navigateTo('locations')}
                className="wp-btn wp-btn-primary"
              >
                Find us
              </button>
            </div>

            <div style={{ textAlign: 'center' }}>
              <PremiumIllustration variant="promise" title="Warm nursery building representing Shomoukh promise to families" />
            </div>
          </div>
        </div>
      </section>

      {/* THE SHOMOUKH DIFFERENCE: 3 FLIP BOXES */}
      <section style={{ padding: '80px 0', background: '#FAF7F2' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <div className="font-sensei" style={{ fontSize: '3rem', color: 'var(--vamtam-accent-color-2)' }}>
              The
            </div>
            <h2 className="font-rounded" style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--vamtam-accent-color-2)', marginBottom: '12px' }}>
              Shomoukh difference
            </h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '650px', margin: '0 auto', fontSize: '1rem', lineHeight: 1.6 }}>
              Shomoukh operates twelve (12) months per year, following a three-term academic year and an eight-week summer camp. It offers various learning opportunities within the day.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            {differenceCards.map(({ icon: Icon, title, desc, action, onClick }) => (
              <div key={title} className="premium-feature-card">
                <div className="premium-feature-icon">
                  <Icon size={30} />
                </div>
                <h3 className="font-rounded" style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--vamtam-accent-color-2)', marginBottom: '12px' }}>
                  {title}
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '22px' }}>
                  {desc}
                </p>
                <button
                  onClick={onClick}
                  className="wp-btn wp-btn-outline"
                  style={{ fontSize: '0.9rem', padding: '8px 20px' }}
                >
                  {action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR SPACE, CLUBS, HEALTH AND SAFETY */}
      <section style={{ padding: '90px 0', background: '#FFFFFF' }}>
        <div className="container">
          
          {/* Our Space */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '48px',
            alignItems: 'center',
            marginBottom: '70px'
          }} className="wp-grid-2">
            <div>
              <h2 className="font-rounded" style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--vamtam-accent-color-2)', marginBottom: '16px' }}>
                Our Space
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7 }}>
                Shomoukh Early Childhood Education center is full of life. Spaces, areas, and corners around the school are designed with intention and purpose. They promote creativity, exploration, and meaningful social interaction.
              </p>
            </div>
            <div style={{ borderRadius: '28px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}>
              <img src="/assets/pic-30-1.jpg" alt="Our Space" style={{ width: '100%', height: '300px', objectFit: 'cover' }} onError={(e) => { e.target.src = "/assets/1.jpg"; }} />
            </div>
          </div>

          {/* Our Clubs */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '48px',
            alignItems: 'center',
            marginBottom: '70px'
          }} className="wp-grid-2">
            <div style={{ borderRadius: '28px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}>
              <img src="/assets/Community-image.jpg" alt="Our Clubs" style={{ width: '100%', height: '300px', objectFit: 'cover' }} onError={(e) => { e.target.src = "/assets/2.jpg"; }} />
            </div>
            <div>
              <h2 className="font-rounded" style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--vamtam-accent-color-2)', marginBottom: '16px' }}>
                Our Clubs
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7 }}>
                We offer various learning opportunities within the day. Working in small groups, our students explore their environment, improve their skills and enhance their creativity through robotics, pottery, music, and language clubs.
              </p>
            </div>
          </div>

          {/* Health & Safety */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '48px',
            alignItems: 'center'
          }} className="wp-grid-2">
            <div>
              <h2 className="font-rounded" style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--vamtam-accent-color-2)', marginBottom: '16px' }}>
                Health and Safety
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7 }}>
                At Shomoukh, we make your child's health and safety our top priority. Our standards are the highest in the industry, meeting or exceeding all local and international early childhood guidelines.
              </p>
            </div>
            <div style={{ borderRadius: '28px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}>
              <img src="/assets/h-07.jpg" alt="Health and Safety" style={{ width: '100%', height: '300px', objectFit: 'cover' }} onError={(e) => { e.target.src = "/assets/h-15-1.jpg"; }} />
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
