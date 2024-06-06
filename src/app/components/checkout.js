"use client";
import Image from "next/image";
import ModalLayout from "./modal-layout";
import { useState } from "react";
import clsx from "clsx";
import "./checkout.css";

export default function Checkout({ isOpen, closeCheckout, cardInfo }) {
  const [readingMethod, setReadingMethod] = useState("");
  const [selectedDuration, setSelectedDuration] = useState(0);
  const [price, setPrice] = useState(0);
  const { name, descriptions, durations, imgUrl } = cardInfo;

  // Updates the price and selected duration
  const updatePrice = (duration) => {
    setPrice(duration.price);
    setSelectedDuration(duration.time);
  };

  // Generates a WhatsApp link with pre-filled message
  const generateWhatsAppLink = () => {
    const phoneNumber = "555189430417"; // Insert the complete phone number in international format
    const message = `Olá,\nGostaria de agendar uma leitura ${name}.\nAqui estão os detalhes:\n\n**Método de Leitura:** ${
      readingMethod === "video" ? "Video Chamada" : "Áudio no Whatsapp"
    }\n**Duração:** ${selectedDuration} minutos`;

    const encodedMessage = encodeURIComponent(message);
    const link = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    return link;
  };

  // Checks if the form is valid
  const isFormValid = readingMethod !== "" && price !== 0 && selectedDuration !== 0;

  return (
    <ModalLayout
      isOpen={isOpen}
      close={closeCheckout}
      title={name}
      checkout={true}
      price={price}
      link={generateWhatsAppLink()}
    >
      <div className="my-10 flex justify-center">
        <Image src={imgUrl} width={150} height={150} alt={name} />
      </div>

      <div className="px-4">
        {descriptions.map((text, index) => (
          <p key={index} className="mt-2">
            {text}
          </p>
        ))}
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 self-end px-4">
        <div className="w-full">
          <h3 className="text-lg mt-2">Escolha o Método de Leitura</h3>
          <div className="my-2 flex flex-col md:flex-row gap-2">
            <button
              onClick={() => setReadingMethod("audio")}
              className={clsx(
                "method-selector md:w-1/2",
                readingMethod === "audio" && "selected"
              )}
            >
              {readingMethod === "audio" ? (
                <Image
                  src="/audio-selected.svg"
                  alt="auto-falante"
                  width={30}
                  height={30}
                />
              ) : (
                <Image
                  src="/audio.svg"
                  alt="auto-falante"
                  width={30}
                  height={30}
                />
              )}
              <div>
                <h3>Leitura Assíncrona</h3>
                <p className="text-sm">
                  Receba sua leitura via áudio no WhatsApp para ouvir quando
                  quiser.
                </p>
              </div>
            </button>
            <button
              onClick={() => setReadingMethod("video")}
              className={clsx(
                "method-selector md:w-1/2",
                readingMethod === "video" && "selected"
              )}
            >
              {readingMethod === "video" ? (
                <Image
                  src="/video-selected.svg"
                  alt="auto-falante"
                  width={30}
                  height={30}
                />
              ) : (
                <Image
                  src="/video.svg"
                  alt="auto-falante"
                  width={30}
                  height={30}
                />
              )}
              <div>
                <h4>Leitura Sincrona</h4>
                <p className="text-sm">
                  Realize sua leitura em uma videoconferência em tempo real.
                </p>
              </div>
            </button>
          </div>

          <h3 className="text-lg mt-4">Escolha a Duração</h3>
          <div className="my-2 flex flex-col gap-2">
            {durations.map((duration, index) => (
              <button
                key={index}
                onClick={() => updatePrice(duration)}
                className={clsx(
                  "method-selector",
                  selectedDuration === duration.time && "selected"
                )}
              >
                {selectedDuration === duration.time ? (
                  <Image
                    src={`/${duration.image}-selected.svg`}
                    alt="duration-icon"
                    width={30}
                    height={30}
                  />
                ) : (
                  <Image
                    src={`/${duration.image}.svg`}
                    alt="duration-icon"
                    width={30}
                    height={30}
                  />
                )}
                <div>
                  <h3>{duration.title}</h3>
                  <p className="text-sm">{duration.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </ModalLayout>
  );
}
