"use client";

import { useState } from "react";
import Sidebar from "../../components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#10150F] text-[#F7F8F5] relative">
      {/* Top Navbar (All Screen Sizes) */}
      <div className="w-full h-16 bg-[#151E14] border-b border-[#223321] px-6 flex items-center gap-4 fixed top-0 left-0 z-30 select-none">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="p-2 text-[#99A897] hover:text-[#F7F8F5] transition cursor-pointer"
          aria-label="Open Sidebar"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>

        <h1 className="text-xl font-extrabold tracking-tight text-[#F7F8F5]">
          Olive <span className="text-[#8FC27A]">IoT</span>
        </h1>
      </div>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto pt-16">
        {children}
      </main>
    </div>
  );
}