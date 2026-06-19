export default function ViewStationPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">
        Station Details
      </h1>

      <div className="bg-slate-900 p-6 rounded-xl max-w-2xl space-y-4">
        <div>
          <p className="text-slate-400">Station Name</p>
          <p className="text-lg font-semibold">Station A</p>
        </div>

        <div>
          <p className="text-slate-400">Site Name</p>
          <p className="text-lg font-semibold">Chennai Factory</p>
        </div>

        <div>
          <p className="text-slate-400">Location</p>
          <p className="text-lg font-semibold">Chennai</p>
        </div>

        <div>
          <p className="text-slate-400">Sensor Count</p>
          <p className="text-lg font-semibold">8</p>
        </div>

        <div>
          <p className="text-slate-400">Status</p>
          <p className="text-lg font-semibold text-green-400">
            Online
          </p>
        </div>

        <div>
          <p className="text-slate-400">Last Updated</p>
          <p className="text-lg font-semibold">
            2 mins ago
          </p>
        </div>
      </div>
    </main>
  );
}