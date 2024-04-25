"use client";
import { useState } from "react";

import Checkout from "./checkout";

import { cakelan } from "../page";

export default function VipCard({ backgroundImage, title, cardInfo }) {
  const [isOpen, setIsOpen] = useState(false);
  function openCheckout() {
    setIsOpen(true);
  }
  function closeCheckout() {
    setIsOpen(false);
  }
  return (
    <div
      className="flex flex-col items-center w-[300px] h-[450px] md:w-[402px] md:h-[603px] relative bg-center bg-cover text-richBlack"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute bottom-4 md:bottom-10 left-4">
        <h1
          className={`${cakelan.className} mt-2 md:mt-4 text-2xl text-antiqueWhite md:mb-2`}
        >
          {title}
        </h1>
        <button
          type="button"
          // animation
          onClick={openCheckout}
          className="bg-opacity-90 hover:bg-opacity-100 transition-all
                  md:bottom-20 px-8 py-2 rounded-full bg-white text-richBlack text-lg font-bold shadow-lg" // style
        >
          SAIBA MAIS
        </button>
      </div>
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
