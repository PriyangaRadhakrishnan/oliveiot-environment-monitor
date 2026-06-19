"use client";

export default function ArchitecturePage() {
  return (
    <main className="p-8 bg-[#10150F] min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-[#F7F8F5]">
          System Architecture
        </h1>
        <p className="text-[#757575] mt-1.5 text-sm">
          Environment Monitoring Data Flow Pipeline
        </p>
      </div>

      <div className="max-w-6xl mx-auto mt-8 select-none">
        
        {/* DESKTOP HORIZONTAL FLOW (Visible on MD screens and above) */}
        <div className="hidden md:block w-full">
          <svg
            viewBox="0 0 1100 380"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            className="overflow-visible"
          >
            <defs>
              <marker
                id="arrow-right"
                viewBox="0 0 10 10"
                refX="6"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#8FC27A" />
              </marker>

              <style>{`
                @keyframes flowRight {
                  from { stroke-dashoffset: 20; }
                  to { stroke-dashoffset: 0; }
                }
                .flow-line-right {
                  stroke-dasharray: 8, 8;
                  animation: flowRight 1.2s linear infinite;
                }
                .pulse-card {
                  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .card-n1:hover { stroke: #8FC27A; filter: drop-shadow(0 0 8px rgba(143, 194, 122, 0.35)); }
                .card-n2:hover { stroke: #38BDF8; filter: drop-shadow(0 0 8px rgba(56, 189, 248, 0.35)); }
                .card-n3:hover { stroke: #FB923C; filter: drop-shadow(0 0 8px rgba(251, 146, 60, 0.35)); }
                .card-n4:hover { stroke: #2DD4BF; filter: drop-shadow(0 0 8px rgba(45, 212, 191, 0.35)); }
                .card-n5:hover { stroke: #E11D48; filter: drop-shadow(0 0 8px rgba(225, 29, 72, 0.35)); }
              `}</style>
            </defs>

            {/* CONNECTOR LINES & ANIMS */}
            <path d="M 190 190 L 234 190" stroke="#223321" strokeWidth="4" strokeLinecap="round" />
            <path d="M 190 190 L 234 190" stroke="#8FC27A" strokeWidth="2.5" strokeLinecap="round" markerEnd="url(#arrow-right)" className="flow-line-right" />

            <path d="M 410 190 L 454 190" stroke="#223321" strokeWidth="4" strokeLinecap="round" />
            <path d="M 410 190 L 454 190" stroke="#8FC27A" strokeWidth="2.5" strokeLinecap="round" markerEnd="url(#arrow-right)" className="flow-line-right" />

            <path d="M 630 190 L 674 190" stroke="#223321" strokeWidth="4" strokeLinecap="round" />
            <path d="M 630 190 L 674 190" stroke="#8FC27A" strokeWidth="2.5" strokeLinecap="round" markerEnd="url(#arrow-right)" className="flow-line-right" />

            <path d="M 850 190 L 894 190" stroke="#223321" strokeWidth="4" strokeLinecap="round" />
            <path d="M 850 190 L 894 190" stroke="#8FC27A" strokeWidth="2.5" strokeLinecap="round" markerEnd="url(#arrow-right)" className="flow-line-right" />

            {/* STAGE 1: Sensor Station */}
            <g className="cursor-pointer">
              <rect className="pulse-card card-n1" x="20" y="70" width="170" height="240" rx="16" fill="#151E14" stroke="#8FC27A" strokeWidth="1.5" strokeOpacity="0.4" />
              <circle cx="105" cy="115" r="28" fill="#1C281B" stroke="#2B3E29" strokeWidth="1" />
              <g transform="translate(93, 103)" stroke="#8FC27A" strokeWidth="2">
                <circle cx="12" cy="12" r="4" fill="none" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </g>
              <text x="105" y="172" textAnchor="middle" fill="#F7F8F5" fontSize="13" fontWeight="bold" fontFamily="Poppins, sans-serif">Sensor Station</text>
              <foreignObject x="35" y="190" width="140" height="100">
                <div style={{ color: "#99A897", fontSize: "11px", lineHeight: "1.4", textAlign: "center", fontFamily: "Poppins, sans-serif" }}>
                  Collects real-time air quality, temperature, humidity, noise, and wind metrics.
                </div>
              </foreignObject>
            </g>

            {/* STAGE 2: IoT Gateway */}
            <g className="cursor-pointer">
              <rect className="pulse-card card-n2" x="240" y="70" width="170" height="240" rx="16" fill="#151E14" stroke="#38BDF8" strokeWidth="1.5" strokeOpacity="0.4" />
              <circle cx="325" cy="115" r="28" fill="#1C281B" stroke="#2B3E29" strokeWidth="1" />
              <g transform="translate(313, 103)" stroke="#38BDF8" strokeWidth="2">
                <path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.59 16.11a6 6 0 0 1 6.82 0M12 20h.01" fill="none" />
              </g>
              <text x="325" y="172" textAnchor="middle" fill="#F7F8F5" fontSize="13" fontWeight="bold" fontFamily="Poppins, sans-serif">IoT Gateway</text>
              <foreignObject x="255" y="190" width="140" height="100">
                <div style={{ color: "#99A897", fontSize: "11px", lineHeight: "1.4", textAlign: "center", fontFamily: "Poppins, sans-serif" }}>
                  Aggregates local sensor data and transmits streams securely via MQTT or HTTPS.
                </div>
              </foreignObject>
            </g>

            {/* STAGE 3: Cloud Server */}
            <g className="cursor-pointer">
              <rect className="pulse-card card-n3" x="460" y="70" width="170" height="240" rx="16" fill="#151E14" stroke="#FB923C" strokeWidth="1.5" strokeOpacity="0.4" />
              <circle cx="545" cy="115" r="28" fill="#1C281B" stroke="#2B3E29" strokeWidth="1" />
              <g transform="translate(533, 103)" stroke="#FB923C" strokeWidth="2">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" fill="none" />
                <line x1="12" y1="11" x2="12" y2="17" />
                <line x1="9" y1="14" x2="15" y2="14" />
              </g>
              <text x="545" y="172" textAnchor="middle" fill="#F7F8F5" fontSize="13" fontWeight="bold" fontFamily="Poppins, sans-serif">Cloud Server</text>
              <foreignObject x="475" y="190" width="140" height="100">
                <div style={{ color: "#99A897", fontSize: "11px", lineHeight: "1.4", textAlign: "center", fontFamily: "Poppins, sans-serif" }}>
                  Ingests raw telemetry streams, runs compliance validation, and logs telemetry.
                </div>
              </foreignObject>
            </g>

            {/* STAGE 4: Web Dashboard */}
            <g className="cursor-pointer">
              <rect className="pulse-card card-n4" x="680" y="70" width="170" height="240" rx="16" fill="#151E14" stroke="#2DD4BF" strokeWidth="1.5" strokeOpacity="0.4" />
              <circle cx="765" cy="115" r="28" fill="#1C281B" stroke="#2B3E29" strokeWidth="1" />
              <g transform="translate(753, 103)" stroke="#2DD4BF" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" fill="none" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </g>
              <text x="765" y="172" textAnchor="middle" fill="#F7F8F5" fontSize="13" fontWeight="bold" fontFamily="Poppins, sans-serif">Web Dashboard</text>
              <foreignObject x="695" y="190" width="140" height="100">
                <div style={{ color: "#99A897", fontSize: "11px", lineHeight: "1.4", textAlign: "center", fontFamily: "Poppins, sans-serif" }}>
                  Visualizes trends, displays live telemetry grids, and manages stations.
                </div>
              </foreignObject>
            </g>

            {/* STAGE 5: Alerts & Notifications */}
            <g className="cursor-pointer">
              <rect className="pulse-card card-n5" x="900" y="70" width="170" height="240" rx="16" fill="#151E14" stroke="#E11D48" strokeWidth="1.5" strokeOpacity="0.4" />
              <circle cx="985" cy="115" r="28" fill="#1C281B" stroke="#2B3E29" strokeWidth="1" />
              <g transform="translate(973, 103)" stroke="#E11D48" strokeWidth="2">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" fill="none" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" fill="none" />
              </g>
              <text x="985" y="172" textAnchor="middle" fill="#F7F8F5" fontSize="13" fontWeight="bold" fontFamily="Poppins, sans-serif">Alerts & Alarms</text>
              <foreignObject x="915" y="190" width="140" height="100">
                <div style={{ color: "#99A897", fontSize: "11px", lineHeight: "1.4", textAlign: "center", fontFamily: "Poppins, sans-serif" }}>
                  Triggers SMS, email, or webhook notifications on safety breaches.
                </div>
              </foreignObject>
            </g>
          </svg>
        </div>

        {/* MOBILE VERTICAL FLOW (Visible on Mobile screens below MD) */}
        <div className="block md:hidden w-full max-w-sm mx-auto">
          <svg
            viewBox="0 0 500 820"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            className="overflow-visible"
          >
            <defs>
              <marker
                id="arrow-down"
                viewBox="0 0 10 10"
                refX="5"
                refY="6"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 1.5 0 L 5 8 L 8.5 0 z" fill="#8FC27A" />
              </marker>

              <style>{`
                @keyframes flowDown {
                  from { stroke-dashoffset: 20; }
                  to { stroke-dashoffset: 0; }
                }
                .flow-line-down {
                  stroke-dasharray: 8, 8;
                  animation: flowDown 1.2s linear infinite;
                }
              `}</style>
            </defs>

            {/* CONNECTOR LINES & ANIMS */}
            <path d="M 250 130 L 250 174" stroke="#223321" strokeWidth="4" strokeLinecap="round" />
            <path d="M 250 130 L 250 174" stroke="#8FC27A" strokeWidth="2.5" strokeLinecap="round" markerEnd="url(#arrow-down)" className="flow-line-down" />

            <path d="M 250 290 L 250 334" stroke="#223321" strokeWidth="4" strokeLinecap="round" />
            <path d="M 250 290 L 250 334" stroke="#8FC27A" strokeWidth="2.5" strokeLinecap="round" markerEnd="url(#arrow-down)" className="flow-line-down" />

            <path d="M 250 450 L 250 494" stroke="#223321" strokeWidth="4" strokeLinecap="round" />
            <path d="M 250 450 L 250 494" stroke="#8FC27A" strokeWidth="2.5" strokeLinecap="round" markerEnd="url(#arrow-down)" className="flow-line-down" />

            <path d="M 250 610 L 250 654" stroke="#223321" strokeWidth="4" strokeLinecap="round" />
            <path d="M 250 610 L 250 654" stroke="#8FC27A" strokeWidth="2.5" strokeLinecap="round" markerEnd="url(#arrow-down)" className="flow-line-down" />

            {/* STAGE 1: Sensor Station */}
            <g className="cursor-pointer">
              <rect className="pulse-card card-n1" x="60" y="20" width="380" height="110" rx="16" fill="#151E14" stroke="#8FC27A" strokeWidth="1.5" strokeOpacity="0.4" />
              <circle cx="110" cy="75" r="28" fill="#1C281B" stroke="#2B3E29" strokeWidth="1" />
              <g transform="translate(98, 63)" stroke="#8FC27A" strokeWidth="2">
                <circle cx="12" cy="12" r="4" fill="none" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </g>
              <foreignObject x="155" y="32" width="265" height="85">
                <div style={{ fontFamily: "Poppins, sans-serif" }}>
                  <h3 style={{ color: "#F7F8F5", fontSize: "14px", fontWeight: "bold", margin: "0 0 3px 0" }}>Sensor Station</h3>
                  <p style={{ color: "#99A897", fontSize: "11px", lineHeight: "1.4", margin: 0 }}>
                    Collects real-time air quality, temperature, humidity, noise, and wind metrics.
                  </p>
                </div>
              </foreignObject>
            </g>

            {/* STAGE 2: IoT Gateway */}
            <g className="cursor-pointer">
              <rect className="pulse-card card-n2" x="60" y="180" width="380" height="110" rx="16" fill="#151E14" stroke="#38BDF8" strokeWidth="1.5" strokeOpacity="0.4" />
              <circle cx="110" cy="235" r="28" fill="#1C281B" stroke="#2B3E29" strokeWidth="1" />
              <g transform="translate(98, 223)" stroke="#38BDF8" strokeWidth="2">
                <path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.59 16.11a6 6 0 0 1 6.82 0M12 20h.01" fill="none" />
              </g>
              <foreignObject x="155" y="192" width="265" height="85">
                <div style={{ fontFamily: "Poppins, sans-serif" }}>
                  <h3 style={{ color: "#F7F8F5", fontSize: "14px", fontWeight: "bold", margin: "0 0 3px 0" }}>IoT Gateway</h3>
                  <p style={{ color: "#99A897", fontSize: "11px", lineHeight: "1.4", margin: 0 }}>
                    Aggregates local sensor data and transmits streams securely via MQTT or HTTPS.
                  </p>
                </div>
              </foreignObject>
            </g>

            {/* STAGE 3: Cloud Server */}
            <g className="cursor-pointer">
              <rect className="pulse-card card-n3" x="60" y="340" width="380" height="110" rx="16" fill="#151E14" stroke="#FB923C" strokeWidth="1.5" strokeOpacity="0.4" />
              <circle cx="110" cy="395" r="28" fill="#1C281B" stroke="#2B3E29" strokeWidth="1" />
              <g transform="translate(98, 383)" stroke="#FB923C" strokeWidth="2">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" fill="none" />
                <line x1="12" y1="11" x2="12" y2="17" />
                <line x1="9" y1="14" x2="15" y2="14" />
              </g>
              <foreignObject x="155" y="352" width="265" height="85">
                <div style={{ fontFamily: "Poppins, sans-serif" }}>
                  <h3 style={{ color: "#F7F8F5", fontSize: "14px", fontWeight: "bold", margin: "0 0 3px 0" }}>Cloud Server</h3>
                  <p style={{ color: "#99A897", fontSize: "11px", lineHeight: "1.4", margin: 0 }}>
                    Ingests raw telemetry streams, runs compliance validation, and logs telemetry.
                  </p>
                </div>
              </foreignObject>
            </g>

            {/* STAGE 4: Web Dashboard */}
            <g className="cursor-pointer">
              <rect className="pulse-card card-n4" x="60" y="500" width="380" height="110" rx="16" fill="#151E14" stroke="#2DD4BF" strokeWidth="1.5" strokeOpacity="0.4" />
              <circle cx="110" cy="555" r="28" fill="#1C281B" stroke="#2B3E29" strokeWidth="1" />
              <g transform="translate(98, 543)" stroke="#2DD4BF" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" fill="none" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </g>
              <foreignObject x="155" y="512" width="265" height="85">
                <div style={{ fontFamily: "Poppins, sans-serif" }}>
                  <h3 style={{ color: "#F7F8F5", fontSize: "14px", fontWeight: "bold", margin: "0 0 3px 0" }}>Web Dashboard</h3>
                  <p style={{ color: "#99A897", fontSize: "11px", lineHeight: "1.4", margin: 0 }}>
                    Visualizes trends, displays live telemetry grids, and manages stations.
                  </p>
                </div>
              </foreignObject>
            </g>

            {/* STAGE 5: Alerts & Notifications */}
            <g className="cursor-pointer">
              <rect className="pulse-card card-n5" x="60" y="660" width="380" height="110" rx="16" fill="#151E14" stroke="#E11D48" strokeWidth="1.5" strokeOpacity="0.4" />
              <circle cx="110" cy="715" r="28" fill="#1C281B" stroke="#2B3E29" strokeWidth="1" />
              <g transform="translate(98, 703)" stroke="#E11D48" strokeWidth="2">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" fill="none" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" fill="none" />
              </g>
              <foreignObject x="155" y="672" width="265" height="85">
                <div style={{ fontFamily: "Poppins, sans-serif" }}>
                  <h3 style={{ color: "#F7F8F5", fontSize: "14px", fontWeight: "bold", margin: "0 0 3px 0" }}>Alerts & Alarms</h3>
                  <p style={{ color: "#99A897", fontSize: "11px", lineHeight: "1.4", margin: 0 }}>
                    Triggers SMS, email, or webhook notifications on safety breaches.
                  </p>
                </div>
              </foreignObject>
            </g>
          </svg>
        </div>

      </div>
    </main>
  );
}