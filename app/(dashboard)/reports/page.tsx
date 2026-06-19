import { reportsData } from "../../../data/reportsData";
export default function ReportsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Reports Management
        </h1>

        <p className="text-slate-400 mt-2">
          Generate and analyze environmental reports
        </p>
      </div>

      {/* Filters */}

      <div className="grid md:grid-cols-4 gap-4 mb-8">
        <select className="bg-slate-900 p-3 rounded-lg border border-slate-800">
          <option>All Sites</option>
          <option>Chennai Factory</option>
          <option>Coimbatore Plant</option>
        </select>

        <select className="bg-slate-900 p-3 rounded-lg border border-slate-800">
          <option>All Stations</option>
          <option>Station A</option>
          <option>Station B</option>
        </select>

        <select className="bg-slate-900 p-3 rounded-lg border border-slate-800">
          <option>Temperature</option>
          <option>Humidity</option>
          <option>CO₂</option>
          <option>AQI</option>
        </select>

        <input
          type="date"
          className="bg-slate-900 p-3 rounded-lg border border-slate-800"
        />
      </div>

      {/* Reports Table */}

      <div className="overflow-x-auto">
        <table className="w-full bg-slate-900 rounded-xl overflow-hidden">
          <thead className="bg-slate-800">
            <tr>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">Minimum</th>
              <th className="p-4 text-left">Maximum</th>
              <th className="p-4 text-left">Average</th>
              <th className="p-4 text-left">Alert Count</th>
              <th className="p-4 text-left">Remarks</th>
            </tr>
          </thead>

          <tbody>
            {reportsData.map((report, index) => (
              <tr
                key={index}
                className="border-t border-slate-800"
              >
                <td className="p-4">{report.date}</td>
                <td className="p-4">{report.minValue}</td>
                <td className="p-4">{report.maxValue}</td>
                <td className="p-4">{report.avgValue}</td>
                <td className="p-4">{report.alertCount}</td>
                <td className="p-4">{report.remarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}