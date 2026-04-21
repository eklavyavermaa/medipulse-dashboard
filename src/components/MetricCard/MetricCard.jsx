import React, { useEffect, useRef } from 'react';
import './MetricCard.scss';

const ICONS = {
  patients: (
    <>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="4" width="18" height="18" rx="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </>
  ),
  revenue: (
    <>
      <line x1="12" y1="1" x2="12" y2="23"/>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
    </>
  ),
  alert: (
    <>
      <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"/>
      <line x1="12" y1="8" x2="12" y2="12"/>
      <line x1="12" y1="16" x2="12.01" y2="16"/>
    </>
  ),
};

const MetricCard = ({ label, value, prefix = '', suffix = '', trend, trendUp, sub, color, colorBg, icon, isText = false, delay = 0 }) => {
  const valueRef = useRef(null);

  useEffect(() => {
    if (isText) {
      if (valueRef.current) valueRef.current.textContent = value;
      return;
    }
    const target = typeof value === 'number' ? value : parseInt(value);
    const dur = 1400;
    const start = performance.now();
    let raf;

    const step = (now) => {
      const progress = Math.min((now - start) / dur, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      if (valueRef.current) {
        valueRef.current.textContent = `${prefix}${Math.floor(target * ease)}${suffix}`;
      }
      if (progress < 1) raf = requestAnimationFrame(step);
    };

    const timeout = setTimeout(() => { raf = requestAnimationFrame(step); }, delay);
    return () => { clearTimeout(timeout); cancelAnimationFrame(raf); };
  }, [value, isText, prefix, suffix, delay]);

  return (
    <div className="metric-card" style={{ animationDelay: `${delay / 1000}s` }} data-testid="metric-card">
      <div className="metric-card__top">
        <div className="metric-card__icon" style={{ background: colorBg }}>
          <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"
               strokeLinecap="round" strokeLinejoin="round">
            {ICONS[icon]}
          </svg>
        </div>
        <div className={`metric-card__trend ${trendUp ? 'trend-up' : 'trend-down'}`}>
          {trendUp ? '↑' : '↑'} {trend}
        </div>
      </div>

      <div className="metric-card__value" ref={valueRef} data-testid="metric-value">
        {isText ? value : `${prefix}0${suffix}`}
      </div>
      <div className="metric-card__label" data-testid="metric-label">{label}</div>
      <div className="metric-card__sub">{sub}</div>

      <div className="metric-card__glow" style={{ background: color }} />
    </div>
  );
};

export default MetricCard;
