import Link from "next/link";
import { stationsData } from "../../../data/stationsData";

export default function StationsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Sites & Stations</h1>
          <p className="text-slate-400 mt-2">
            Manage environment monitoring stations
          </p>
        </div>

        <Link
  href="/stations/add"
  className="bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700"
>
  Add Station
</Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full bg-slate-900 rounded-xl overflow-hidden">
          <thead className="bg-slate-800">
            <tr>
              <th className="p-4 text-left">Station Name</th>
              <th className="p-4 text-left">Site Name</th>
              <th className="p-4 text-left">Location</th>
              <th className="p-4 text-left">Sensor Count</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Last Updated</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {stationsData.map((station, index) => (
              <tr
                key={index}
                className="border-t border-slate-800"
              >
                <td className="p-4">{station.stationName}</td>
                <td className="p-4">{station.siteName}</td>
                <td className="p-4">{station.location}</td>
                <td className="p-4">{station.sensorCount}</td>
                <td className="p-4">{station.status}</td>
                <td className="p-4">{station.lastUpdated}</td>

                <td className="p-4 flex gap-2">
                  <Link
  href="/stations/view"
  className="bg-blue-600 px-3 py-1 rounded"
>
  View
</Link>

<Link
  href="/stations/edit"
  className="bg-yellow-600 px-3 py-1 rounded"
>
  Edit
</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}