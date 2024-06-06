"use client";
import { useState } from "react";
import Image from "next/image";

import Checkout from "./checkout";

import { cakelan } from "../page";
import "./vip-card.css"

export default function VipCard({ backgroundImage, title, cardInfo }) {
  const [isOpen, setIsOpen] = useState(false);
  function openCheckout() {
    setIsOpen(true);
  }
  function closeCheckout() {
    setIsOpen(false);
  }
  return (
    <div className="relative hover:scale-105 transition-all vip-card">
      <div
        className="z-10 hover: flex flex-col items-center w-[300px] h-[450px] md:w-[402px] md:h-[603px] relative bg-center bg-cover text-richBlack shadow-2xl"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Image
          src="./vip-detail.svg"
          alt=""
          width={0}
          height={0}
          className="absolute z-20 top-4 w-[260px] md:w-[360px] h-[208px] md:h-[290px]"
        />
        <h3 className={`${cakelan.className} text-white text-4xl mt-4 md:mt-6`}>W</h3>
        <div className="z-30 absolute bottom-4 md:bottom-10 left-4">
          <h1
            className={`${cakelan.className} mt-2 md:mt-4 text-2xl text-white md:mb-2`}
          >
            {title}
          </h1>
          <button
            type="button"
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
    </div>
  );
}
