import Card from "./card";
import { cakelan } from "../page";

export const cards = [
  {
    number: "I",
    name: "SEU TEMPO COM TAROT",
    description:
      "Vamos analisar o que te impede de prosperar? Tenha uma ampla visão sobre a sua trajetória profissional objetivando a sua independência financeira.",
    text1:
      "A Cruz Celta é composta por dez cartas dispostas de maneira especíﬁca. No centro, a primeira carta representa o tema central da leitura.",
    text2:
      "A Cruz Celta é composta por dez cartas dispostas de maneira especíﬁca. No centro, a primeira carta representa o tema central da leitura.",
    imgUrl: "tarot/1.svg",
    duration: "1h30min",
    price: 150,
    type: "Tarot",
  },
  {
    number: "II",
    name: "CARREIRA PROFISSIONAL",
    description:
      "Vamos analisar o que te impede de prosperar? Tenha uma ampla visão sobre a sua trajetória profissional objetivando a sua independência financeira.",
    text1:
      "A Cruz Celta é composta por dez cartas dispostas de maneira especíﬁca. No centro, a primeira carta representa o tema central da leitura.",
    text2:
      "A Cruz Celta é composta por dez cartas dispostas de maneira especíﬁca. No centro, a primeira carta representa o tema central da leitura.",
    imgUrl: "tarot/2.svg",
    duration: "1h30min",
    price: 150,
    type: "Tarot",
  },
  {
    number: "III",
    name: "ARE YOU MINE?",
    description:
      "Vamos analisar o que te impede de prosperar? Tenha uma ampla visão sobre a sua trajetória profissional objetivando a sua independência financeira.",
    text1:
      "A Cruz Celta é composta por dez cartas dispostas de maneira especíﬁca. No centro, a primeira carta representa o tema central da leitura.",
    text2:
      "A Cruz Celta é composta por dez cartas dispostas de maneira especíﬁca. No centro, a primeira carta representa o tema central da leitura.",
    imgUrl: "tarot/3.svg",
    duration: "1h30min",
    price: 150,
    type: "Tarot",
  },
  {
    number: "IV",
    name: "TIRAGEM MENSAL",
    description:
      "Vamos analisar o que te impede de prosperar? Tenha uma ampla visão sobre a sua trajetória profissional objetivando a sua independência financeira.",
    text1:
      "A Cruz Celta é composta por dez cartas dispostas de maneira especíﬁca. No centro, a primeira carta representa o tema central da leitura.",
    text2:
      "A Cruz Celta é composta por dez cartas dispostas de maneira especíﬁca. No centro, a primeira carta representa o tema central da leitura.",
    imgUrl: "tarot/4.svg",
    duration: "1h30min",
    price: 150,
    type: "Tarot",
  },
  {
    number: "V",
    name: "CICLOS DA SUA VIDA",
    description:
      "Vamos analisar o que te impede de prosperar? Tenha uma ampla visão sobre a sua trajetória profissional objetivando a sua independência financeira.",
    text1:
      "A Cruz Celta é composta por dez cartas dispostas de maneira especíﬁca. No centro, a primeira carta representa o tema central da leitura.",
    text2:
      "A Cruz Celta é composta por dez cartas dispostas de maneira especíﬁca. No centro, a primeira carta representa o tema central da leitura.",
    imgUrl: "tarot/5.svg",
    duration: "1h30min",
    price: 150,
    type: "Tarot",
  },
  {
    number: "VI",
    name: "CLAREZA MENTAL",
    description:
      "Vamos analisar o que te impede de prosperar? Tenha uma ampla visão sobre a sua trajetória profissional objetivando a sua independência financeira.",
    text1:
      "A Cruz Celta é composta por dez cartas dispostas de maneira especíﬁca. No centro, a primeira carta representa o tema central da leitura.",
    text2:
      "A Cruz Celta é composta por dez cartas dispostas de maneira especíﬁca. No centro, a primeira carta representa o tema central da leitura.",
    imgUrl: "tarot/6.svg",
    duration: "1h30min",
    price: 150,
    type: "Tarot",
  },
];

function Carousel() {
  return (
    <div className="relative min-h-[700px] w-full max-w-5xl flex flex-col items-center justify-center md:px-16 p-4 pt-24 pb-8 md:pb-32">
      <div id="tarot">
        <h1
          className={`${cakelan.className} md:text-3xl text-xl my-4 text-antiqueWhite`}
        >
          consultas
        </h1>
        <p>
          Na arte do tarot, as tiragens representam uma técnica valiosa e
          personalizada para interpretas as cartas, proporcionando insights
          específicos sobre questõẽs ou áreas da vida. Cada disposicão das
          cartas tem um significado único, permitindo que em uma tiragem nós
          mergulhemos em sua situacão e alcancemos uma visão mais abrangente.
        </p>
        <h1
          className={`${cakelan.className} md:text-3xl text-xl mt-8 mb-4 text-antiqueWhite`}
        >
          ferramentas
        </h1>
        <p>
          Na arte do tarot, as tiragens representam uma técnica valiosa e
          personalizada para interpretas as cartas, proporcionando insights
          específicos sobre questõẽs ou áreas da vida.
        </p>
      </div>
      <div className="carousel mt-6 gap-4 max-w-[90vw] xl:max-w-5xl snap-center pl-[400px]">
        {cards.map((currentCard) => (
          <Card cardInfo={currentCard} key={currentCard} />
        ))}
        {/* cards vazios para poder centralizar o ultimo card */}
        <div className="w-[300px] h-[450px] md:w-[402px] md:h-[603px]"></div>
        <div className="w-[300px] h-[450px] md:w-[402px] md:h-[603px]"></div>
      </div>
    </div>
  );
}

export default Carousel;
