import React, { useState } from 'react';
import { CheckCircle2, ChevronLeft, ChevronRight, Sparkles, ArrowRight } from 'lucide-react';
import { siteData } from '../data/siteData';

export const InteractiveTabs = ({ onOpenTourModal }) => {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const [activeSlideIdx, setActiveSlideIdx] = useState(0);

  const currentTab = siteData.fourPillars[activeTabIdx];

  const handleNextSlide = () => {
    setActiveSlideIdx((prev) => (prev + 1) % currentTab.slides.length);
  };

  const handlePrevSlide = () => {
    setActiveSlideIdx((prev) => (prev - 1 + currentTab.slides.length) % currentTab.slides.length);
  };

  const handleTabChange = (idx) => {
    setActiveTabIdx(idx);
    setActiveSlideIdx(0);
  };

  return (
    <section className="section-padding" style={{ background: '#FFFFFF', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
          <div className="section-tag">
            <Sparkles size={16} />
            <span>Our 4 Core Pillars</span>
          </div>
          <h2 className="section-title">The Shomoukh Philosophy</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            We combine high-caliber early childhood research with heartfelt care, empowering children to blossom through meaningful, intentional environments.
          </p>
        </div>

        {/* Tab Navigation Pill Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '12px',
          flexWrap: 'wrap',
          marginBottom: '40px'
        }}>
          {siteData.fourPillars.map((pillar, idx) => {
            const isActive = activeTabIdx === idx;
            return (
              <button
                key={pillar.id}
                onClick={() => handleTabChange(idx)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '14px 24px',
                  borderRadius: 'var(--radius-full)',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: '1rem',
                  transition: 'all var(--transition-fast)',
                  background: isActive ? 'var(--primary-coral-dark)' : 'var(--bg-cream)',
                  color: isActive ? '#FFFFFF' : 'var(--text-main)',
                  boxShadow: isActive ? '0 10px 25px rgba(214, 120, 82, 0.3)' : 'none',
                  border: isActive ? 'none' : '1px solid rgba(0,0,0,0.06)'
                }}
              >
                <span style={{
                  fontSize: '0.85rem',
                  opacity: isActive ? 0.9 : 0.6,
                  fontFamily: 'var(--font-display)'
                }}>
                  {pillar.tabNumber}
                </span>
                <span>{pillar.title}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display Card */}
        <div className="card" style={{
          padding: '48px 40px',
          background: 'var(--bg-warm-light)',
          borderRadius: '36px',
          border: '1px solid rgba(240, 161, 127, 0.2)'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 1fr',
            gap: '48px',
            alignItems: 'center'
          }} className="tab-content-grid">
            
            {/* Left Content Area */}
            <div>
              <div style={{
                display: 'inline-block',
                color: 'var(--primary-coral-dark)',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '1.1rem',
                marginBottom: '10px'
              }}>
                Pillar {currentTab.tabNumber}
              </div>

              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2.2rem',
                fontWeight: 700,
                color: 'var(--text-main)',
                lineHeight: 1.25,
                marginBottom: '16px'
              }}>
                {currentTab.title}
              </h3>

              <p style={{
                fontSize: '1.1rem',
                color: 'var(--text-muted)',
                lineHeight: 1.65,
                marginBottom: '28px'
              }}>
                {currentTab.description}
              </p>

              {/* Feature Checklist */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '36px' }}>
                {currentTab.features.map((feature, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <CheckCircle2 size={20} color="var(--primary-coral-dark)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '1rem', color: 'var(--text-main)', fontWeight: 500 }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <button 
                  onClick={() => onOpenTourModal()}
                  className="btn btn-primary"
                >
                  <span>Experience This in Person</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            {/* Right Slideshow Area */}
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'relative',
                height: '400px',
                borderRadius: '28px',
                overflow: 'hidden',
                boxShadow: '0 20px 45px rgba(0,0,0,0.12)',
                border: '4px solid #FFFFFF'
              }}>
                <img 
                  src={currentTab.slides[activeSlideIdx].img} 
                  alt={currentTab.slides[activeSlideIdx].caption} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'all 0.4s ease' }}
                  onError={(e) => { e.target.src = "/assets/Community-image.jpg"; }}
                />
                
                {/* Caption Overlay */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)',
                  padding: '24px 20px 16px',
                  color: '#FFFFFF'
                }}>
                  <p style={{ fontSize: '0.95rem', fontWeight: 500 }}>
                    {currentTab.slides[activeSlideIdx].caption}
                  </p>
                </div>
              </div>

              {/* Slider Controls */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '16px',
                padding: '0 6px'
              }}>
                {/* Indicator Dots */}
                <div style={{ display: 'flex', gap: '8px' }}>
                  {currentTab.slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveSlideIdx(idx)}
                      style={{
                        width: activeSlideIdx === idx ? '28px' : '10px',
                        height: '10px',
                        borderRadius: '10px',
                        background: activeSlideIdx === idx ? 'var(--primary-coral-dark)' : '#CBD5E1',
                        transition: 'all var(--transition-fast)'
                      }}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Next / Prev Buttons */}
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button
                    onClick={handlePrevSlide}
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: '#FFFFFF',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-main)'
                    }}
                    aria-label="Previous slide"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={handleNextSlide}
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: '#FFFFFF',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-main)'
                    }}
                    aria-label="Next slide"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .tab-content-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  );
};
