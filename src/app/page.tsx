"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-healing-bg text-healing-blue-dark font-sans min-h-screen">
      {/* Hero Banner Section */}
      <section className="max-w-4xl mx-auto text-center py-20 px-6">
        <span className="text-xs font-bold uppercase tracking-widest text-healing-green bg-healing-green-light px-3 py-1 rounded-full">
          An International Community
        </span>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-healing-green-dark mt-4 mb-6 leading-tight">
          Human Healing Circle
        </h1>
        <p className="text-base md:text-lg leading-relaxed text-gray-6xl max-w-2xl mx-auto mb-8 font-medium">
          An international community of compassionate individuals dedicated to
          supporting people facing emotional, mental, spiritual and, at times,
          physical challenges.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/onboard"
            className="bg-healing-green hover:bg-healing-green-dark text-white text-sm font-semibold px-6 py-3 rounded-xl shadow-sm transition"
          >
            Begin Your Intake Wizard
          </Link>
          <Link
            href="/community"
            className="bg-white border border-healing-slate text-healing-blue-dark text-sm font-semibold px-6 py-3 rounded-xl shadow-sm hover:bg-healing-slate/40 transition"
          >
            Explore Friendship Space
          </Link>
        </div>
      </section>

      {/* Shared Principles Block */}
      <section className="bg-white border-t border-b border-healing-slate py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-healing-green-dark">
              Our Five Key Principles
            </h2>
            <p className="text-xs opacity-70 mt-2">
              Together, we strive to create a caring and inclusive environment
              where individuals feel valued, supported, and empowered.
            </p>
          </div>

          <div className="grid gap-6">
            {[
              {
                num: "1",
                title: "Safe & Confidential Space",
                desc: "Providing a safe and confidential space where people can openly share their experiences without fear of judgment.",
              },
              {
                num: "2",
                title: "Compassionate Listening",
                desc: "Offering compassionate listening and mutual support, with a focus on understanding rather than giving advice or trying to solve problems.",
              },
              {
                num: "3",
                title: "Holistic Wellbeing",
                desc: "Promoting healing and personal growth by nurturing emotional, mental, spiritual and overall wellbeing.",
              },
              {
                num: "4",
                title: "Meaningful Relationships",
                desc: "Creating a supportive network and community where people can connect, make friends and build meaningful, lifelong relationships founded on trust, respect and shared experiences.",
              },
              {
                num: "5",
                title: "Fostering Belonging",
                desc: "Fostering a sense of belonging, ensuring that no one has to face life's challenges alone.",
              },
            ].map((principle) => (
              <div
                key={principle.num}
                className="flex gap-4 p-5 rounded-2xl border border-healing-slate bg-healing-bg/20 hover:bg-healing-bg/40 transition"
              >
                <div className="w-8 h-8 rounded-full bg-healing-green text-white font-bold flex items-center justify-center shrink-0 text-sm">
                  {principle.num}
                </div>
                <div>
                  <h3 className="font-serif font-bold text-healing-green-dark text-base mb-1">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-gray-6xl leading-relaxed">
                    {principle.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="max-w-4xl mx-auto py-16 px-6 text-center">
        <h2 className="font-serif text-2xl font-bold text-healing-green-dark mb-2">
          Countries & Regions We Serve
        </h2>
        <p className="text-sm text-gray-6xl max-w-xl mx-auto mb-8">
          Through shared experiences, empathy, and holistic practices, we
          promote healing, wellbeing and a sense of belonging across the
          following territories:
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            "United Kingdom",
            "Europe",
            "United States",
            "Canada",
            "Australia",
          ].map((region) => (
            <span
              key={region}
              className="bg-white border border-healing-slate text-sm font-semibold px-4 py-2 rounded-xl shadow-sm"
            >
              📍 {region}
            </span>
          ))}
        </div>
        <p className="text-xs opacity-60 italic mt-8">
          As an international community, we welcome people from all backgrounds
          and continue to expand our network of support around the world.
        </p>
      </section>
    </div>
  );
}
