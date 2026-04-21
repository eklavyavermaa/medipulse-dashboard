import React from 'react';
import { render, screen } from '@testing-library/react';
import MetricCard from '../components/MetricCard/MetricCard';

const baseProps = {
  id: 1,
  label: 'Total Patients Today',
  value: 284,
  prefix: '',
  suffix: '',
  trend: '+12.4%',
  trendUp: true,
  sub: '248 admitted · 36 discharged',
  color: '#00C8A0',
  colorBg: 'rgba(0,200,160,0.15)',
  icon: 'patients',
  delay: 0,
};

describe('MetricCard', () => {
  test('renders the metric label', () => {
    render(<MetricCard {...baseProps} />);
    expect(screen.getByTestId('metric-label')).toHaveTextContent('Total Patients Today');
  });

  test('renders the card container', () => {
    render(<MetricCard {...baseProps} />);
    expect(screen.getByTestId('metric-card')).toBeInTheDocument();
  });

  test('renders trend badge with correct text', () => {
    render(<MetricCard {...baseProps} />);
    expect(screen.getByText(/12.4%/)).toBeInTheDocument();
  });

  test('renders sub text correctly', () => {
    render(<MetricCard {...baseProps} />);
    expect(screen.getByText(/248 admitted/)).toBeInTheDocument();
  });

  test('renders text value directly when isText=true', () => {
    render(<MetricCard {...baseProps} value="₹4.1L" isText={true} />);
    expect(screen.getByTestId('metric-value')).toHaveTextContent('₹4.1L');
  });

  test('applies trend-down class when trendUp is false', () => {
    const { container } = render(<MetricCard {...baseProps} trendUp={false} trend="+2 cases" />);
    expect(container.querySelector('.trend-down')).toBeInTheDocument();
  });

  test('applies trend-up class when trendUp is true', () => {
    const { container } = render(<MetricCard {...baseProps} trendUp={true} />);
    expect(container.querySelector('.trend-up')).toBeInTheDocument();
  });
});
