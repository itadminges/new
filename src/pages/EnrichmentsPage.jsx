import React from 'react';
import { ArrowRight, Sparkles, Palette, Layers, Cpu, Music, Play, Shield, Compass } from 'lucide-react';

export const EnrichmentsPage = ({ navigateTo, onOpenTourModal }) => {
  const activities = [
    {
      title: 'PROJECT',
      desc: 'At Shomoukh Early childhood Education Centers we follow a project-based approach where children explore deep questions together.',
      icon: '💡',
      tag: 'Inquiry & Research'
    },
    {
      title: 'TINY TOWN',
      desc: 'It is a pretend play area that helps children learn about themselves, society, and develop emotional and communication skills.',
      icon: '🏘️',
      tag: 'Social Dynamics'
    },
    {
      title: 'SENSORY',
      desc: 'Children are engaged into activities that promote play, creativity and exploration through varied tactile textures, light, and sounds.',
      icon: '🎨',
      tag: 'Tactile Exploration'
    },
    {
      title: 'MUSIC',
      desc: 'Music activities balance the body and mind. They also improve children’s ability to listen, express rhythm, and collaborate joyful melodies.',
      icon: '🎵',
      tag: 'Rhythm & Harmonies'
    },
    {
      title: 'DRAMA',
      desc: 'Through role playing, our students act out assigned roles related to favorite stories and real-world community heroes.',
      icon: '🎭',
      tag: 'Confidence & Theatre'
    },
    {
      title: 'ECA & PE',
      desc: 'Extra curricular activities including Physical Education and Sports, giving our students opportunities to explore agility and strength.',
      icon: '⚽',
      tag: 'Gross Motor Agility'
    }
  ];

  return (
    <div className="enrichments-page-wp">
      
      {/* HERO SECTION */}
      <section style={{
        position: 'relative',
        background: 'linear-gradient(180deg, #A0C3CE 0%, #BBD6DE 60%, #FAF7F2 100%)',
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

        <img src="/assets/dots-1.svg" alt="" style={{ position: 'absolute', top: '70px', left: '6%', width: '120px', opacity: 0.75, pointerEvents: 'none' }} />
        <img src="/assets/illustration-tree-2-1.svg" alt="" style={{ position: 'absolute', bottom: '60px', right: '8%', width: '110px', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <div className="font-sensei" style={{ fontSize: 'clamp(2.8rem, 5.5vw, 4.2rem)', color: 'var(--vamtam-accent-color-2)', lineHeight: 1, marginBottom: '6px' }}>
            Shomoukh
          </div>
          <h1 className="font-rounded" style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.6rem)', fontWeight: 900, color: 'var(--vamtam-accent-color-2)', marginBottom: '8px' }}>
            fun Space
          </h1>
          <div className="font-rounded" style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--vamtam-accent-color-2)' }}>
            Smart & Innovative Learning
          </div>
        </div>

        <div className="shape-divider-wave-brush bottom fill-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.5 27.8" preserveAspectRatio="none">
            <path className="elementor-shape-fill" d="M283.5,9.7c0,0-7.3,4.3-14,4.6c-6.8,0.3-12.6,0-20.9-1.5c-11.3-2-33.1-10.1-44.7-5.7s-12.1,4.6-18,7.4c-6.6,3.2-20,9.6-36.6,9.3C131.6,23.5,99.5,7.2,86.3,8c-1.4,0.1-6.6,0.8-10.5,2c-3.8,1.2-9.4,3.8-17,4.7c-3.2,0.4-8.3,1.1-14.2,0.9c-1.5-0.1-6.3-0.4-12-1.6c-5.7-1.2-11-3.1-15.8-3.7C6.5,9.2,0,10.8,0,10.8V0h283.5V9.7z"/>
          </svg>
        </div>
      </section>

      {/* SHOMOUKH ATELIERS */}
      <section style={{ padding: '100px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 60px' }}>
            <div style={{
              display: 'inline-block',
              background: 'var(--primary-coral-light)',
              color: 'var(--vamtam-accent-color-1)',
              padding: '4px 16px',
              borderRadius: 'var(--radius-full)',
              fontWeight: 800,
              fontSize: '0.85rem',
              marginBottom: '16px'
            }}>
              Creative Discovery
            </div>
            <h2 className="font-rounded" style={{ fontSize: '2.6rem', fontWeight: 900, color: 'var(--vamtam-accent-color-2)', marginBottom: '18px' }}>
              Shomoukh Ateliers
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7 }}>
              Shomoukh ateliers are viewed as spaces where a group of children works together, using their imagination, creativity, and knowledge to experiment with different materials, technologies, and tools, under the encouragement and supervision of the Atelierista (artist). The Atelier is not just an art corner but rather a place of research where kids are invited to experiment.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px'
          }}>
            {/* Clay Atelier */}
            <div className="modern-card" style={{ overflow: 'hidden', textAlign: 'center' }}>
              <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                <img src="/assets/h-17-1.jpg" alt="Clay Atelier" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  background: 'rgba(255, 255, 255, 0.92)',
                  color: 'var(--vamtam-accent-color-2)',
                  padding: '4px 14px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.82rem',
                  fontWeight: 800
                }}>
                  Sculpture & Form
                </div>
              </div>
              <div style={{ padding: '32px 24px' }}>
                <h3 className="font-rounded" style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--vamtam-accent-color-2)', marginBottom: '10px' }}>
                  Clay Atelier
                </h3>
                <p style={{ fontSize: '0.94rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  Children are experimenting with clay, a soft and natural material with a smooth texture that allows them to mold three-dimensional creations.
                </p>
              </div>
            </div>

            {/* Art Atelier */}
            <div className="modern-card" style={{ overflow: 'hidden', textAlign: 'center' }}>
              <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                <img src="/assets/h-19-1.jpg" alt="Art Atelier" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  background: 'rgba(255, 255, 255, 0.92)',
                  color: 'var(--vamtam-accent-color-2)',
                  padding: '4px 14px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.82rem',
                  fontWeight: 800
                }}>
                  Pigments & Media
                </div>
              </div>
              <div style={{ padding: '32px 24px' }}>
                <h3 className="font-rounded" style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--vamtam-accent-color-2)', marginBottom: '10px' }}>
                  Art Atelier
                </h3>
                <p style={{ fontSize: '0.94rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  Children are experimenting with mixed media, painting, natural pigments, and open-ended collage materials in creative freedom.
                </p>
              </div>
            </div>

            {/* Digital Atelier */}
            <div className="modern-card" style={{ overflow: 'hidden', textAlign: 'center' }}>
              <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                <img src="/assets/h-16-1.jpg" alt="Digital Atelier" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  background: 'rgba(255, 255, 255, 0.92)',
                  color: 'var(--vamtam-accent-color-2)',
                  padding: '4px 14px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.82rem',
                  fontWeight: 800
                }}>
                  Light & Shadow
                </div>
              </div>
              <div style={{ padding: '32px 24px' }}>
                <h3 className="font-rounded" style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--vamtam-accent-color-2)', marginBottom: '10px' }}>
                  Digital Atelier
                </h3>
                <p style={{ fontSize: '0.94rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  Children use light in different forms as well as analogical and digital tools to explore shadow, transparency, and scientific wonder.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR ACTIVITIES GRID */}
      <section style={{ padding: '100px 0', background: '#FAF7F2' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <h2 className="font-rounded" style={{ fontSize: '2.6rem', fontWeight: 900, color: 'var(--vamtam-accent-color-2)' }}>
              OUR ACTIVITIES
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginTop: '8px' }}>
              Engaging, multi-sensory experiences that spark curiosity and confidence every single day.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px'
          }}>
            {activities.map((act, idx) => (
              <div
                key={idx}
                className="modern-card"
                style={{
                  padding: '32px 28px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '20px'
                }}
              >
                <div style={{
                  fontSize: '2.4rem',
                  lineHeight: 1,
                  background: '#FAF7F2',
                  width: '64px',
                  height: '64px',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  {act.icon}
                </div>
                <div>
                  <div style={{
                    fontSize: '0.78rem',
                    fontWeight: 800,
                    color: 'var(--vamtam-accent-color-1)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: '4px'
                  }}>
                    {act.tag}
                  </div>
                  <h3 className="font-rounded" style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--vamtam-accent-color-2)', marginBottom: '8px' }}>
                    {act.title}
                  </h3>
                  <p style={{ fontSize: '0.94rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                    {act.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '56px' }}>
            <button
              onClick={() => onOpenTourModal()}
              className="wp-btn wp-btn-primary"
              style={{ padding: '16px 40px', fontSize: '1.05rem' }}
            >
              <span>Book an Atelier Experience</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
