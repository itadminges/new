import React from 'react';
import { Baby, BookOpen, HeartHandshake, MapPin, ShieldCheck, Sparkles } from 'lucide-react';

const iconMap = {
  promise: HeartHandshake,
  admissions: BookOpen,
  tour: MapPin,
  care: Baby,
  safety: ShieldCheck,
  discovery: Sparkles
};

export const PremiumIllustration = ({ variant = 'promise', title = 'Shomoukh early years illustration' }) => {
  const Icon = iconMap[variant] || Sparkles;

  return (
    <div className={`premium-illustration premium-illustration-${variant}`} role="img" aria-label={title}>
      <svg viewBox="0 0 520 420" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id={`sky-${variant}`} x1="82" y1="16" x2="410" y2="360" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E9F3F6" />
            <stop offset="1" stopColor="#FFF7F1" />
          </linearGradient>
          <linearGradient id={`coral-${variant}`} x1="116" y1="108" x2="358" y2="312" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F68F29" />
            <stop offset="1" stopColor="#E74C25" />
          </linearGradient>
          <filter id={`soft-shadow-${variant}`} x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="18" stdDeviation="18" floodColor="#0A303A" floodOpacity="0.14" />
          </filter>
        </defs>

        <path d="M91 71C148 12 270 2 354 34C447 70 496 166 464 260C431 357 315 405 210 385C101 364 31 288 42 185C47 139 60 104 91 71Z" fill={`url(#sky-${variant})`} />
        <path d="M125 268C156 214 204 178 263 165C326 151 382 171 414 214C365 286 294 324 213 320C173 318 143 300 125 268Z" fill="#A0C3CE" opacity="0.36" />
        <path d="M129 254L253 142L395 254V332C395 347 383 359 368 359H156C141 359 129 347 129 332V254Z" fill="#FFFFFF" filter={`url(#soft-shadow-${variant})`} />
        <path d="M105 261L253 127L421 261" fill="none" stroke={`url(#coral-${variant})`} strokeWidth="22" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M184 230C184 208 202 190 224 190H302C324 190 342 208 342 230V359H184V230Z" fill="#FAF7F2" />
        <path d="M213 248H246V281H213V248ZM280 248H313V281H280V248Z" fill="#A0C3CE" opacity="0.82" />
        <path d="M234 333C234 317 247 304 263 304C279 304 292 317 292 333V359H234V333Z" fill="#0A303A" />
        <path d="M98 345C156 369 241 380 332 366C377 359 415 347 448 330" stroke="#8AB73A" strokeWidth="16" strokeLinecap="round" opacity="0.55" />
        <circle cx="393" cy="116" r="34" fill="#FADFA1" />
        <path d="M79 136C104 116 128 114 151 136C126 156 102 158 79 136Z" fill="#8AB73A" opacity="0.72" />
        <path d="M359 68C384 48 408 46 431 68C406 88 382 90 359 68Z" fill="#E74C25" opacity="0.58" />
        <circle cx="116" cy="312" r="12" fill="#F68F29" opacity="0.6" />
        <circle cx="424" cy="303" r="10" fill="#0A303A" opacity="0.24" />
      </svg>
      <div className="premium-illustration-badge" aria-hidden="true">
        <Icon size={24} />
      </div>
    </div>
  );
};
