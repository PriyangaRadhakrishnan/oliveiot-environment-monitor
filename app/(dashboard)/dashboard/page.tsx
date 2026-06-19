import { dashboardStats } from "../../../data/mockData";

export default function DashboardPage() {
  const getCardMeta = (title: string) => {
    switch (title) {
      case "Total Sites":
        return {
          color: "text-secondary",
          bgColor: "bg-[#8FC27A]/10 border-[#8FC27A]/25",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          )
        };
      case "Total Stations":
        return {
          color: "text-[#8FC27A]",
          bgColor: "bg-[#8FC27A]/10 border-[#8FC27A]/25",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
              <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
              <line x1="6" y1="6" x2="6.01" y2="6" />
              <line x1="6" y1="18" x2="6.01" y2="18" />
            </svg>
          )
        };
      case "Online Sensors":
        return {
          color: "text-emerald-400",
          bgColor: "bg-emerald-500/10 border-emerald-500/20",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          )
        };
      case "Offline Sensors":
        return {
          color: "text-[#757575]",
          bgColor: "bg-slate-500/10 border-slate-500/20",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <circle cx="12" cy="12" r="10" />
              <line x1="15" y1="9" x2="9" y2="15" />
              <line x1="9" y1="9" x2="15" y2="15" />
            </svg>
          )
        };
      case "Avg Temperature":
        return {
          color: "text-orange-400",
          bgColor: "bg-orange-500/10 border-orange-500/20",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
            </svg>
          )
        };
      case "Avg Humidity":
        return {
          color: "text-sky-400",
          bgColor: "bg-sky-500/10 border-sky-500/20",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
            </svg>
          )
        };
      case "Air Quality":
        return {
          color: "text-emerald-400",
          bgColor: "bg-emerald-500/10 border-emerald-500/25",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M12 12c-2-2.67-4-4.33-6-5a12 12 0 0 0-2 8c0 3.33 2 5.33 6 6a12 12 0 0 0 2-9z" />
              <path d="M12 12c2-2.67 4-4.33 6-5a12 12 0 0 1 2 8c0 3.33-2 5.33-6 6a12 12 0 0 1-2-9z" />
            </svg>
          )
        };
      case "Active Alerts":
        return {
          color: "text-alert",
          bgColor: "bg-alert/10 border-alert/20",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          )
        };
      default:
        return {
          color: "text-[#F7F8F5]",
          bgColor: "bg-[#1C281B] border-[#223321]",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <circle cx="12" cy="12" r="10" />
            </svg>
          )
        };
    }
  };

  return (
    <main className="p-8 bg-[#10150F] min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-[#F7F8F5]">
          Environment Overview
        </h1>
        <p className="text-[#757575] mt-1.5 text-sm">
          Overview of all sites and monitoring stations
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardStats.map((stat) => {
          const meta = getCardMeta(stat.title);
          return (
            <div
              key={stat.title}
              className="bg-[#151E14] border border-[#223321] hover:border-primary/50 rounded-2xl p-6 transition duration-200 shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5 group flex flex-col justify-between"
            >
              <div className="flex justify-between items-start gap-4">
                <span className="text-[#757575] text-sm font-medium tracking-wide group-hover:text-[#99A897] transition duration-200">
                  {stat.title}
                </span>
                <div className={`p-2.5 rounded-xl border shrink-0 ${meta.bgColor} ${meta.color} transition duration-200`}>
                  {meta.icon}
                </div>
              </div>

              <div className="mt-4">
                <p className="text-3xl font-bold tracking-tight text-[#F7F8F5] leading-none">
                  {stat.value}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}