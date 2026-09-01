import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { siteData } from '../data/siteData';

export const HomePage = ({ navigateTo, onOpenTourModal }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  const tabsData = [
    {
      id: 'tab1',
      number: '01',
      title: 'Home-like Environment',
      description: 'Comfortable spaces designed to feel familiar and welcoming.',
      slides: [
        '/assets/7.jpg',
        '/assets/6.jpg',
        '/assets/4.jpg',
        '/assets/3.jpg'
      ]
    },
    {
      id: 'tab2',
      number: '02',
      title: 'Safe & Secure',
      description: 'A thoughtfully protected environment for every child.',
      slides: [
        '/assets/h-15-1.jpg',
        '/assets/leo-rivas-wtxcaDIdOCM-unsplash-1.jpg',
        '/assets/anna-samoylova-w55SpMmoPgE-unsplash-1.jpg'
      ]
    },
    {
      id: 'tab3',
      number: '03',
      title: 'Reggio Emilia Inspired',
      description: 'Spaces that encourage curiosity, creativity and exploration.',
      slides: [
        '/assets/h-05.jpg',
        '/assets/h-18-1.jpg',
        '/assets/h-30.jpg'
      ]
    },
    {
      id: 'tab4',
      number: '04',
      title: 'Play to Learn',
      description: 'Meaningful learning experiences through purposeful play.',
      slides: [
        '/assets/h-16-1.jpg',
        '/assets/maggie-markel-oRbtEWw_l04-unsplash-1.jpg',
        '/assets/blog-photo-2-1.jpg'
      ]
    }
  ];

  const currentTabObj = tabsData[activeTab];
  const changeSlide = (direction) => {
    setActiveSlide((prev) => (prev + direction + currentTabObj.slides.length) % currentTabObj.slides.length);
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } }
  };
  const cardContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } }
  };

  return (
    <div className="home-page-wp">
      
      {/* SECTION 1: HERO SLIDESHOW WITH WAVE BRUSH DIVIDERS */}
      <section style={{
        position: 'relative',
        background: '#A0C3CE',
        backgroundImage: 'linear-gradient(180deg, rgba(160, 195, 206, 0.84) 0%, rgba(196, 220, 227, 0.78) 100%), url(/assets/1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '620px',
        padding: '110px 0 130px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center'
      }}>
        {/* Decorative Floating SVGs */}
        <img 
          src="/assets/dots-1.svg" 
          alt="" 
          style={{ position: 'absolute', top: '90px', left: '8%', width: '130px', opacity: 0.8 }}
        />
        <img 
          src="/assets/butterfly.png" 
          alt="" 
          className="animate-float home-hero-butterfly"
          style={{ position: 'absolute', top: '100px', right: '12%', width: '120px', zIndex: 2 }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '820px' }}>
          <div className="font-sensei" style={{
            fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)',
            color: 'var(--vamtam-accent-color-2)',
            lineHeight: 1,
            marginBottom: '4px'
          }}>
            The First & Only
          </div>

          <h1 className="font-rounded" style={{
            fontSize: 'clamp(2.8rem, 6.5vw, 5rem)',
            fontWeight: 800,
            color: 'var(--vamtam-accent-color-2)',
            lineHeight: 1.08,
            letterSpacing: '-0.02em',
            marginBottom: '4px'
          }}>
            Reggio Emilia
          </h1>

          <div className="font-sensei" style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
            color: 'var(--vamtam-accent-color-2)',
            lineHeight: 1,
            marginBottom: '14px'
          }}>
            Inspired Institute
          </div>

          <div className="font-rounded" style={{
            fontSize: '1.25rem',
            fontWeight: 700,
            color: 'var(--vamtam-accent-color-2)',
            marginBottom: '8px'
          }}>
            In the sultanate of Oman
          </div>

          <p style={{
            fontSize: '1.15rem',
            color: 'var(--vamtam-accent-color-2)',
            marginBottom: '32px',
            opacity: 0.95
          }}>
            Education is a right and all children have potentials
          </p>

          <button 
            onClick={() => navigateTo('about')}
            className="wp-btn wp-btn-primary"
            style={{ fontSize: '1.1rem', padding: '16px 38px' }}
          >
            Learn more
          </button>
        </div>

        {/* Bottom Wave Brush Divider */}
        <div className="shape-divider-wave-brush bottom">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.5 27.8" preserveAspectRatio="none">
            <path className="elementor-shape-fill" d="M283.5,9.7c0,0-7.3,4.3-14,4.6c-6.8,0.3-12.6,0-20.9-1.5c-11.3-2-33.1-10.1-44.7-5.7s-12.1,4.6-18,7.4c-6.6,3.2-20,9.6-36.6,9.3C131.6,23.5,99.5,7.2,86.3,8c-1.4,0.1-6.6,0.8-10.5,2c-3.8,1.2-9.4,3.8-17,4.7c-3.2,0.4-8.3,1.1-14.2,0.9c-1.5-0.1-6.3-0.4-12-1.6c-5.7-1.2-11-3.1-15.8-3.7C6.5,9.2,0,10.8,0,10.8V0h283.5V9.7z"/>
          </svg>
        </div>
      </section>

      {/* SECTION 2: PREMIUM ENVIRONMENT FEATURE */}
      <section className="home-tabs-section">
        <div className="container">
          <div className="home-environment-grid">
            <motion.div
              className="home-environment-copy"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              variants={fadeUp}
            >
              <div className="home-environment-eyebrow">A PLACE TO BELONG</div>
              <h2 className="home-environment-title">
                A home-like place<br />
                to <span>grow</span>, play & discover.
              </h2>
              <p className="home-environment-desc">
                Children learn in safe, nurturing rooms shaped for independence, wonder and calm exploration.
                Every space is thoughtfully designed to feel warm, protected and full of possibility.
              </p>
              <div className="home-environment-actions">
                <button onClick={() => navigateTo('programs')} className="wp-btn wp-btn-primary">
                  Discover Our Environment
                  <ArrowRight size={18} />
                </button>
                <button onClick={() => navigateTo('about')} className="home-environment-link">
                  Explore Our Approach
                </button>
              </div>
            </motion.div>

            <motion.div
              className="home-environment-visual"
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
            >
              <motion.div className="home-organic-shape shape-sage" animate={{ y: [0, -5, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }} />
              <motion.div className="home-organic-shape shape-beige" animate={{ y: [0, 6, 0] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} />
              <motion.div className="home-block-shape block-one" animate={{ y: [0, -4, 0] }} transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }} />
              <motion.div className="home-leaf-mark" animate={{ y: [0, 5, 0] }} transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut' }} />
              <div className="home-image-shell">
                <img
                  key={`${currentTabObj.id}-${activeSlide}`}
                  src={currentTabObj.slides[activeSlide]}
                  alt={currentTabObj.title}
                  className="home-environment-image"
                  onError={(e) => { e.target.src = "/assets/1.jpg"; }}
                />
              </div>
              <div className="home-carousel-controls">
                <button
                  type="button"
                  onClick={() => changeSlide(-1)}
                  aria-label="Previous environment image"
                >
                  <ChevronLeft size={18} />
                </button>
                <span>{String(activeSlide + 1).padStart(2, '0')} / {String(currentTabObj.slides.length).padStart(2, '0')}</span>
                <button
                  type="button"
                  onClick={() => changeSlide(1)}
                  aria-label="Next environment image"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
              <div className="home-image-badge">Safe • Nurturing • Inspiring</div>
            </motion.div>
          </div>

          <motion.div
            className="home-feature-cards"
            aria-label="Environment features"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardContainer}
          >
            {tabsData.map((tab, idx) => {
              const isActive = activeTab === idx;
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => { setActiveTab(idx); setActiveSlide(0); }}
                  className={`home-feature-card ${isActive ? 'is-active' : ''}`}
                  variants={fadeUp}
                >
                  <span className="home-feature-accent" />
                  <span className="home-feature-number">{tab.number}</span>
                  <span className="home-feature-content">
                    <strong>{tab.title}</strong>
                    <small>{tab.description}</small>
                  </span>
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: AGES SECTION */}
      <section style={{
        padding: '90px 0',
        background: '#FAF7F2',
        backgroundImage: 'url(/assets/illustration-right-cut-1.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right center',
        backgroundSize: 'contain'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <div className="font-sensei" style={{ fontSize: '3.2rem', color: 'var(--vamtam-accent-color-2)', lineHeight: 1 }}>
              Ages
            </div>
            <h2 className="font-rounded" style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--vamtam-accent-color-2)' }}>
              We meet kids where they are.
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px'
          }}>
            {/* Infants */}
            <div style={{ background: '#FFFFFF', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 8px 24px rgba(0,0,0,0.05)', textAlign: 'center' }}>
              <div style={{ height: '200px', overflow: 'hidden' }}>
                <img src="/assets/h-17-1.jpg" alt="Infants" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '24px' }}>
                <h3 className="font-rounded" style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '8px', color: 'var(--vamtam-accent-color-2)' }}>
                  Infants
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                  Your baby will give you the most important information for the experience.
                </p>
              </div>
            </div>

            {/* Toddler */}
            <div style={{ background: '#FFFFFF', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 8px 24px rgba(0,0,0,0.05)', textAlign: 'center' }}>
              <div style={{ height: '200px', overflow: 'hidden' }}>
                <img src="/assets/h-19-1.jpg" alt="Toddler" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '24px' }}>
                <h3 className="font-rounded" style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '8px', color: 'var(--vamtam-accent-color-2)' }}>
                  Toddler
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                  During this time, his physical growth and motor development will slow.
                </p>
              </div>
            </div>

            {/* Preschool */}
            <div style={{ background: '#FFFFFF', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 8px 24px rgba(0,0,0,0.05)', textAlign: 'center' }}>
              <div style={{ height: '200px', overflow: 'hidden' }}>
                <img src="/assets/h-16-1.jpg" alt="Preschool" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '24px' }}>
                <h3 className="font-rounded" style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '8px', color: 'var(--vamtam-accent-color-2)' }}>
                  Preschool
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                  Your child is advancing from infancy toward and into the preschool years.
                </p>
              </div>
            </div>

            {/* Flex-Care */}
            <div style={{ background: '#FFFFFF', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 8px 24px rgba(0,0,0,0.05)', textAlign: 'center' }}>
              <div style={{ height: '200px', overflow: 'hidden' }}>
                <img src="/assets/h-20-1.jpg" alt="Flex-Care" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '24px' }}>
                <h3 className="font-rounded" style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '8px', color: 'var(--vamtam-accent-color-2)' }}>
                  Flex-Care
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                  Your child should feel confident in her ability to meet the complex challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: OUR PROGRAMS & TEACHER AS RESEARCHER */}
      <section style={{ padding: '90px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '48px'
          }} className="wp-grid-2">
            
            <div>
              <h2 className="font-rounded" style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--vamtam-accent-color-2)', marginBottom: '16px' }}>
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

            <div>
              <h3 className="font-rounded" style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--vamtam-accent-color-2)', marginBottom: '12px' }}>
                The Environment<br />“ The Third Teacher ”
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '32px' }}>
                The classrooms and outdoor areas are spaces that offer learning, exploration, and play. Spaces are interconnected places that support communication, curiosity, and interaction between children and with the environment.
              </p>

              <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 8px 24px rgba(0,0,0,0.06)' }}>
                <img src="/assets/h-02-1.jpg" alt="Classroom Environment" style={{ width: '100%', height: '240px', objectFit: 'cover' }} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: 6 SKILLS ICONS & EMPOWER YOUR CHILD */}
      <section style={{ padding: '80px 0', background: '#FAF7F2' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: '48px',
            alignItems: 'center'
          }} className="wp-grid-2">
            
            {/* 6 Icons Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '20px'
            }}>
              {/* Sign Language */}
              <div style={{ textAlign: 'center', background: '#FFFFFF', padding: '20px 12px', borderRadius: '18px' }}>
                <div style={{ fontSize: '2.5rem', color: '#F68F29', marginBottom: '8px' }}>
                  <i className="vamtam-theme-sign-language"></i>
                </div>
                <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--vamtam-accent-color-2)' }}>Sign Language</div>
              </div>

              {/* Art Studio */}
              <div style={{ textAlign: 'center', background: '#FFFFFF', padding: '20px 12px', borderRadius: '18px' }}>
                <div style={{ fontSize: '2.5rem', color: '#E0DC8F', marginBottom: '8px' }}>
                  <i className="vamtam-theme-arts"></i>
                </div>
                <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--vamtam-accent-color-2)' }}>Art Studio</div>
              </div>

              {/* Everyday math */}
              <div style={{ textAlign: 'center', background: '#FFFFFF', padding: '20px 12px', borderRadius: '18px' }}>
                <div style={{ fontSize: '2.5rem', color: '#EDA88A', marginBottom: '8px' }}>
                  <i className="vamtam-theme-math-kids"></i>
                </div>
                <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--vamtam-accent-color-2)' }}>Everyday math</div>
              </div>

              {/* Second Language */}
              <div style={{ textAlign: 'center', background: '#FFFFFF', padding: '20px 12px', borderRadius: '18px' }}>
                <div style={{ fontSize: '2.5rem', color: '#CEE1DD', marginBottom: '8px' }}>
                  <i className="vamtam-theme-new-language"></i>
                </div>
                <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--vamtam-accent-color-2)' }}>Second Language</div>
              </div>

              {/* Movement Matters */}
              <div style={{ textAlign: 'center', background: '#FFFFFF', padding: '20px 12px', borderRadius: '18px' }}>
                <div style={{ fontSize: '2.5rem', color: '#8AB73A', marginBottom: '8px' }}>
                  <i className="vamtam-theme-movement"></i>
                </div>
                <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--vamtam-accent-color-2)' }}>Movement Matters</div>
              </div>

              {/* Handwriting */}
              <div style={{ textAlign: 'center', background: '#FFFFFF', padding: '20px 12px', borderRadius: '18px' }}>
                <div style={{ fontSize: '2.5rem', color: '#FADFA1', marginBottom: '8px' }}>
                  <i className="vamtam-theme-handwriting"></i>
                </div>
                <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--vamtam-accent-color-2)' }}>Handwriting</div>
              </div>
            </div>

            {/* Right Text Column */}
            <div>
              <h2 className="font-rounded" style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--vamtam-accent-color-2)', marginBottom: '16px' }}>
                Everyday we work to empower your child.
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '28px' }}>
                Research-based curriculum and individual learning experiences are integral to all the programs at Shomoukh Early Childhood Centers. Our teachers are dedicated and nurturing, which means their singular goal is to help your child thrive.
              </p>
              <button 
                onClick={() => navigateTo('programs')}
                className="wp-btn wp-btn-outline"
              >
                Programs
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 6: COME OVER AND LOOK AROUND */}
      <section style={{ padding: '90px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div className="font-sensei" style={{ fontSize: '3.6rem', color: 'var(--vamtam-accent-color-2)', marginBottom: '8px' }}>
            Come
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '0.9fr 1.1fr',
            gap: '40px',
            alignItems: 'center'
          }} className="wp-grid-2">
            <div>
              <img src="/assets/illustration-people-2-1.svg" alt="Come over" style={{ width: '100%', maxWidth: '380px' }} />
            </div>

            <div>
              <h2 className="font-rounded" style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--vamtam-accent-color-2)', marginBottom: '16px' }}>
                over and look around.
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '28px' }}>
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
      </section>

      {/* SECTION 7: PATH & LEAVES ILLUSTRATION */}
      <section style={{
        padding: '60px 0 30px',
        background: '#FAF7F2',
        backgroundImage: 'url(/assets/path-1-1.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center bottom',
        backgroundSize: 'contain'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '40px', flexWrap: 'wrap' }}>
          <img src="/assets/leaf-2-1.svg" alt="" style={{ width: '60px' }} />
          <img src="/assets/leaf-1-1.svg" alt="" style={{ width: '50px' }} />
          <img src="/assets/illustration-tree-2-1.svg" alt="" style={{ width: '120px' }} />
        </div>
      </section>

      {/* SECTION 8: 3 ACTION CARDS */}
      <section style={{ padding: '40px 0 90px', background: '#FAF7F2' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            {/* Any Questions */}
            <div 
              onClick={() => navigateTo('contact')}
              style={{
                background: '#FFFFFF',
                borderRadius: '20px',
                padding: '28px',
                border: 'none',
                boxShadow: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '18px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.08)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
            >
              <div style={{ fontSize: '2.4rem', color: 'var(--vamtam-accent-color-2)' }}>
                <i className="vamtam-theme-questions"></i>
              </div>
              <div>
                <h3 className="font-rounded" style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--vamtam-accent-color-2)', marginBottom: '2px' }}>
                  Any Questions?
                </h3>
                <div style={{ fontSize: '0.92rem', color: 'var(--vamtam-accent-color-1)', fontWeight: 700 }}>
                  Make an Enquiry
                </div>
              </div>
            </div>

            {/* See it Yourself */}
            <div 
              onClick={() => onOpenTourModal()}
              style={{
                background: '#FFFFFF',
                borderRadius: '20px',
                padding: '28px',
                border: 'none',
                boxShadow: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '18px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.08)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
            >
              <div style={{ fontSize: '2.4rem', color: 'var(--vamtam-accent-color-2)' }}>
                <i className="vamtam-theme-house"></i>
              </div>
              <div>
                <h3 className="font-rounded" style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--vamtam-accent-color-2)', marginBottom: '2px' }}>
                  See it Yourself!
                </h3>
                <div style={{ fontSize: '0.92rem', color: 'var(--vamtam-accent-color-1)', fontWeight: 700 }}>
                  Book a visit
                </div>
              </div>
            </div>

            {/* Ready to Join */}
            <div 
              onClick={() => navigateTo('admissions')}
              style={{
                background: '#FFFFFF',
                borderRadius: '20px',
                padding: '28px',
                border: 'none',
                boxShadow: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '18px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.08)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
            >
              <div style={{ fontSize: '2.4rem', color: 'var(--vamtam-accent-color-2)' }}>
                <i className="vamtam-theme-docs"></i>
              </div>
              <div>
                <h3 className="font-rounded" style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--vamtam-accent-color-2)', marginBottom: '2px' }}>
                  Ready to Join?
                </h3>
                <div style={{ fontSize: '0.92rem', color: 'var(--vamtam-accent-color-1)', fontWeight: 700 }}>
                  Register here
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <style>{`
        .home-tabs-section {
          position: relative;
          overflow: hidden;
          padding: 112px 0 112px;
          background:
            radial-gradient(circle at 7% 15%, rgba(138, 183, 58, 0.08), transparent 17%),
            radial-gradient(circle at 94% 20%, rgba(160, 195, 206, 0.13), transparent 24%),
            linear-gradient(180deg, #FFFFFF 0%, #FFF9F4 100%);
        }
        .home-tabs-section::before {
          content: "";
          position: absolute;
          inset: 62px auto auto -34px;
          width: 108px;
          height: 108px;
          border-radius: 38% 62% 50% 50%;
          background: rgba(138, 183, 58, 0.07);
          animation: subtleFloat 7s ease-in-out infinite;
        }
        .home-tabs-section .container {
          max-width: 1280px;
          position: relative;
          z-index: 1;
        }
        .home-environment-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.45fr) minmax(0, 0.55fr);
          gap: 58px;
          align-items: center;
        }
        .home-environment-eyebrow {
          display: inline-flex;
          align-items: center;
          margin-bottom: 18px;
          color: var(--vamtam-accent-color-1);
          font-size: 0.8rem;
          font-weight: 900;
          letter-spacing: 0.08em;
        }
        .home-environment-title {
          font-family: var(--font-rounded);
          font-size: clamp(2.25rem, 4.25vw, 3.92rem);
          font-weight: 900;
          line-height: 1.07;
          color: var(--vamtam-accent-color-2);
          margin-bottom: 22px;
          letter-spacing: 0;
        }
        .home-environment-title span {
          position: relative;
          display: inline-block;
          color: var(--vamtam-accent-color-1);
        }
        .home-environment-title span::after {
          content: "";
          position: absolute;
          left: -3%;
          right: -5%;
          bottom: 0.02em;
          height: 0.16em;
          border-radius: 999px 50% 999px 50%;
          background: rgba(246, 143, 41, 0.2);
          transform: rotate(-1.5deg);
          z-index: -1;
        }
        .home-environment-desc {
          max-width: 590px;
          color: #455E69;
          font-family: var(--font-body);
          font-size: 1.08rem;
          line-height: 1.82;
          margin-bottom: 32px;
        }
        .home-environment-actions {
          display: flex;
          align-items: center;
          gap: 22px;
          flex-wrap: wrap;
        }
        .home-environment-link {
          color: var(--vamtam-accent-color-2);
          font-size: 0.98rem;
          font-weight: 900;
          border-bottom: 2px solid rgba(231, 76, 37, 0.28);
          padding-bottom: 4px;
          transition: color 0.3s ease, border-color 0.3s ease;
        }
        .home-environment-link:hover {
          color: var(--vamtam-accent-color-1);
          border-color: var(--vamtam-accent-color-1);
        }
        .home-environment-visual {
          position: relative;
          min-height: 590px;
          overflow: visible;
        }
        .home-image-shell {
          position: relative;
          height: min(58vw, 600px);
          min-height: 520px;
          overflow: hidden;
          border: 10px solid #FFFFFF;
          border-radius: 30% 70% 38% 62% / 56% 36% 64% 44%;
          box-shadow: 0 28px 70px rgba(10, 48, 58, 0.18);
          background: #FAF5F0;
          isolation: isolate;
        }
        .home-image-shell::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 52%, rgba(10, 48, 58, 0.28) 100%);
          pointer-events: none;
          z-index: 1;
        }
        .home-environment-image {
          position: relative;
          z-index: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          animation: imageCrossSlide 0.48s ease both;
        }
        .home-image-badge {
          position: absolute;
          left: -20px;
          bottom: 88px;
          z-index: 4;
          padding: 12px 18px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.94);
          color: var(--vamtam-accent-color-2);
          font-weight: 900;
          box-shadow: 0 10px 26px rgba(10, 48, 58, 0.14);
        }
        .home-carousel-controls {
          position: absolute;
          right: 28px;
          bottom: 30px;
          z-index: 5;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 7px 9px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.92);
          box-shadow: 0 10px 26px rgba(10, 48, 58, 0.16);
        }
        .home-carousel-controls button {
          position: relative;
          z-index: 6;
          pointer-events: auto;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: var(--vamtam-accent-color-2);
          transition: background 0.3s ease, color 0.3s ease, transform 0.3s ease;
        }
        .home-carousel-controls button:hover {
          background: var(--vamtam-accent-color-1);
          color: #FFFFFF;
          transform: translateY(-1px);
        }
        .home-carousel-controls span {
          min-width: 54px;
          text-align: center;
          color: var(--vamtam-accent-color-2);
          font-size: 0.78rem;
          font-weight: 900;
        }
        .home-organic-shape,
        .home-block-shape,
        .home-leaf-mark {
          position: absolute;
          pointer-events: none;
          z-index: 2;
          animation: subtleFloat 7.5s ease-in-out infinite;
        }
        .shape-sage {
          width: 58px;
          height: 58px;
          right: 18px;
          top: 18px;
          border-radius: 42% 58% 52% 48%;
          background: rgba(138, 183, 58, 0.12);
        }
        .shape-beige {
          width: 82px;
          height: 82px;
          left: -22px;
          bottom: 108px;
          border-radius: 55% 45% 62% 38%;
          background: rgba(250, 223, 161, 0.28);
          animation-delay: 1.2s;
        }
        .block-one {
          width: 34px;
          height: 34px;
          right: 4%;
          bottom: 132px;
          border-radius: 8px;
          background: rgba(246, 143, 41, 0.62);
          transform: rotate(12deg);
          animation-delay: 0.7s;
        }
        .home-leaf-mark {
          width: 36px;
          height: 58px;
          right: 116px;
          top: 6px;
          border-radius: 100% 0 100% 0;
          border: 3px solid rgba(138, 183, 58, 0.26);
          transform: rotate(-28deg);
        }
        .home-feature-cards {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
          margin-top: 72px;
          overflow: visible;
        }
        .home-feature-card {
          position: relative;
          overflow: hidden;
          min-height: 142px;
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 14px;
          align-items: start;
          text-align: left;
          padding: 24px 20px 22px;
          border: 1px solid rgba(10, 48, 58, 0.08);
          border-radius: 18px;
          background: #FFFFFF;
          box-shadow: 0 8px 22px rgba(10, 48, 58, 0.055);
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .home-feature-card:hover,
        .home-feature-card.is-active {
          transform: translateY(-4px);
          border-color: rgba(231, 76, 37, 0.2);
          box-shadow: 0 15px 32px rgba(10, 48, 58, 0.105);
        }
        .home-feature-accent {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 42px;
          height: 4px;
          background: var(--vamtam-accent-color-1);
          transition: width 0.3s ease;
        }
        .home-feature-card:hover .home-feature-accent,
        .home-feature-card.is-active .home-feature-accent {
          width: 100%;
        }
        .home-feature-number {
          position: relative;
          z-index: 1;
          color: var(--vamtam-accent-color-1);
          font-weight: 900;
          font-size: 0.86rem;
          padding-left: 4px;
        }
        .home-feature-content {
          position: relative;
          z-index: 1;
          display: block;
        }
        .home-feature-content strong,
        .home-feature-content small {
          display: block;
        }
        .home-feature-content strong {
          color: var(--vamtam-accent-color-2);
          font-size: 1rem;
          line-height: 1.25;
          margin-bottom: 8px;
        }
        .home-feature-content small {
          color: #546D78;
          font-family: var(--font-body);
          font-size: 0.88rem;
          line-height: 1.45;
        }
        @keyframes fadeUpSoft {
          0% { opacity: 0; transform: translateY(22px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes imageScaleIn {
          0% { opacity: 0; transform: scale(0.97); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes imageCrossSlide {
          0% { opacity: 0; transform: translateX(18px) scale(1.02); }
          100% { opacity: 1; transform: translateX(0) scale(1); }
        }
        @keyframes subtleFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-9px); }
        }
        @media (max-width: 640px) {
          .home-hero-butterfly {
            width: 70px !important;
            top: 112px !important;
            right: 20px !important;
            opacity: 0.55;
          }
        }
        @media (max-width: 860px) {
          .wp-grid-2 {
            grid-template-columns: 1fr !important;
          }
          .home-tabs-section {
            padding: 82px 0 84px;
          }
          .home-environment-grid {
            grid-template-columns: minmax(0, 0.48fr) minmax(0, 0.52fr);
            gap: 32px;
          }
          .home-environment-visual {
            min-height: 430px;
          }
          .home-image-shell {
            height: 430px;
            min-height: 430px;
            border-width: 7px;
          }
          .home-image-badge {
            left: -10px;
            bottom: 72px;
          }
          .home-feature-cards {
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            padding: 4px 2px 18px;
            margin-top: 56px;
          }
          .home-feature-card {
            min-width: 280px;
            scroll-snap-align: start;
          }
        }
        @media (max-width: 560px) {
          .home-environment-grid {
            grid-template-columns: 1fr;
            gap: 38px;
          }
          .home-environment-title {
            font-size: clamp(2.18rem, 11vw, 3rem);
          }
          .home-environment-actions {
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image-shell {
            height: 360px;
            min-height: 360px;
            border-radius: 30px;
          }
          .home-image-badge {
            left: 14px;
            bottom: 76px;
            font-size: 0.84rem;
          }
          .home-carousel-controls {
            right: 16px;
            bottom: 20px;
          }
          .shape-sage,
          .shape-beige,
          .block-one,
          .home-leaf-mark {
            opacity: 0.55;
          }
        }
      `}</style>
    </div>
  );
};
