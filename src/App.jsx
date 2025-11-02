export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="p-6 text-center border-b border-gray-700">
        <h1 className="text-3xl font-bold tracking-wide">
          <span className="text-[rgb(196,176,152)]">De</span> NextColor
        </h1>
        <p className="text-sm text-lightgray mt-2">
          Professioneel Schilderwerk
        </p>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-16 px-6">
        <h2 className="text-5xl font-bold uppercase mb-3">
          Perfecte Afwerking
        </h2>
        <p className="text-lg text-lightgray mb-6">
          Woningen • Binnen • Buiten
        </p>
        <p className="font-semibold">Snelle, nette en betrouwbare service</p>
      </section>

      {/* Services */}
      <section className="py-16 bg-[#101B2E] px-6 text-center">
        <h3 className="text-2xl font-semibold mb-8">Onze Diensten</h3>
        <p className="font-semibold">Heemstede Haarlem en Omgeving</p>
        <br />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {["Woningen", "Bedrijven", "Binnen", "Buiten"].map((item) => (
            <div
              key={item}
              className="p-6 border border-gray-700 rounded-2xl hover:bg-[#1A2A40] transition"
            >
              <h4 className="text-xl font-medium">{item}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 px-6 text-center">
        <h3 className="text-3xl font-bold mb-10 text-white tracking-wide">
          Galerij
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { src: "/amario1.jpeg", alt: "Woning interieur" },
            { src: "/amario4.jpeg", alt: "Woning interieur" },
            { src: "/porta5.jpeg", alt: "Woning interieur" },
            { src: "/winkel_pauw12.jpeg", alt: "Buitenmuur schilderwerk" },
            { src: "/winkel_pauw13.jpeg", alt: "Buitenmuur schilderwerk" },
            { src: "/winkel_pauw_m1.JPG", alt: "interieur Winkel Pauw" },
            { src: "/winkel_pauw_m2.JPG", alt: "interieur Winkel Pauw" },

            { src: "/trap4.jpeg", alt: "Trap renovatie" },
            { src: "/trap2.jpeg", alt: "Trap renovatie" },
            { src: "/trap3.jpeg", alt: "Trap renovatie" },
            { src: "/casa_haarlem1.jpeg", alt: "Muur schilderwerk" },
            { src: "/casa_haarlem2.jpeg", alt: "Muur schilderwerk" },
            { src: "/casa_haarlem3.jpeg", alt: "Muur schilderwerk" },
          ].map((item, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-2xl shadow-lg group opacity-0 animate-fadeIn"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500 ease-in-out"
              />

              {/* Overlay com o texto */}
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                <p className="text-white font-medium text-lg">{item.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="py-16 bg-[#101B2E] px-6 text-center">
        <h3 className="text-2xl font-semibold mb-6">Over Ons</h3>
        <p className="max-w-2xl mx-auto text-lightgray">
          Bij NextColor.nl streven we naar een perfecte afwerking in elk
          project. Met jarenlange ervaring leveren we schilderwerk van
          topkwaliteit — snel, netjes en betrouwbaar, zowel binnen als buiten.
        </p>
      </section>

      {/* Contact */}
      <section className="py-16 px-6 text-center">
        <h3 className="text-2xl font-semibold mb-8">Contact</h3>
        <p className="text-lightgray mb-8">
          Vul het formulier in of stuur ons direct een bericht via WhatsApp.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const name = e.target.name.value;
            const message = e.target.message.value;
            const encodedMsg = encodeURIComponent(
              `Hallo, ik ben ${name}. ${message}`
            );
            window.open(
              `https://wa.me/31687168857?text=${encodedMsg}`,
              "_blank"
            );
          }}
          className="max-w-md mx-auto flex flex-col gap-4 bg-[#101B2E] p-6 rounded-2xl border border-gray-700"
        >
          <input
            type="text"
            name="name"
            placeholder="Uw naam"
            required
            className="p-3 rounded-md bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:border-white outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Uw e-mailadres"
            required
            className="p-3 rounded-md bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:border-white outline-none"
          />
          <textarea
            name="message"
            placeholder="Uw bericht"
            required
            rows="4"
            className="p-3 rounded-md bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:border-white outline-none"
          ></textarea>
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 transition px-6 py-2 rounded-full font-medium"
          >
            Verstuur via WhatsApp
          </button>
        </form>

        <p className="text-sm text-lightgray mt-6">
          Of stuur ons een e-mail:{" "}
          <a href="mailto:joseccrodrigues@hotmail.com" className="underline">
            joseccrodrigues@hotmail.com
          </a>
        </p>
        {/* Instagram link */}
        <div>
          <a
            href="https://www.instagram.com/denextcolor"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram @denextcolor"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-gray-700 text-lightgray hover:text-white hover:bg-[#1A2A40] transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
              aria-hidden="true"
            >
              <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.3a4.7 4.7 0 1 0 0 9.4 4.7 4.7 0 0 0 0-9.4zm6.5-.8a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2z" />
            </svg>
            <span className="text-sm">Instagram /@denextcolor</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-6 border-t border-gray-700 text-center text-sm text-lightgray">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <div>
            © {new Date().getFullYear()} NextColor.nl — Alle rechten
            voorbehouden
          </div>
        </div>
      </footer>
    </div>
  );
}
