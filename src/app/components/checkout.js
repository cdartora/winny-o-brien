import { Transition, Dialog } from "@headlessui/react";
import { Fragment } from "react";
import { cakelan } from "../page";

export default function Checkout({ isOpen, closeCheckout }) {
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
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-3xl overflow-y-auto max-h-[90vh] transform overflow-hidden rounded-2xl bg-backgroundWhite p-6 pt-2 text-left align-middle shadow-xl transition-all text-richBlack">
                <Dialog.Title>
                  <h3
                    className={`${cakelan.className} mt-2 md:mt-4 md:text-lg text-center`}
                  >
                    Winny O'Brien
                  </h3>
                </Dialog.Title>
                <div className="px-4 lg:px-24 mt-32">
                  <h1
                    className={`${cakelan.className} text-2xl md:text-4xl text-center text-richBlack`}
                  >
                    seu tempo com tarot
                  </h1>
                  <p className="font-medium text-sm mt-3">
                    Na penumbra de uma sala silenciosa, cartas de tarô são
                    dispostas com precisão sobre uma mesa de madeira antiga. As
                    mãos cuidadosas do taólogo movem-se com uma mistura de
                    reverência e concentração. Cada carta revela segredos do
                    destino, susurrando histórias ocultas ao seu leitor.
                  </p>
                  <p className="font-thin text-sm mt-3">
                    Na penumbra de uma sala silenciosa, cartas de tarô são
                    dispostas com precisão sobre uma mesa de madeira antiga. As
                    mãos cuidadosas do taólogo movem-se com uma mistura de
                    reverência e concentração. Cada carta revela segredos do
                    destino, susurrando histórias ocultas ao seu leitor.
                  </p>
                  <div className="flex justify-center gap-4 mt-3">
                    <div className="border-[1px] border-richBlack rounded-full px-2 md:px-6 py-2 font-semibold text-xs md:text-sm">
                      R$ 150,00
                    </div>

                    <div className="border-[1px] border-richBlack rounded-full px-2 md:px-6 py-2 font-semibold text-xs md:text-sm">
                      Tarot
                    </div>

                    <div className="border-[1px] border-richBlack rounded-full px-2 md:px-6 py-2 font-semibold text-xs md:text-sm">
                      1h30min
                    </div>
                  </div>
                  <div className="flex justify-center mt-4">
                    <button
                      type="button"
                      className="bg-opacity-90 hover:bg-opacity-100 transition-all
          px-8 py-2 rounded-full bg-richBlack text-white text-xs font-bold shadow-lg" // style
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
