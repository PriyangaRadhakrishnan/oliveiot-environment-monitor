import Link from "next/link";

export default function EditStationPage() {
  return (
    <main className="p-8 bg-[#10150F] min-h-screen">
      <div className="flex items-center gap-3 mb-6">
        <Link href="/stations" className="text-[#99A897] hover:text-[#F7F8F5] transition">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </Link>
        <h1 className="text-3xl font-extrabold tracking-tight text-[#F7F8F5]">
          Edit Station
        </h1>
      </div>

      <div className="bg-[#151E14] border border-[#223321] p-8 rounded-2xl max-w-2xl space-y-5 shadow-xl">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-secondary mb-2">
            Station Name
          </label>
          <input
            type="text"
            defaultValue="Station A"
            className="w-full p-3.5 rounded-xl bg-[#1C281B] border border-[#2B3E29] text-[#F7F8F5] outline-none placeholder-[#50684E] focus:border-secondary focus:ring-1 focus:ring-secondary/30 transition duration-200"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-secondary mb-2">
            Site Name
          </label>
          <input
            type="text"
            defaultValue="Chennai Factory"
            className="w-full p-3.5 rounded-xl bg-[#1C281B] border border-[#2B3E29] text-[#F7F8F5] outline-none placeholder-[#50684E] focus:border-secondary focus:ring-1 focus:ring-secondary/30 transition duration-200"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-secondary mb-2">
            Location / Coordinates
          </label>
          <input
            type="text"
            defaultValue="Chennai"
            className="w-full p-3.5 rounded-xl bg-[#1C281B] border border-[#2B3E29] text-[#F7F8F5] outline-none placeholder-[#50684E] focus:border-secondary focus:ring-1 focus:ring-secondary/30 transition duration-200"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-secondary mb-2">
            Sensor Count
          </label>
          <input
            type="number"
            defaultValue={8}
            className="w-full p-3.5 rounded-xl bg-[#1C281B] border border-[#2B3E29] text-[#F7F8F5] outline-none placeholder-[#50684E] focus:border-secondary focus:ring-1 focus:ring-secondary/30 transition duration-200"
          />
        </div>

        <div className="pt-4 flex gap-4">
          <button className="bg-primary hover:bg-[#43622e] text-[#F7F8F5] px-6 py-3 rounded-xl font-bold transition duration-200 shadow-lg shadow-primary/20 cursor-pointer">
            Update Station
          </button>
          <Link href="/stations" className="inline-flex items-center justify-center bg-[#1C281B] hover:bg-[#253524] text-[#99A897] border border-[#2B3E29] px-6 py-3 rounded-xl font-bold transition duration-200 cursor-pointer">
            Cancel
          </Link>
        </div>
      </div>
    </main>
  );
}