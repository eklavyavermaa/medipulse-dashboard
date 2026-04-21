import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PatientsTable from '../components/PatientsTable/PatientsTable';

describe('PatientsTable', () => {
  test('renders the table container', () => {
    render(<PatientsTable />);
    expect(screen.getByTestId('patients-table')).toBeInTheDocument();
  });

  test('renders all 6 patients by default', () => {
    render(<PatientsTable />);
    const rows = screen.getAllByTestId('patient-row');
    expect(rows).toHaveLength(6);
  });

  test('renders correct column headers', () => {
    render(<PatientsTable />);
    expect(screen.getByText('Patient')).toBeInTheDocument();
    expect(screen.getByText('Department')).toBeInTheDocument();
    expect(screen.getByText('Doctor')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
    expect(screen.getByText('Time')).toBeInTheDocument();
  });

  test('filters patients by Critical status', () => {
    render(<PatientsTable />);
    fireEvent.click(screen.getByRole('button', { name: 'Critical' }));
    const rows = screen.getAllByTestId('patient-row');
    expect(rows).toHaveLength(2);
  });

  test('filters patients by Discharged status', () => {
    render(<PatientsTable />);
    fireEvent.click(screen.getByRole('button', { name: 'Discharged' }));
    const rows = screen.getAllByTestId('patient-row');
    expect(rows).toHaveLength(1);
  });

  test('shows all patients when All tab is clicked', () => {
    render(<PatientsTable />);
    fireEvent.click(screen.getByRole('button', { name: 'Critical' }));
    fireEvent.click(screen.getByRole('button', { name: 'All' }));
    const rows = screen.getAllByTestId('patient-row');
    expect(rows).toHaveLength(6);
  });

  test('renders patient name Riya Sharma', () => {
    render(<PatientsTable />);
    expect(screen.getByText('Riya Sharma')).toBeInTheDocument();
  });

  test('renders patient ID in mono format', () => {
    render(<PatientsTable />);
    expect(screen.getByText('#PT-0041')).toBeInTheDocument();
  });
});