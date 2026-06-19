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

  const getSensorPercent = (name: string, value: string) => {
    const match = value.match(/^(\d+)/);
    if (!match) return 50;
    const val = Number(match[1]);
    switch (name) {
      case "Temperature": return Math.min(100, Math.max(0, (val / 50) * 100));
      case "Humidity": return Math.min(100, Math.max(0, val));
      case "CO₂": return Math.min(100, Math.max(0, (val / 1000) * 100));
      case "PM2.5": return Math.min(100, Math.max(0, (val / 100) * 100));
      case "PM10": return Math.min(100, Math.max(0, (val / 150) * 100));
      case "Noise Level": return Math.min(100, Math.max(0, (val / 120) * 100));
      case "Light Intensity": return Math.min(100, Math.max(0, (val / 1500) * 100));
      case "Wind Speed": return Math.min(100, Math.max(0, (val / 50) * 100));
      default: return 50;
    }
  };

  const getSensorIcon = (name: string) => {
    switch (name) {
      case "Temperature":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5 text-orange-400">
            <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
          </svg>
        );
      case "Humidity":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5 text-sky-400">
            <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
          </svg>
        );
      case "CO₂":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5 text-alert">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="16" />
            <line x1="8" y1="12" x2="16" y2="12" />
          </svg>
        );
      case "PM2.5":
      case "PM10":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5 text-secondary">
            <path d="M8 9h8" />
            <path d="M3 12h18" />
            <path d="M5 15h14" />
          </svg>
        );
      case "Noise Level":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5 text-yellow-400">
            <path d="M12 18.7c.83 0 1.5-.67 1.5-1.5H10.5c0 .83.67 1.5 1.5 1.5zM18 15V9c0-3.07-1.63-5.64-4.5-6.32V2c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 3.36 6 5.92 6 9v6l-2 2v1h16v-1l-2-2z" />
          </svg>
        );
      case "Light Intensity":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5 text-yellow-500">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        );
      case "Wind Speed":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5 text-teal-400">
            <path d="M9.59 4.59A2 2 0 1 1 11 8H2" />
            <path d="M12.59 19.59A2 2 0 1 0 14 16H2" />
            <path d="M15.19 12a3 3 0 1 0 2.81-4H2" />
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5 text-emerald-400">
            <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" />
            <line x1="8" y1="16" x2="8.01" y2="16" />
            <line x1="8" y1="20" x2="8.01" y2="20" />
            <line x1="12" y1="18" x2="12.01" y2="18" />
            <line x1="12" y1="22" x2="12.01" y2="22" />
            <line x1="16" y1="16" x2="16.01" y2="16" />
            <line x1="16" y1="20" x2="16.01" y2="20" />
          </svg>
        );
    }
  };

  return (
    <main className="p-8 bg-[#10150F] min-h-screen">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-[#F7F8F5]">
            Live Monitoring
          </h1>
          <p className="text-[#757575] mt-1.5 text-sm">
            Real-time environmental sensor monitoring
          </p>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold self-start">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></span>
          <span>Live Data refreshing every 5s</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sensors.map((sensor) => {
          const filledPct = getSensorPercent(sensor.name, sensor.value);
          return (
            <div
              key={sensor.name}
              className="bg-[#151E14] border border-[#223321] hover:border-primary/50 rounded-2xl p-6 transition duration-200 shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5 group flex flex-col justify-between"
            >
              <div className="flex justify-between items-start">
                <span className="text-[#757575] text-sm font-medium tracking-wide group-hover:text-[#99A897] transition duration-200">
                  {sensor.name}
                </span>
                <div className="p-2 rounded-xl bg-[#1C281B] border border-[#2B3E29] shrink-0">
                  {getSensorIcon(sensor.name)}
                </div>
              </div>

              <div className="mt-4">
                <p className="text-3xl font-bold tracking-tight text-[#F7F8F5]">
                  {sensor.value}
                </p>
              </div>

              {/* Progress visualizer */}
              <div className="mt-5">
                <div className="w-full h-1.5 bg-[#1C281B] rounded-full overflow-hidden border border-[#2B3E29]/20">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${filledPct}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-[10px] text-[#757575] mt-1 font-medium">
                  <span>MIN</span>
                  <span>MAX</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}