"use client"; // Enables dynamic state tracking and live cloud interactions

import { useState } from "react";
// Import our verified database connection utility
import { supabase } from "@/utils/supabase";

export default function OnboardWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    seasonOfLife: "",
    supportType: "",
    connectionMethod: "",
    connectionFrequency: "Scheduled companion conversations",
    spirituality: "",
    heartNote: "",
  });

  const updateField = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      // Pipe the multi-step questionnaire variables right into the cloud table
      const { error } = await supabase.from("member_intakes").insert([
        {
          season_of_life: formData.seasonOfLife,
          support_type: formData.supportType,
          connection_method: formData.connectionMethod,
          connection_frequency: formData.connectionFrequency,
          spirituality: formData.spirituality,
          heart_note: formData.heartNote,
        },
      ]);

      if (error) throw error;

      setSubmitted(true);
    } catch (err: any) {
      console.error("Database connection fault:", err);
      setErrorMessage(
        "We couldn't submit your introduction right now. Please check your network and try again.",
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
            Welcome to the Circle
          </h1>
          <p className="text-sm leading-relaxed mb-6 text-gray-6xl">
            Your intake details have been securely transmitted to our
            centralized coordinator. We review every life season configuration
            with deep respect and will connect with you shortly.
          </p>
          <div className="inline-block bg-healing-blue-light text-healing-blue-dark font-medium text-xs px-4 py-2 rounded-xl">
            Safe Space • Confidential • Listening Hearts
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-healing-bg text-healing-blue-dark font-sans min-h-screen py-12 px-6">
      <div className="max-w-2xl mx-auto bg-white border border-healing-slate rounded-3xl p-8 md:p-10 shadow-sm">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-xs font-semibold text-healing-green uppercase tracking-wider mb-2">
            <span>Getting to know you</span>
            <span>Step {currentStep} of 4</span>
          </div>
          <div className="w-full bg-healing-slate h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-healing-green h-full transition-all duration-300 ease-out"
              style={{ width: `${(currentStep / 4) * 100}%` }}
            />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {errorMessage && (
            <div className="bg-red-50 text-red-6xl text-xs p-3 rounded-xl border border-red-200">
              {errorMessage}
            </div>
          )}

          {/* STEP 1 */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <h2 className="font-serif text-xl md:text-2xl font-bold text-healing-green-dark">
                What season of life are you currently navigating?
              </h2>
              <textarea
                required
                disabled={loading}
                className="w-full min-h-[120px] p-4 rounded-xl border border-healing-slate bg-healing-bg/30 focus:outline-none focus:border-healing-green text-sm resize-none"
                placeholder="e.g., Facing a sudden grief journey, transitioning into caregiving difficulties..."
                value={formData.seasonOfLife}
                onChange={(e) => updateField("seasonOfLife", e.target.value)}
              />
            </div>
          )}

          {/* STEP 2 */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <h2 className="font-serif text-xl md:text-2xl font-bold text-healing-green-dark">
                What kind of support would help you most?
              </h2>
              <div className="grid gap-3">
                {[
                  {
                    id: "individual",
                    label: "Individual Support (One-to-One Companion Calls)",
                  },
                  {
                    id: "group",
                    label: "Group Support (Monthly Global Circles)",
                  },
                  {
                    id: "friendship",
                    label:
                      "Friendship Opportunities (Careful peer introductions)",
                  },
                  { id: "all", label: "A combination of these spaces" },
                ].map((opt) => (
                  <label
                    key={opt.id}
                    className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition text-sm ${formData.supportType === opt.id ? "border-healing-green bg-healing-green-light/40 font-medium" : "border-healing-slate bg-white hover:bg-healing-bg/50"}`}
                  >
                    <input
                      type="radio"
                      disabled={loading}
                      name="supportType"
                      className="accent-healing-green w-4 h-4"
                      checked={formData.supportType === opt.id}
                      onChange={() => updateField("supportType", opt.id)}
                      required
                    />
                    {opt.label}
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {currentStep === 3 && (
            <div className="space-y-5">
              <div>
                <h2 className="font-serif text-lg md:text-xl font-bold text-healing-green-dark mb-2">
                  How would you like to connect?
                </h2>
                <select
                  required
                  disabled={loading}
                  className="w-full p-3 rounded-xl border border-healing-slate bg-white text-sm focus:outline-none focus:border-healing-green"
                  value={formData.connectionMethod}
                  onChange={(e) =>
                    updateField("connectionMethod", e.target.value)
                  }
                >
                  <option value="">
                    Select your preferred communication app...
                  </option>
                  <option value="whatsapp">
                    WhatsApp Voice and Video Calls
                  </option>
                  <option value="viber">Viber Voice and Video Calls</option>
                  <option value="phone">Standard Direct Phone Calls</option>
                  <option value="text">Text Messaging Only</option>
                  <option value="email">Email Support Only</option>
                </select>
              </div>

              <div>
                <h2 className="font-serif text-lg md:text-xl font-bold text-healing-green-dark mb-2">
                  Is faith or spirituality important to you?
                </h2>
                <select
                  required
                  disabled={loading}
                  className="w-full p-3 rounded-xl border border-healing-slate bg-white text-sm focus:outline-none focus:border-healing-green"
                  value={formData.spirituality}
                  onChange={(e) => updateField("spirituality", e.target.value)}
                >
                  <option value="">Select an option...</option>
                  <option value="yes">
                    Yes, it plays a vital role in my life
                  </option>
                  <option value="neutral">
                    It is welcome but not strict for my pairing
                  </option>
                  <option value="no">
                    No, I prefer entirely secular spaces
                  </option>
                </select>
              </div>
            </div>
          )}

          {/* STEP 4 */}
          {currentStep === 4 && (
            <div className="space-y-4">
              <h2 className="font-serif text-xl md:text-2xl font-bold text-healing-green-dark">
                Tell us what is on your heart.
              </h2>
              <textarea
                required
                disabled={loading}
                className="w-full min-h-[140px] p-4 rounded-xl border border-healing-slate bg-healing-bg/30 focus:outline-none focus:border-healing-green text-sm resize-none"
                placeholder="Share anything you want our central coordinator to read..."
                value={formData.heartNote}
                onChange={(e) => updateField("heartNote", e.target.value)}
              />
            </div>
          )}

          {/* Controls */}
          <div className="flex justify-between items-center pt-6 border-t border-healing-slate mt-8">
            {currentStep > 1 ? (
              <button
                type="button"
                disabled={loading}
                onClick={prevStep}
                className="text-sm font-medium text-healing-blue hover:text-healing-blue-dark transition cursor-pointer disabled:opacity-40"
              >
                Back
              </button>
            ) : (
              <div />
            )}

            {currentStep < 4 ? (
              <button
                type="button"
                onClick={nextStep}
                className="bg-healing-green hover:bg-healing-green-dark text-white text-sm font-medium px-6 py-2.5 rounded-xl transition shadow-sm cursor-pointer"
              >
                Continue
              </button>
            ) : (
              <button
                type="submit"
                disabled={loading}
                className="bg-healing-blue hover:bg-healing-blue-dark text-white text-sm font-medium px-6 py-2.5 rounded-xl transition shadow-sm cursor-pointer disabled:opacity-50"
              >
                {loading
                  ? "Saving your introduction..."
                  : "Submit Introduction"}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
