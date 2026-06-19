import Link from "next/link";
import { stationsData } from "../../../data/stationsData";

export default function StationsPage() {
  return (
    <main className="p-8 bg-[#10150F] min-h-screen">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-[#F7F8F5]">Sites & Stations</h1>
          <p className="text-[#757575] mt-1.5 text-sm">
            Manage environment monitoring stations
          </p>
        </div>

        <Link
          href="/stations/add"
          className="inline-flex items-center gap-2 bg-primary hover:bg-[#43622e] text-[#F7F8F5] px-5 py-2.5 rounded-xl font-bold transition duration-200 shadow-lg shadow-primary/20 self-start sm:self-auto cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          <span>Add Station</span>
        </Link>
      </div>

      <div className="bg-[#151E14] border border-[#223321] rounded-2xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#1C281B] border-b border-[#223321]">
                <th className="p-4.5 text-left text-xs font-semibold uppercase tracking-wider text-secondary">Station Name</th>
                <th className="p-4.5 text-left text-xs font-semibold uppercase tracking-wider text-secondary">Site Name</th>
                <th className="p-4.5 text-left text-xs font-semibold uppercase tracking-wider text-secondary">Location</th>
                <th className="p-4.5 text-left text-xs font-semibold uppercase tracking-wider text-secondary">Sensor Count</th>
                <th className="p-4.5 text-left text-xs font-semibold uppercase tracking-wider text-secondary">Status</th>
                <th className="p-4.5 text-left text-xs font-semibold uppercase tracking-wider text-secondary">Last Updated</th>
                <th className="p-4.5 text-left text-xs font-semibold uppercase tracking-wider text-secondary">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[#223321]">
              {stationsData.map((station, index) => (
                <tr
                  key={index}
                  className="hover:bg-[#1C281B]/40 transition duration-150"
                >
                  <td className="p-4.5 text-sm font-semibold text-[#F7F8F5]">{station.stationName}</td>
                  <td className="p-4.5 text-sm text-[#99A897]">{station.siteName}</td>
                  <td className="p-4.5 text-sm text-[#99A897]">{station.location}</td>
                  <td className="p-4.5 text-sm font-medium text-[#F7F8F5]">
                    <span className="bg-[#1C281B] px-2.5 py-1 rounded-md border border-[#2B3E29]">
                      {station.sensorCount}
                    </span>
                  </td>
                  <td className="p-4.5 text-sm">
                    {station.status === "Online" ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        {station.status}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-500/10 border border-slate-500/20 text-[#757575] text-xs font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                        {station.status}
                      </span>
                    )}
                  </td>
                  <td className="p-4.5 text-sm text-[#757575]">{station.lastUpdated}</td>

                  <td className="p-4.5">
                    <div className="flex gap-2">
                      <Link
                        href="/stations/view"
                        className="bg-primary/20 border border-primary/30 text-secondary hover:bg-primary/30 hover:text-white px-3 py-1.5 rounded-xl text-xs font-semibold transition duration-150"
                      >
                        View
                      </Link>

                      <Link
                        href="/stations/edit"
                        className="bg-yellow-600/10 border border-yellow-600/30 text-yellow-400 hover:bg-yellow-600/35 hover:text-white px-3 py-1.5 rounded-xl text-xs font-semibold transition duration-150"
                      >
                        Edit
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}