"use client"; // Enables dynamic client-side interactions

import { useState } from "react";
// Import our centralized database communication tool
import { supabase } from "@/utils/supabase";

export default function BecomeCompanionPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    motivation: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      // Stream the local form values directly into your Supabase database table
      const { error } = await supabase.from("companion_applications").insert([
        {
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          country: formData.country,
          motivation: formData.motivation,
        },
      ]);

      if (error) throw error;

      // If no database errors happen, update the screen layout state
      setSubmitted(true);
    } catch (err: any) {
      console.error("Database connection issue:", err);
      setErrorMessage(
        "Something went wrong saving your application. Please check your internet connection and try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-healing-bg text-healing-blue-dark font-sans min-h-screen py-16 px-6 flex items-center justify-center">
        <div className="max-w-xl text-center bg-white border border-healing-slate rounded-3xl p-8 md:p-12 shadow-sm">
          <h1 className="font-serif text-3xl font-bold text-healing-green-dark mb-4">
            Application Received
          </h1>
          <p className="text-sm leading-relaxed mb-6 text-gray-6xl">
            Thank you for offering your listening heart,{" "}
            <span className="font-semibold">{formData.fullName}</span>. Our
            central coordinator will review your background and reach out via
            WhatsApp or email to schedule an alignment call.
          </p>
          <div className="inline-block bg-healing-green-light text-healing-green-dark font-medium text-xs px-4 py-2 rounded-xl">
            Dignity • Compassion • Global Family
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-healing-bg text-healing-blue-dark font-sans min-h-screen py-12 px-6">
      <div className="max-w-3xl mx-auto grid md:grid-cols-5 gap-8 items-start">
        {/* Left Side Info Panel */}
        <div className="md:col-span-2 space-y-4">
          <h1 className="font-serif text-3xl font-bold text-healing-green-dark leading-tight">
            Become a Trusted Companion
          </h1>
          <p className="text-sm leading-relaxed opacity-90">
            Do you have a compassionate heart and a desire to walk alongside
            others during life's most difficult seasons? We look for empathetic
            listeners across the world to join our global circle.
          </p>
          <div className="border-t border-healing-slate pt-4 space-y-2 text-xs text-healing-green-dark/90 font-medium">
            <p>✓ Offer secure 1-to-1 conversations</p>
            <p>✓ Participate in group circles</p>
            <p>✓ Create a safe environment</p>
          </div>
        </div>

        {/* Right Side Cloud Action Form */}
        <div className="md:col-span-3 bg-white border border-healing-slate rounded-3xl p-6 md:p-8 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-4">
            {errorMessage && (
              <div className="bg-red-50 text-red-6xl text-xs p-3 rounded-xl border border-red-200">
                {errorMessage}
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-healing-green mb-1">
                Full Name
              </label>
              <input
                type="text"
                required
                className="w-full p-3 rounded-xl border border-healing-slate text-sm bg-healing-bg/20 focus:outline-none focus:border-healing-green"
                placeholder="Your full name"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                disabled={loading}
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-healing-green mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  className="w-full p-3 rounded-xl border border-healing-slate text-sm bg-healing-bg/20 focus:outline-none focus:border-healing-green"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  disabled={loading}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-healing-green mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  className="w-full p-3 rounded-xl border border-healing-slate text-sm bg-healing-bg/20 focus:outline-none focus:border-healing-green"
                  placeholder="e.g., +357..."
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  disabled={loading}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-healing-green mb-1">
                Country of Residence
              </label>
              <input
                type="text"
                required
                className="w-full p-3 rounded-xl border border-healing-slate text-sm bg-healing-bg/20 focus:outline-none focus:border-healing-green"
                placeholder="Where are you located?"
                value={formData.country}
                onChange={(e) =>
                  setFormData({ ...formData, country: e.target.value })
                }
                disabled={loading}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-healing-green mb-1">
                Why do you want to join our circle as a companion?
              </label>
              <textarea
                required
                className="w-full min-h-[120px] p-3 rounded-xl border border-healing-slate text-sm bg-healing-bg/20 focus:outline-none focus:border-healing-green resize-none"
                placeholder="Share a bit about your experiences or what calls you to offer emotional support..."
                value={formData.motivation}
                onChange={(e) =>
                  setFormData({ ...formData, motivation: e.target.value })
                }
                disabled={loading}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 bg-healing-green hover:bg-healing-green-dark text-white font-medium py-3 rounded-xl transition shadow-sm cursor-pointer text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading
                ? "Streaming to Cloud Securely..."
                : "Submit Application"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
