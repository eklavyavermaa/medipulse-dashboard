import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar   from './components/Sidebar/Sidebar';
import Topbar    from './components/Topbar/Topbar';
import Dashboard from './pages/Dashboard/Dashboard';
import {
  Patients, Appointments, Vitals,
  Revenue, Departments, Reports, Settings, NotFound
} from './pages/Placeholder';
import './App.scss';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Sidebar />
        <div className="app-content">
          <Topbar />
          <main className="app-main">
            <Routes>
              <Route path="/"             element={<Dashboard />} />
              <Route path="/patients"     element={<Patients />} />
              <Route path="/appointments" element={<Appointments />} />
              <Route path="/vitals"       element={<Vitals />} />
              <Route path="/revenue"      element={<Revenue />} />
              <Route path="/departments"  element={<Departments />} />
              <Route path="/reports"      element={<Reports />} />
              <Route path="/settings"     element={<Settings />} />
              <Route path="*"             element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
