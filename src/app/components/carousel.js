"use client";

import { useState, useEffect, useRef } from "react";
import Card from "./card";
import { cakelan } from "../page";

import "./carousel.css";

function Carousel({ cards }) {
  const carouselRef = useRef(null);
  const [centeredIndex, setCenteredIndex] = useState(0);

  // logica para centralizar as cartas no carrosel
  useEffect(() => {
    const carousel = carouselRef.current;
    const cardElements = carousel.querySelectorAll(".card");

    const handleScroll = () => {
      const carouselRect = carousel.getBoundingClientRect();
      const carouselCenter = (carouselRect.left + carouselRect.right) / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      cardElements.forEach((card, index) => {
        const cardRect = card.getBoundingClientRect();
        const cardCenter = (cardRect.left + cardRect.right) / 2;
        const distance = Math.abs(carouselCenter - cardCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setCenteredIndex(closestIndex);
    };

    handleScroll();
    carousel.addEventListener("scroll", handleScroll);

    return () => {
      carousel.removeEventListener("scroll", handleScroll);
    };
  }, [cards]);

  useEffect(() => {
    if (!cards) return;

    const cardElements = carouselRef.current.querySelectorAll(".card");
    cardElements.forEach((card, index) => {
      if (index === centeredIndex) {
        card.classList.add("centered");
      } else {
        card.classList.remove("centered");
      }
    });
  }, [centeredIndex, cards]);

  return (
    <div id="tarot" className="carousel-container">
      <h2 className={`${cakelan.className}`}>ferramentas</h2>

      <p>
        As cartas do tarot e do baralho cigano atuam como instrumentos de
        conexão com o campo energético, permitindo-me oferecer uma perspectiva
        detalhada e precisa sobre diversas situações, auxiliando-o na tomada de
        decisões que facilitarão a resolução de seus problemas.
      </p>

      <h2 className={`${cakelan.className}`}>leituras</h2>

      <p>
        A arte da cartomancia é uma prática oracular ancestral que nos permite
        desvendar os mistérios do nosso inconsciente, proporcionando uma
        compreensão mais profunda das questões que enfrentamos no dia a dia.
        <br />
        Minhas leituras de tarot e baralho cigano são guiadas por uma abordagem
        de mentoria espiritual, com o objetivo de orientá-lo através de seus
        sentimentos, desejos e possibilidades.
      </p>

      <div ref={carouselRef} className="carousel">
        {cards&&cards.map((currentCard) => (
          <Card cardInfo={currentCard} key={currentCard.number} />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
