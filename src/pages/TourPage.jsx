import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Calendar, MapPin, Clock, CheckCircle } from 'lucide-react';
import { PremiumIllustration } from '../components/PremiumIllustration';
import { submitWebsiteForm } from '../utils/formSubmission';

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const result = await submitWebsiteForm('tour-request-page', formData);
    setIsSubmitting(false);

    if (result.ok) {
      setIsSuccess(true);
      try {
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
      } catch (err) {}
      onShowToast(`Tour scheduled successfully for ${formData.parentName} at ${formData.campus}!`);
    } else {
      onShowToast(result.message);
    }
  };

  return (
    <div className="tour-page-wp" style={{ padding: '60px 0 100px', background: '#FAF7F2' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        
        {/* HEADER SECTION */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '32px',
          padding: '48px',
          textAlign: 'center',
          marginBottom: '40px',
          boxShadow: '0 8px 25px rgba(0,0,0,0.04)'
        }}>
          <h1 className="font-rounded" style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--vamtam-accent-color-2)', marginBottom: '8px' }}>
            Schedule a Tour
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', marginBottom: '24px' }}>
            Shomoukh team is eager to welcome you to our nursery.
          </p>
          <PremiumIllustration variant="tour" title="Guided family tour at Shomoukh nursery" />
        </div>

        {/* TOUR FORM CARD */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '32px',
          padding: '48px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
        }}>
          {isSuccess ? (
            <div style={{ textAlign: 'center', padding: '30px 10px' }}>
              <div style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                background: '#EFF8F0',
                color: '#89B890',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px'
              }}>
                <CheckCircle size={40} />
              </div>
              <h2 className="font-rounded" style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '12px' }}>
                Tour Slot Reserved!
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '28px' }}>
                Thank you, <strong>{formData.parentName}</strong>! We look forward to meeting you and <strong>{formData.childName || 'your child'}</strong> at our <strong>{formData.campus}</strong>.
              </p>
              <button
                onClick={() => setIsSuccess(false)}
                className="wp-btn wp-btn-primary"
              >
                Schedule Another Tour
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h2 className="font-rounded" style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--vamtam-accent-color-2)', marginBottom: '24px' }}>
                Book Your Personalized Visit
              </h2>

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

              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontWeight: 700, marginBottom: '6px', fontSize: '0.92rem' }}>
                  Special Notes / Questions (Optional)
                </label>
                <textarea
                  placeholder="Any questions or details..."
                  className="wp-textarea"
                  style={{ minHeight: '80px' }}
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
                {isSubmitting ? 'Reserving Tour Slot...' : 'Submit my information'}
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
