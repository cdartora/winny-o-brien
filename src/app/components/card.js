"use client";
import { useState } from "react";

import Checkout from "./checkout";

import { cakelan } from "../page";

function Card({ cardInfo }) {
  const [isOpen, setIsOpen] = useState(false);
  function openCheckout() {
    setIsOpen(true);
  }
  function closeCheckout() {
    setIsOpen(false);
  }
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
      style={{ backgroundImage: "url(/card-layout.png)" }}
      src="/card-layout.svg"
    >
      {/* numeracão */}
      <h1 className={`${cakelan.className} mt-2 md:mt-4 md:text-xl`}>
        {cardInfo.name}
      </h1>

      {/* grafismo e descricão da carta */}
      <div className="flex flex-col pt-8 items-center justify-center">
        <p className="text-center text-xs md:text-sm mt-4 md:mt-10 px-6 md:px-10 font-medium">
          {cardInfo.description}
        </p>
        <button
          type="button"
          onClick={openCheckout}
          className="bg-opacity-90 hover:bg-opacity-100 transition-all
          absolute bottom-14 md:bottom-20 px-8 py-2 rounded-full bg-richBlack text-white text-xs font-bold shadow-lg" // style
        >
          SAIBA MAIS
        </button>
      </div>

      {/* nome da tiragem */}

      {/* 
      <h1 className={`${cakelan.className} mt-4 text-2xl md:text-4xl`}>
       */}

      <h1
        className={`${cakelan.className} text-lg md:text-4xl absolute bottom-2`}
      >
        {cardInfo.number}
      </h1>
      {isOpen && (
        <>
          <Checkout
            isOpen={isOpen}
            closeCheckout={closeCheckout}
            cardInfo={cardInfo}
          />
        </>
      )}
    </div>
  );
}

export default Card;
