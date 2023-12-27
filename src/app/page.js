import localFont from "next/font/local";

const cakelan = localFont({ src: "./fonts/cakelan.woff" });

export default function Home() {
  return (
    <main className="bg-richBlack flex min-h-screen flex-col">
      <div
        style={{ backgroundImage: "url(/hero-background.png)" }}
        className="bg-center bg-cover flex min-h-screen flex-col items-center justify-between"
      >
        <div className="flex flex-col items-center bg-gray-200 h-screen text-center md:p-24 p-8 pt-0 md:pt-0">
          <div className="mb-24">
            {/* detalhes ao redor do nome Winny O'Brien */}
            <div className="h-2 bg-white w-10" />

            <h1 className={`${cakelan.className} text-2xl font-bold mt-4`}>
              Winny O'Brien
            </h1>

            <div className="h-2 bg-white w-10" />
          </div>

          <div className="flex flex-col items-center bg-gray-200 h-screen text-center md:p-24 p-8 pt-0">
            <h1 className={`${cakelan.className} text-4xl font-bold my-4`}>
              cartas que susurram mistério, revelando o enigma de cada jornada
            </h1>
            <a href="#tarot" className="text-xl border px-4 py-2 rounded-full">
              clique aqui e adquira agora
            </a>
          </div>
        </div>
        <div />
      </div>
      <div className="min-h-screen"></div>
    </main>
  );
}
