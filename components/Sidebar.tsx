import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 border-r border-slate-800 p-5">
      <h1 className="text-2xl font-bold text-white mb-8">
        OliveIoT
      </h1>

      <nav className="flex flex-col gap-3">
        <Link
          href="/dashboard"
          className="text-slate-300 hover:text-white hover:bg-slate-800 p-3 rounded-lg"
        >
          Dashboard
        </Link>

        <Link
          href="/stations"
          className="text-slate-300 hover:text-white hover:bg-slate-800 p-3 rounded-lg"
        >
          Sites & Stations
        </Link>

        <Link
          href="/monitoring"
          className="text-slate-300 hover:text-white hover:bg-slate-800 p-3 rounded-lg"
        >
          Live Monitoring
        </Link>

        <Link
          href="/air-quality"
          className="text-slate-300 hover:text-white hover:bg-slate-800 p-3 rounded-lg"
        >
          Air Quality
        </Link>

        <Link
          href="/charts"
          className="text-slate-300 hover:text-white hover:bg-slate-800 p-3 rounded-lg"
        >
          Charts
        </Link>

        <Link
          href="/alerts"
          className="text-slate-300 hover:text-white hover:bg-slate-800 p-3 rounded-lg"
        >
          Alerts
        </Link>

        <Link
          href="/reports"
          className="text-slate-300 hover:text-white hover:bg-slate-800 p-3 rounded-lg"
        >
          Reports
        </Link>

        <Link
  href="/architecture"
  className="text-slate-300 hover:text-white hover:bg-slate-800 p-3 rounded-lg"
>
  Architecture Diagram
</Link>

        <Link
          href="/login"
          className="text-red-400 hover:bg-red-900/20 p-3 rounded-lg mt-8"
        >
          Logout
        </Link>
      </nav>
    </aside>
  );
}