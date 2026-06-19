import { dashboardStats } from "../../../data/mockData";

export default function DashboardPage() {
  return (
    <main className="flex-1 p-6 bg-slate-950 text-white min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Environment Monitoring Dashboard
        </h1>

        <p className="text-slate-400 mt-2">
          Overview of all sites and monitoring stations
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardStats.map((stat) => (
          <div
            key={stat.title}
            className="bg-slate-900 border border-slate-800 rounded-xl p-6"
          >
            <h3 className="text-slate-400 text-sm">
              {stat.title}
            </h3>

            <p className="text-3xl font-bold mt-3">
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}