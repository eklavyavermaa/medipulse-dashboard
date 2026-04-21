# MediPulse — Healthcare Analytics Dashboard

A production-grade Healthcare Analytics Dashboard built with ReactJS, SASS, Bootstrap principles, Chart.js, React Router v6, and Jest unit tests. Built to demonstrate frontend engineering skills for the JTG Front End Developer role.

---

## Tech Stack

| Layer        | Technology                          |
|--------------|-------------------------------------|
| UI Framework | ReactJS 18 + React Router v6        |
| Styling      | SASS (variables, mixins, BEM)       |
| Charts       | Chart.js 4 + react-chartjs-2        |
| Testing      | Jest + React Testing Library        |
| Deployment   | Vercel (free)                       |
| Fonts        | Plus Jakarta Sans + DM Mono         |

---

## Project Structure

```
medipulse/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Sidebar/
│   │   │   ├── Sidebar.jsx       # Collapsible sidebar with NavLink routing
│   │   │   └── Sidebar.scss
│   │   ├── Topbar/
│   │   │   ├── Topbar.jsx        # Search, date badge, notifications
│   │   │   └── Topbar.scss
│   │   ├── MetricCard/
│   │   │   ├── MetricCard.jsx    # Animated counter KPI card
│   │   │   └── MetricCard.scss
│   │   ├── AdmissionsChart/
│   │   │   ├── AdmissionsChart.jsx  # Line chart with Week/Month/Quarter tabs
│   │   │   └── AdmissionsChart.scss
│   │   ├── DonutChart/
│   │   │   ├── DonutChart.jsx    # Appointment status donut
│   │   │   └── DonutChart.scss
│   │   ├── DeptOccupancy/
│   │   │   ├── DeptOccupancy.jsx # Animated department bed bars
│   │   │   └── DeptOccupancy.scss
│   │   └── PatientsTable/
│   │       ├── PatientsTable.jsx # Filterable patient records table
│   │       └── PatientsTable.scss
│   ├── pages/
│   │   ├── Dashboard/
│   │   │   ├── Dashboard.jsx     # Main dashboard page
│   │   │   └── Dashboard.scss
│   │   └── Placeholder.jsx       # Stub pages for other routes
│   ├── data/
│   │   └── mockData.js           # All mock data in one place
│   ├── styles/
│   │   ├── _variables.scss       # Colors, fonts, spacing tokens
│   │   ├── _mixins.scss          # Reusable SASS mixins
│   │   └── global.scss           # Global resets + keyframes
│   ├── __tests__/
│   │   ├── MetricCard.test.jsx
│   │   ├── PatientsTable.test.jsx
│   │   ├── DeptOccupancy.test.jsx
│   │   └── mockData.test.js
│   ├── App.jsx                   # Root component with BrowserRouter
│   ├── App.scss
│   └── index.js                  # ReactDOM entry point
├── vercel.json                   # SPA routing fix for Vercel
├── .gitignore
└── package.json
```

---

## Getting Started (VS Code)

### Prerequisites
- Node.js v18 or above → https://nodejs.org
- VS Code → https://code.visualstudio.com

### Step 1 — Open in VS Code
Unzip the project folder. Open VS Code and go to:
```
File → Open Folder → select the medipulse folder
```

### Step 2 — Install Dependencies
Open the integrated terminal in VS Code (`Ctrl + `` ` ``):
```bash
npm install
```
This installs React, SASS, Chart.js, React Router, and all testing libraries.

### Step 3 — Start Dev Server
```bash
npm start
```
The app opens at **http://localhost:3000** automatically.

### Step 4 — Run Tests
```bash
npm test
```
Press `a` to run all tests. You'll see 4 test suites with 27 tests total.

### Step 5 — Build for Production
```bash
npm run build
```
Creates an optimized `/build` folder ready to deploy.

---

## Deploy to Vercel (Free — 5 minutes)

1. Push your code to GitHub
   ```bash
   git init
   git add .
   git commit -m "feat: MediPulse healthcare dashboard"
   git remote add origin https://github.com/YOUR_USERNAME/medipulse.git
   git push -u origin main
   ```

2. Go to **https://vercel.com** → Sign up with GitHub (free)

3. Click **"Add New Project"** → Import your `medipulse` repo

4. Leave all settings as default → Click **"Deploy"**

5. Live URL -- https://medipulse-dashboard.vercel.app/
 

The `vercel.json` file is already included — it handles React Router client-side routing automatically.

---

## Key Features to Highlight in Interview

| Feature                        | Where                              |
|--------------------------------|------------------------------------|
| Reusable React components      | All files in `/components`         |
| SASS variables & mixins        | `src/styles/_variables.scss`       |
| Responsive design              | SASS `@include md/lg/xl` mixins    |
| Chart.js data visualisation    | AdmissionsChart, DonutChart        |
| React Router v6 navigation     | App.jsx                            |
| Animated counters              | MetricCard.jsx (requestAnimFrame)  |
| Unit tests (27 tests)          | `src/__tests__/`                   |
| Live filter (patients table)   | PatientsTable.jsx                  |
| Collapsible sidebar            | Sidebar.jsx                        |
| Accessibility (aria labels)    | DeptOccupancy, Topbar              |

---

## Recommended VS Code Extensions

Install these for a better dev experience:

- **ES7+ React/Redux/React-Native snippets** — shortcuts for `rafce`, `useState` etc.
- **SCSS IntelliSense** — autocomplete for SASS variables and mixins
- **Prettier** — auto-format on save
- **GitLens** — see Git history inline

---

Built by Eklavya Verma · JTG Front End Developer Application · 2026
