import { airQualityData } from "../../../data/airQualityData";

export default function AirQualityPage() {
  const getParamInfo = (param: string) => {
    switch (param) {
      case "AQI":
        return {
          label: "AQI",
          sub: "Air Quality Index",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-secondary">
              <path d="M4 4.5v15a1.5 1.5 0 0 0 1.5 1.5h15" />
              <path d="M20 9l-5.5 5.5-3-3L7 16" />
            </svg>
          )
        };
      case "PM2.5":
        return {
          label: (
            <span>
              PM<sub>2.5</sub>
            </span>
          ),
          sub: "Fine Particulates",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-sky-400">
              <path d="M3 12h18M3 9h12M3 15h15" />
            </svg>
          )
        };
      case "PM10":
        return {
          label: (
            <span>
              PM<sub>10</sub>
            </span>
          ),
          sub: "Coarse Particulates",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-teal-400">
              <path d="M3 12h18M3 8h16M3 16h14" />
            </svg>
          )
        };
      case "CO₂":
        return {
          label: (
            <span>
              CO<sub>2</sub>
            </span>
          ),
          sub: "Carbon Dioxide",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-orange-400">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          )
        };
      case "NO₂":
        return {
          label: (
            <span>
              NO<sub>2</sub>
            </span>
          ),
          sub: "Nitrogen Dioxide",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-yellow-400">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          )
        };
      case "SO₂":
        return {
          label: (
            <span>
              SO<sub>2</sub>
            </span>
          ),
          sub: "Sulfur Dioxide",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-alert">
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
          )
        };
      default:
        return {
          label: param,
          sub: "Air Parameter",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-[#8FC27A]">
              <circle cx="12" cy="12" r="10" />
            </svg>
          )
        };
    }
  };

  const getStatusChip = (status: string) => {
    switch (status) {
      case "Good":
        return "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold";
      case "Moderate":
        return "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-semibold";
      default:
        return "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-alert text-xs font-semibold";
    }
  };

  return (
    <main className="p-8 bg-[#10150F] min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-[#F7F8F5]">
          Air Quality Monitoring
        </h1>
        <p className="text-[#757575] mt-1.5 text-sm">
          Monitor air quality parameters and AQI levels
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {airQualityData.map((item) => {
          const info = getParamInfo(item.parameter);
          return (
            <div
              key={item.parameter}
              className="bg-[#151E14] border border-[#223321] hover:border-primary/50 rounded-2xl p-6 transition duration-200 shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5 group flex flex-col justify-between h-[180px]"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-[#F7F8F5]">
                    {info.label}
                  </h3>
                  <p className="text-[#757575] text-xs font-medium mt-0.5">
                    {info.sub}
                  </p>
                </div>
                <div className="p-2.5 rounded-xl bg-[#1C281B] border border-[#2B3E29] shrink-0">
                  {info.icon}
                </div>
              </div>

              <div className="mt-2 flex justify-between items-baseline">
                <span className="text-3xl font-extrabold tracking-tight text-[#F7F8F5]">
                  {item.value}
                </span>
                <span className="text-xs text-[#757575] font-medium">
                  {item.parameter === "AQI" ? "index" : "µg/m³"}
                </span>
              </div>

              <div className="mt-4 flex">
                <span className={getStatusChip(item.status)}>
                  <span className={`w-1.5 h-1.5 rounded-full ${item.status === "Good" ? "bg-emerald-500" : item.status === "Moderate" ? "bg-yellow-500" : "bg-red-500"}`}></span>
                  {item.status}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}