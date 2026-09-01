import React from 'react';
import { Sparkles, ArrowRight, Calendar, Award, ShieldCheck, Heart } from 'lucide-react';
import { siteData } from '../data/siteData';

export const Hero = ({ onOpenTourModal }) => {
  return (
    <section id="home" style={{
      position: 'relative',
      background: 'linear-gradient(180deg, var(--bg-cream) 0%, #F5EAE1 50%, var(--bg-cream) 100%)',
      paddingTop: '60px',
      paddingBottom: '100px',
      overflow: 'hidden'
    }}>
      {/* Decorative Floating SVGs & Graphics */}
      <img 
        src={siteData.brand.dots} 
        alt="" 
        aria-hidden="true" 
        style={{
          position: 'absolute',
          top: '40px',
          left: '5%',
          width: '120px',
          opacity: 0.7,
          pointerEvents: 'none'
        }}
      />
      <img 
        src={siteData.brand.butterfly} 
        alt="" 
        aria-hidden="true" 
        className="animate-float"
        style={{
          position: 'absolute',
          top: '70px',
          right: '8%',
          width: '110px',
          pointerEvents: 'none',
          zIndex: 2
        }}
      />
      <img 
        src={siteData.brand.bird} 
        alt="" 
        aria-hidden="true" 
        className="animate-float"
        style={{
          position: 'absolute',
          bottom: '120px',
          left: '3%',
          width: '65px',
          pointerEvents: 'none',
          animationDelay: '1.5s'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.15fr 0.85fr',
          gap: '48px',
          alignItems: 'center'
        }} className="hero-grid">
          
          {/* Left Column: Heading & Content */}
          <div>
            <div className="section-tag" style={{ background: '#FFFFFF', boxShadow: '0 4px 15px rgba(240, 161, 127, 0.15)' }}>
              <Sparkles size={16} color="var(--primary-coral-dark)" />
              <span>{siteData.hero.badge}</span>
            </div>

            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 800,
              lineHeight: 1.12,
              color: 'var(--text-main)',
              letterSpacing: '-0.03em',
              marginBottom: '20px'
            }}>
              {siteData.hero.titleLine1}{' '}
              <span style={{
                background: 'linear-gradient(135deg, var(--primary-coral-dark) 0%, var(--primary-coral) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                {siteData.hero.titleHighlight}
              </span>{' '}
              {siteData.hero.titleLine2}
            </h1>

            <p style={{
              fontSize: '1.2rem',
              color: 'var(--text-muted)',
              lineHeight: 1.6,
              marginBottom: '32px',
              maxWidth: '560px'
            }}>
              {siteData.hero.description}
            </p>

            {/* CTA Action Buttons */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}>
              <button 
                onClick={() => onOpenTourModal()}
                className="btn btn-primary"
                style={{ padding: '16px 32px', fontSize: '1.05rem' }}
              >
                <Calendar size={20} />
                <span>Schedule a Tour</span>
              </button>
              <a 
                href="#programs" 
                className="btn btn-outline"
                style={{ padding: '16px 28px', fontSize: '1.05rem' }}
              >
                <span>Explore Programs</span>
                <ArrowRight size={18} />
              </a>
            </div>

            {/* Quick Highlights / Badges */}
            <div style={{
              display: 'flex',
              gap: '24px',
              alignItems: 'center',
              flexWrap: 'wrap',
              borderTop: '1px solid rgba(0,0,0,0.08)',
              paddingTop: '24px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'var(--primary-coral-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary-coral-dark)'
                }}>
                  <Award size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>UK EYFS Standard</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Structured Milestones</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'var(--secondary-teal-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--secondary-teal-dark)'
                }}>
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>100% Safe & Certified</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Pediatric First Aid</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'var(--accent-green-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-green)'
                }}>
                  <Heart size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Omani Values</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Heritage & Community</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'relative',
              borderRadius: '36px',
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(214, 120, 82, 0.22)',
              border: '6px solid #FFFFFF'
            }}>
              <img 
                src="/assets/1.jpg" 
                alt="Shomoukh Nursery Learning Environment" 
                style={{ width: '100%', height: '480px', objectFit: 'cover' }}
                onError={(e) => { e.target.src = "/assets/Community-image.jpg"; }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(to top, rgba(18,28,38,0.85) 0%, transparent 100%)',
                padding: '30px 24px 20px',
                color: '#FFFFFF'
              }}>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  marginBottom: '4px'
                }}>
                  {siteData.brand.motto}
                </div>
                <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>
                  Inspiring young minds through discovery, art, and joy.
                </div>
              </div>
            </div>

            {/* Floating Quick Card */}
            <div style={{
              position: 'absolute',
              top: '-20px',
              left: '-25px',
              background: '#FFFFFF',
              borderRadius: '20px',
              padding: '16px 20px',
              boxShadow: '0 15px 35px rgba(0,0,0,0.12)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              zIndex: 5,
              animation: 'floatSlow 5s ease-in-out infinite'
            }}>
              <img src={siteData.brand.teddyBear} alt="Teddy" style={{ width: '42px', height: '42px', objectFit: 'contain' }} />
              <div>
                <div style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--primary-coral-dark)' }}>6m – 4 Years</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Admissions Open</div>
              </div>
            </div>

            {/* Floating Campus Badge */}
            <div style={{
              position: 'absolute',
              bottom: '-20px',
              right: '-15px',
              background: '#FFFFFF',
              borderRadius: '20px',
              padding: '14px 22px',
              boxShadow: '0 15px 35px rgba(0,0,0,0.12)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              zIndex: 5
            }}>
              <div style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: '#25D366',
                boxShadow: '0 0 0 4px rgba(37, 211, 102, 0.2)'
              }} />
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Al Mouj & Al Qurm</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Now Touring Families</div>
              </div>
            </div>
          </div>

        </div>

        {/* Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '20px',
          marginTop: '60px'
        }}>
          {siteData.hero.stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="card"
              style={{
                textAlign: 'center',
                padding: '24px 20px',
                borderRadius: '24px',
                background: idx === 0 ? 'var(--primary-coral-light)' : '#FFFFFF'
              }}
            >
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2.2rem',
                fontWeight: 800,
                color: idx === 0 ? 'var(--primary-coral-dark)' : 'var(--text-main)',
                marginBottom: '4px'
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: '0.95rem',
                color: 'var(--text-muted)',
                fontWeight: 600
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Responsive Styles for Hero */}
      <style>{`
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
};
