"use client";
import { useState, useEffect, useRef } from "react";
import Card from "./card";
import { cakelan } from "../page";
import "./carousel.css";
function handleData(data) {
  console.log(data);
  return data.map((card, index) => ({
    number: card.number,
    name: card.name,
    summary: card.summary,
    descriptions: [card.description1, card.description2],
    durations: [
      {
        time: 30,
        title: "Leitura Completa (30min)",
        description: "Uma leitura detalhada e abrangente.",
        price: card["30"],
        image: "duration",
      },
      {
        time: 45,
        title: "Leitura Equilibrada (45min)",
        description:
          "Uma leitura balanceada, abrangendo várias questões com uma profundidade moderada.",
        price: card["45"],
        image: "duration",
      },
      {
        time: 60,
        title: "Leitura Profunda (60min)",
        description:
          "Uma leitura extensa e minuciosa, ideal para explorar temas complexos e obter insights aprofundados.",
        price: card["60"],
        image: "duration-more",
      },
    ],
    imgUrl: `tarot/${index + 1}.svg`,
  }));
}

function Carousel() {
  const carouselRef = useRef(null);
  const [centeredIndex, setCenteredIndex] = useState(0);
  const [cards, setCards] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    console.log(process.env.CARDS_API_URL);
    fetch(process.env.CARDS_API_URL)
      .then((res) => res.json())
      .then((data) => {
        const cardsData = handleData(data);
        setCards(cardsData);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    const cards = carousel.querySelectorAll(".card");

    const handleScroll = () => {
      const carouselRect = carousel.getBoundingClientRect();
      const carouselCenter = (carouselRect.left + carouselRect.right) / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      cards.forEach((card, index) => {
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

    handleScroll(); // Initial call to set the first centered element
    carousel.addEventListener("scroll", handleScroll);

    return () => {
      carousel.removeEventListener("scroll", handleScroll);
    };
  }, [cards]);

  useEffect(() => {
    const cards = carouselRef.current.querySelectorAll(".card");
    cards.forEach((card, index) => {
      if (index === centeredIndex) {
        card.classList.add("centered");
      } else {
        card.classList.remove("centered");
      }
    });
  }, [centeredIndex]);

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
        {isLoading && <p>is Loading...</p>}
        {cards &&
          cards.map((currentCard) => (
            <Card cardInfo={currentCard} key={currentCard} />
          ))}
      </div>
    </div>
  );
}

export default Carousel;
