import { alertsData } from "../../../data/alertsData";
export default function AlertsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Alerts Management
        </h1>

        <p className="text-slate-400 mt-2">
          Monitor and manage environmental alerts
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full bg-slate-900 rounded-xl overflow-hidden">
          <thead className="bg-slate-800">
            <tr>
              <th className="p-4 text-left">Alert</th>
              <th className="p-4 text-left">Site</th>
              <th className="p-4 text-left">Station</th>
              <th className="p-4 text-left">Severity</th>
              <th className="p-4 text-left">Time</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {alertsData.map((alert) => (
              <tr
                key={alert.id}
                className="border-t border-slate-800"
              >
                <td className="p-4">{alert.alert}</td>
                <td className="p-4">{alert.site}</td>
                <td className="p-4">{alert.station}</td>
                <td className="p-4">{alert.severity}</td>
                <td className="p-4">{alert.time}</td>
                <td className="p-4">{alert.status}</td>

                <td className="p-4">
                  <button className="bg-green-600 px-3 py-1 rounded-lg hover:bg-green-700">
                    Acknowledge
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}