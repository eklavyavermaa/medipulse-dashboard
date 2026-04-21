import React from 'react';
import MetricCard      from '../../components/MetricCard/MetricCard';
import AdmissionsChart from '../../components/AdmissionsChart/AdmissionsChart';
import DonutChart      from '../../components/DonutChart/DonutChart';
import DeptOccupancy   from '../../components/DeptOccupancy/DeptOccupancy';
import PatientsTable   from '../../components/PatientsTable/PatientsTable';
import { metrics }     from '../../data/mockData';
import './Dashboard.scss';

const Dashboard = () => {
  return (
    <div className="dashboard">

      {/* ── KPI Metrics ─────────────────────────── */}
      <section className="dashboard__metrics" aria-label="Key metrics">
        {metrics.map((m, i) => (
          <MetricCard key={m.id} {...m} delay={i * 80} />
        ))}
      </section>

      {/* ── Charts Row ──────────────────────────── */}
      <section className="dashboard__charts" aria-label="Charts">
        <AdmissionsChart />
        <DonutChart />
      </section>

      {/* ── Bottom Row ──────────────────────────── */}
      <section className="dashboard__bottom" aria-label="Department and patients">
        <DeptOccupancy />
        <PatientsTable />
      </section>

    </div>
  );
};

export default Dashboard;
