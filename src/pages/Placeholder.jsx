import React from 'react';

const pageStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '60vh',
  color: '#64748B',
  gap: '12px',
};

const titleStyle = {
  fontSize: '20px',
  fontWeight: '700',
  color: '#94A3B8',
};

const subStyle = {
  fontSize: '13px',
};

export const Patients      = () => <div style={pageStyle}><p style={titleStyle}>Patients</p><p style={subStyle}>Coming soon — build this next!</p></div>;
export const Appointments  = () => <div style={pageStyle}><p style={titleStyle}>Appointments</p><p style={subStyle}>Coming soon</p></div>;
export const Vitals        = () => <div style={pageStyle}><p style={titleStyle}>Vitals Monitor</p><p style={subStyle}>Coming soon</p></div>;
export const Revenue       = () => <div style={pageStyle}><p style={titleStyle}>Revenue</p><p style={subStyle}>Coming soon</p></div>;
export const Departments   = () => <div style={pageStyle}><p style={titleStyle}>Departments</p><p style={subStyle}>Coming soon</p></div>;
export const Reports       = () => <div style={pageStyle}><p style={titleStyle}>Reports</p><p style={subStyle}>Coming soon</p></div>;
export const Settings      = () => <div style={pageStyle}><p style={titleStyle}>Settings</p><p style={subStyle}>Coming soon</p></div>;
export const NotFound      = () => <div style={pageStyle}><p style={titleStyle}>404</p><p style={subStyle}>Page not found</p></div>;
