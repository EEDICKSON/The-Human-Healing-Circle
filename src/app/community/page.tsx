"use client";

import Link from "next/link";

export default function CommunityDirectory() {
  const profiles = [
    {
      name: "Sarah",
      age: 42,
      icon: "👩‍🏫",
      occ: "Teacher",
      rel: "Christian",
      sex: "Female",
      interests:
        "Travelling, reading, volunteering, nature walks, and meaningful conversations.",
      looking:
        "Friendship and a long-term committed relationship with someone who values honesty, kindness and a good sense of humour.",
    },
    {
      name: "Michael",
      age: 55,
      icon: "👨‍💻",
      occ: "Retired Engineer",
      rel: "Christian",
      sex: "Male",
      interests:
        "Music, cooking, gardening, and spending time with family and friends.",
      looking:
        "Genuine friendship and a long-term companion to share life's journey with, built on trust, respect, and mutual understanding.",
    },
    {
      name: "Fatima",
      age: 38,
      icon: "👩‍⚕️",
      occ: "Nurse",
      rel: "Muslim",
      sex: "Female",
      interests:
        "Fitness, community service, cooking, and exploring different cultures.",
      looking:
        "A sincere friendship that could develop into a loving, long-term relationship with someone who values faith, family and commitment.",
    },
    {
      name: "David",
      age: 48,
      icon: "👨‍💼",
      occ: "Accountant",
      rel: "Christian",
      sex: "Male",
      interests: "Hiking, photography, books and humanitarian work.",
      looking:
        "A meaningful connection with a compassionate person interested in friendship, companionship and a lasting relationship.",
    },
    {
      name: "Maria",
      age: 51,
      icon: "👩‍💼",
      occ: "Social Worker",
      rel: "Catholic",
      sex: "Female",
      interests:
        "Dancing, charity work, movies, and spending time with loved ones.",
      looking:
        "Friendship and a long-term committed relationship with someone who appreciates loyalty, laughter and shared values.",
    },
  ];

  return (
    <div className="bg-healing-bg text-healing-blue-dark font-sans min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="font-serif text-3xl font-bold text-healing-green-dark">
            Friendship & Connections Community
          </h1>
          <p className="text-sm text-gray-6xl leading-relaxed mt-3">
            Welcome to our Friendship & Connections community, a space where
            meaningful relationships can begin. Meet members who are open to
            friendship, companionship, and authentic connections.
          </p>
        </div>

        {/* Member Profile Collection Display */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {profiles.map((p, idx) => (
            <div
              key={idx}
              className="bg-white border border-healing-slate rounded-3xl p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 border-b border-healing-slate/40 pb-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-healing-bg flex items-center justify-center text-2xl border border-healing-slate/60">
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-healing-green-dark">
                      {p.name}, {p.age}
                    </h3>
                    <p className="text-xs text-gray-500 font-medium">
                      {p.occ} • {p.rel} • {p.sex}
                    </p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <p className="leading-relaxed">
                    <strong className="text-healing-green font-semibold">
                      Interests:
                    </strong>{" "}
                    {p.interests}
                  </p>
                  <p className="leading-relaxed italic text-gray-6xl bg-healing-bg/30 p-3 rounded-xl border border-dashed border-healing-slate">
                    <strong className="text-healing-green-dark font-semibold not-italic block mb-1">
                      Looking For:
                    </strong>{" "}
                    "{p.looking}"
                  </p>
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-healing-slate/30 text-right">
                <Link
                  href="/contact"
                  className="text-xs font-bold text-healing-green hover:text-healing-green-dark transition"
                >
                  Connect with {p.name} ➔
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Premium Invitation Block */}
        <section className="bg-white border border-healing-slate rounded-3xl p-8 md:p-10 shadow-sm text-center mb-16">
          <h2 className="font-serif text-2xl font-bold text-healing-green-dark mb-3">
            Would You Like to Be Featured?
          </h2>
          <p className="text-sm text-gray-6xl leading-relaxed max-w-2xl mx-auto mb-6">
            If you would like your profile to be featured on our Friendship &
            Connections page, we would be delighted to hear from you. Please
            contact us with a recent photograph and a short introduction about
            yourself.
          </p>
          <div className="bg-healing-blue-light/40 border border-healing-blue/20 rounded-2xl p-4 text-xs text-healing-blue-dark max-w-xl mx-auto mb-6 leading-relaxed">
            💰 <strong>Administrative Notice:</strong> To help us maintain and
            manage this premium directory service securely, a small
            administrative fee is required for profile validation and
            publication.
          </div>
          <Link
            href="/contact"
            className="inline-block bg-healing-green hover:bg-healing-green-dark text-white text-sm font-semibold px-6 py-3 rounded-xl transition shadow-sm"
          >
            Contact Coordinator to Submit Profile
          </Link>
        </section>

        {/* Community Safety Guidelines Section */}
        <section className="border-t border-healing-slate pt-12">
          <h2 className="font-serif text-2xl font-bold text-healing-green-dark text-center mb-2">
            Community Guidelines
          </h2>
          <p className="text-xs text-gray-500 text-center mb-8">
            To ensure a safe, respectful and enjoyable experience for everyone,
            we ask all members to observe these principles:
          </p>

          <div className="space-y-4 max-w-2xl mx-auto">
            {[
              {
                title: "Be respectful and kind",
                text: "Treat others with dignity, courtesy and compassion at all times.",
              },
              {
                title: "Be honest and authentic",
                text: "Present yourself truthfully and communicate with sincerity.",
              },
              {
                title: "Respect privacy and confidentiality",
                text: "Personal information shared within the community should be treated with care and discretion.",
              },
              {
                title: "Maintain appropriate conduct",
                text: "Harassment, discrimination, offensive language or unwanted advances will not be tolerated.",
              },
              {
                title: "Take your time",
                text: "Meaningful friendships and relationships develop naturally. There is no pressure or expectation.",
              },
              {
                title: "Stay safe",
                text: "Avoid sharing sensitive personal or financial information with people you have just met. Exercise caution and use good judgment when interacting online or arranging to meet in person.",
              },
              {
                title: "Promote a positive environment",
                text: "Encourage, support and uplift one another, helping to create a welcoming community for all.",
              },
              {
                title: "Report concerns",
                text: "If you experience inappropriate behaviour or have concerns about a member, please notify the Human Healing Circle team so that appropriate action can be taken.",
              },
            ].map((rule, idx) => (
              <div
                key={idx}
                className="bg-white/60 p-4 rounded-xl border border-healing-slate/60 text-sm"
              >
                <h4 className="font-bold text-healing-green-dark mb-1">
                  {idx + 1}. {rule.title}
                </h4>
                <p className="text-gray-6xl leading-relaxed text-xs md:text-sm">
                  {rule.text}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
