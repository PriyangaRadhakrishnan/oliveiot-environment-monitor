"use client";

import { useState, useEffect } from "react";
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
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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

      <div className="bg-[#151E14] border border-[#223321] rounded-2xl p-6 mb-8 shadow-xl">
        <h2 className="text-xl font-bold mb-6 text-[#F7F8F5]">
          Temperature & Humidity Trends
        </h2>

        <div className="h-[400px]">
          {isMounted ? (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid
                  stroke="#223321"
                  strokeDasharray="4 4"
                />

                <XAxis
                  dataKey="time"
                  stroke="#757575"
                  tickLine={false}
                  dy={10}
                />

                <YAxis
                  stroke="#757575"
                  tickLine={false}
                  dx={-10}
                />

                <Tooltip
                  contentStyle={{
                    backgroundColor: "#151E14",
                    borderColor: "#223321",
                    borderRadius: "12px",
                    color: "#F7F8F5"
                  }}
                />

                <Legend wrapperStyle={{ paddingTop: "15px" }} />

                <Line
                  type="monotone"
                  dataKey="temperature"
                  stroke="#8FC27A"
                  strokeWidth={3}
                  dot={{ strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6 }}
                  name="Temperature (°C)"
                />

                <Line
                  type="monotone"
                  dataKey="humidity"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  dot={{ strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6 }}
                  name="Humidity (%)"
                />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <div className="w-full h-full bg-[#1C281B]/40 border border-[#2B3E29]/30 animate-pulse rounded-2xl flex items-center justify-center text-[#757575] text-sm font-medium">
              Loading temperature & humidity trends...
            </div>
          )}
        </div>
      </div>

      {/* AQI & CO2 */}

      <div className="bg-[#151E14] border border-[#223321] rounded-2xl p-6 mb-8 shadow-xl">
        <h2 className="text-xl font-bold mb-6 text-[#F7F8F5]">
          AQI & CO₂ Trends
        </h2>

        <div className="h-[400px]">
          {isMounted ? (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid
                  stroke="#223321"
                  strokeDasharray="4 4"
                />

                <XAxis
                  dataKey="time"
                  stroke="#757575"
                  tickLine={false}
                  dy={10}
                />

                <YAxis
                  stroke="#757575"
                  tickLine={false}
                  dx={-10}
                />

                <Tooltip
                  contentStyle={{
                    backgroundColor: "#151E14",
                    borderColor: "#223321",
                    borderRadius: "12px",
                    color: "#F7F8F5"
                  }}
                />

                <Legend wrapperStyle={{ paddingTop: "15px" }} />

                <Line
                  type="monotone"
                  dataKey="aqi"
                  stroke="#f59e0b"
                  strokeWidth={3}
                  dot={{ strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6 }}
                  name="AQI"
                />

                <Line
                  type="monotone"
                  dataKey="co2"
                  stroke="#C23B3B"
                  strokeWidth={3}
                  dot={{ strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6 }}
                  name="CO₂ (ppm)"
                />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <div className="w-full h-full bg-[#1C281B]/40 border border-[#2B3E29]/30 animate-pulse rounded-2xl flex items-center justify-center text-[#757575] text-sm font-medium">
              Loading AQI & CO₂ trends...
            </div>
          )}
        </div>
      </div>

      {/* Site Comparison */}

      <div className="bg-[#151E14] border border-[#223321] rounded-2xl p-6 shadow-xl">
        <h2 className="text-xl font-bold mb-6 text-[#F7F8F5]">
          Site-wise Sensor Comparison
        </h2>

        <div className="h-[400px]">
          {isMounted ? (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={siteComparisonData}>
                <CartesianGrid
                  stroke="#223321"
                  strokeDasharray="4 4"
                />

                <XAxis
                  dataKey="site"
                  stroke="#757575"
                  tickLine={false}
                  dy={10}
                />

                <YAxis
                  stroke="#757575"
                  tickLine={false}
                  dx={-10}
                />

                <Tooltip
                  contentStyle={{
                    backgroundColor: "#151E14",
                    borderColor: "#223321",
                    borderRadius: "12px",
                    color: "#F7F8F5"
                  }}
                />

                <Legend wrapperStyle={{ paddingTop: "15px" }} />

                <Bar
                  dataKey="sensors"
                  fill="#557A3A"
                  radius={[6, 6, 0, 0]}
                  name="Sensors"
                />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <div className="w-full h-full bg-[#1C281B]/40 border border-[#2B3E29]/30 animate-pulse rounded-2xl flex items-center justify-center text-[#757575] text-sm font-medium">
              Loading site-wise comparison...
            </div>
          )}
        </div>
      </div>
    </main>
  );
}