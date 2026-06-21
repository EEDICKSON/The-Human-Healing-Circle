"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase";

export default function AdminQueueDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const [activeTab, setActiveTab] = useState("intakes");
  const [intakes, setIntakes] = useState<any[]>([]);
  const [companions, setCompanions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const ADMIN_PASSWORD = "HHC_Admin_2026"; // Change this to your preferred master password!

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setPasswordError(false);
      fetchDashboardData();
    } else {
      setPasswordError(true);
    }
  };

  const fetchDashboardData = async () => {
    setLoading(true);
    setErrorMessage("");
    try {
      const { data: intakeRows, error: intakeError } = await supabase
        .from("member_intakes")
        .select("*")
        .order("created_at", { ascending: false });

      if (intakeError) throw intakeError;
      setIntakes(intakeRows || []);

      const { data: companionRows, error: companionError } = await supabase
        .from("companion_applications")
        .select("*")
        .order("created_at", { ascending: false });

      if (companionError) throw companionError;
      setCompanions(companionRows || []);
    } catch (err: any) {
      console.error("Dashboard pull fault:", err);
      setErrorMessage("Could not load data lines from the cloud.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchDashboardData();
    }
  }, [isAuthenticated]);

  // If not authenticated, render the lock screen gate
  if (!isAuthenticated) {
    return (
      <div className="bg-healing-bg text-healing-blue-dark min-h-screen flex items-center justify-center px-6 py-12">
        <div className="max-w-md w-full bg-white border border-healing-slate rounded-3xl p-8 shadow-sm text-center">
          <div className="w-12 h-12 bg-healing-green-light rounded-full flex items-center justify-center mx-auto mb-4 text-healing-green-dark text-xl">
            🔒
          </div>
          <h1 className="font-serif text-2xl font-bold text-healing-green-dark mb-2">
            Coordinator Portal
          </h1>
          <p className="text-xs text-gray-500 mb-6">
            Please provide the administration access key sequence to decrypt
            queue panels.
          </p>

          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <input
              type="password"
              placeholder="Enter Admin Password"
              className="w-full p-3 rounded-xl border border-healing-slate text-center text-sm focus:outline-none focus:border-healing-green"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
            />
            {passwordError && (
              <p className="text-xs text-red-500 font-semibold">
                Incorrect passcode. Access rejected.
              </p>
            )}
            <button
              type="submit"
              className="w-full bg-healing-green hover:bg-healing-green-dark text-white text-sm font-semibold py-3 rounded-xl shadow-sm transition cursor-pointer"
            >
              Unlock Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Content displays normally once unlocked
  return (
    <div className="bg-healing-bg text-healing-blue-dark font-sans min-h-screen py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-healing-slate pb-6 mb-8 gap-4">
          <div>
            <h1 className="font-serif text-3xl font-bold text-healing-green-dark">
              Central Coordinator Dashboard
            </h1>
            <p className="text-xs opacity-80 mt-1">
              Reviewing incoming season alignments and companion pairings.
            </p>
          </div>
          <button
            onClick={fetchDashboardData}
            className="bg-white border border-healing-slate hover:bg-healing-slate text-xs font-semibold px-4 py-2 rounded-xl shadow-sm transition cursor-pointer"
          >
            Refresh Dashboard Data
          </button>
        </div>

        {errorMessage && (
          <div className="bg-red-50 text-red-6xl text-xs p-4 rounded-xl border border-red-200 mb-6">
            {errorMessage}
          </div>
        )}

        <div className="flex gap-4 border-b border-healing-slate/60 pb-px mb-6">
          <button
            onClick={() => setActiveTab("intakes")}
            className={`pb-3 text-sm font-semibold tracking-wide border-b-2 transition-all cursor-pointer ${activeTab === "intakes" ? "border-healing-green text-healing-green-dark" : "border-transparent opacity-60 hover:opacity-100"}`}
          >
            Member Intakes ({intakes.length})
          </button>
          <button
            onClick={() => setActiveTab("companions")}
            className={`pb-3 text-sm font-semibold tracking-wide border-b-2 transition-all cursor-pointer ${activeTab === "companions" ? "border-healing-green text-healing-green-dark" : "border-transparent opacity-60 hover:opacity-100"}`}
          >
            Companion Applications ({companions.length})
          </button>
        </div>

        {loading ? (
          <div className="text-center py-20 text-sm italic opacity-70">
            Pulling secure data paths straight from the cloud...
          </div>
        ) : (
          <div>
            {activeTab === "intakes" && (
              <div className="space-y-4">
                {intakes.length === 0 ? (
                  <p className="text-sm italic text-gray-400 py-6">
                    No member introductions logs registered inside the database.
                  </p>
                ) : (
                  intakes.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white border border-healing-slate rounded-2xl p-6 shadow-sm flex flex-col gap-4"
                    >
                      <div className="flex flex-wrap justify-between items-start gap-2 border-b border-healing-slate/50 pb-3">
                        <span className="text-xs font-semibold uppercase tracking-wider text-healing-blue bg-healing-blue-light px-2.5 py-1 rounded-md">
                          Channel: {item.connection_method}
                        </span>
                        <span className="text-xs text-gray-400 font-mono">
                          {new Date(item.created_at).toLocaleDateString()}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-xs uppercase font-bold text-healing-green tracking-wider mb-1">
                          Navigating Life Season:
                        </h4>
                        <p className="text-sm leading-relaxed text-healing-blue-dark/90 font-medium">
                          {item.season_of_life}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xs uppercase font-bold text-healing-green tracking-wider mb-1">
                          Message on Heart:
                        </h4>
                        <p className="text-sm italic leading-relaxed text-gray-6xl p-3 bg-healing-bg/40 rounded-xl border border-dashed border-healing-slate">
                          "{item.heart_note}"
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-4 text-xs font-semibold opacity-80 pt-1">
                        <p>
                          • Seeking:{" "}
                          <span className="text-healing-green-dark">
                            {item.support_type}
                          </span>
                        </p>
                        <p>
                          • Spirituality:{" "}
                          <span className="text-healing-green-dark">
                            {item.spirituality}
                          </span>
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}

            {activeTab === "companions" && (
              <div className="space-y-4">
                {companions.length === 0 ? (
                  <p className="text-sm italic text-gray-400 py-6">
                    No companion application submissions logs registered inside
                    the database.
                  </p>
                ) : (
                  companions.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white border border-healing-slate rounded-2xl p-6 shadow-sm flex flex-col gap-4"
                    >
                      <div className="flex flex-wrap justify-between items-center gap-2 border-b border-healing-slate/50 pb-3">
                        <div>
                          <h3 className="font-serif text-lg font-bold text-healing-green-dark">
                            {item.full_name}
                          </h3>
                          <p className="text-xs opacity-70">
                            {item.email} • {item.phone}
                          </p>
                        </div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-healing-green bg-healing-green-light px-2.5 py-1 rounded-md">
                          {item.country}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-xs uppercase font-bold text-healing-green tracking-wider mb-1">
                          Volunteer Drive & Motivation:
                        </h4>
                        <p className="text-sm leading-relaxed text-gray-6xl">
                          {item.motivation}
                        </p>
                      </div>
                      <div className="text-right text-xs text-gray-400 font-mono">
                        Received:{" "}
                        {new Date(item.created_at).toLocaleDateString()}
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
