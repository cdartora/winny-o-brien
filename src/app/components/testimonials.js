"use client";
import { useState } from "react";

import Image from "next/image";
import clsx from "clsx";

import { cakelan } from "../page";

const testimonials = [
  {
    title: "Despertando a Magia Interior",
    testimonial:
      '"Conhecer a Winny foi uma revelação mágica! Suas leituras de Tarot transcendem as cartas, mergulhando fundo nos mistérios do meu ser. Uma verdadeira guia espiritual que ilumina o caminho do despertar como bruxa." - Carolina S.',
  },
  {
    title: "Feitiços e Encantamentos Transformadores",
    testimonial:
      '"Winny não apenas lê o Tarot; ela tece feitiços e encantamentos que transformam vidas. Sua abordagem única à bruxaria conecta o passado e o presente, oferecendo uma jornada espiritual que ressoa profundamente. Uma experiência verdadeiramente mágica!" - Eduardo M.',
  },
  {
    title: "Trajetória de Sabedoria e Magia",
    testimonial:
      '"Minha jornada espiritual ganhou um novo significado com Winny. Sua trajetória como bruxa e sua habilidade de compartilhar sabedoria ancestral através do Tarot são inspiradoras. Uma experiência que vai além das palavras, redefinindo o significado de magia em minha vida." - Gabriela R.',
  },
  {
    title: "Conexões Místicas e Revelações Poderosas",
    testimonial:
      '"Winny é mais que uma leitora de Tarot; é uma condutora de conexões místicas. Suas leituras revelam verdades profundas e despertam poderosas energias interiores. Uma fonte de inspiração para todos que buscam desvendar os mistérios da vida e da bruxaria." - Marcos C.',
  },
];

function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    if (currentTestimonial === testimonials.length - 1) {
      setCurrentTestimonial(0);
    } else {
      setCurrentTestimonial(currentTestimonial + 1);
    }
  };

  const previosTestimonial = () => {
    if (currentTestimonial === 0) {
      setCurrentTestimonial(testimonials.length - 1);
    } else {
      setCurrentTestimonial(currentTestimonial - 1);
    }
  };

  return (
    <div className="relative min-h-[500px] w-full max-w-5xl flex flex-col items-center justify-center md:px-16 p-4 pt-24 pb-32 mt-28">
      <Image
        src="/quote-icon.svg"
        width={162}
        height={162}
        alt="quote icon"
        className="absolute -top-10 md:left-20 left-5"
      />
      <Image
        src="/quote-icon.svg"
        width={162}
        height={162}
        alt="quote icon"
        className="absolute -bottom-10 md:right-20 right-5 rotate-180"
      />

      <div className="flex justify-center items-center">
        <div>
          <button
            className="bg-transparent rounded-full"
            onClick={previosTestimonial}
          >
            <Image
              src="/arrow.svg"
              width={200}
              height={200}
              alt="Depoimento anterior"
            />
          </button>
        </div>
        <div className="flex flex-col items-center md:px-6 px-2">
          <h1
            className={`${cakelan.className} md:text-3xl text-xl font-bold my-8 text-antiqueWhite`}
          >
            {testimonials[currentTestimonial].title}
          </h1>
          <p className="text-center md:text-md text-sm">
            {testimonials[currentTestimonial].testimonial}
          </p>
          <div className="flex gap-2 md:mt-8 mt-4">
            <div
              className={clsx(
                "rounded-full bg-white w-[4px] h-[4px] md:h-2 md:w-2",
                !(currentTestimonial === 0) && "opacity-50"
              )}
            />
            <div
              className={clsx(
                "rounded-full bg-white w-[4px] h-[4px] md:h-2 md:w-2",
                !(currentTestimonial === 1) && "opacity-50"
              )}
            />
            <div
              className={clsx(
                "rounded-full bg-white w-[4px] h-[4px] md:h-2 md:w-2",
                !(currentTestimonial === 2) && "opacity-50"
              )}
            />
            <div
              className={clsx(
                "rounded-full bg-white w-[4px] h-[4px] md:h-2 md:w-2",
                !(currentTestimonial === 3) && "opacity-50"
              )}
            />
          </div>
        </div>
        <div>
          <button
            className="bg-transparent rounded-full"
            onClick={nextTestimonial}
          >
            <Image
              className="rotate-180"
              src="/arrow.svg"
              width={200}
              height={200}
              alt="Próximo depoimento"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
