import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment } from "react";
import { cakelan } from "../page";

function Gallery({ isOpen, setIsOpen }) {
  function closeGallery() {
    setIsOpen(false);
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeGallery}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="fixed inset-0 bg-richBlack/70"
            aria-hidden="true"
          ></div>
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center md:p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative w-full md:max-w-3xl overflow-y-auto md:max-h-[90vh] transform overflow-hidden md:rounded-2xl bg-backgroundWhite p-2 md:p-6 pt-2 text-left align-middle shadow-xl transition-all text-richBlack">
                <Dialog.Title>
                  <h3 className={`${cakelan.className} md:text-lg text-center`}>
                    Winny O&apos;Brien
                  </h3>
                </Dialog.Title>
                <button
                  type="button"
                  className="fixed top-2 md:top-6 left-2 md:left-6 opacity-90 hover:opacity-100 transition-all"
                  onClick={closeGallery}
                >
                  <Image src="/back.svg" width={35} height={35} alt="voltar" />
                </button>

                <div className="px-4">
                  <h1
                    className={`${cakelan.className} text-2xl md:text-4xl text-center text-richBlack mt-4`}
                  >
                    Galeria de Depoimentos
                  </h1>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default Gallery;
