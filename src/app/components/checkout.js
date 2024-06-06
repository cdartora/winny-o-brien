"use client";
import Image from "next/image";
import ModalLayout from "./modal-layout";
import { useState } from "react";
import clsx from "clsx";
import "./checkout.css";

const generateWhatsAppLink = (name, readingMethod, selectedDuration) => {
  const phoneNumber = "555189430417";
  const message = `Olá,\nGostaria de agendar uma leitura ${name}.\nAqui estão os detalhes:\n\n**Método de Leitura:** ${
    readingMethod === "video" ? "Video Chamada" : "Áudio no Whatsapp"
  }\n**Duração:** ${selectedDuration} minutos`;

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};

const MethodButton = ({
  method,
  selectedMethod,
  setMethod,
  iconSrc,
  selectedIconSrc,
  title,
  description,
}) => (
  <button
    onClick={() => setMethod(method)}
    className={clsx(
      "method-selector md:w-1/2",
      selectedMethod === method && "selected"
    )}
  >
    <Image
      src={selectedMethod === method ? selectedIconSrc : iconSrc}
      alt={title}
      width={30}
      height={30}
    />
    <div>
      <h3>{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  </button>
);

const DurationButton = ({ duration, selectedDuration, updatePrice }) => (
  <button
    onClick={() => updatePrice(duration)}
    className={clsx(
      "method-selector",
      selectedDuration === duration.time && "selected"
    )}
  >
    <Image
      src={
        selectedDuration === duration.time
          ? `/${duration.image}-selected.svg`
          : `/${duration.image}.svg`
      }
      alt={duration.title}
      width={30}
      height={30}
    />
    <div>
      <h3>{duration.title}</h3>
      <p className="text-sm">{duration.description}</p>
    </div>
  </button>
);

export default function Checkout({ isOpen, closeCheckout, cardInfo }) {
  const [readingMethod, setReadingMethod] = useState("");
  const [selectedDuration, setSelectedDuration] = useState(0);
  const [price, setPrice] = useState(0);
  const { name, descriptions, durations, imgUrl } = cardInfo;

  const updatePrice = (duration) => {
    setPrice(duration.price);
    setSelectedDuration(duration.time);
  };

  const isFormValid =
    readingMethod !== "" && price !== 0 && selectedDuration !== 0;
  const whatsappLink = generateWhatsAppLink(
    name,
    readingMethod,
    selectedDuration
  );

  return (
    <ModalLayout
      isOpen={isOpen}
      close={closeCheckout}
      title={name}
      checkout={true}
      price={price}
      link={isFormValid ? whatsappLink : "#"}
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
            <MethodButton
              method="audio"
              selectedMethod={readingMethod}
              setMethod={setReadingMethod}
              iconSrc="/audio.svg"
              selectedIconSrc="/audio-selected.svg"
              title="Leitura Assíncrona"
              description="Receba sua leitura via áudio no WhatsApp para ouvir quando quiser."
            />
            <MethodButton
              method="video"
              selectedMethod={readingMethod}
              setMethod={setReadingMethod}
              iconSrc="/video.svg"
              selectedIconSrc="/video-selected.svg"
              title="Leitura Sincrona"
              description="Realize sua leitura em uma videoconferência em tempo real."
            />
          </div>
          <h3 className="text-lg mt-4">Escolha a Duração</h3>
          <div className="my-2 flex flex-col gap-2">
            {durations.map((duration, index) => (
              <DurationButton
                key={index}
                duration={duration}
                selectedDuration={selectedDuration}
                updatePrice={updatePrice}
              />
            ))}
          </div>
        </div>
      </div>
    </ModalLayout>
  );
}
