import React, { useEffect } from 'react';
import { CheckCircle, X } from 'lucide-react';

export const NotificationToast = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  if (!message) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      zIndex: 2000,
      background: '#23313E',
      color: '#FFFFFF',
      padding: '16px 24px',
      borderRadius: '16px',
      boxShadow: '0 15px 35px rgba(0,0,0,0.25)',
      display: 'flex',
      alignItems: 'center',
      gap: '14px',
      animation: 'slideUp 0.3s ease-out',
      maxWidth: '420px'
    }}>
      <CheckCircle size={24} color="#89B890" style={{ flexShrink: 0 }} />
      <div style={{ flex: 1, fontSize: '0.95rem', lineHeight: '1.4' }}>
        {message}
      </div>
      <button 
        onClick={onClose}
        style={{ color: '#8E9EA9', hover: { color: '#FFFFFF' } }}
        aria-label="Close notification"
      >
        <X size={18} />
      </button>
    </div>
  );
};
