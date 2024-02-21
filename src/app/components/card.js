import Image from "next/image";
import { cakelan } from "../page";

function Card({ cardInfo }) {
  return (
    <div
      className="flex flex-col items-center w-[402px] h-[603px] bg-center bg-cover text-richBlack"
      style={{ backgroundImage: "url(/card-layout.svg)" }}
      src="/card-layout.svg"
    >
      {/* numeracão */}
      <h1 className={`${cakelan.className} mt-4 text-4xl`}>
        {cardInfo.number}
      </h1>
      {/* grafismo e descricão da carta */}
      <div className="flex flex-col py-8 items-center">
        <Image
          alt="grafismo tiragem x"
          src={`/tarot/${cardInfo.number}.svg`}
          height={0}
          width={0}
          className="h-[190px] w-auto"
        />
        <p className="text-center text-sm mt-4">{cardInfo.description}</p>
      </div>

      {/* nome da tiragem */}
      <h1 className={`${cakelan.className} text-2xl mt-9`}>{cardInfo.name}</h1>
    </div>
  );
}

export default Card;
