export default function ServicesPage() {
  return (
    <div className="bg-healing-bg text-healing-blue-dark font-sans min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-healing-green-dark text-center mb-4">
          Our Support Services
        </h1>
        <p className="text-center italic text-healing-green mb-12">
          Tailored spaces for genuine connection and growth.
        </p>

        <div className="space-y-8">
          {/* Section 1 */}
          <div className="bg-white p-8 rounded-2xl border border-healing-slate shadow-sm">
            <h2 className="font-serif text-2xl font-bold text-healing-green-dark mb-4">
              Monthly Global Healing Circles
            </h2>
            <p className="text-sm leading-relaxed mb-4">
              Join people from around the world in monthly group conversations
              where individuals facing similar life experiences can share,
              listen, learn and support one another.
            </p>
            <h3 className="font-medium text-xs uppercase tracking-wider text-healing-blue mb-2">
              Topics We Cover:
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-sm text-healing-blue-dark/90">
              <li>• Grief and bereavement</li>
              <li>• Cancer and serious illness</li>
              <li>• Divorce and rebuilding life</li>
              <li>• Caregiver support</li>
              <li>• Loneliness and emotional wellbeing</li>
              <li>• Seniors (Aged) and retirement</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="bg-white p-8 rounded-2xl border border-healing-slate shadow-sm">
            <h2 className="font-serif text-2xl font-bold text-healing-green-dark mb-4">
              Friendship Circle
            </h2>
            <p className="text-sm leading-relaxed mb-4">
              Because healing often begins with friendship. Through our
              Friendship Circle, members may find true companionship based on
              age, language, faith, country, or specific interests.
            </p>
            <p className="text-xs bg-healing-green-light text-healing-green-dark font-medium px-4 py-2 rounded-lg inline-block">
              Every connection is thoughtfully introduced by our coordinator to
              foster deep relationships.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
