import Link from "next/link";

export default function ViewStationPage() {
  return (
    <main className="p-8 bg-[#10150F] min-h-screen">
      <div className="flex items-center gap-3 mb-6">
        <Link href="/stations" className="text-[#99A897] hover:text-[#F7F8F5] transition">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </Link>
        <h1 className="text-3xl font-extrabold tracking-tight text-[#F7F8F5]">
          Station Details
        </h1>
      </div>

      <div className="bg-[#151E14] border border-[#223321] rounded-2xl max-w-2xl shadow-xl overflow-hidden">
        <div className="p-6 bg-[#1C281B] border-b border-[#223321] flex justify-between items-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-secondary">Configuration Properties</span>
          <Link
            href="/stations/edit"
            className="bg-yellow-600/10 border border-yellow-600/30 text-yellow-400 hover:bg-yellow-600/35 hover:text-white px-3.5 py-1.5 rounded-xl text-xs font-bold transition duration-150"
          >
            Edit Station
          </Link>
        </div>

        <div className="p-6 divide-y divide-[#223321]/80">
          <div className="py-3.5 flex justify-between items-center gap-4">
            <span className="text-[#99A897] text-sm font-medium">Station Name</span>
            <span className="text-[#F7F8F5] font-semibold text-base">Station A</span>
          </div>

          <div className="py-3.5 flex justify-between items-center gap-4">
            <span className="text-[#99A897] text-sm font-medium">Site Name</span>
            <span className="text-[#F7F8F5] font-semibold text-base">Chennai Factory</span>
          </div>

          <div className="py-3.5 flex justify-between items-center gap-4">
            <span className="text-[#99A897] text-sm font-medium">Location</span>
            <span className="text-[#F7F8F5] font-semibold text-base">Chennai</span>
          </div>

          <div className="py-3.5 flex justify-between items-center gap-4">
            <span className="text-[#99A897] text-sm font-medium">Sensor Count</span>
            <span className="bg-[#1C281B] px-2.5 py-1 rounded-lg border border-[#2B3E29] text-[#F7F8F5] font-semibold text-sm">
              8 Sensors
            </span>
          </div>

          <div className="py-3.5 flex justify-between items-center gap-4">
            <span className="text-[#99A897] text-sm font-medium">Status</span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Online
            </span>
          </div>

          <div className="py-3.5 flex justify-between items-center gap-4">
            <span className="text-[#99A897] text-sm font-medium">Last Updated</span>
            <span className="text-[#757575] text-sm font-semibold">2 mins ago</span>
          </div>
        </div>
      </div>
    </main>
  );
}