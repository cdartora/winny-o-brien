import localFont from "next/font/local";

const cakelan = localFont({ src: "./fonts/cakelan.woff" });

export default function Home() {
  return (
    <main className="bg-richBlack flex min-h-screen flex-col">
      <div
        style={{ backgroundImage: "url(/hero-background.png)" }}
        className="bg-center bg-cover flex min-h-screen flex-col items-center justify-between"
      >
        <div className="flex flex-col items-center bg-gray-200 h-screen text-center p-24 pt-0">
          <div>
            <div className="h-2 bg-white w-10" />
            <h1 className={`${cakelan.className} text-2xl font-bold mt-4`}>
              Winny O'Brien
            </h1>
          </div>
        </div>
        <div />
      </div>
      <div className="min-h-screen"></div>
    </main>
  );
}
