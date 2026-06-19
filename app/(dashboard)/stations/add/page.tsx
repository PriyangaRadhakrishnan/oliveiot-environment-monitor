export default function AddStationPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">
        Add Station
      </h1>

      <div className="bg-slate-900 p-6 rounded-xl max-w-2xl space-y-4">
        <input
          type="text"
          placeholder="Station Name"
          className="w-full p-3 rounded bg-slate-800"
        />

        <input
          type="text"
          placeholder="Site Name"
          className="w-full p-3 rounded bg-slate-800"
        />

        <input
          type="text"
          placeholder="Location"
          className="w-full p-3 rounded bg-slate-800"
        />

        <input
          type="number"
          placeholder="Sensor Count"
          className="w-full p-3 rounded bg-slate-800"
        />

        <button className="bg-green-600 px-4 py-2 rounded">
          Save Station
        </button>
      </div>
    </main>
  );
}