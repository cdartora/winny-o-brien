"use client";
import { useState } from "react";

import Checkout from "./checkout";

import { cakelan } from "../page";

function Card({ cardInfo }) {
  const [isOpen, setIsOpen] = useState(false);

  const openCheckout = () => {
    setIsOpen(true);
  };

  const closeCheckout = () => {
    setIsOpen(false);
  };

  const scrollToCard = ({ target }) => {
    target.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  return (
    <div onClick={(el) => scrollToCard(el)} className="card">
      <h3 className={`${cakelan.className}`}>{cardInfo.name}</h3>

      <div className="content-container">
        <p className="text-center text-base md:text-xl mt-6 md:mt-14 px-8 md:px-10 font-medium">
          {cardInfo.description}
        </p>
      </div>
      <button type="button" onClick={openCheckout}>
        SAIBA MAIS
      </button>

      <h3 className={`${cakelan.className} number`}>{cardInfo.number}</h3>

      {isOpen && (
        <Checkout
          isOpen={isOpen}
          closeCheckout={closeCheckout}
          cardInfo={cardInfo}
        />
      )}
    </div>
  );
}

export default Card;
