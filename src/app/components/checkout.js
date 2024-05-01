import { Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";
import Image from "next/image";

import { cakelan } from "../page";

export default function Checkout({ isOpen, closeCheckout, cardInfo }) {
  const { name, text1, text2, duration, price, type, imgUrl } = cardInfo;
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeCheckout}>
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
              <Dialog.Panel className="relative flex flex-col justify-between w-full h-screen md:max-w-3xl overflow-y-auto md:max-h-[90vh] transform overflow-hidden md:rounded-2xl bg-backgroundWhite p-2 md:p-6 pt-2 text-left align-middle shadow-xl transition-all text-richBlack">
                <Dialog.Title>
                  <h3 className={`${cakelan.className} text-lg text-center`}>
                    Winny O&apos;Brien
                  </h3>
                </Dialog.Title>
                <button
                  type="button"
                  className="fixed top-2 md:top-6 left-2 md:left-6 opacity-90 hover:opacity-100 transition-all"
                  onClick={closeCheckout}
                >
                  <Image src="/back.svg" width={35} height={35} alt="voltar" />
                </button>
                <div className="my-10 flex justify-center">
                  <Image src={imgUrl} width={150} height={150} alt={name} />
                </div>

                <div className="px-4 lg:px-24">
                  <h1
                    className={`${cakelan.className} text-4xl text-center text-richBlack`}
                  >
                    {name}
                  </h1>
                  <p className="mt-2">{text1}</p>
                  <p className="mt-2">{text2}</p>
                  {/* detalhes e agendar */}
                </div>
                <div className="self-end w-full">
                  <div className="flex justify-center gap-4 mt-3">
                    <div className="flex flex-col items-center justify-center md:flex-row gap-1 md:gap-2 border-[1px] border-richBlack rounded-xl md:rounded-full px-2 md:px-6 py-1 font-semibold text-xs md:text-sm">
                      <Image
                        src="/price.svg"
                        width={30}
                        height={30}
                        alt="dollar bill"
                      />
                      <span className="whitespace-nowrap">R$ {price}</span>
                    </div>

                    <div className="flex flex-col items-center md:flex-row md:gap-2 border-[1px] border-richBlack rounded-xl md:rounded-full px-2 md:px-6 py-1 font-semibold text-sm">
                      <Image
                        src="/duration.svg"
                        width={30}
                        height={30}
                        alt="clock"
                      />
                      <span className="whitespace-nowrap">{duration}</span>
                    </div>
                  </div>
                  <div className="flex justify-center my-4">
                    <button
                      type="button"
                      className="bg-opacity-90 hover:bg-opacity-100 transition-all px-8 py-2 rounded-full bg-richBlack text-white text-lg font-bold shadow-lg"
                    >
                      AGENDAR
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
