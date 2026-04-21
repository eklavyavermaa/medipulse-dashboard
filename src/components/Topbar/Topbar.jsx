import React from 'react';
import './Topbar.scss';

const Topbar = () => {
  const now = new Date();
  const dateStr = now.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });

  const hour = now.getHours();
  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';

  return (
    <header className="topbar">
      <div className="topbar__left">
        <h1 className="topbar__title">{greeting}, Dr. Das 👋</h1>
        <p className="topbar__sub">
          <span className="live-dot" aria-label="Live" />
          &nbsp; Live — Last updated 2 min ago
        </p>
      </div>

      <div className="topbar__right">
        <div className="search-box">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
               strokeLinecap="round" className="search-icon">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input placeholder="Search patients, records…" aria-label="Search" />
        </div>

        <span className="date-badge">{dateStr}</span>

        <button className="icon-btn" aria-label="Notifications">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
          </svg>
          <span className="notif-dot" />
        </button>

        <button className="icon-btn" aria-label="Menu">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="4" y1="6" x2="20" y2="6"/>
            <line x1="4" y1="12" x2="20" y2="12"/>
            <line x1="4" y1="18" x2="20" y2="18"/>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Topbar;
