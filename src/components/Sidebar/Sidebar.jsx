import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.scss';

const NAV_MAIN = [
  { path: '/',            label: 'Dashboard',     badge: null,  icon: 'grid' },
  { path: '/patients',    label: 'Patients',      badge: '248', icon: 'users' },
  { path: '/appointments',label: 'Appointments',  badge: null,  icon: 'calendar' },
  { path: '/vitals',      label: 'Vitals Monitor',badge: null,  icon: 'activity' },
];

const NAV_MANAGE = [
  { path: '/revenue',     label: 'Revenue',       icon: 'dollar' },
  { path: '/departments', label: 'Departments',   icon: 'building' },
  { path: '/reports',     label: 'Reports',       icon: 'file' },
  { path: '/settings',    label: 'Settings',      icon: 'settings' },
];

const Icon = ({ name }) => {
  const icons = {
    grid:     <><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></>,
    users:    <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>,
    calendar: <><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></>,
    activity: <><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></>,
    dollar:   <><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></>,
    building: <><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></>,
    file:     <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></>,
    settings: <><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></>,
    logo:     <><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></>,
    chevron:  <><polyline points="9 18 15 12 9 6"/></>,
  };
  const fill = ['grid'].includes(name) ? 'currentColor' : 'none';
  const stroke = ['grid'].includes(name) ? 'none' : 'currentColor';
  return (
    <svg viewBox="0 0 24 24" fill={fill} stroke={stroke} strokeWidth="2"
         strokeLinecap="round" strokeLinejoin="round" className="nav-svg">
      {icons[name]}
    </svg>
  );
};

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      {/* Logo */}
      <div className="sidebar__logo">
        <div className="logo-icon">
          <Icon name="logo" />
        </div>
        {!collapsed && (
          <div className="logo-text-wrap">
            <span className="logo-text">Medi<span className="logo-accent">Pulse</span></span>
            <span className="logo-sub">Analytics Platform</span>
          </div>
        )}
        <button className="collapse-btn" onClick={() => setCollapsed(!collapsed)}>
          <Icon name="chevron" />
        </button>
      </div>

      {/* Main Nav */}
      <nav className="sidebar__nav">
        {!collapsed && <p className="nav-section-label">Overview</p>}
        {NAV_MAIN.map(item => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            <div className="nav-icon"><Icon name={item.icon} /></div>
            {!collapsed && <span className="nav-label">{item.label}</span>}
            {!collapsed && item.badge && <span className="nav-badge">{item.badge}</span>}
          </NavLink>
        ))}

        {!collapsed && <p className="nav-section-label" style={{ marginTop: '20px' }}>Management</p>}
        {NAV_MANAGE.map(item => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            <div className="nav-icon"><Icon name={item.icon} /></div>
            {!collapsed && <span className="nav-label">{item.label}</span>}
          </NavLink>
        ))}
      </nav>

      {/* User */}
      <div className="sidebar__footer">
        <div className="user-card">
          <div className="user-avatar">AD</div>
          {!collapsed && (
            <div className="user-info">
              <p className="user-name">Dr. Arun Das</p>
              <p className="user-role">Admin — City Hospital</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
