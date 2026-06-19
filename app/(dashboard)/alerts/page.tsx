import { alertsData } from "../../../data/alertsData";

export default function AlertsPage() {
  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "Critical":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-red-500/10 border border-red-500/25 text-alert text-xs font-semibold">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 shrink-0">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
            </svg>
            <span>Critical</span>
          </span>
        );
      case "High":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 shrink-0">
              <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
            <span>High</span>
          </span>
        );
      case "Medium":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-semibold">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 shrink-0">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
            <span>Medium</span>
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#1C281B] border border-[#2B3E29] text-[#99A897] text-xs font-semibold">
            {severity}
          </span>
        );
    }
  };

  const getStatusChip = (status: string) => {
    return status === "Active" ? (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-red-500/10 border border-red-500/20 text-alert text-xs font-medium">
        <span className="w-1.5 h-1.5 rounded-full bg-[#C23B3B] animate-pulse"></span>
        Active
      </span>
    ) : (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
        Resolved
      </span>
    );
  };

  return (
    <main className="p-8 bg-[#10150F] min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-[#F7F8F5]">
          Alerts Management
        </h1>
        <p className="text-[#757575] mt-1.5 text-sm">
          Monitor and manage environmental alerts
        </p>
      </div>

      <div className="bg-[#151E14] border border-[#223321] rounded-2xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#1C281B] border-b border-[#223321]">
                <th className="p-4.5 text-left text-xs font-semibold uppercase tracking-wider text-secondary">Alert</th>
                <th className="p-4.5 text-left text-xs font-semibold uppercase tracking-wider text-secondary">Site</th>
                <th className="p-4.5 text-left text-xs font-semibold uppercase tracking-wider text-secondary">Station</th>
                <th className="p-4.5 text-left text-xs font-semibold uppercase tracking-wider text-secondary">Severity</th>
                <th className="p-4.5 text-left text-xs font-semibold uppercase tracking-wider text-secondary">Time</th>
                <th className="p-4.5 text-left text-xs font-semibold uppercase tracking-wider text-secondary">Status</th>
                <th className="p-4.5 text-left text-xs font-semibold uppercase tracking-wider text-secondary">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[#223321]">
              {alertsData.map((alert) => (
                <tr
                  key={alert.id}
                  className="hover:bg-[#1C281B]/40 transition duration-150"
                >
                  <td className="p-4.5 text-sm font-semibold text-[#F7F8F5]">{alert.alert}</td>
                  <td className="p-4.5 text-sm text-[#99A897]">{alert.site}</td>
                  <td className="p-4.5 text-sm text-[#99A897]">{alert.station}</td>
                  <td className="p-4.5 text-sm">{getSeverityBadge(alert.severity)}</td>
                  <td className="p-4.5 text-sm text-[#757575]">{alert.time}</td>
                  <td className="p-4.5 text-sm">{getStatusChip(alert.status)}</td>

                  <td className="p-4.5">
                    <button className="bg-primary/20 border border-primary/30 text-secondary hover:bg-primary hover:text-white px-3.5 py-1.5 rounded-xl text-xs font-bold transition duration-150 cursor-pointer">
                      Acknowledge
                    </button>
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