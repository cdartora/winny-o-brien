import Card from "./card";
import { cakelan } from "../page";
import { cards } from "../data/cards";


function Carousel() {
  return (
    <div className="relative min-h-[700px] w-full max-w-5xl flex flex-col items-center justify-center md:px-16 p-4 pt-24 pb-8 md:pb-32">
      <div id="tarot">
        <h1 className={`${cakelan.className} text-3xl my-4 text-antiqueWhite`}>
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
          className={`${cakelan.className} text-3xl mt-8 mb-4 text-antiqueWhite`}
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
      </div>
    </div>
  );
}

export default Carousel;
