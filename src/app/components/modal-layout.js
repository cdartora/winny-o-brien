import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useRef } from "react";
import { cakelan } from "../page";

function ModalLayout({ isOpen, close, children }) {
  const modal = useRef(null);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={close}>
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

        <div className="fixed inset-0 overflow-y-scroll h-full md:h-auto">
          <div className="flex min-h-full items-center justify-center text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="flex flex-col items-center relative max-w-3xl overflow-y-auto max-h-[100vh] md:max-h-[90vh] transform md:rounded-2xl bg-backgroundWhite p-2 pt-10 pb-4 text-left align-middle shadow-xl transition-all text-richBlack ">
                <div className="gallery-header ">
                  <button
                    type="button"
                    className="opacity-90 hover:opacity-100 transition-all ml-2"
                    onClick={close}
                  >
                    <Image
                      src="/back.svg"
                      width={35}
                      height={35}
                      alt="voltar"
                    />
                  </button>
                  <h3
                    className={`${cakelan.className} md:text-lg text-center modal-title grow`}
                  >
                    Winny O&apos;Brien
                  </h3>
                </div>

                <div ref={modal} className="px-4 overflow-y-scroll">
                  {children}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default ModalLayout;
