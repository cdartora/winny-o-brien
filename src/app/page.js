import localFont from "next/font/local";
import Image from "next/image";
import Testimonials from "./components/testimonials";

const cakelan = localFont({ src: "./fonts/cakelan.woff" });
export { cakelan };

export default function Home() {
  return (
    <main className="bg-richBlack flex min-h-screen flex-col items-center">
      {/* hero section container */}
      <div
        style={{ backgroundImage: "url(/hero-background.png)" }}
        className="bg-center bg-cover flex min-h-screen w-full flex-col items-center justify-between"
      >
        <div className="flex flex-col items-center bg-gray-200 text-center md:p-24 md:pt-0">
          <div className="mb-24 flex items-center justify-center pt-4">
            {/* detalhes ao redor do nome Winny O'Brien */}
            <Image
              src="/name_detail_2.svg"
              width={200}
              height={3}
              className="hidden md:block"
              alt="graphic detail"
            />
            <h1
              className={`${cakelan.className} md:text-2xl text-sm font-bold md:mx-4 mx-2 text-antiqueWhite whitespace-nowrap`}
            >
              Winny O'Brien
            </h1>
            <Image
              src="/name_detail.svg"
              width={200}
              height={3}
              className="hidden md:block"
              alt="graphic detail"
            />
          </div>

          <div className="flex flex-col items-center bg-gray-200 h-screen text-center md:p-24 p-8 pt-0 max-w-[500px]">
            <h1
              className={`${cakelan.className} md:text-4xl text-2xl font-bold my-4`}
            >
              cartas que susurram mistério, revelando o enigma de cada jornada
            </h1>
            <a
              href="#tarot"
              className="md:text-xl text-md border px-4 py-2 rounded-full"
            >
              clique aqui e adquira agora
            </a>
          </div>
        </div>
        <div />
      </div>
      {/* section container */}
      <Testimonials />

      <Image
        src="/divider-detail.svg"
        width={920}
        height={2}
        className="mt-20"
        alt="Graphic detail"
      />
    </main>
  );
}
