"use client"; // Enables client runtime operations to pull live database rows

import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase";

export default function AdminQueueDashboard() {
  const [activeTab, setActiveTab] = useState("intakes"); // 'intakes' or 'companions'
  const [intakes, setIntakes] = useState<any[]>([]);
  const [companions, setCompanions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  // Pull real-time data lists straight from your cloud database tables
  const fetchDashboardData = async () => {
    setLoading(true);
    setErrorMessage("");
    try {
      // 1. Grab all registered Member Intakes rows
      const { data: intakeRows, error: intakeError } = await supabase
        .from("member_intakes")
        .select("*")
        .order("created_at", { ascending: false });

      if (intakeError) throw intakeError;
      setIntakes(intakeRows || []);

      // 2. Grab all registered Companion Volunteer application rows
      const { data: companionRows, error: companionError } = await supabase
        .from("companion_applications")
        .select("*")
        .order("created_at", { ascending: false });

      if (companionError) throw companionError;
      setCompanions(companionRows || []);
    } catch (err: any) {
      console.error("Dashboard pull fault:", err);
      setErrorMessage(
        "Could not load data lines from the cloud. Verify security policies.",
      );
    } finally {
      setLoading(false);
    }
  };

  // Run the data fetch instantly when the component mounts onto the view
  useEffect(() => {
    fetchDashboardData();
  }, []);

  return (
    <div className="bg-healing-bg text-healing-blue-dark font-sans min-h-screen py-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Ribbon */}
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

        {/* Tab Selection Switches */}
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

        {/* Loading Spinner Template */}
        {loading ? (
          <div className="text-center py-20 text-sm italic opacity-70">
            Pulling secure data paths straight from the cloud...
          </div>
        ) : (
          <div>
            {/* VIEW TAB 1: Member Intakes Management Grid */}
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

            {/* VIEW TAB 2: Companion Applications Management Grid */}
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
