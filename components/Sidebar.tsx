"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/dashboard") {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  const navItemClass = (path: string) => {
    return isActive(path)
      ? "flex items-center gap-3 bg-primary text-[#F7F8F5] font-semibold p-3.5 rounded-xl border border-primary/30 shadow-md shadow-primary/10 transition duration-200"
      : "flex items-center gap-3 text-[#99A897] hover:text-[#F7F8F5] hover:bg-[#1C281B] p-3.5 rounded-xl border border-transparent transition duration-200";
  };

  const handleLinkClick = () => {
    if (onClose) {
      onClose();
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    if (onClose) {
      onClose();
    }
  };

  return (
    <>
      {/* Drawer backdrop overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-45 transition-opacity duration-300"
        />
      )}

      {/* Sidebar Drawer container */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#151E14] border-r border-[#223321] p-6 flex flex-col justify-between select-none transition-transform duration-300 ease-in-out transform h-screen max-h-screen overflow-hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col flex-1 overflow-hidden">
          {/* Logo Section */}
          <div className="mb-6 px-2 pb-5 border-b border-[#223321] flex justify-between items-center shrink-0">
            <h1 className="text-xl font-extrabold tracking-tight text-[#F7F8F5] select-none">
              Olive <span className="text-[#8FC27A]">IoT</span>
            </h1>

            {/* Close drawer button */}
            <button
              onClick={onClose}
              className="p-1 text-[#99A897] hover:text-[#F7F8F5] transition cursor-pointer"
              aria-label="Close Sidebar"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col gap-1.5 flex-1 overflow-y-auto pr-1 pb-4">
            <Link href="/dashboard" className={navItemClass("/dashboard")} onClick={handleLinkClick}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 shrink-0">
                <rect x="3" y="3" width="7" height="9" rx="1" />
                <rect x="14" y="3" width="7" height="5" rx="1" />
                <rect x="14" y="12" width="7" height="9" rx="1" />
                <rect x="3" y="16" width="7" height="5" rx="1" />
              </svg>
              <span>Dashboard</span>
            </Link>

            <Link href="/stations" className={navItemClass("/stations")} onClick={handleLinkClick}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 shrink-0">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Sites & Stations</span>
            </Link>

            <Link href="/monitoring" className={navItemClass("/monitoring")} onClick={handleLinkClick}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 shrink-0">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
              <span>Live Monitoring</span>
            </Link>

            <Link href="/air-quality" className={navItemClass("/air-quality")} onClick={handleLinkClick}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 shrink-0">
                <path d="M8.9 8.24A10 10 0 0 1 18 12a10 10 0 0 1-9.1 3.76" />
                <path d="M11.2 5.5A7 7 0 0 1 18 12a7 7 0 0 1-6.8 6.5" />
                <path d="M4 12h14" />
                <path d="M12 4v16" />
              </svg>
              <span>Air Quality</span>
            </Link>

            <Link href="/charts" className={navItemClass("/charts")} onClick={handleLinkClick}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 shrink-0">
                <line x1="18" y1="20" x2="18" y2="10" />
                <line x1="12" y1="20" x2="12" y2="4" />
                <line x1="6" y1="20" x2="6" y2="14" />
              </svg>
              <span>Charts</span>
            </Link>

            <Link href="/alerts" className={navItemClass("/alerts")} onClick={handleLinkClick}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 shrink-0">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
              <span>Alerts</span>
            </Link>

            <Link href="/reports" className={navItemClass("/reports")} onClick={handleLinkClick}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 shrink-0">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
              <span>Reports</span>
            </Link>

            <Link href="/architecture" className={navItemClass("/architecture")} onClick={handleLinkClick}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 shrink-0">
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                <line x1="6" y1="6" x2="6.01" y2="6" />
                <line x1="6" y1="18" x2="6.01" y2="18" />
              </svg>
              <span>Architecture Diagram</span>
            </Link>

            <Link href="/profile" className={navItemClass("/profile")} onClick={handleLinkClick}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 shrink-0">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span>Profile</span>
            </Link>
          </nav>
        </div>

        <div className="pt-4 border-t border-[#223321] mt-auto shrink-0">
          <Link
            href="/login"
            className="flex items-center gap-3 text-red-400/90 hover:text-red-300 hover:bg-red-950/20 p-3.5 rounded-xl border border-transparent transition duration-200"
            onClick={handleLogout}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 shrink-0">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
            <span>Logout</span>
          </Link>
        </div>
      </aside>
    </>
  );
}