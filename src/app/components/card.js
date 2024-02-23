"use client";
import Image from "next/image";
import { cakelan } from "../page";

function Card({ cardInfo }) {
  const scrollToCard = ({ target }) => {
    target.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };
  return (
    <div
      onClick={(el) => scrollToCard(el)}
      className="flex flex-col items-center w-[300px] h-[450px] md:w-[402px] md:h-[603px] relative bg-center bg-cover text-richBlack"
      style={{ backgroundImage: "url(/card-layout.svg)" }}
      src="/card-layout.svg"
    >
      {/* numeracão */}
      <h1 className={`${cakelan.className} mt-4 text-2xl md:text-4xl`}>
        {cardInfo.number}
      </h1>
      {/* grafismo e descricão da carta */}
      <div className="flex flex-col py-8 items-center">
        <Image
          alt="grafismo tiragem x"
          src={`/tarot/${cardInfo.number}.svg`}
          height={0}
          width={0}
          className="h-[90px] md:h-[190px] w-auto"
        />
        <p className="text-center text-xs md:text-sm mt-4 px-6 md:px-10">
          {cardInfo.description}
        </p>
        <a
          href=""
          className="absolute bg-opacity-90 hover:bg-opacity-100 transition-all flex justify-center px-8 py-2 rounded-full bg-richBlack text-white font-bold shadow-lg bottom-16 md:bottom-[95px]"
        >
          AGENDAR
        </a>
      </div>

      {/* nome da tiragem */}
      <h1
        className={`${cakelan.className} text-lg md:text-2xl absolute bottom-2 md:bottom-4`}
      >
        {cardInfo.name}
      </h1>
    </div>
  );
}

export default Card;
