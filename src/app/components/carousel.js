import Image from "next/image";
import Card from "./card";
import { cakelan } from "../page";

const cards = [
  {
    number: "1",
    name: "SEU TEMPO COM TAROT",
    description:
      "A Cruz Celta é composta por dez cartas dispostas de maneira especíﬁca. No centro, a primeira carta representa o tema central da leitura.",
  },
  {
    number: "2",
    name: "CARREIRA PROFISSIONAL",
    description:
      "Vamos analisar o que te impede de prosperar? Tenha uma ampla visão sobre a sua trajetória profissional objetivando a sua independência financeira.",
  },
  // {
  //   number: "3",
  //   name: "ARE YOU MINE?",
  //   description:
  //     "Vamos analisar o que te impede de prosperar? Tenha uma ampla visão sobre a sua trajetória profissional objetivando a sua independência financeira.",
  // },
  // {
  //   number: "4",
  //   name: "TIRAGEM MENSAL",
  //   description:
  //     "Vamos analisar o que te impede de prosperar? Tenha uma ampla visão sobre a sua trajetória profissional objetivando a sua independência financeira.",
  // },
  // {
  //   number: "5",
  //   name: "CONHECA OS CICLOS DA SUA VIDA",
  //   description:
  //     "Vamos analisar o que te impede de prosperar? Tenha uma ampla visão sobre a sua trajetória profissional objetivando a sua independência financeira.",
  // },
  // {
  //   number: "6",
  //   name: "CLAREZA MENTAL",
  //   description:
  //     "Vamos analisar o que te impede de prosperar? Tenha uma ampla visão sobre a sua trajetória profissional objetivando a sua independência financeira.",
  // },
  // {
  //   number: "7",
  //   name: "VOCÊ ACREDITA EM VIDAS PASSADAS?",
  //   description:
  //     "Vamos analisar o que te impede de prosperar? Tenha uma ampla visão sobre a sua trajetória profissional objetivando a sua independência financeira.",
  // },
];

function Carousel() {
  return (
    <div className="relative min-h-[700px] w-full max-w-5xl flex flex-col items-center justify-center md:px-16 p-4 pt-24 pb-8 md:pb-32">
      <div id="tarot" className="p-0 md:p-4">
        <h1
          className={`${cakelan.className} md:text-3xl text-xl font-bold my-4 text-antiqueWhite`}
        >
          TIRAGENS DE TAROT
        </h1>
        <p className="md:text-md text-sm">
          Na arte do tarot, as tiragens representam uma técnica valiosa e
          personalizada para interpretas as cartas, proporcionando insights
          específicos sobre questõẽs ou áreas da vida. Cada disposicão das
          cartas tem um significado único, permitindo que em uma tiragem nós
          mergulhemos em sua situacão e alcancemos uma visão mais abrangente.
        </p>
      </div>
      <div className="scroll-smooth pb-5 md:px-10 mt-4 flex items-center justify-center w-full gap-10 snap-x overflow-x-auto border-2">
        {cards.map((currentCard) => (
          <Card cardInfo={currentCard} key={currentCard} />
        ))}
      </div>
      <Image
        src="/divider-detail.svg"
        width={920}
        height={2}
        className="mt-10"
        alt="Graphic detail"
      />
      <div className="flex justify-around items-center mt-2">
        <Image
          src="/star-detail.svg"
          width={17}
          height={17}
          alt="Star detail"
        />
        <Image
          src="/star-detail.svg"
          width={30}
          height={30}
          alt="Star detail"
        />
        <Image
          src="/star-detail.svg"
          width={17}
          height={17}
          alt="Star detail"
        />
      </div>
    </div>
  );
}

export default Carousel;
