import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles, CheckCircle2, Heart, Award, ShieldCheck } from 'lucide-react';
import { siteData } from '../data/siteData';

export const HomePage = ({ navigateTo, onOpenTourModal }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  const tabsData = [
    {
      id: 'tab1',
      number: '1',
      title: 'Home-like Environment',
      description: 'Warm, nurturing atmosphere where children feel comfortable, safe, and truly at home.',
      slides: [
        '/assets/7.jpg',
        '/assets/6.jpg',
        '/assets/4.jpg',
        '/assets/3.jpg'
      ]
    },
    {
      id: 'tab2',
      number: '2',
      title: 'Safe & Secure',
      description: 'Highest safety standards, CCTV surveillance, and certified pediatric healthcare protocols.',
      slides: [
        '/assets/h-15-1.jpg',
        '/assets/leo-rivas-wtxcaDIdOCM-unsplash-1.jpg',
        '/assets/anna-samoylova-w55SpMmoPgE-unsplash-1.jpg'
      ]
    },
    {
      id: 'tab3',
      number: '3',
      title: 'Reggio Emilia Inspired',
      description: 'Project-based inquiry, natural light ateliers, and child-led creative exploration.',
      slides: [
        '/assets/h-05.jpg',
        '/assets/h-18-1.jpg',
        '/assets/h-30.jpg'
      ]
    },
    {
      id: 'tab4',
      number: '4',
      title: 'Play to Learn',
      description: 'Interactive sensory spaces, music, drama, and sports designed for early holistic growth.',
      slides: [
        '/assets/h-16-1.jpg',
        '/assets/maggie-markel-oRbtEWw_l04-unsplash-1.jpg',
        '/assets/blog-photo-2-1.jpg'
      ]
    }
  ];

  const currentTabObj = tabsData[activeTab];

  const skillsData = [
    { name: 'Sign Language', color: '#F68F29', bg: '#FFF7EE', icon: 'vamtam-theme-sign-language', desc: 'Early communication' },
    { name: 'Art Studio', color: '#B5AE32', bg: '#FAF9E8', icon: 'vamtam-theme-arts', desc: 'Creative expression' },
    { name: 'Everyday Math', color: '#E07D54', bg: '#FFF3EE', icon: 'vamtam-theme-math-kids', desc: 'Foundational logic' },
    { name: 'Second Language', color: '#3B8B88', bg: '#EDF8F7', icon: 'vamtam-theme-new-language', desc: 'Bilingual immersion' },
    { name: 'Movement Matters', color: '#66961E', bg: '#F2F8E9', icon: 'vamtam-theme-movement', desc: 'Physical motor skills' },
    { name: 'Handwriting', color: '#D99B26', bg: '#FFF9ED', icon: 'vamtam-theme-handwriting', desc: 'Fine motor precision' }
  ];

  return (
    <div className="home-page-wp">
      
      {/* SECTION 1: HERO SECTION */}
      <section style={{
        position: 'relative',
        background: 'linear-gradient(180deg, #A0C3CE 0%, #BBD6DE 60%, #FAF7F2 100%)',
        minHeight: '660px',
        padding: '100px 0 130px',
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

        {/* Decorative Floating Graphics */}
        <img 
          src="/assets/dots-1.svg" 
          alt="" 
          style={{ position: 'absolute', top: '80px', left: '7%', width: '130px', opacity: 0.75, pointerEvents: 'none' }}
        />
        <img 
          src="/assets/butterfly.png" 
          alt="" 
          className="animate-float"
          style={{ position: 'absolute', top: '90px', right: '10%', width: '120px', zIndex: 2, pointerEvents: 'none' }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '860px' }}>
          
          {/* Top Pill Tag */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 20px',
            borderRadius: 'var(--radius-full)',
            background: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(10px)',
            boxShadow: 'var(--shadow-sm)',
            marginBottom: '20px',
            border: '1px solid rgba(255,255,255,0.9)'
          }}>
            <Sparkles size={16} color="var(--vamtam-accent-color-1)" />
            <span style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--vamtam-accent-color-2)' }}>
              Top Reggio Emilia Early Childhood Center in Muscat
            </span>
          </div>

          <div className="font-sensei" style={{
            fontSize: 'clamp(2.6rem, 5.8vw, 4.4rem)',
            color: 'var(--vamtam-accent-color-2)',
            lineHeight: 1,
            marginBottom: '2px',
            textShadow: '0 2px 10px rgba(0,0,0,0.03)'
          }}>
            The First & Only
          </div>

          <h1 className="font-rounded" style={{
            fontSize: 'clamp(2.8rem, 6.8vw, 5.2rem)',
            fontWeight: 900,
            color: 'var(--vamtam-accent-color-2)',
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            marginBottom: '2px'
          }}>
            Reggio Emilia
          </h1>

          <div className="font-sensei" style={{
            fontSize: 'clamp(2.2rem, 5.2vw, 3.8rem)',
            color: 'var(--vamtam-accent-color-2)',
            lineHeight: 1,
            marginBottom: '16px'
          }}>
            Inspired Institute
          </div>

          <div className="font-rounded" style={{
            fontSize: '1.25rem',
            fontWeight: 800,
            color: 'var(--vamtam-accent-color-2)',
            marginBottom: '10px'
          }}>
            In the sultanate of Oman
          </div>

          <p style={{
            fontSize: '1.18rem',
            color: 'var(--vamtam-accent-color-2)',
            marginBottom: '36px',
            opacity: 0.92,
            maxWidth: '620px',
            margin: '0 auto 36px'
          }}>
            Education is a fundamental right and every child possesses infinite potential.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button 
              onClick={() => onOpenTourModal()}
              className="wp-btn wp-btn-primary"
              style={{ fontSize: '1.05rem', padding: '16px 36px' }}
            >
              <span>Schedule a Tour</span>
              <ArrowRight size={18} />
            </button>
            <button 
              onClick={() => navigateTo('about')}
              className="wp-btn wp-btn-white"
              style={{ fontSize: '1.05rem', padding: '16px 32px' }}
            >
              Learn More
            </button>
          </div>

          {/* Key Metric Highlights */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '24px',
            flexWrap: 'wrap',
            marginTop: '48px',
            paddingTop: '28px',
            borderTop: '1px solid rgba(10, 48, 58, 0.08)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem', fontWeight: 700, color: 'var(--vamtam-accent-color-2)' }}>
              <CheckCircle2 size={18} color="var(--vamtam-accent-color-1)" />
              <span>UK EYFS Curriculum</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem', fontWeight: 700, color: 'var(--vamtam-accent-color-2)' }}>
              <Heart size={18} color="var(--vamtam-accent-color-1)" />
              <span>Infants to 4 Years</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem', fontWeight: 700, color: 'var(--vamtam-accent-color-2)' }}>
              <ShieldCheck size={18} color="var(--vamtam-accent-color-1)" />
              <span>Al Mouj & Al Qurm</span>
            </div>
          </div>

        </div>

        {/* Bottom Wave Brush Divider */}
        <div className="shape-divider-wave-brush bottom fill-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.5 27.8" preserveAspectRatio="none">
            <path className="elementor-shape-fill" d="M283.5,9.7c0,0-7.3,4.3-14,4.6c-6.8,0.3-12.6,0-20.9-1.5c-11.3-2-33.1-10.1-44.7-5.7s-12.1,4.6-18,7.4c-6.6,3.2-20,9.6-36.6,9.3C131.6,23.5,99.5,7.2,86.3,8c-1.4,0.1-6.6,0.8-10.5,2c-3.8,1.2-9.4,3.8-17,4.7c-3.2,0.4-8.3,1.1-14.2,0.9c-1.5-0.1-6.3-0.4-12-1.6c-5.7-1.2-11-3.1-15.8-3.7C6.5,9.2,0,10.8,0,10.8V0h283.5V9.7z"/>
          </svg>
        </div>
      </section>

      {/* SECTION 2: 4 TABS & ILLUSTRATION */}
      <section style={{ padding: '100px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.25fr 0.75fr',
            gap: '50px',
            alignItems: 'center'
          }} className="wp-grid-2">
            
            {/* Left Tabs Area */}
            <div>
              {/* Tab Navigation Pill Buttons */}
              <div style={{
                display: 'flex',
                gap: '10px',
                flexWrap: 'wrap',
                marginBottom: '28px',
                background: '#FAF7F2',
                padding: '8px',
                borderRadius: 'var(--radius-full)',
                border: '1px solid rgba(10, 48, 58, 0.05)'
              }}>
                {tabsData.map((tab, idx) => {
                  const isActive = activeTab === idx;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => { setActiveTab(idx); setActiveSlide(0); }}
                      style={{
                        padding: '10px 20px',
                        borderRadius: 'var(--radius-full)',
                        fontFamily: 'var(--font-rounded)',
                        fontWeight: 700,
                        fontSize: '0.94rem',
                        background: isActive ? 'var(--vamtam-accent-color-1)' : 'transparent',
                        color: isActive ? '#FFFFFF' : 'var(--vamtam-accent-color-2)',
                        boxShadow: isActive ? '0 4px 15px rgba(231, 76, 37, 0.3)' : 'none',
                        transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                        cursor: 'pointer'
                      }}
                    >
                      {tab.number}. {tab.title}
                    </button>
                  );
                })}
              </div>

              {/* Active Tab Photo Card */}
              <div style={{
                position: 'relative',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                height: '400px',
                boxShadow: 'var(--shadow-xl)',
                border: '4px solid #FFFFFF'
              }}>
                <img 
                  src={currentTabObj.slides[activeSlide]} 
                  alt={currentTabObj.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  onError={(e) => { e.target.src = "/assets/1.jpg"; }}
                />

                {/* Gradient vignette */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(10, 48, 58, 0.75) 0%, transparent 60%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '28px'
                }}>
                  <div style={{ color: '#FFFFFF', maxWidth: '500px' }}>
                    <h3 className="font-rounded" style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '6px' }}>
                      {currentTabObj.title}
                    </h3>
                    <p style={{ fontSize: '0.95rem', opacity: 0.9, lineHeight: 1.5 }}>
                      {currentTabObj.description}
                    </p>
                  </div>
                </div>

                {/* Slide Controls & Counter */}
                <div style={{ position: 'absolute', bottom: '24px', right: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.9)',
                    padding: '6px 14px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.85rem',
                    fontWeight: 800,
                    color: 'var(--vamtam-accent-color-2)'
                  }}>
                    {activeSlide + 1} / {currentTabObj.slides.length}
                  </div>

                  <button 
                    onClick={() => setActiveSlide((prev) => (prev - 1 + currentTabObj.slides.length) % currentTabObj.slides.length)}
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,0.95)',
                      color: 'var(--vamtam-accent-color-2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: 'var(--shadow-md)',
                      transition: 'transform 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={22} />
                  </button>

                  <button 
                    onClick={() => setActiveSlide((prev) => (prev + 1) % currentTabObj.slides.length)}
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,0.95)',
                      color: 'var(--vamtam-accent-color-2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: 'var(--shadow-md)',
                      transition: 'transform 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    aria-label="Next image"
                  >
                    <ChevronRight size={22} />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Illustration Card */}
            <div className="modern-card" style={{ padding: '40px 32px', textAlign: 'center', background: '#FAF7F2' }}>
              <img 
                src="/assets/illustration-people-1-1.svg" 
                alt="Shomoukh Children" 
                style={{ maxWidth: '280px', margin: '0 auto 24px' }}
              />
              <h3 className="font-rounded" style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--vamtam-accent-color-2)', marginBottom: '10px' }}>
                Join our family today
              </h3>
              <p style={{ fontSize: '0.94rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '24px' }}>
                Tour our campuses in Al Mouj & Al Qurm to see our inspiring classrooms firsthand.
              </p>
              <button 
                onClick={() => navigateTo('admissions')}
                className="wp-btn wp-btn-primary"
                style={{ width: '100%', marginBottom: '20px' }}
              >
                Enrollment Details
              </button>
              <img 
                src="/assets/illustration-tree-1-1.svg" 
                alt="Tree" 
                style={{ maxWidth: '100px', margin: '0 auto', opacity: 0.8 }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: AGES & STAGES SECTION */}
      <section style={{
        padding: '100px 0',
        background: '#FAF7F2',
        position: 'relative'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div className="font-sensei" style={{ fontSize: '3.4rem', color: 'var(--vamtam-accent-color-2)', lineHeight: 1 }}>
              Ages
            </div>
            <h2 className="font-rounded" style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--vamtam-accent-color-2)' }}>
              We meet kids where they are.
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: '580px', margin: '12px auto 0' }}>
              Tailored developmental milestones from infancy through early childhood years.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '28px'
          }}>
            {/* Infants */}
            <div className="modern-card" style={{ overflow: 'hidden' }}>
              <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                <img src="/assets/h-17-1.jpg" alt="Infants" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }} />
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  background: 'var(--vamtam-accent-color-1)',
                  color: '#FFFFFF',
                  padding: '4px 12px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.82rem',
                  fontWeight: 800
                }}>
                  6 – 12 Months
                </div>
              </div>
              <div style={{ padding: '28px 24px' }}>
                <h3 className="font-rounded" style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px', color: 'var(--vamtam-accent-color-2)' }}>
                  Infants
                </h3>
                <p style={{ fontSize: '0.94rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '16px' }}>
                  Your baby will give you the most important information for the experience. Loving, responsive sensory care.
                </p>
                <button 
                  onClick={() => navigateTo('programs')}
                  style={{ color: 'var(--vamtam-accent-color-1)', fontWeight: 700, fontSize: '0.92rem', display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  <span>Explore Program</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Toddler */}
            <div className="modern-card" style={{ overflow: 'hidden' }}>
              <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                <img src="/assets/h-19-1.jpg" alt="Toddler" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }} />
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  background: 'var(--vamtam-accent-color-7)',
                  color: '#FFFFFF',
                  padding: '4px 12px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.82rem',
                  fontWeight: 800
                }}>
                  1 – 2 Years
                </div>
              </div>
              <div style={{ padding: '28px 24px' }}>
                <h3 className="font-rounded" style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px', color: 'var(--vamtam-accent-color-2)' }}>
                  Toddler
                </h3>
                <p style={{ fontSize: '0.94rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '16px' }}>
                  During this time, physical growth and motor development expand rapidly with joyful discovery.
                </p>
                <button 
                  onClick={() => navigateTo('programs')}
                  style={{ color: 'var(--vamtam-accent-color-1)', fontWeight: 700, fontSize: '0.92rem', display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  <span>Explore Program</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Preschool */}
            <div className="modern-card" style={{ overflow: 'hidden' }}>
              <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                <img src="/assets/h-16-1.jpg" alt="Preschool" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }} />
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  background: '#66961E',
                  color: '#FFFFFF',
                  padding: '4px 12px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.82rem',
                  fontWeight: 800
                }}>
                  2 – 3 Years
                </div>
              </div>
              <div style={{ padding: '28px 24px' }}>
                <h3 className="font-rounded" style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px', color: 'var(--vamtam-accent-color-2)' }}>
                  Preschool
                </h3>
                <p style={{ fontSize: '0.94rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '16px' }}>
                  Advancing from infancy toward active curiosity, foundational literacy, and social collaboration.
                </p>
                <button 
                  onClick={() => navigateTo('programs')}
                  style={{ color: 'var(--vamtam-accent-color-1)', fontWeight: 700, fontSize: '0.92rem', display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  <span>Explore Program</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Flex-Care */}
            <div className="modern-card" style={{ overflow: 'hidden' }}>
              <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                <img src="/assets/h-20-1.jpg" alt="Flex-Care" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }} />
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  background: 'var(--secondary-teal)',
                  color: '#0A303A',
                  padding: '4px 12px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.82rem',
                  fontWeight: 800
                }}>
                  3 – 4 Years
                </div>
              </div>
              <div style={{ padding: '28px 24px' }}>
                <h3 className="font-rounded" style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px', color: 'var(--vamtam-accent-color-2)' }}>
                  Flex-Care & Pre-K
                </h3>
                <p style={{ fontSize: '0.94rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '16px' }}>
                  Confidence and independence to meet complex challenges with joyful problem-solving abilities.
                </p>
                <button 
                  onClick={() => navigateTo('programs')}
                  style={{ color: 'var(--vamtam-accent-color-1)', fontWeight: 700, fontSize: '0.92rem', display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  <span>Explore Program</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: OUR PROGRAMS & TEACHER AS RESEARCHER */}
      <section style={{ padding: '100px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '48px'
          }} className="wp-grid-2">
            
            <div className="modern-card" style={{ padding: '40px', background: '#FAF7F2' }}>
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
                UK Standards
              </div>
              <h2 className="font-rounded" style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--vamtam-accent-color-2)', marginBottom: '14px' }}>
                Our Programs
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '32px' }}>
                Shomoukh follows the Early Years Foundation Stage (EYFS) curriculum, a UK-based education, which sets the goals in terms of learning and development from birth to five years of age. It also sets out the standards that school and childcare providers must meet for the learning, development, and care of children.
              </p>

              <h3 className="font-rounded" style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--vamtam-accent-color-2)', marginBottom: '12px' }}>
                The Teacher
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7 }}>
                Teachers at Shomoukh Early Childhood Education Centers are researchers, learning alongside children. They observe and document the children’s learning, nurturing their curiosity and encouraging them to explore.
              </p>
            </div>

            <div className="modern-card" style={{ padding: '40px', background: '#FAF7F2' }}>
              <div style={{
                display: 'inline-block',
                background: 'var(--secondary-teal-light)',
                color: 'var(--vamtam-accent-color-2)',
                padding: '4px 14px',
                borderRadius: 'var(--radius-full)',
                fontWeight: 800,
                fontSize: '0.85rem',
                marginBottom: '16px'
              }}>
                Reggio Emilia Principle
              </div>
              <h3 className="font-rounded" style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--vamtam-accent-color-2)', marginBottom: '14px' }}>
                The Environment<br />“ The Third Teacher ”
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '28px' }}>
                The classrooms and outdoor areas are spaces that offer learning, exploration, and play. Spaces are interconnected places that support communication, curiosity, and interaction between children and with the environment.
              </p>

              <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
                <img src="/assets/h-02-1.jpg" alt="Classroom Environment" style={{ width: '100%', height: '240px', objectFit: 'cover' }} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: 6 SKILLS ICONS & EMPOWER YOUR CHILD */}
      <section style={{ padding: '100px 0', background: '#FAF7F2' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.15fr 0.85fr',
            gap: '50px',
            alignItems: 'center'
          }} className="wp-grid-2">
            
            {/* 6 Icons Grid with Modern Pastel Cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '18px'
            }}>
              {skillsData.map((skill, idx) => (
                <div 
                  key={idx}
                  className="modern-card"
                  style={{
                    textAlign: 'center',
                    padding: '24px 14px',
                    background: '#FFFFFF',
                    borderTop: `4px solid ${skill.color}`
                  }}
                >
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: skill.bg,
                    color: skill.color,
                    fontSize: '2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 12px'
                  }}>
                    <i className={skill.icon}></i>
                  </div>
                  <div style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--vamtam-accent-color-2)', marginBottom: '4px' }}>
                    {skill.name}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    {skill.desc}
                  </div>
                </div>
              ))}
            </div>

            {/* Right Text Column */}
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
                Holistic Early Development
              </div>
              <h2 className="font-rounded" style={{ fontSize: '2.4rem', fontWeight: 900, color: 'var(--vamtam-accent-color-2)', marginBottom: '18px', lineHeight: 1.2 }}>
                Everyday we work to empower your child.
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '32px' }}>
                Research-based curriculum and individual learning experiences are integral to all the programs at Shomoukh Early Childhood Centers. Our teachers are dedicated and nurturing, which means their singular goal is to help your child thrive.
              </p>
              <button 
                onClick={() => navigateTo('programs')}
                className="wp-btn wp-btn-primary"
              >
                <span>View Full Curriculum</span>
                <ArrowRight size={16} />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 6: COME OVER AND LOOK AROUND */}
      <section style={{ padding: '100px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div className="modern-card" style={{
            background: 'linear-gradient(135deg, #FFFDF9 0%, #F5EFEB 100%)',
            padding: '60px 48px',
            border: '1px solid rgba(231, 76, 37, 0.12)'
          }}>
            <div className="font-sensei" style={{ fontSize: '3.8rem', color: 'var(--vamtam-accent-color-2)', marginBottom: '4px' }}>
              Come
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '0.8fr 1.2fr',
              gap: '40px',
              alignItems: 'center'
            }} className="wp-grid-2">
              <div style={{ textAlign: 'center' }}>
                <img src="/assets/illustration-people-2-1.svg" alt="Come over" style={{ width: '100%', maxWidth: '340px', margin: '0 auto' }} />
              </div>

              <div>
                <h2 className="font-rounded" style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--vamtam-accent-color-2)', marginBottom: '16px' }}>
                  over and look around.
                </h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '32px' }}>
                  We will explain everything you are interested in. Join our new session. If you have any questions or inquiries please feel free to contact us on the following details provided below or alternatively you can use the form to get in touch with us.
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                  <button 
                    onClick={() => onOpenTourModal()}
                    className="wp-btn wp-btn-primary"
                  >
                    Schedule a Tour
                  </button>
                  <span className="font-rounded" style={{ fontWeight: 700, color: 'var(--vamtam-accent-color-2)' }}>or</span>
                  <button 
                    onClick={() => navigateTo('admissions')}
                    className="wp-btn wp-btn-outline"
                  >
                    Join Our New Session
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: LEAVES & TREE SECTION */}
      <section style={{
        padding: '50px 0 20px',
        background: '#FAF7F2'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '48px', flexWrap: 'wrap' }}>
          <img src="/assets/leaf-2-1.svg" alt="" style={{ width: '64px' }} className="animate-float" />
          <img src="/assets/illustration-tree-2-1.svg" alt="" style={{ width: '130px' }} />
          <img src="/assets/leaf-1-1.svg" alt="" style={{ width: '54px' }} className="animate-float" />
        </div>
      </section>

      {/* SECTION 8: 3 ACTION CARDS */}
      <section style={{ padding: '30px 0 100px', background: '#FAF7F2' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            {/* Any Questions */}
            <div 
              onClick={() => navigateTo('contact')}
              className="modern-card"
              style={{
                padding: '32px 28px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '20px'
              }}
            >
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '20px',
                background: 'var(--primary-coral-light)',
                color: 'var(--vamtam-accent-color-1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2.2rem',
                flexShrink: 0
              }}>
                <i className="vamtam-theme-questions"></i>
              </div>
              <div style={{ flex: 1 }}>
                <h3 className="font-rounded" style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--vamtam-accent-color-2)', marginBottom: '4px' }}>
                  Any Questions?
                </h3>
                <div style={{ fontSize: '0.94rem', color: 'var(--vamtam-accent-color-1)', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span>Make an Enquiry</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>

            {/* See it Yourself */}
            <div 
              onClick={() => onOpenTourModal()}
              className="modern-card"
              style={{
                padding: '32px 28px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '20px'
              }}
            >
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '20px',
                background: 'var(--secondary-teal-light)',
                color: 'var(--vamtam-accent-color-2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2.2rem',
                flexShrink: 0
              }}>
                <i className="vamtam-theme-house"></i>
              </div>
              <div style={{ flex: 1 }}>
                <h3 className="font-rounded" style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--vamtam-accent-color-2)', marginBottom: '4px' }}>
                  See it Yourself!
                </h3>
                <div style={{ fontSize: '0.94rem', color: 'var(--vamtam-accent-color-1)', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span>Book a visit</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>

            {/* Ready to Join */}
            <div 
              onClick={() => navigateTo('admissions')}
              className="modern-card"
              style={{
                padding: '32px 28px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '20px'
              }}
            >
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '20px',
                background: '#F2F8E9',
                color: '#66961E',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2.2rem',
                flexShrink: 0
              }}>
                <i className="vamtam-theme-docs"></i>
              </div>
              <div style={{ flex: 1 }}>
                <h3 className="font-rounded" style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--vamtam-accent-color-2)', marginBottom: '4px' }}>
                  Ready to Join?
                </h3>
                <div style={{ fontSize: '0.94rem', color: 'var(--vamtam-accent-color-1)', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span>Register here</span>
                  <ArrowRight size={14} />
                </div>
              </div>
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
