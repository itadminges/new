import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Calendar, MapPin, Clock, CheckCircle, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export const TourPage = ({ onShowToast }) => {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childName: '',
    childAge: 'Toddler (1-2 Years)',
    campus: 'Al Mouj Campus',
    preferredDate: '',
    preferredTime: '09:00 AM - 10:00 AM',
    notes: ''
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      try {
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
      } catch (err) {}
      onShowToast(`Tour scheduled successfully for ${formData.parentName} at ${formData.campus}!`);
    }, 600);
  };

  return (
    <div className="tour-page-wp" style={{ padding: '80px 0 120px', background: '#FAF7F2' }}>
      <div className="container" style={{ maxWidth: '920px' }}>
        
        {/* HEADER SECTION */}
        <div className="modern-card" style={{
          padding: '50px 40px',
          textAlign: 'center',
          marginBottom: '40px',
          background: '#FFFFFF'
        }}>
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
            Campus Experience
          </div>
          <h1 className="font-rounded" style={{ fontSize: '2.6rem', fontWeight: 900, color: 'var(--vamtam-accent-color-2)', marginBottom: '12px' }}>
            Schedule a Personalized Tour
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', maxWidth: '600px', margin: '0 auto 28px' }}>
            The Shomoukh team is eager to welcome your family to our vibrant classrooms and natural ateliers.
          </p>
          <img 
            src="/assets/illustration-people-1-1.svg" 
            alt="Welcome to Shomoukh" 
            style={{ maxWidth: '320px', margin: '0 auto' }}
          />
        </div>

        {/* TOUR FORM CARD */}
        <div className="modern-card" style={{
          padding: '50px 44px',
          background: '#FFFFFF'
        }}>
          {isSuccess ? (
            <div style={{ textAlign: 'center', padding: '40px 10px' }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: '#EFF8F0',
                color: '#66961E',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
                boxShadow: '0 8px 20px rgba(102, 150, 30, 0.2)'
              }}>
                <CheckCircle size={44} />
              </div>
              <h2 className="font-rounded" style={{ fontSize: '2.2rem', fontWeight: 900, marginBottom: '12px', color: 'var(--vamtam-accent-color-2)' }}>
                Tour Slot Confirmed!
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.6, maxWidth: '580px', margin: '0 auto 32px' }}>
                Thank you, <strong>{formData.parentName}</strong>! We look forward to meeting you and <strong>{formData.childName || 'your child'}</strong> at our <strong>{formData.campus}</strong>. Our admissions team will email your visit pass shortly.
              </p>
              <button
                onClick={() => setIsSuccess(false)}
                className="wp-btn wp-btn-primary"
              >
                Schedule Another Visit
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '28px' }}>
                <Calendar size={22} color="var(--vamtam-accent-color-1)" />
                <h2 className="font-rounded" style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--vamtam-accent-color-2)' }}>
                  Reserve Your Visit Slot
                </h2>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="form-row-2">
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontWeight: 700, marginBottom: '6px', fontSize: '0.92rem' }}>
                    Parent / Guardian Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    className="wp-input"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontWeight: 700, marginBottom: '6px', fontSize: '0.92rem' }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+968 9123 4567"
                    className="wp-input"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="form-row-2">
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontWeight: 700, marginBottom: '6px', fontSize: '0.92rem' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    className="wp-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontWeight: 700, marginBottom: '6px', fontSize: '0.92rem' }}>
                    Child's Name & Age
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Maya (2 Years)"
                    className="wp-input"
                    value={formData.childName}
                    onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="form-row-2">
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontWeight: 700, marginBottom: '6px', fontSize: '0.92rem' }}>
                    Select Campus *
                  </label>
                  <select
                    className="wp-select"
                    value={formData.campus}
                    onChange={(e) => setFormData({ ...formData, campus: e.target.value })}
                  >
                    <option value="Al Mouj Campus">Al Mouj Campus (Muscat)</option>
                    <option value="Al Qurm Campus">Al Qurm Campus (Muscat)</option>
                  </select>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontWeight: 700, marginBottom: '6px', fontSize: '0.92rem' }}>
                    Program of Interest
                  </label>
                  <select
                    className="wp-select"
                    value={formData.childAge}
                    onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                  >
                    <option value="Infants (6-12 Months)">Infants (6 – 12 Months)</option>
                    <option value="Toddlers (1-2 Years)">Toddlers (1 – 2 Years)</option>
                    <option value="Preschool (2-3 Years)">Preschool (2 – 3 Years)</option>
                    <option value="Flex-Care & Pre-K (3-4 Years)">Flex-Care & Pre-K (3 – 4 Years)</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="form-row-2">
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontWeight: 700, marginBottom: '6px', fontSize: '0.92rem' }}>
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    required
                    className="wp-input"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontWeight: 700, marginBottom: '6px', fontSize: '0.92rem' }}>
                    Preferred Time Slot *
                  </label>
                  <select
                    className="wp-select"
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  >
                    <option value="08:30 AM - 09:30 AM">Morning: 08:30 AM – 09:30 AM</option>
                    <option value="10:00 AM - 11:00 AM">Mid-Morning: 10:00 AM – 11:00 AM</option>
                    <option value="01:30 PM - 02:30 PM">Afternoon: 01:30 PM – 02:30 PM</option>
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: '28px' }}>
                <label style={{ display: 'block', fontWeight: 700, marginBottom: '6px', fontSize: '0.92rem' }}>
                  Special Notes / Questions (Optional)
                </label>
                <textarea
                  placeholder="Any specific questions for our academic coordinator..."
                  className="wp-textarea"
                  style={{ minHeight: '90px' }}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="wp-btn wp-btn-primary"
                style={{ width: '100%', padding: '16px', fontSize: '1.05rem' }}
              >
                {isSubmitting ? 'Reserving Tour Slot...' : 'Submit Tour Booking'}
              </button>
            </form>
          )}
        </div>

      </div>

      <style>{`
        @media (max-width: 650px) {
          .form-row-2 {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
