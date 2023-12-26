import localFont from "next/font/local";

const cakelan = localFont({ src: "./fonts/cakelan.woff" });

export default function Home() {
  return (
    <main className="bg-richBlack flex min-h-screen flex-col items-center justify-between p-24">
      <h3 className={`${cakelan.className} text-2xl`}>Winny O'Brien</h3>
      <p>Tiragens de cartas de Tarot</p>
    </main>
  );
}
