import React from 'react';
import { departments } from '../../data/mockData';
import './DeptOccupancy.scss';

const DeptOccupancy = () => {
  return (
    <div className="dept-occupancy" data-testid="dept-occupancy">
      <div className="chart-header">
        <div>
          <h3 className="chart-title">Department Occupancy</h3>
          <p className="chart-sub">Bed utilisation rate</p>
        </div>
      </div>

      <div className="dept-list">
        {departments.map(dept => {
          const pct = Math.round((dept.occupied / dept.total) * 100);
          const isHigh = pct >= 85;
          return (
            <div className="dept-row" key={dept.name} data-testid="dept-row">
              <div className="dept-top">
                <span className="dept-name">{dept.name}</span>
                <div className="dept-right">
                  {isHigh && <span className="dept-alert">High</span>}
                  <span className="dept-num">{dept.occupied}/{dept.total} beds</span>
                </div>
              </div>
              <div className="dept-bar" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
                <div
                  className="dept-fill"
                  style={{ width: `${pct}%`, background: dept.gradient }}
                />
              </div>
              <div className="dept-pct">{pct}% occupied</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DeptOccupancy;
