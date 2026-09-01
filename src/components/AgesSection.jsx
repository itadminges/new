import React, { useState } from 'react';
import { Baby, Users, Smile, Compass, CheckCircle2, Calendar, Sparkles } from 'lucide-react';
import { siteData } from '../data/siteData';

export const AgesSection = ({ onOpenTourModal }) => {
  const [selectedAge, setSelectedAge] = useState(null);

  const getAgeIcon = (id) => {
    switch (id) {
      case 'infants': return <Baby size={22} />;
      case 'toddlers': return <Smile size={22} />;
      case 'preschool': return <Users size={22} />;
      case 'flex-care': return <Compass size={22} />;
      default: return <Sparkles size={22} />;
    }
  };

  return (
    <section id="programs" className="section-padding" style={{
      background: 'linear-gradient(180deg, var(--bg-cream) 0%, #FFFFFF 100%)',
      position: 'relative'
    }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 56px' }}>
          <div className="section-tag">
            <Sparkles size={16} />
            <span>Age-Tailored Programs</span>
          </div>
          <h2 className="section-title">We Meet Kids Where They Are</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Shomoukh accommodates children aged 6 months to 4 years. Our experienced educators tailor each day around emerging developmental milestones and boundless curiosity.
          </p>
        </div>

        {/* 4 Age Group Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
          gap: '28px',
          marginBottom: '50px'
        }}>
          {siteData.ages.map((ageGroup) => (
            <div 
              key={ageGroup.id} 
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '28px',
                padding: '0',
                overflow: 'hidden',
                border: '1px solid rgba(0,0,0,0.06)'
              }}
            >
              {/* Card Image Banner */}
              <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                <img 
                  src={ageGroup.image} 
                  alt={ageGroup.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  onError={(e) => { e.target.src = "/assets/Community-image.jpg"; }}
                />
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  background: 'rgba(255, 255, 255, 0.94)',
                  backdropFilter: 'blur(6px)',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  color: 'var(--primary-coral-dark)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}>
                  {ageGroup.ageRange}
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '28px 24px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                <div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    color: 'var(--primary-coral-dark)',
                    marginBottom: '8px'
                  }}>
                    {getAgeIcon(ageGroup.id)}
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.45rem', fontWeight: 700, color: 'var(--text-main)' }}>
                      {ageGroup.title}
                    </h3>
                  </div>

                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.95rem',
                    color: 'var(--secondary-teal-dark)',
                    fontWeight: 600,
                    marginBottom: '14px'
                  }}>
                    {ageGroup.subtitle}
                  </div>

                  <p style={{
                    fontSize: '0.95rem',
                    color: 'var(--text-muted)',
                    lineHeight: '1.6',
                    marginBottom: '20px'
                  }}>
                    {ageGroup.description}
                  </p>

                  {/* Highlights */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                    {ageGroup.highlights.slice(0, 3).map((h, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem' }}>
                        <CheckCircle2 size={16} color="var(--primary-coral)" style={{ flexShrink: 0 }} />
                        <span style={{ color: 'var(--text-main)' }}>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onOpenTourModal(ageGroup.title)}
                  className="btn btn-outline btn-sm"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <Calendar size={16} />
                  <span>Tour this Age Group</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div style={{
          background: 'linear-gradient(135deg, #FFF3EC 0%, #EBF4F6 100%)',
          borderRadius: '32px',
          padding: '36px 40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '24px',
          border: '1px solid rgba(240, 161, 127, 0.25)'
        }}>
          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '6px' }}>
              Looking for flexible enrollment or infant care?
            </h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
              We offer full-term, term-by-term, and flexible schedules with extended care until 5:00 PM.
            </p>
          </div>
          <button 
            onClick={() => onOpenTourModal()}
            className="btn btn-primary"
            style={{ flexShrink: 0 }}
          >
            <span>Consult Our Admissions Team</span>
          </button>
        </div>

      </div>
    </section>
  );
};
