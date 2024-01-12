"use client";
import { useState } from "react";
import Image from "next/image";
import { cakelan } from "../page";
import clsx from "clsx";

const testimonials = [
  {
    title: "Frase principal de depoimento",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatem, voluptatum, quae, natus quos quidem voluptate quia voluptates quibusdam dolorum fugiat. Quisquam voluptatem, voluptatum, quae, natus quos quidem voluptate quia voluptates quibusdam dolorum fugiat.",
  },
  {
    title: "Frase principal de depoimento 2",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatem, voluptatum, quae, natus quos quidem voluptate quia voluptates quibusdam dolorum fugiat. Quisquam voluptatem, voluptatum, quae, natus quos quidem voluptate quia voluptates quibusdam dolorum fugiat.",
  },
  {
    title: "Frase principal de depoimento 3",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatem, voluptatum, quae, natus quos quidem voluptate quia voluptates quibusdam dolorum fugiat. Quisquam voluptatem, voluptatum, quae, natus quos quidem voluptate quia voluptates quibusdam dolorum fugiat.",
  },
  {
    title: "Frase principal de depoimento 4",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatem, voluptatum, quae, natus quos quidem voluptate quia voluptates quibusdam dolorum fugiat. Quisquam voluptatem, voluptatum, quae, natus quos quidem voluptate quia voluptates quibusdam dolorum fugiat.",
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
          <div className="flex gap-2 mt-8">
            <div
              className={clsx(
                "rounded-full bg-white w-2 h-2",
                !(currentTestimonial === 0) && "opacity-50"
              )}
            />
            <div
              className={clsx(
                "rounded-full bg-white w-2 h-2",
                !(currentTestimonial === 1) && "opacity-50"
              )}
            />
            <div
              className={clsx(
                "rounded-full bg-white w-2 h-2",
                !(currentTestimonial === 2) && "opacity-50"
              )}
            />
            <div
              className={clsx(
                "rounded-full bg-white w-2 h-2",
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
