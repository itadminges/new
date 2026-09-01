import React from 'react';
import { Calendar, Clock, MapPin, Phone } from 'lucide-react';
import { siteData } from '../data/siteData';

export const LocationsPage = ({ onOpenTourModal }) => {
  return (
    <div className="locations-page-wp">
      <section style={{ padding: '80px 0 70px', background: '#FFFFFF' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '820px' }}>
          <div className="section-tag" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            <MapPin size={16} />
            <span>Campuses</span>
          </div>
          <h1 className="font-rounded" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 900, color: 'var(--vamtam-accent-color-2)', lineHeight: 1.1, marginBottom: '16px' }}>
            Visit Shomoukh in Muscat.
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.08rem', lineHeight: 1.7 }}>
            Choose the campus closest to your family and arrange a guided visit with our admissions team.
          </p>
        </div>
      </section>

      <section style={{ padding: '30px 0 90px', background: '#FAF7F2' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px'
          }}>
            {siteData.campuses.map((campus, idx) => (
              <article key={campus.id} style={{ background: '#FFFFFF', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 10px 28px rgba(10,48,58,0.07)' }}>
                <div style={{ height: '260px', overflow: 'hidden' }}>
                  <img src={campus.image} alt={campus.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.target.src = '/assets/1.jpg'; }} />
                </div>
                <div style={{ padding: '28px' }}>
                  <div style={{ color: idx === 0 ? 'var(--vamtam-accent-color-1)' : 'var(--secondary-teal-dark)', fontWeight: 800, fontSize: '0.86rem', marginBottom: '6px' }}>
                    {campus.tag}
                  </div>
                  <h2 className="font-rounded" style={{ fontSize: '1.7rem', fontWeight: 900, color: 'var(--vamtam-accent-color-2)', marginBottom: '18px' }}>
                    {campus.name}
                  </h2>
                  <div style={{ display: 'grid', gap: '10px', color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '24px' }}>
                    <span style={{ display: 'flex', gap: '10px' }}><MapPin size={18} />{campus.address}</span>
                    <a href={campus.phoneLink} style={{ display: 'flex', gap: '10px', color: 'var(--vamtam-accent-color-1)', fontWeight: 800 }}><Phone size={18} />{campus.phone}</a>
                    <span style={{ display: 'flex', gap: '10px' }}><Clock size={18} />{campus.hours}</span>
                  </div>
                  <div style={{ height: '230px', borderRadius: '8px', overflow: 'hidden', marginBottom: '22px' }}>
                    <iframe src={campus.mapEmbedUrl} width="100%" height="100%" style={{ border: 0 }} loading="lazy" title={`${campus.name} Map`} />
                  </div>
                  <button onClick={() => onOpenTourModal()} className="wp-btn wp-btn-primary" style={{ width: '100%' }}>
                    <Calendar size={17} />
                    Book a Visit
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
