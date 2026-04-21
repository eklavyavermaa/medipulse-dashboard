import React, { useRef, useEffect } from 'react';
import { Chart, registerables } from 'chart.js';
import { appointmentData } from '../../data/mockData';
import './DonutChart.scss';

Chart.register(...registerables);

const DonutChart = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    const chart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: appointmentData.items.map(i => i.value),
          backgroundColor: appointmentData.items.map(i => i.color),
          borderColor: '#111827',
          borderWidth: 3,
          hoverOffset: 6,
        }],
      },
      options: {
        cutout: '72%',
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#1E2D45',
            borderColor: '#2D3F5A',
            borderWidth: 1,
            titleColor: '#F1F5F9',
            bodyColor: '#94A3B8',
            padding: 10,
            cornerRadius: 8,
            callbacks: {
              label: (ctx) => ` ${ctx.raw} appointments`,
            },
          },
        },
        animation: { animateRotate: true, duration: 800 },
      },
    });
    return () => chart.destroy();
  }, []);

  return (
    <div className="donut-chart" data-testid="donut-chart">
      <div className="chart-header">
        <div>
          <h3 className="chart-title">Appointment Status</h3>
          <p className="chart-sub">Today's breakdown</p>
        </div>
      </div>

      <div className="donut-wrap">
        <canvas ref={canvasRef} />
        <div className="donut-center">
          <div className="donut-num">{appointmentData.total}</div>
          <div className="donut-lbl">Total</div>
        </div>
      </div>

      <div className="legend-list">
        {appointmentData.items.map(item => {
          const pct = Math.round((item.value / appointmentData.total) * 100);
          return (
            <div className="legend-item" key={item.label}>
              <div className="legend-dot" style={{ background: item.color }} />
              <span className="legend-name">{item.label}</span>
              <span className="legend-val">{item.value}</span>
              <span className="legend-pct">{pct}%</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DonutChart;
