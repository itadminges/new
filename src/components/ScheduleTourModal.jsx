import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { submitWebsiteForm } from '../utils/formSubmission';

export const ScheduleTourModal = ({ isOpen, onClose, initialProgram = '', onShowToast }) => {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childName: '',
    childAge: initialProgram || 'Toddler (1-2 Years)',
    campus: 'Al Mouj Campus',
    preferredDate: '',
    preferredTime: '09:00 AM - 10:00 AM',
    notes: ''
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const result = await submitWebsiteForm('tour-request-modal', formData);
    setIsSubmitting(false);

    if (result.ok) {
      setIsSuccess(true);
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // Fallback gracefully if canvas-confetti is not loaded
      }

      onShowToast(`Tour booked successfully for ${formData.parentName} at ${formData.campus}!`);
    } else {
      onShowToast(result.message);
    }
  };

  const handleClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="icon-button"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '36px',
            height: '36px',
            background: 'var(--bg-cream)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-muted)'
          }}
          aria-label="Close Tour Booking Modal"
        >
          <X size={20} />
        </button>

        {isSuccess ? (
          /* Success Screen */
          <div style={{ textAlign: 'center', padding: '20px 10px' }}>
            <div style={{
              width: '70px',
              height: '70px',
              borderRadius: '50%',
              background: 'var(--accent-green-light)',
              color: 'var(--accent-green)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px'
            }}>
              <CheckCircle size={40} />
            </div>

            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 700, marginBottom: '12px' }}>
              Tour Requested!
            </h3>

            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '24px' }}>
              Thank you, <strong>{formData.parentName}</strong>! We have reserved your provisional tour slot for <strong>{formData.childName || 'your child'}</strong> at our <strong>{formData.campus}</strong>.
            </p>

            <div style={{
              background: 'var(--bg-cream)',
              borderRadius: '20px',
              padding: '20px',
              textAlign: 'left',
              marginBottom: '28px',
              fontSize: '0.95rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <MapPin size={16} color="var(--primary-coral-dark)" />
                <strong>Campus:</strong> {formData.campus}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Calendar size={16} color="var(--secondary-teal-dark)" />
                <strong>Requested Date:</strong> {formData.preferredDate || 'Upcoming Sunday'}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Clock size={16} color="var(--accent-sun)" />
                <strong>Time Slot:</strong> {formData.preferredTime}
              </div>
            </div>

            <p style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginBottom: '24px' }}>
              Our admissions team will send an SMS & email confirmation shortly with parking and arrival instructions.
            </p>

            <button
              onClick={handleClose}
              className="btn btn-primary"
              style={{ width: '100%' }}
            >
              <span>Done</span>
            </button>
          </div>
        ) : (
          /* Booking Form */
          <div>
            <div className="section-tag" style={{ marginBottom: '12px' }}>
              <Sparkles size={16} />
              <span>Personalized Campus Visit</span>
            </div>

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 700, marginBottom: '8px' }}>
              Schedule Your Family Tour
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '24px' }}>
              Explore our light-filled ateliers, meet our educators, and experience Shomoukh firsthand.
            </p>

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }} className="modal-row-2">
                <div className="form-group">
                  <label className="form-label">Parent / Guardian Name *</label>
                  <input
                    id="modal-parent-name"
                    type="text"
                    required
                    placeholder="e.g. Salim Al-Harthy"
                    className="form-input"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone Number *</label>
                  <input
                    id="modal-phone"
                    type="tel"
                    required
                    placeholder="+968 9123 4567"
                    className="form-input"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }} className="modal-row-2">
                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input
                    id="modal-email"
                    type="email"
                    required
                    placeholder="salim@example.com"
                    className="form-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Child's Name & Age</label>
                  <input
                    id="modal-child"
                    type="text"
                    placeholder="e.g. Maya (2 Years)"
                    className="form-input"
                    value={formData.childName}
                    onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }} className="modal-row-2">
                <div className="form-group">
                  <label className="form-label">Select Campus *</label>
                  <select
                    id="modal-campus"
                    className="form-select"
                    value={formData.campus}
                    onChange={(e) => setFormData({ ...formData, campus: e.target.value })}
                  >
                    <option value="Al Mouj Campus">Al Mouj Campus</option>
                    <option value="Al Qurm Campus">Al Qurm Campus</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Program of Interest</label>
                  <select
                    id="modal-program"
                    className="form-select"
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

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }} className="modal-row-2">
                <div className="form-group">
                  <label className="form-label">Preferred Date *</label>
                  <input
                    id="modal-date"
                    type="date"
                    required
                    className="form-input"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Preferred Time Slot *</label>
                  <select
                    id="modal-time"
                    className="form-select"
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  >
                    <option value="08:30 AM - 09:30 AM">Morning: 08:30 AM – 09:30 AM</option>
                    <option value="10:00 AM - 11:00 AM">Mid-Morning: 10:00 AM – 11:00 AM</option>
                    <option value="01:30 PM - 02:30 PM">Afternoon: 01:30 PM – 02:30 PM</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Special Inquiries or Questions (Optional)</label>
                <textarea
                  id="modal-notes"
                  placeholder="Any questions or specific areas of interest..."
                  className="form-textarea"
                  style={{ minHeight: '80px' }}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
                style={{ width: '100%', padding: '16px', fontSize: '1.05rem' }}
              >
                {isSubmitting ? 'Reserving Tour Slot...' : 'Confirm Tour Booking'}
              </button>
            </form>
          </div>
        )}

      </div>

      <style>{`
        @media (max-width: 600px) {
          .modal-row-2 {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
