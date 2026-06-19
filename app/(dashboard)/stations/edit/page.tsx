export default function EditStationPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">
        Edit Station
      </h1>

      <div className="bg-slate-900 p-6 rounded-xl max-w-2xl space-y-4">
        <input
          type="text"
          defaultValue="Station A"
          className="w-full p-3 rounded bg-slate-800"
        />

        <input
          type="text"
          defaultValue="Chennai Factory"
          className="w-full p-3 rounded bg-slate-800"
        />

        <input
          type="text"
          defaultValue="Chennai"
          className="w-full p-3 rounded bg-slate-800"
        />

        <input
          type="number"
          defaultValue={8}
          className="w-full p-3 rounded bg-slate-800"
        />

        <button className="bg-yellow-600 px-4 py-2 rounded">
          Update Station
        </button>
      </div>
    </main>
  );
}