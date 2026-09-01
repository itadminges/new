import React from 'react';
import { Heart, Sparkles, Compass, Shield, Leaf, Users, CheckCircle } from 'lucide-react';
import { siteData } from '../data/siteData';

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding" style={{
      background: 'var(--bg-cream)',
      position: 'relative'
    }}>
      <div className="container">
        
        {/* Section Tag & Heading */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 60px' }}>
          <div className="section-tag">
            <Heart size={16} />
            <span>About Shomoukh</span>
          </div>
          <h2 className="section-title">Rooted in Heritage, Inspired by Wonder</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            We believe that children are curious and creative in nature and deserve the opportunity to discover and explore in a positive, child-centered sanctuary.
          </p>
        </div>

        {/* Vision & Mission Split Card */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '30px',
          marginBottom: '50px'
        }} className="about-split-grid">
          
          {/* Vision Card */}
          <div className="card" style={{
            background: 'linear-gradient(135deg, #FFFFFF 0%, var(--primary-coral-light) 100%)',
            border: '1px solid rgba(240, 161, 127, 0.3)',
            borderRadius: '30px'
          }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: 'var(--primary-coral-dark)',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '1.1rem',
              marginBottom: '12px'
            }}>
              <Sparkles size={20} />
              <span>Our Vision</span>
            </div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 700, marginBottom: '14px' }}>
              Inspiring Oman's Future Leaders
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.65 }}>
              {siteData.about.vision}
            </p>
          </div>

          {/* Mission Card */}
          <div className="card" style={{
            background: 'linear-gradient(135deg, #FFFFFF 0%, var(--secondary-teal-light) 100%)',
            border: '1px solid rgba(160, 195, 206, 0.4)',
            borderRadius: '30px'
          }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: 'var(--secondary-teal-dark)',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '1.1rem',
              marginBottom: '12px'
            }}>
              <Compass size={20} />
              <span>Our Mission</span>
            </div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 700, marginBottom: '14px' }}>
              Hundred Languages of Learning
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.65 }}>
              {siteData.about.mission}
            </p>
          </div>

        </div>

        {/* 4 Core Values */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '20px',
          marginBottom: '70px'
        }}>
          {siteData.about.values.map((val, idx) => (
            <div 
              key={idx} 
              className="card"
              style={{
                borderRadius: '22px',
                padding: '24px',
                background: '#FFFFFF'
              }}
            >
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                background: 'var(--bg-cream)',
                color: 'var(--primary-coral-dark)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px'
              }}>
                <CheckCircle size={22} />
              </div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, marginBottom: '8px' }}>
                {val.title}
              </h4>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                {val.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Community & Sustainability Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px',
          alignItems: 'center'
        }} className="about-split-grid">
          
          <div style={{ position: 'relative', borderRadius: '32px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
            <img 
              src="/assets/Community-image.jpg" 
              alt="Community and Omani Values" 
              style={{ width: '100%', height: '380px', objectFit: 'cover' }}
              onError={(e) => { e.target.src = "/assets/1.jpg"; }}
            />
          </div>

          <div>
            <div style={{ marginBottom: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--secondary-teal-dark)', fontWeight: 700, marginBottom: '6px' }}>
                <Users size={20} />
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.85rem' }}>Community & Diversity</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 700, marginBottom: '10px' }}>
                Embracing Omani Traditions with Global Harmony
              </h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
                {siteData.about.communityText}
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div style={{
                background: '#FFFFFF',
                padding: '20px',
                borderRadius: '20px',
                border: '1px solid rgba(0,0,0,0.06)'
              }}>
                <Leaf size={24} color="var(--accent-green)" style={{ marginBottom: '10px' }} />
                <h4 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '6px' }}>Eco-Awareness</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  Gardening, nature exploration, and respecting our Oman ecosystem.
                </p>
              </div>

              <div style={{
                background: '#FFFFFF',
                padding: '20px',
                borderRadius: '20px',
                border: '1px solid rgba(0,0,0,0.06)'
              }}>
                <Shield size={24} color="var(--primary-coral-dark)" style={{ marginBottom: '10px' }} />
                <h4 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '6px' }}>Health & Wellness</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  Rigorous sanitization, on-site nursing, and continuous safety standards.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 860px) {
          .about-split-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
        }
      `}</style>
    </section>
  );
};
