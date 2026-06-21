export default function Hero() {
  return (
    <section
      className="relative min-h-[650px] flex items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1511632765486-a01980e01a18')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">

        <h1 className="text-6xl font-bold max-w-4xl">
          A PEOPLE FOR GOD.
          <br />
          A PLACE FOR YOU.
        </h1>

        <p className="mt-6 text-2xl">
          Worship. Word. Community. Purpose.
        </p>

        <p className="text-xl">
          We are better together.
        </p>

        <div className="flex gap-4 mt-8">

          <button className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold">
            JOIN US THIS SUNDAY
          </button>

          <button className="border border-white px-8 py-4 rounded-lg">
            WATCH LIVE
          </button>

        </div>

      </div>
    </section>
  );
}