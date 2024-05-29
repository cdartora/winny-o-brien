"use client";
import { useState } from "react";

import Gallery from "./gallery";

import Image from "next/image";
import clsx from "clsx";

import { cakelan } from "../page";
import { testimonials } from "../data/testimonials";
import "./testimonials.css";

function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  let [isOpen, setIsOpen] = useState(false);

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

  const openGallery = () => {
    setIsOpen(true);
  };

  const closeGallery = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Gallery isOpen={isOpen} closeGallery={closeGallery} />
      <div className="testimonials-container">
        <Image
          src="/quote-icon.svg"
          width={162}
          height={162}
          alt="quote icon"
          className="quote"
        />
        <Image
          src="/quote-icon.svg"
          width={162}
          height={162}
          alt="quote icon"
          className="quote-reversed"
        />

        <div className="testimonials-inner">
          <div className="btn-container">
            <button className="btn-testimonials" onClick={previosTestimonial}>
              <Image
                src="/arrow.svg"
                width={50}
                height={50}
                alt="Depoimento anterior"
              />
            </button>
          </div>

          <div className="testimonial-container">
            <h2 className={`${cakelan.className}`}>
              {testimonials[currentTestimonial].title}
            </h2>
            <div className="testimonial-content">
              <div className="testimonial">
                <p>{testimonials[currentTestimonial].testimonial}</p>
                {currentTestimonial == 0 && (
                  <button onClick={openGallery} className="btn-primary">
                    explorar
                  </button>
                )}
              </div>

              <nav>
                <button
                  className="btn-testimonials"
                  onClick={previosTestimonial}
                >
                  <Image
                    className="mobile"
                    src="/arrow.svg"
                    width={30}
                    height={30}
                    alt="Depoimento anterior"
                  />
                </button>

                <Image
                  src="/more.svg"
                  alt="ícone de explorar"
                  width={12}
                  height={12}
                  className={clsx(
                    "explore-icon",
                    !(currentTestimonial === 0) && "half-opacity"
                  )}
                />
                <div
                  className={clsx(
                    "dot",
                    !(currentTestimonial === 1) && "half-opacity"
                  )}
                />
                <div
                  className={clsx(
                    "dot",
                    !(currentTestimonial === 2) && "half-opacity"
                  )}
                />
                <div
                  className={clsx(
                    "dot",
                    !(currentTestimonial === 3) && "half-opacity"
                  )}
                />
                <div
                  className={clsx(
                    "dot",
                    !(currentTestimonial === 4) && "half-opacity"
                  )}
                />

                <button className="btn-testimonials" onClick={nextTestimonial}>
                  <Image
                    className="rotate mobile"
                    src="/arrow.svg"
                    width={30}
                    height={30}
                    alt="Próximo depoimento"
                  />
                </button>
              </nav>
            </div>
          </div>

          <div className="btn-container">
            <button className="btn-testimonials" onClick={nextTestimonial}>
              <Image
                className="btn-reversed"
                src="/arrow.svg"
                width={50}
                height={50}
                alt="Próximo depoimento"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
