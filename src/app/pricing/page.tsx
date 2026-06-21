export default function PricingPage() {
  return (
    <div className="bg-healing-bg text-healing-blue-dark font-sans min-h-screen py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-healing-green-dark text-center mb-4">
          Companion Memberships
        </h1>
        <p className="text-center italic text-healing-green mb-12">
          Choose the level of connection that matches your current season of
          life.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl border border-healing-slate flex flex-col justify-between shadow-sm">
            <div>
              <h2 className="font-serif text-xl font-bold text-healing-green-dark mb-2">
                A Gentle Conversation
              </h2>
              <p className="text-sm text-healing-blue-dark/80 mb-6">
                One dedicated companion conversation whenever you feel you need
                it most.
              </p>
            </div>
            <button className="w-full bg-healing-blue hover:bg-healing-blue-dark text-white font-medium py-2 rounded-xl transition cursor-pointer">
              Select Tier
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl border-2 border-healing-green flex flex-col justify-between relative shadow-md">
            <span className="absolute top-0 right-6 transform -translate-y-1/2 bg-healing-green text-white text-xs font-semibold px-3 py-1 rounded-full">
              Recommended
            </span>
            <div>
              <h2 className="font-serif text-xl font-bold text-healing-green-dark mb-2">
                Walking Together
              </h2>
              <p className="text-sm text-healing-blue-dark/80 mb-6">
                Regular weekly or fortnightly companion calls structured with
                the same trusted individual.
              </p>
            </div>
            <button className="w-full bg-healing-green hover:bg-healing-green-dark text-white font-medium py-2 rounded-xl transition cursor-pointer">
              Select Tier
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl border border-healing-slate flex flex-col justify-between shadow-sm">
            <div>
              <h2 className="font-serif text-xl font-bold text-healing-green-dark mb-2">
                Circle Membership
              </h2>
              <p className="text-sm text-healing-blue-dark/80 mb-6">
                Full ongoing entry to Monthly Global Circles, active small group
                interactions, and persistent messaging text support.
              </p>
            </div>
            <button className="w-full bg-healing-blue hover:bg-healing-blue-dark text-white font-medium py-2 rounded-xl transition cursor-pointer">
              Select Tier
            </button>
          </div>
        </div>

        {/* Gift of Hope */}
        <div className="mt-12 bg-healing-blue-light border border-healing-blue/20 rounded-2xl p-8 text-center max-w-2xl mx-auto">
          <h3 className="font-serif text-lg font-bold mb-2">
            The Gift of Hope
          </h3>
          <p className="text-sm mb-4">
            Sponsor someone from across the globe who cannot currently afford
            the monthly costs of personalized companion support.
          </p>
          <button className="bg-white border border-healing-blue text-healing-blue-dark hover:bg-healing-slate text-xs font-semibold px-6 py-2 rounded-xl transition cursor-pointer">
            Sponsor a Circle Member
          </button>
        </div>
      </div>
    </div>
  );
}
