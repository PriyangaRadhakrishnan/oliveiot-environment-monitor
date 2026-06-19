export default function ArchitecturePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          System Architecture Diagram
        </h1>

        <p className="text-slate-400 mt-2">
          Environment Monitoring Data Flow
        </p>
      </div>

      <div className="flex flex-col items-center gap-4 mt-10">

        <div className="bg-slate-900 border border-slate-700 rounded-xl px-8 py-5 w-[320px] text-center">
          <h2 className="font-semibold text-lg">
            Environment Sensor Station
          </h2>
        </div>

        <div className="text-3xl text-green-400">↓</div>

        <div className="bg-slate-900 border border-slate-700 rounded-xl px-8 py-5 w-[320px] text-center">
          <h2 className="font-semibold text-lg">
            IoT Gateway
          </h2>
        </div>

        <div className="text-3xl text-green-400">↓</div>

        <div className="bg-slate-900 border border-slate-700 rounded-xl px-8 py-5 w-[320px] text-center">
          <h2 className="font-semibold text-lg">
            Cloud Server
          </h2>
        </div>

        <div className="text-3xl text-green-400">↓</div>

        <div className="bg-slate-900 border border-slate-700 rounded-xl px-8 py-5 w-[320px] text-center">
          <h2 className="font-semibold text-lg">
            Web Dashboard
          </h2>
        </div>

        <div className="text-3xl text-green-400">↓</div>

        <div className="bg-red-900/30 border border-red-500 rounded-xl px-8 py-5 w-[320px] text-center">
          <h2 className="font-semibold text-lg">
            Alerts
          </h2>
        </div>

      </div>
    </main>
  );
}