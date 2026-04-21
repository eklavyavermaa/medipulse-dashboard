import React, { useState, useRef, useEffect } from 'react';
import { Chart, registerables } from 'chart.js';
import { admissionsData } from '../../data/mockData';
import './AdmissionsChart.scss';

Chart.register(...registerables);

const TABS = ['week', 'month', 'quarter'];

const AdmissionsChart = () => {
  const [activeTab, setActiveTab] = useState('week');
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');

    const grad1 = ctx.createLinearGradient(0, 0, 0, 220);
    grad1.addColorStop(0, 'rgba(0,200,160,0.28)');
    grad1.addColorStop(1, 'rgba(0,200,160,0)');

    const grad2 = ctx.createLinearGradient(0, 0, 0, 220);
    grad2.addColorStop(0, 'rgba(59,130,246,0.22)');
    grad2.addColorStop(1, 'rgba(59,130,246,0)');

    const { labels, admissions, discharges } = admissionsData[activeTab];

    if (chartRef.current) chartRef.current.destroy();

    chartRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: 'Admissions',
            data: admissions,
            borderColor: '#00C8A0',
            backgroundColor: grad1,
            borderWidth: 2.5,
            tension: 0.4,
            pointRadius: 4,
            pointBackgroundColor: '#00C8A0',
            pointBorderColor: '#111827',
            pointBorderWidth: 2,
            fill: true,
          },
          {
            label: 'Discharges',
            data: discharges,
            borderColor: '#3B82F6',
            backgroundColor: grad2,
            borderWidth: 2.5,
            tension: 0.4,
            pointRadius: 4,
            pointBackgroundColor: '#3B82F6',
            pointBorderColor: '#111827',
            pointBorderWidth: 2,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            display: true,
            position: 'top',
            labels: {
              color: '#94A3B8',
              font: { family: "'Plus Jakarta Sans'", size: 11 },
              boxWidth: 10,
              usePointStyle: true,
              pointStyle: 'circle',
              padding: 16,
            },
          },
          tooltip: {
            backgroundColor: '#1E2D45',
            borderColor: '#2D3F5A',
            borderWidth: 1,
            titleColor: '#F1F5F9',
            bodyColor: '#94A3B8',
            padding: 10,
            cornerRadius: 8,
            titleFont: { family: "'Plus Jakarta Sans'", weight: '600' },
          },
        },
        scales: {
          x: {
            grid: { color: 'rgba(255,255,255,0.04)' },
            ticks: { color: '#64748B', font: { family: "'Plus Jakarta Sans'", size: 11 } },
          },
          y: {
            grid: { color: 'rgba(255,255,255,0.04)' },
            ticks: { color: '#64748B', font: { family: "'Plus Jakarta Sans'", size: 11 } },
            beginAtZero: true,
          },
        },
        animation: { duration: 600, easing: 'easeInOutQuart' },
      },
    });

    return () => { if (chartRef.current) chartRef.current.destroy(); };
  }, [activeTab]);

  return (
    <div className="admissions-chart" data-testid="admissions-chart">
      <div className="chart-header">
        <div>
          <h3 className="chart-title">Patient Admissions Flow</h3>
          <p className="chart-sub">Daily admissions &amp; discharges — April 2026</p>
        </div>
        <div className="chart-tabs">
          {TABS.map(tab => (
            <button
              key={tab}
              className={`ctab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>
      <canvas ref={canvasRef} height="130" />
    </div>
  );
};

export default AdmissionsChart;
