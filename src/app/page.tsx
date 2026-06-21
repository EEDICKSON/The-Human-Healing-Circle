export default function Home() {
  return (
    <div className="bg-healing-bg text-healing-blue-dark font-sans min-h-screen">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center px-6 py-20">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-healing-green-dark mb-4">
          The Human Healing Circle
        </h1>
        <p className="text-xl italic text-healing-green mb-8">
          Healing through Human Connection
        </p>
        <p className="text-lg leading-relaxed max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-sm border border-healing-slate">
          No one should walk through life's hardest moments alone. The Human
          Healing Circle is a worldwide community of compassion, companionship,
          friendship and hope.
        </p>
      </section>

      {/* Our Promise (Highlighted Section) */}
      <section className="bg-healing-blue-light border-y border-healing-slate py-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl font-bold text-healing-blue-dark mb-6">
            Our Promise To You
          </h2>
          <div className="space-y-3 text-lg font-medium text-healing-blue-dark/90">
            <p>• You do not have to pretend to be strong.</p>
            <p>• You do not have to have all the answers.</p>
            <p>• You do not have to walk alone.</p>
          </div>
          <p className="mt-6 italic text-healing-green-dark font-serif">
            Whatever season of life you are facing, there is a place for you
            here.
          </p>
        </div>
      </section>

      {/* Core Services Preview Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="font-serif text-3xl font-bold text-center text-healing-green-dark mb-12">
          How We Walk Together
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl border border-healing-slate shadow-sm">
            <h3 className="font-serif text-xl font-bold text-healing-green mb-3">
              One-to-One Companion Support
            </h3>
            <p className="text-sm leading-relaxed text-gray-6xl mb-4">
              Connect via WhatsApp, Viber, phone, text, or email. Receive weekly
              check-ins, scheduled companion conversations, and genuine human
              connection.
            </p>
            <span className="text-xs uppercase tracking-wider font-semibold text-healing-blue">
              Personal Support
            </span>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl border border-healing-slate shadow-sm">
            <h3 className="font-serif text-xl font-bold text-healing-green mb-3">
              Monthly Global Circles
            </h3>
            <p className="text-sm leading-relaxed text-gray-6xl mb-4">
              Join online group conversations with people worldwide facing
              similar experiences like grief, illness, divorce, or loneliness.
            </p>
            <span className="text-xs uppercase tracking-wider font-semibold text-healing-blue">
              Group Support
            </span>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl border border-healing-slate shadow-sm">
            <h3 className="font-serif text-xl font-bold text-healing-green mb-3">
              Friendship Circle
            </h3>
            <p className="text-sm leading-relaxed text-gray-6xl mb-4">
              Receive carefully considered introductions to suitable companions
              based on age, language, faith, country, or shared life
              experiences.
            </p>
            <span className="text-xs uppercase tracking-wider font-semibold text-healing-blue">
              Community Connections
            </span>
          </div>
        </div>
      </section>

      {/* Call to Action Box */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="bg-healing-green-light rounded-3xl p-10 text-center border border-healing-green/20">
          <h2 className="font-serif text-2xl font-bold text-healing-green-dark mb-4">
            Ready to find your circle?
          </h2>
          <p className="mb-6 max-w-xl mx-auto text-sm">
            Whether you are facing life's unexpected challenges or wish to
            become a Trusted Companion to walk alongside others, we welcome you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/onboard"
                className="bg-healing-green hover:bg-healing-green-dark text-white font-medium px-6 py-3 rounded-xl transition shadow-sm cursor-pointer text-sm"
              >
                Get Started (Intake Form)
              </a>
              <a
                href="/become-companion"
                className="bg-white hover:bg-healing-slate text-healing-green-dark font-medium px-6 py-3 rounded-xl border border-healing-green/30 transition shadow-sm cursor-pointer text-sm"
              >
                Become a Companion
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
