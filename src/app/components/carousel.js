import Card from "./card";
import { cakelan } from "../page";
import { cards } from "../data/cards";

function Carousel() {
  return (
    <div className="relative min-h-[700px] w-full max-w-5xl flex flex-col items-center justify-center md:px-16 p-4 pt-24 pb-8 md:pb-32">
      <div id="tarot">
        <h1 className={`${cakelan.className} text-3xl my-4 text-antiqueWhite`}>
          leituras
        </h1>
        <p>
          A arte da cartomancia é uma prática oracular ancestral que nos permite
          desvendar os mistérios do nosso inconsciente, proporcionando uma
          compreensão mais profunda das questões que enfrentamos no dia a dia.
          <br />
          Minhas leituras de tarot e baralho cigano são guiadas por uma
          abordagem de mentoria espiritual, com o objetivo de orientá-lo através
          de seus sentimentos, desejos e possibilidades.
        </p>
        <h1
          className={`${cakelan.className} text-3xl mt-8 mb-4 text-antiqueWhite`}
        >
          ferramentas
        </h1>
        <p>
          As cartas do tarot e do baralho cigano atuam como instrumentos de
          conexão com o campo energético, permitindo-me oferecer uma perspectiva
          detalhada e precisa sobre diversas situações, auxiliando-o na tomada
          de decisões que facilitarão a resolução de seus problemas.
        </p>
      </div>
      <div className="carousel mt-6 gap-4 max-w-[90vw] xl:max-w-5xl snap-center pl-[400px]">
        {cards.map((currentCard) => (
          <Card cardInfo={currentCard} key={currentCard} />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
