import { airQualityData } from "../../../data/airQualityData";

export default function AirQualityPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Air Quality Monitoring
        </h1>

        <p className="text-slate-400 mt-2">
          Monitor air quality parameters and AQI levels
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {airQualityData.map((item) => (
          <div
            key={item.parameter}
            className="bg-slate-900 border border-slate-800 rounded-xl p-6"
          >
            <h3 className="text-slate-400 text-sm">
              {item.parameter}
            </h3>

            <p className="text-3xl font-bold mt-3">
              {item.value}
            </p>

            <span className="inline-block mt-4 px-3 py-1 rounded-full bg-green-600 text-sm">
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}