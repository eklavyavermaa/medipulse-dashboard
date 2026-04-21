import React from 'react';
import { render, screen } from '@testing-library/react';
import DeptOccupancy from '../components/DeptOccupancy/DeptOccupancy';

describe('DeptOccupancy', () => {
  test('renders the component', () => {
    render(<DeptOccupancy />);
    expect(screen.getByTestId('dept-occupancy')).toBeInTheDocument();
  });

  test('renders section title', () => {
    render(<DeptOccupancy />);
    expect(screen.getByText('Department Occupancy')).toBeInTheDocument();
  });

  test('renders all 6 departments', () => {
    render(<DeptOccupancy />);
    const rows = screen.getAllByTestId('dept-row');
    expect(rows).toHaveLength(6);
  });

  test('renders Cardiology department', () => {
    render(<DeptOccupancy />);
    expect(screen.getByText('Cardiology')).toBeInTheDocument();
  });

  test('renders ICU department', () => {
    render(<DeptOccupancy />);
    expect(screen.getByText('ICU')).toBeInTheDocument();
  });

  test('renders bed counts correctly for Cardiology', () => {
    render(<DeptOccupancy />);
    expect(screen.getByText('38/42 beds')).toBeInTheDocument();
  });

  test('shows High alert for departments above 85% occupancy', () => {
    render(<DeptOccupancy />);
    const highBadges = screen.getAllByText('High');
    expect(highBadges.length).toBeGreaterThanOrEqual(2);
  });

  test('renders progress bars with correct aria attributes', () => {
    render(<DeptOccupancy />);
    const bars = screen.getAllByRole('progressbar');
    expect(bars).toHaveLength(6);
    bars.forEach(bar => {
      expect(bar).toHaveAttribute('aria-valuemin', '0');
      expect(bar).toHaveAttribute('aria-valuemax', '100');
    });
  });
});
