# OliveIoT Environment Monitoring Platform

[![Next.js](https://img.shields.io/badge/Next.js-16.2.9-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

An enterprise-grade, highly responsive AIoT (Artificial Intelligence of Things) environment auditing dashboard designed to aggregate, parse, analyze, and alert on real-time ambient environment telemetry from industrial sensor arrays.

* **Live Platform Demo:** [https://oliveiot-environment-monitor.vercel.app](https://oliveiot-environment-monitor-placeholder.vercel.app) *(Vercel Placeholder)*
* **GitHub Repository:** [https://github.com/username/oliveiot-environment-monitor](https://github.com/username/oliveiot-environment-monitor-placeholder) *(GitHub Placeholder)*

---

## 📖 Project Overview & Problem Statement

### The Problem
Industrial operations, manufacturing facilities, warehouses, and corporate complexes require tight monitoring of atmospheric conditions. Factors like high particulate matter ($PM_{2.5}$), unsafe carbon dioxide ($CO_2$) concentration, or unchecked humidity can compromise safety protocols, ruin stored inventory, or trigger strict regulatory non-compliance audits. 

### The Solution
**OliveIoT** bridges the gap between hardware telemetry and operational monitoring. It ingests simulated high-frequency sensor readings, runs real-time rule evaluations, alerts personnel on compliance breaches, and renders analytical trend graphs on an interactive, secure client-side dashboard dashboard.

---

## ✨ Key Features Implemented

1. **🔐 Multi-Role Authentication Flow**
   - Direct, server-side landing-path redirects (`/` ➔ `/login`) preventing content flashes.
   - Comprehensive client-side form validation (checks for empty fields, wrong credentials, or unmatched access roles).
   - Local mock-user sessions stored securely in browser `localStorage`.
2. **📱 Responsive Dashboard Layout**
   - Top-pinned horizontal navbar with left-aligned hamburger controls on all screen viewports.
   - Vertically scrollable sidebar drawer container with animated translations (`translate-x`) and link-highlight matching.
   - Click-outside drawer backdrop listener to close navigation on mobile.
3. **📊 Real-time Sensor Metrics**
   - KPI metrics cards complete with progress ratios and status levels.
   - Gauges and simulated real-time data intervals triggering changes every 5 seconds.
4. **🗺️ Site & Station Management**
   - Visual lists with active/inactive pulsing status tags.
   - Interactive modal forms to Add, Edit, and View station setups.
5. **📈 Analytical Trends & Graphing**
   - React 19 hydration-safe Recharts charts (Line, Bar) preventing server-side rendering offset warnings.
   - Visual skeletons that load during client mounting.
6. **🏭 Air Quality & Compliance**
   - Visual indices representing particulate matter, sulfur, and carbon components.
   - Correct, formatted chemical naming ($PM_{2.5}$, $CO_2$, $SO_2$).
7. **⚙️ Interactive System Architecture Diagram**
   - Custom SVG-based pipeline representation showing horizontal streaming pathways on Desktop, and vertical stacking on Mobile.
   - Dash-offset CSS keyframe animations representing active data flows.

---

## 👥 Access Roles & Demo Credentials

Select the appropriate **Access Role** in the login form and enter the corresponding demo credentials:

| Access Role | Username / Email | Password | Allowed Access Level |
| :--- | :--- | :--- | :--- |
| **Super Admin** | `admin@oliveiot.com` | `olive123` | Root configuration access & system override |
| **Site Admin** | `siteadmin@oliveiot.com` | `site123` | Local station edit & node configuration |
| **Safety Officer** | `safety@oliveiot.com` | `safety123` | Read-write logs & alert resolution logs |
| **Viewer** | `viewer@oliveiot.com` | `viewer123` | Read-only metrics & dashboard viewing |

---

## 🛠️ Technology Stack Used

- **Framework**: [Next.js 16.2.9](https://nextjs.org/) (App Router & Static Exporting)
- **UI Libraries**: [React 19.2.4](https://react.dev/), [Recharts v2](https://recharts.org/) (Client-side chart plotting)
- **Styling**: [Tailwind CSS v4.0](https://tailwindcss.com/) (using native CSS imports), custom Poppins global font family
- **Scripting**: [TypeScript v5.0](https://www.typescriptlang.org/), ES6 Modules
- **State & Session Persistence**: HTML5 `localStorage` API

---

## 📁 Project Structure

```bash
oliveiot-environment-monitor/
├── app/                        # Next.js App Router Structure
│   ├── (auth)/
│   │   └── login/              # Login Form & Verification Logic
│   ├── (dashboard)/
│   │   ├── air-quality/        # AQI chemical indicators
│   │   ├── alerts/             # System Alarm logs
│   │   ├── architecture/       # Responsive SVG Architecture Diagram
│   │   ├── charts/             # Hydration-safe Recharts Trends
│   │   ├── dashboard/          # Central Operational Overview
│   │   ├── monitoring/         # Live 5s refresh metric grids
│   │   ├── profile/            # Dynamic localStorage session page
│   │   ├── reports/            # Compliance export logs
│   │   ├── stations/           # Add/Edit/View monitoring sites
│   │   └── layout.tsx          # Shared Dashboard navbar & layout
│   ├── globals.css             # Tailwind v4 import & global variables
│   ├── layout.tsx              # Root HTML wrapper & Poppins font config
│   └── page.tsx                # Server-side redirect portal
├── components/
│   └── Sidebar.tsx             # Responsive Drawer Navigation component
├── data/                       # Mock databases (stations, logs, charts)
├── public/                     # Static media and icons
├── .npmrc                      # Forces legacy-peer-deps on React 19
├── package.json                # Project configurations & dependencies
├── next.config.ts              # Next.js compiler settings
└── tsconfig.json               # TypeScript rules
```

---

## 💻 Local Installation & Setup

Follow these steps to run the environment monitor dashboard locally:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (version 18.0 or higher) installed on your system.

### 1. Clone the repository
```bash
git clone https://github.com/username/oliveiot-environment-monitor.git
cd oliveiot-environment-monitor
```

### 2. Install Project Dependencies
Run install with npm. The project includes an `.npmrc` file configured to automatically resolve React 19 peer dependencies:
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the application.

### 4. Create a Production Build
Compile and verify the application bundle using:
```bash
npm run build
```

---

## 🖥️ User Interface Preview (Placeholders)

| Login View | Dashboard View | Charts View |
| :---: | :---: | :---: |
| ![Login Page](https://placehold.co/600x400/151E14/8FC27A?text=Login+Portal) | ![Dashboard Overview](https://placehold.co/600x400/151E14/8FC27A?text=Dashboard+Overview) | ![Trends Analysis](https://placehold.co/600x400/151E14/8FC27A?text=Analytics+Trends) |

---

## 🔌 System Architecture Diagram

Data flows linearly from hardware telemetry to visual alert systems:

```
[ Sensor Station ] ──(Raw values)──➔ [ IoT Gateway ] ──(MQTT/HTTPS)──➔ [ Cloud Server ] ──(Telemetry Log)──➔ [ Web Dashboard ] ──(Rules Breach)──➔ [ Alerts/Alarms ]
```
*Note: An animated version of this flow can be viewed under the **Architecture Diagram** section of the dashboard.*

---

## 🔮 Future Enhancements

1. **Integrated Real-time MQTT/WebSocket Server**: Swap simulated data for a live WebSocket connection streaming from hardware nodes.
2. **PDF Compliance Exporter**: Implement client-side PDF document compilation for facility environmental audits.
3. **Database Integration**: Add standard Postgres or MongoDB tables to replace browser `localStorage` sessions.
4. **Site Geolocation Mapping**: Render an interactive Mapbox/Google Maps canvas indicating station markers and compliance alert glows.

---

## ✍️ Author Information
* **Developer**: Priyanga Radhakrishnan
* **Role**: Super Admin / Full Stack Engineer
* **Email**: priyanga@example.com
* **Company**: OliveIoT Technologies
