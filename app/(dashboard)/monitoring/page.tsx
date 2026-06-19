"use client";

import { useEffect, useState } from "react";
import { monitoringData } from "../../../data/monitoringData";

export default function MonitoringPage() {
  const [sensors, setSensors] = useState(monitoringData);

  useEffect(() => {
    const interval = setInterval(() => {
      setSensors((prev) =>
        prev.map((sensor) => {
          const randomChange = Math.floor(Math.random() * 5) - 2;

          const match = sensor.value.match(/^(\d+)/);

          if (!match) return sensor;

          const currentValue = Number(match[1]);

          const newValue = currentValue + randomChange;

          const unit = sensor.value.replace(/^\d+\s*/, "");

          return {
            ...sensor,
            value: `${newValue}${unit ? " " + unit : ""}`,
          };
        })
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-white p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Live Monitoring
        </h1>

        <p className="text-slate-400 mt-2">
          Real-time environmental sensor monitoring
        </p>
      </div>

      <div className="mb-6 flex items-center gap-2">
        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>

        <span className="text-green-400 text-sm">
          Live Data Refreshing Every 5 Seconds
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sensors.map((sensor) => (
          <div
            key={sensor.name}
            className="bg-slate-900 border border-slate-800 rounded-xl p-6"
          >
            <h3 className="text-slate-400 text-sm">
              {sensor.name}
            </h3>

            <p className="text-3xl font-bold mt-3">
              {sensor.value}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}