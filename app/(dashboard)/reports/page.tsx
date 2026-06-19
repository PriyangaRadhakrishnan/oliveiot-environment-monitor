import { reportsData } from "../../../data/reportsData";

export default function ReportsPage() {
  return (
    <main className="p-8 bg-[#10150F] min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-[#F7F8F5]">
          Reports Management
        </h1>
        <p className="text-[#757575] mt-1.5 text-sm">
          Generate and analyze environmental reports
        </p>
      </div>

      {/* Filters */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="relative">
          <select className="w-full bg-[#151E14] text-[#F7F8F5] p-3.5 rounded-xl border border-[#223321] outline-none cursor-pointer focus:border-secondary focus:ring-1 focus:ring-secondary/30 transition duration-200 appearance-none">
            <option>All Sites</option>
            <option>Chennai Factory</option>
            <option>Coimbatore Plant</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none text-[#757575]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        <div className="relative">
          <select className="w-full bg-[#151E14] text-[#F7F8F5] p-3.5 rounded-xl border border-[#223321] outline-none cursor-pointer focus:border-secondary focus:ring-1 focus:ring-secondary/30 transition duration-200 appearance-none">
            <option>All Stations</option>
            <option>Station A</option>
            <option>Station B</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none text-[#757575]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        <div className="relative">
          <select className="w-full bg-[#151E14] text-[#F7F8F5] p-3.5 rounded-xl border border-[#223321] outline-none cursor-pointer focus:border-secondary focus:ring-1 focus:ring-secondary/30 transition duration-200 appearance-none">
            <option>Temperature</option>
            <option>Humidity</option>
            <option>CO₂</option>
            <option>AQI</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none text-[#757575]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        <div>
          <input
            type="date"
            className="w-full bg-[#151E14] text-[#F7F8F5] p-3.5 rounded-xl border border-[#223321] outline-none cursor-pointer focus:border-secondary focus:ring-1 focus:ring-secondary/30 transition duration-200 text-sm"
          />
        </div>
      </div>

      {/* Reports Table */}

      <div className="bg-[#151E14] border border-[#223321] rounded-2xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#1C281B] border-b border-[#223321]">
                <th className="p-4.5 text-left text-xs font-semibold uppercase tracking-wider text-secondary">Date</th>
                <th className="p-4.5 text-left text-xs font-semibold uppercase tracking-wider text-secondary">Minimum</th>
                <th className="p-4.5 text-left text-xs font-semibold uppercase tracking-wider text-secondary">Maximum</th>
                <th className="p-4.5 text-left text-xs font-semibold uppercase tracking-wider text-secondary">Average</th>
                <th className="p-4.5 text-left text-xs font-semibold uppercase tracking-wider text-secondary">Alert Count</th>
                <th className="p-4.5 text-left text-xs font-semibold uppercase tracking-wider text-secondary">Remarks</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[#223321]">
              {reportsData.map((report, index) => (
                <tr
                  key={index}
                  className="hover:bg-[#1C281B]/40 transition duration-150"
                >
                  <td className="p-4.5 text-sm font-semibold text-[#F7F8F5]">{report.date}</td>
                  <td className="p-4.5 text-sm text-[#99A897]">{report.minValue}</td>
                  <td className="p-4.5 text-sm text-[#99A897]">{report.maxValue}</td>
                  <td className="p-4.5 text-sm text-[#99A897]">{report.avgValue}</td>
                  <td className="p-4.5 text-sm font-semibold">
                    {report.alertCount > 0 ? (
                      <span className="inline-flex px-2 py-0.5 rounded-md bg-alert/15 border border-alert/20 text-alert text-xs font-bold">
                        {report.alertCount} Alerts
                      </span>
                    ) : (
                      <span className="inline-flex px-2 py-0.5 rounded-md bg-[#1C281B] border border-[#2B3E29] text-[#757575] text-xs font-medium">
                        0 Alerts
                      </span>
                    )}
                  </td>
                  <td className="p-4.5 text-sm text-[#99A897]">{report.remarks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}