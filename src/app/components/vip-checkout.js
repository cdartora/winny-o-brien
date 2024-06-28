import Image from "next/image";
import VipModalLayout from "./vip-modal-layout";
import "./checkout.css";

const generateWhatsAppLink = (name) => {
  const phoneNumber = "555189430417";
  const message = `Olá,\nGostaria de agendar uma leitura ${name}.`;

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};

export default function VipCheckout({ isOpen, closeCheckout, cardInfo, imgUrl }) {
  const { name, descriptions, price } = cardInfo;

  const whatsappLink = generateWhatsAppLink(
    name,
  );

  return (
    <VipModalLayout
      isOpen={isOpen}
      close={closeCheckout}
      title={name}
      imgUrl={imgUrl}
      checkout={true}
      price={price}
      link={whatsappLink}
    >
      <div className="px-4">
        {descriptions.map((text, index) => (
          <p key={index} className="mt-2">
            {text}
          </p>
        ))}
      </div>
    </VipModalLayout>
  );
}
