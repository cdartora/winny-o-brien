import ModalLayout from "./modal-layout";
import Image from "next/image";

import { cakelan } from "../page";

function Gallery({ isOpen, closeGallery }) {
  const NUMBER_OF_SCREENSHOTS = 56;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ModalLayout isOpen={isOpen} close={closeGallery}>
      <h1 className={`${cakelan.className} gallery-title`}>
        Galeria de Depoimentos
      </h1>
      <div class="gallery">
        {[...Array(NUMBER_OF_SCREENSHOTS).keys()].map(({}, index) => (
          <Image
            width={0}
            height={0}
            layout="responsive"
            key={index}
            src={`/testimonials/${index + 1}.jpg`}
            alt="whatsapp screenshot"
            className="screenshot"
          />
        ))}
      </div>
    </ModalLayout>
  );
}

export default Gallery;
