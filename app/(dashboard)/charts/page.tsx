"use client";

import { chartData } from "../../../data/chartData";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
} from "recharts";

const siteComparisonData = [
  {
    site: "Chennai Factory",
    sensors: 120,
  },
  {
    site: "Coimbatore Plant",
    sensors: 95,
  },
  {
    site: "Madurai Warehouse",
    sensors: 80,
  },
  {
    site: "Trichy Site",
    sensors: 110,
  },
];

export default function ChartsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Analytics & Trends
        </h1>

        <p className="text-slate-400 mt-2">
          Environmental monitoring analytics
        </p>
      </div>

      {/* Temperature & Humidity */}

      <div className="bg-slate-900 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-semibold mb-6">
          Temperature & Humidity Trends
        </h2>

        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid
                stroke="#334155"
                strokeDasharray="3 3"
              />

              <XAxis
                dataKey="time"
                stroke="#94a3b8"
              />

              <YAxis
                stroke="#94a3b8"
              />

              <Tooltip />

              <Legend />

              <Line
                type="monotone"
                dataKey="temperature"
                stroke="#22c55e"
                strokeWidth={3}
                name="Temperature"
              />

              <Line
                type="monotone"
                dataKey="humidity"
                stroke="#3b82f6"
                strokeWidth={3}
                name="Humidity"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* AQI & CO2 */}

      <div className="bg-slate-900 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-semibold mb-6">
          AQI & CO₂ Trends
        </h2>

        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid
                stroke="#334155"
                strokeDasharray="3 3"
              />

              <XAxis
                dataKey="time"
                stroke="#94a3b8"
              />

              <YAxis
                stroke="#94a3b8"
              />

              <Tooltip />

              <Legend />

              <Line
                type="monotone"
                dataKey="aqi"
                stroke="#f59e0b"
                strokeWidth={3}
                name="AQI"
              />

              <Line
                type="monotone"
                dataKey="co2"
                stroke="#ef4444"
                strokeWidth={3}
                name="CO₂"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Site Comparison */}

      <div className="bg-slate-900 rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-6">
          Site-wise Sensor Comparison
        </h2>

        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={siteComparisonData}>
              <CartesianGrid
                stroke="#334155"
                strokeDasharray="3 3"
              />

              <XAxis
                dataKey="site"
                stroke="#94a3b8"
              />

              <YAxis
                stroke="#94a3b8"
              />

              <Tooltip />

              <Legend />

              <Bar
                dataKey="sensors"
                fill="#22c55e"
                name="Sensors"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </main>
  );
}