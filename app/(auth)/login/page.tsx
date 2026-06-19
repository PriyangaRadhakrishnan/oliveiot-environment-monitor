"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const DEMO_CREDENTIALS = [
  {
    role: "Super Admin",
    email: "admin@oliveiot.com",
    password: "olive123",
    name: "Priyanga Radhakrishnan"
  },
  {
    role: "Site Admin",
    email: "siteadmin@oliveiot.com",
    password: "site123",
    name: "Site Admin"
  },
  {
    role: "Safety Officer",
    email: "safety@oliveiot.com",
    password: "safety123",
    name: "Safety Officer"
  },
  {
    role: "Viewer",
    email: "viewer@oliveiot.com",
    password: "viewer123",
    name: "Viewer"
  }
];

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string; role?: string }>({});

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { email?: string; password?: string; role?: string } = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!password) {
      newErrors.password = "Password is required";
    }

    if (!role) {
      newErrors.role = "Please select a role";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const credential = DEMO_CREDENTIALS.find(
      (c) => c.email.toLowerCase() === email.trim().toLowerCase()
    );

    if (!credential) {
      newErrors.email = "Account does not exist";
      setErrors(newErrors);
      return;
    }

    if (credential.password !== password) {
      newErrors.password = "Incorrect password";
      setErrors(newErrors);
      return;
    }

    if (credential.role !== role) {
      newErrors.role = "Invalid role";
      setErrors(newErrors);
      return;
    }

    // Store in localStorage
    localStorage.setItem(
      "user",
      JSON.stringify({
        name: credential.name,
        email: credential.email,
        role: credential.role
      })
    );

    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen bg-[#10150F] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/10 blur-[120px] pointer-events-none"></div>

      <div className="w-full max-w-md bg-[#151E14] border border-[#223321] rounded-2xl p-8 shadow-2xl relative z-10 backdrop-blur-sm">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-[#F7F8F5] select-none">
            Olive <span className="text-secondary">IoT</span>
          </h1>
          <p className="text-[#757575] mt-3.5 text-sm font-medium">
            Environment Monitoring Platform
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSignIn}>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-secondary mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="name@company.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
              }}
              className="w-full p-3 rounded-xl bg-[#1C281B] border border-[#2B3E29] text-[#F7F8F5] outline-none placeholder-[#50684E] focus:border-secondary focus:ring-1 focus:ring-secondary/30 transition duration-200"
            />
            {errors.email && (
              <p className="text-[#C23B3B] text-xs font-semibold mt-1">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-secondary mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (errors.password) setErrors((prev) => ({ ...prev, password: undefined }));
              }}
              className="w-full p-3 rounded-xl bg-[#1C281B] border border-[#2B3E29] text-[#F7F8F5] outline-none placeholder-[#50684E] focus:border-secondary focus:ring-1 focus:ring-secondary/30 transition duration-200"
            />
            {errors.password && (
              <p className="text-[#C23B3B] text-xs font-semibold mt-1">
                {errors.password}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-secondary mb-2">
              Access Role
            </label>
            <div className="relative">
              <select
                value={role}
                onChange={(e) => {
                  setRole(e.target.value);
                  if (errors.role) setErrors((prev) => ({ ...prev, role: undefined }));
                }}
                className="w-full p-3 rounded-xl bg-[#1C281B] border border-[#2B3E29] text-[#F7F8F5] outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/30 appearance-none cursor-pointer"
              >
                <option value="">Select a Role</option>
                <option value="Super Admin">Super Admin</option>
                <option value="Site Admin">Site Admin</option>
                <option value="Safety Officer">Safety Officer</option>
                <option value="Viewer">Viewer</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            {errors.role && (
              <p className="text-[#C23B3B] text-xs font-semibold mt-1">
                {errors.role}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-[#43622e] text-[#F7F8F5] py-3.5 rounded-xl font-bold transition duration-200 shadow-lg shadow-primary/20 active:scale-[0.99] cursor-pointer mt-6"
          >
            Sign In
          </button>
        </form>
      </div>
    </main>
  );
}