"use client";
import { useState } from "react";

import Image from "next/image";
import clsx from "clsx";

import { cakelan } from "../page";

const testimonials = [
  {
    title: "Clareza Mental, Tiragens e Banhos",
    testimonial:
      "O trabalho da Winny é muito sério e vai muito além do que só uma tiragem, ela traz um atendimento humanizado trazendo total clareação para a minha vida, sou adota do tarot, barras de acces e também dos banhos mágicos que ela faz com exclusividade e excelência. Deixo aqui o meu agradecimento por cuidar tão bem de mim, existe uma vida após os seus cuidados e ela é muito mais leve.",
  },
  {
    title: "Conforto na primeira sessão",
    testimonial:
      "Minha experiencia com a primeira sessão de tarô com a winny foi incrivelmente confortante, eu estava em um estado de muita tristeza e desorientação, e ainda sendo um pouco cética em relação ao tarô. Fiz a clareza mental e consegui alinhar vários âmbitos da minha vida com ela naquele dia, várias coisas que não tinha como ninguém saber, as cartas mostraram e não so mostraram como me guiaram também.",
  },
  {
    title: "Consultas recorrentes e intimistas",
    testimonial:
      "Amo tirar tarô com a Winny! Desde que nos conhecemos venho tirando tarô com ela, pelo menos umas 6x ao ano, e é sempre muito mais que uma consulta, é uma conversa com uma amiga. O atendimento é humano, a gente sempre se sente bem acolhido. Sempre posso contar com ela pra me auxiliar à tomar decisões difíceis ou escutar algumas verdades. O reiki e o banhos de ervas dela também são perfeitos! A Winny é pura luz e leveza na minha vida e indico ela pra todos.",
  },
  {
    title: "ansiedade e leveza",
    testimonial:
      "Acordei me sentindo muito mais leve e tranquila depois da nossa sessão. Dormi super bem e acordei mais produtiva, amorosa e sentindo que a ansiedade que eu tava se dissipou. Pelo jeito de conduzir a sessão as cartas me deram muito mais clareza sobre como agir. Muito obrigada pelo trabalho e tua luz.",
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
    <div className="relative w-full max-w-5xl flex flex-col items-center justify-center md:px-16 p-4 pt-24 pb-32 mt-28 mb-[50px] min-h-[760px]">
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

      <div className="flex justify-center items-center h-full">
        <div>
          <button
            className="bg-transparent rounded-full"
            onClick={previosTestimonial}
          >
            <Image
              src="/arrow.svg"
              width={80}
              height={80}
              alt="Depoimento anterior"
              className="hidden md:block"
            />
          </button>
        </div>
        <div className="flex flex-col justify-center items-center md:px-6 px-2 max-w-[720px] h-[400px]">
          <div>
            <h1
              className={`${cakelan.className} text-center md:text-3xl text-xl font-bold my-4 text-antiqueWhite`}
            >
              {testimonials[currentTestimonial].title}
            </h1>
            <p className="text-center md:text-md text-sm ">
              {testimonials[currentTestimonial].testimonial}
            </p>
          </div>

          <div className="flex items-center gap-2 mt-4">
            <button
              className="bg-transparent rounded-full"
              onClick={previosTestimonial}
            >
              <Image
                className="md:hidden"
                src="/arrow.svg"
                width={30}
                height={30}
                alt="Depoimento anterior"
              />
            </button>

            <div
              className={clsx(
                "rounded-full bg-white w-[8px] h-[8px] md:h-2 md:w-2",
                !(currentTestimonial === 0) && "opacity-50"
              )}
            />
            <div
              className={clsx(
                "rounded-full bg-white w-[8px] h-[8px] md:h-2 md:w-2",
                !(currentTestimonial === 1) && "opacity-50"
              )}
            />
            <div
              className={clsx(
                "rounded-full bg-white w-[8px] h-[8px] md:h-2 md:w-2",
                !(currentTestimonial === 2) && "opacity-50"
              )}
            />
            <div
              className={clsx(
                "rounded-full bg-white w-[8px] h-[8px] md:h-2 md:w-2",
                !(currentTestimonial === 3) && "opacity-50"
              )}
            />
            <button
              className="bg-transparent rounded-full"
              onClick={nextTestimonial}
            >
              <Image
                className="rotate-180 md:hidden"
                src="/arrow.svg"
                width={30}
                height={30}
                alt="Próximo depoimento"
              />
            </button>
          </div>
        </div>
        <div>
          <button
            className="bg-transparent rounded-full"
            onClick={nextTestimonial}
          >
            <Image
              className="rotate-180 hidden md:block"
              src="/arrow.svg"
              width={80}
              height={80}
              alt="Próximo depoimento"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
