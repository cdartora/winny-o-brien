import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useRef } from "react";
import { cakelan } from "../page";
import clsx from "clsx";

function VipModalLayout({
  isOpen,
  close,
  title,
  children,
  checkout,
  price,
  link,
  imgUrl,
}) {
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

        <div className="fixed inset-0 overflow-y-auto h-full md:h-auto">
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
              <Dialog.Panel className="flex flex-col items-center relative max-w-3xl overflow-y-auto max-h-full md:max-h-[90vh] transform md:rounded-2xl bg-backgroundWhite p-2 pb-2 pt-12 text-left align-middle shadow-xl transition-all text-richBlack ">
                <div
                  className="gallery-header bg-cover bg-top bg-no-repeat h-[300px]"
                  style={{ backgroundImage: `url(${imgUrl})` }}
                >
                  <button
                    type="button"
                    className="fixed left-2 top-2 opacity-90 hover:opacity-100 transition-all"
                    onClick={close}
                  >
                    <Image
                      src="/back-white.svg"
                      width={35}
                      height={35}
                      alt="voltar"
                    />
                  </button>
                  <h3
                    className={`${cakelan.className} absolute top-3 md:text-lg text-center grow text-white`}
                  >
                    Winny O&apos;Brien
                  </h3>
                </div>

                <div ref={modal} className="px-4 overflow-y-scroll mt-[270px]">
                  {children}
                </div>

                {checkout && (
                  <div className="flex justify-end w-full px-2">
                    <button
                      onClick={() => (window.location.href = link)}
                      className="justify-end bg-opacity-90 hover:bg-opacity-100 transition-all px-8 py-2 rounded-full bg-richBlack text-white text-lg shadow-lg my-2"
                    >
                      <span className="whitespace-nowrap">R$ {price} |</span>
                      <span> AGENDAR</span>
                    </button>
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default VipModalLayout;
