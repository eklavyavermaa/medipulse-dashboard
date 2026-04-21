// ─── KPI Metrics ─────────────────────────────────────────────────
export const metrics = [
  {
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
  },
  {
    id: 2,
    label: 'Appointments Today',
    value: 124,
    prefix: '',
    suffix: '',
    trend: '+8.1%',
    trendUp: true,
    sub: '41 completed · 12 pending',
    color: '#3B82F6',
    colorBg: 'rgba(59,130,246,0.15)',
    icon: 'calendar',
  },
  {
    id: 3,
    label: 'Revenue This Week',
    value: '₹4.1L',
    prefix: '',
    suffix: '',
    trend: '+5.7%',
    trendUp: true,
    sub: '₹3.2L collected · ₹0.9L pending',
    color: '#F59E0B',
    colorBg: 'rgba(245,158,11,0.15)',
    icon: 'revenue',
    isText: true,
  },
  {
    id: 4,
    label: 'Critical Cases',
    value: 7,
    prefix: '',
    suffix: '',
    trend: '+2 cases',
    trendUp: false,
    sub: '3 in ICU · 4 in observation',
    color: '#EF4444',
    colorBg: 'rgba(239,68,68,0.15)',
    icon: 'alert',
  },
];

// ─── Admissions Chart Data ────────────────────────────────────────
export const admissionsData = {
  week: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    admissions: [62, 78, 55, 91, 83, 47, 72],
    discharges:  [48, 61, 44, 72, 68, 39, 58],
  },
  month: {
    labels: ['Wk 1','Wk 2','Wk 3','Wk 4'],
    admissions: [310, 398, 287, 422],
    discharges:  [280, 350, 260, 380],
  },
  quarter: {
    labels: ['Jan','Feb','Mar','Apr'],
    admissions: [1240, 1380, 1190, 1450],
    discharges:  [1100, 1240, 1080, 1310],
  },
};

// ─── Appointment Donut Data ───────────────────────────────────────
export const appointmentData = {
  total: 124,
  items: [
    { label: 'Completed',  value: 67, color: '#00C8A0' },
    { label: 'Scheduled',  value: 31, color: '#3B82F6' },
    { label: 'In Progress',value: 19, color: '#F59E0B' },
    { label: 'Cancelled',  value:  7, color: '#EF4444' },
  ],
};

// ─── Department Occupancy ─────────────────────────────────────────
export const departments = [
  { name: 'Cardiology',   occupied: 38, total: 42, color: '#EF4444', gradient: 'linear-gradient(90deg,#EF4444,#F87171)' },
  { name: 'Neurology',    occupied: 28, total: 40, color: '#F59E0B', gradient: 'linear-gradient(90deg,#F59E0B,#FCD34D)' },
  { name: 'Orthopedics',  occupied: 22, total: 35, color: '#3B82F6', gradient: 'linear-gradient(90deg,#3B82F6,#60A5FA)' },
  { name: 'Pediatrics',   occupied: 18, total: 30, color: '#8B5CF6', gradient: 'linear-gradient(90deg,#8B5CF6,#A78BFA)' },
  { name: 'General Ward', occupied: 31, total: 60, color: '#00C8A0', gradient: 'linear-gradient(90deg,#00C8A0,#34D399)' },
  { name: 'ICU',          occupied:  9, total: 10, color: '#EF4444', gradient: 'linear-gradient(90deg,#EF4444,#F87171)' },
];

// ─── Patients Table Data ──────────────────────────────────────────
export const patients = [
  { id: '#PT-0041', name: 'Riya Sharma',   dept: 'Cardiology', doctor: 'Dr. Mehra',  status: 'Critical',    time: '08:14 AM' },
  { id: '#PT-0040', name: 'Arjun Patel',   dept: 'Ortho',      doctor: 'Dr. Singh',  status: 'Admitted',    time: '08:02 AM' },
  { id: '#PT-0039', name: 'Meera Nair',    dept: 'Neurology',  doctor: 'Dr. Kapoor', status: 'Observation', time: '07:48 AM' },
  { id: '#PT-0038', name: 'Vikram Joshi',  dept: 'General',    doctor: 'Dr. Reddy',  status: 'Discharged',  time: '07:30 AM' },
  { id: '#PT-0037', name: 'Sunita Rao',    dept: 'Pediatrics', doctor: 'Dr. Pillai', status: 'Admitted',    time: '07:15 AM' },
  { id: '#PT-0036', name: 'Rahul Gupta',   dept: 'ICU',        doctor: 'Dr. Anand',  status: 'Critical',    time: '06:50 AM' },
];
