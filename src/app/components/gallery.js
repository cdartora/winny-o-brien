import ModalLayout from "./modal-layout";
import Image from "next/image";

import { cakelan } from "../page";

function Gallery({ isOpen, closeGallery }) {
  const NUMBER_OF_SCREENSHOTS = 56;

  return (
    <ModalLayout title="Winny O&apos;Brien" isOpen={isOpen} close={closeGallery}>
      <h1 className={`${cakelan.className} gallery-title`}>
        Galeria de Depoimentos
      </h1>
      <div class="gallery">
        {[...Array(NUMBER_OF_SCREENSHOTS).keys()].map(({}, index) => (
          <Image
            width={0}
            height={0}
            layout="responsive"
            loading="lazy"
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
