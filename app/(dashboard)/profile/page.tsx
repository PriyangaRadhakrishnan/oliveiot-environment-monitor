"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface UserSession {
  name: string;
  email: string;
  role: string;
}

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<UserSession | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const session = localStorage.getItem("user");
    if (!session) {
      router.replace("/login");
    } else {
      try {
        setUser(JSON.parse(session));
      } catch (e) {
        console.error("Error parsing user session", e);
        router.replace("/login");
      }
      setIsLoading(false);
    }
  }, [router]);

  if (isLoading || !user) {
    return (
      <main className="p-8 bg-[#10150F] min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md bg-[#151E14] border border-[#223321] rounded-2xl p-8 shadow-xl text-center animate-pulse">
          <div className="h-8 bg-[#1C281B] rounded-md w-1/3 mx-auto mb-6"></div>
          <div className="space-y-5 border-t border-[#223321] pt-6 text-left">
            <div className="h-10 bg-[#1C281B] rounded-md w-full"></div>
            <div className="h-10 bg-[#1C281B] rounded-md w-full"></div>
            <div className="h-10 bg-[#1C281B] rounded-md w-full"></div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="p-8 bg-[#10150F] min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-[#151E14] border border-[#223321] rounded-2xl p-8 shadow-xl text-center">
        {/* Branding header inside card */}
        <div className="mb-6 select-none">
          <h2 className="text-2xl font-extrabold tracking-tight text-[#F7F8F5]">
            Olive <span className="text-secondary">IoT</span>
          </h2>
          <p className="text-[#757575] text-xs font-semibold mt-1">
            Environment Monitoring Platform
          </p>
        </div>

        {/* Profile Card Fields */}
        <div className="space-y-5 text-left border-t border-[#223321] pt-6">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-secondary mb-1">
              Email Address
            </label>
            <p className="text-[#F7F8F5] text-base font-semibold">
              {user.email}
            </p>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-secondary mb-1.5">
              Access Role
            </label>
            <div>
              <span className="inline-flex px-2.5 py-1 rounded-md bg-secondary/10 border border-secondary/25 text-secondary text-xs font-bold uppercase tracking-wider">
                {user.role}
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
