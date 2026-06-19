export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">
            OliveIoT
          </h1>
          <p className="text-slate-400 mt-2">
            Environment Monitoring Platform
          </p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block text-sm text-slate-300 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter email"
              className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-300 mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-300 mb-2">
              Role
            </label>

            <select
              className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white"
            >
              <option>Super Admin</option>
              <option>Site Admin</option>
              <option>Safety Officer</option>
              <option>Viewer</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold"
          >
            Login
          </button>
        </form>
      </div>
    </main>
  );
}