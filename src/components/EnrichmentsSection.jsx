import React from 'react';
import { Palette, Sun, Trees, Lightbulb, Theater, Award } from 'lucide-react';
import { siteData } from '../data/siteData';

export const EnrichmentsSection = ({ onOpenTourModal }) => {
  return (
    <section id="enrichments" className="section-padding" style={{
      background: '#FFFFFF',
      position: 'relative'
    }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 60px' }}>
          <div className="section-tag">
            <Palette size={16} />
            <span>The Reggio Ateliers</span>
          </div>
          <h2 className="section-title">{siteData.enrichments.title}</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            {siteData.enrichments.description}
          </p>
        </div>

        {/* 3 Dedicated Ateliers Showcase */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '30px',
          marginBottom: '60px'
        }}>
          {siteData.enrichments.ateliers.map((atelier, idx) => (
            <div
              key={idx}
              className="card"
              style={{
                borderRadius: '28px',
                padding: '0',
                overflow: 'hidden',
                background: 'var(--bg-cream)',
                border: '1px solid rgba(0,0,0,0.06)'
              }}
            >
              <div style={{ height: '220px', position: 'relative' }}>
                <img 
                  src={atelier.image} 
                  alt={atelier.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => { e.target.src = "/assets/1.jpg"; }}
                />
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: 'rgba(255, 255, 255, 0.92)',
                  backdropFilter: 'blur(4px)',
                  padding: '6px 12px',
                  borderRadius: '16px',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  color: 'var(--primary-coral-dark)'
                }}>
                  Atelier {idx + 1}
                </div>
              </div>

              <div style={{ padding: '26px' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 700, marginBottom: '10px', color: 'var(--text-main)' }}>
                  {atelier.title}
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  {atelier.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Activity Pillars */}
        <div style={{
          background: 'linear-gradient(135deg, #FFF6F1 0%, #F5FBFD 100%)',
          borderRadius: '36px',
          padding: '44px 36px',
          border: '1px solid rgba(240, 161, 127, 0.2)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 700, color: 'var(--text-main)' }}>
              Interactive Discovery Across Every Domain
            </h3>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            {siteData.enrichments.activities.map((act, idx) => (
              <div
                key={idx}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '24px',
                  padding: '24px',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.04)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px'
                }}
              >
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '14px',
                  background: idx === 0 ? 'var(--primary-coral-light)' : idx === 1 ? 'var(--secondary-teal-light)' : 'var(--accent-green-light)',
                  color: idx === 0 ? 'var(--primary-coral-dark)' : idx === 1 ? 'var(--secondary-teal-dark)' : 'var(--accent-green)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  {idx === 0 ? <Lightbulb size={24} /> : idx === 1 ? <Theater size={24} /> : <Award size={24} />}
                </div>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: 700, marginBottom: '6px' }}>
                    {act.title}
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                    {act.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <button
              onClick={() => onOpenTourModal()}
              className="btn btn-primary"
            >
              <span>Visit Our Ateliers with Your Child</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
