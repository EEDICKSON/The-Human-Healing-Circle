export default function ContactPage() {
  return (
    <div className="bg-healing-bg text-healing-blue-dark font-sans min-h-screen py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white border border-healing-slate rounded-3xl p-8 md:p-12 shadow-sm">
        <h1 className="font-serif text-3xl font-bold text-healing-green-dark mb-4">
          Connect With Our Family
        </h1>
        <p className="text-sm mb-8 leading-relaxed">
          Our central coordinators are actively monitoring channels around the
          clock to respond to your queries or support routing choices with
          complete dignity.
        </p>

        <div className="space-y-6 border-b border-healing-slate pb-8 mb-8">
          <div>
            <h3 className="text-xs uppercase tracking-wider font-semibold text-healing-green mb-1">
              Direct Instant Support (WhatsApp & Viber)
            </h3>
            <p className="text-lg font-medium font-mono text-healing-blue-dark">
              +357 94542 535
            </p>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-wider font-semibold text-healing-green mb-1">
              General Inquiries Email
            </h3>
            <p className="text-lg font-medium text-healing-blue-dark">
              info@thhc.com
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-wider font-semibold text-gray-400 mb-3">
            Follow and Support Our Global Channels
          </h3>
          <div className="flex gap-4">
            <span className="bg-healing-bg border border-healing-slate text-xs font-medium px-4 py-2 rounded-xl">
              Facebook: The Human Healing Circle
            </span>
            <span className="bg-healing-bg border border-healing-slate text-xs font-medium px-4 py-2 rounded-xl">
              YouTube: The Human Healing Circle
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
