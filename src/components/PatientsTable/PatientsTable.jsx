import React, { useState } from 'react';
import { patients } from '../../data/mockData';
import './PatientsTable.scss';

const STATUS_MAP = {
  Critical:    'pill--critical',
  Admitted:    'pill--admitted',
  Observation: 'pill--obs',
  Discharged:  'pill--discharged',
};

const PatientsTable = () => {
  const [filter, setFilter] = useState('All');
  const statuses = ['All', 'Critical', 'Admitted', 'Observation', 'Discharged'];

  const filtered = filter === 'All' ? patients : patients.filter(p => p.status === filter);

  return (
    <div className="patients-table-card" data-testid="patients-table">
      <div className="table-header">
        <div>
          <h3 className="chart-title">Recent Patients</h3>
          <p className="chart-sub">Last admitted · live updates</p>
        </div>
        <button className="view-all-btn">View all →</button>
      </div>

      <div className="filter-tabs">
        {statuses.map(s => (
          <button
            key={s}
            className={`ftab ${filter === s ? 'active' : ''}`}
            onClick={() => setFilter(s)}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Patient</th>
              <th>Department</th>
              <th>Doctor</th>
              <th>Status</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(p => (
              <tr key={p.id} data-testid="patient-row">
                <td>
                  <div className="pt-name">{p.name}</div>
                  <div className="pt-id">{p.id}</div>
                </td>
                <td><span className="dept-tag">{p.dept}</span></td>
                <td className="doctor-col">{p.doctor}</td>
                <td>
                  <span className={`status-pill ${STATUS_MAP[p.status] || ''}`}>
                    {p.status}
                  </span>
                </td>
                <td className="time-col">{p.time}</td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan="5" className="empty-row">No patients found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientsTable;
