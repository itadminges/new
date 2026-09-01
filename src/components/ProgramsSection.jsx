import React from 'react';
import { Sparkles, BookOpen, Users, Compass, Palette, Calculator, Languages, Activity, PenTool, HandMetal } from 'lucide-react';
import { siteData } from '../data/siteData';

export const ProgramsSection = () => {
  const getSkillIcon = (iconName) => {
    switch (iconName) {
      case 'SignLanguage': return <HandMetal size={28} />;
      case 'Palette': return <Palette size={28} />;
      case 'Calculator': return <Calculator size={28} />;
      case 'Languages': return <Languages size={28} />;
      case 'Activity': return <Activity size={28} />;
      case 'PenTool': return <PenTool size={28} />;
      default: return <Sparkles size={28} />;
    }
  };

  return (
    <section className="section-padding" style={{ background: '#FFFFFF', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 60px' }}>
          <div className="section-tag">
            <BookOpen size={16} />
            <span>UK EYFS Framework</span>
          </div>
          <h2 className="section-title">Curriculum & Teaching Framework</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Empowering every child with holistic cognitive, social, and emotional fundamentals through the world-leading Early Years Foundation Stage (EYFS).
          </p>
        </div>

        {/* 3 Core Pillars: Curriculum, Teacher, Environment */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '30px',
          marginBottom: '70px'
        }}>
          
          {/* Card 1: EYFS */}
          <div className="card" style={{
            background: 'var(--bg-cream)',
            borderLeft: '6px solid var(--primary-coral-dark)',
            borderRadius: '24px'
          }}>
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '16px',
              background: 'var(--primary-coral-light)',
              color: 'var(--primary-coral-dark)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px'
            }}>
              <BookOpen size={26} />
            </div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.45rem', fontWeight: 700, marginBottom: '12px' }}>
              {siteData.curriculum.eyfsTitle}
            </h3>
            <p style={{ fontSize: '0.98rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>
              {siteData.curriculum.eyfsDesc}
            </p>
          </div>

          {/* Card 2: The Teacher */}
          <div className="card" style={{
            background: 'var(--bg-cream)',
            borderLeft: '6px solid var(--secondary-teal-dark)',
            borderRadius: '24px'
          }}>
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '16px',
              background: 'var(--secondary-teal-light)',
              color: 'var(--secondary-teal-dark)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px'
            }}>
              <Users size={26} />
            </div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.45rem', fontWeight: 700, marginBottom: '12px' }}>
              {siteData.curriculum.teacherPillarTitle}
            </h3>
            <p style={{ fontSize: '0.98rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>
              {siteData.curriculum.teacherPillarDesc}
            </p>
          </div>

          {/* Card 3: The Environment */}
          <div className="card" style={{
            background: 'var(--bg-cream)',
            borderLeft: '6px solid var(--accent-green)',
            borderRadius: '24px'
          }}>
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '16px',
              background: 'var(--accent-green-light)',
              color: 'var(--accent-green)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px'
            }}>
              <Compass size={26} />
            </div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.45rem', fontWeight: 700, marginBottom: '12px' }}>
              {siteData.curriculum.environmentPillarTitle}
            </h3>
            <p style={{ fontSize: '0.98rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>
              {siteData.curriculum.environmentPillarDesc}
            </p>
          </div>

        </div>

        {/* 6 Curricular Skill Domains */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 700, color: 'var(--text-main)' }}>
            Everyday We Work to Empower Your Child
          </h3>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '8px auto 0' }}>
            Comprehensive developmental competencies integrated smoothly into daily routines.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px'
        }}>
          {siteData.curriculum.skills.map((skill, idx) => (
            <div
              key={idx}
              className="card"
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '18px',
                padding: '24px',
                borderRadius: '20px',
                background: 'var(--bg-warm-light)',
                border: '1px solid rgba(0,0,0,0.05)'
              }}
            >
              <div style={{
                width: '54px',
                height: '54px',
                borderRadius: '16px',
                background: idx % 3 === 0 ? 'var(--primary-coral-light)' : idx % 3 === 1 ? 'var(--secondary-teal-light)' : 'var(--accent-sun-light)',
                color: idx % 3 === 0 ? 'var(--primary-coral-dark)' : idx % 3 === 1 ? 'var(--secondary-teal-dark)' : 'var(--accent-terracotta)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                {getSkillIcon(skill.icon)}
              </div>
              <div>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '6px' }}>
                  {skill.title}
                </h4>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                  {skill.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
