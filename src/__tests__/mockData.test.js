import { metrics, admissionsData, appointmentData, departments, patients } from '../data/mockData';

describe('mockData', () => {
  describe('metrics', () => {
    test('has 4 metric items', () => {
      expect(metrics).toHaveLength(4);
    });
    test('each metric has required fields', () => {
      metrics.forEach(m => {
        expect(m).toHaveProperty('id');
        expect(m).toHaveProperty('label');
        expect(m).toHaveProperty('value');
        expect(m).toHaveProperty('trend');
        expect(m).toHaveProperty('icon');
      });
    });
  });

  describe('admissionsData', () => {
    test('has week, month, quarter keys', () => {
      expect(admissionsData).toHaveProperty('week');
      expect(admissionsData).toHaveProperty('month');
      expect(admissionsData).toHaveProperty('quarter');
    });
    test('week has 7 data points', () => {
      expect(admissionsData.week.labels).toHaveLength(7);
      expect(admissionsData.week.admissions).toHaveLength(7);
    });
  });

  describe('appointmentData', () => {
    test('total equals sum of items', () => {
      const sum = appointmentData.items.reduce((a, b) => a + b.value, 0);
      expect(sum).toBe(appointmentData.total);
    });
    test('has 4 status categories', () => {
      expect(appointmentData.items).toHaveLength(4);
    });
  });

  describe('departments', () => {
    test('has 6 departments', () => {
      expect(departments).toHaveLength(6);
    });
    test('each department has occupied and total', () => {
      departments.forEach(d => {
        expect(d.occupied).toBeLessThanOrEqual(d.total);
        expect(d.occupied).toBeGreaterThan(0);
      });
    });
  });

  describe('patients', () => {
    test('has 6 patients', () => {
      expect(patients).toHaveLength(6);
    });
    test('each patient has required fields', () => {
      patients.forEach(p => {
        expect(p).toHaveProperty('id');
        expect(p).toHaveProperty('name');
        expect(p).toHaveProperty('dept');
        expect(p).toHaveProperty('status');
      });
    });
    test('all patient IDs start with #PT-', () => {
      patients.forEach(p => {
        expect(p.id).toMatch(/^#PT-\d+$/);
      });
    });
  });
});
