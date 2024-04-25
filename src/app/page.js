/* eslint-disable react/no-unescaped-entities */
import localFont from "next/font/local";
import Image from "next/image";

import Testimonials from "./components/testimonials";
import Carousel from "./components/carousel";
import VipCard from "./components/vip-card";
import { vip_cards } from "./data/cards";

const cakelan = localFont({ src: "./fonts/cakelan.woff" });
export { cakelan };

export default function Home() {
  return (
    <main className="bg-richBlack flex flex-col items-center text-white overflow-hidden">
      {/* hero section container */}
      <div className="bg-center bg-cover flex max-h-[900px] w-full flex-col items-center justify-between hero">
        <div className="w-full flex flex-col items-center bg-gray-200 md:p-24 md:pb-0 md:pt-0">
          <div className="mb-24 flex items-center justify-center pt-4">
            {/* detalhes ao redor do nome Winny O'Brien */}
            <Image
              src="/name_detail_2.svg"
              width={200}
              height={3}
              className="hidden md:block"
              alt="graphic detail"
            />

            <h1
              className={`${cakelan.className} md:text-2xl text-sm md:mx-4 mx-2 whitespace-nowrap`}
            >
              Winny O'Brien
            </h1>
            <Image
              src="/name_detail.svg"
              width={200}
              height={3}
              className="hidden md:block"
              alt="graphic detail"
            />
          </div>
          <div className="flex w-full">
            <div className="flex-grow w-full md:w-1/2 flex flex-col items-center justify-center text-center bg-gray-200 min-h-[650px] p-8 pt-0 ">
              <div className="md:hidden h-[40%]"></div>
              <h1
                className={`${cakelan.className} text-5xl my-4 max-w-[500px] leading-10 hero-call`}
              >
                desperte sua espiritualidade adormecida
              </h1>

              <a
                href="#tarot"
                className="hover:bg-white transition-all hover:text-richBlack text-xl border px-4 md:px-8 py-2 rounded-full"
              >
                <span className="whitespace-nowrap">conheça meus caminhos</span>
              </a>
            </div>

            <div className="hidden md:block flex-grow w-1/2"></div>
          </div>
        </div>
        <div />
      </div>
      <div className="transition"></div>
      <div className="relative flex w-full flex-col max-w-5xl items-center justify-center mt-20 backdrop-opacity-30 backdrop-blur">
        <div className="md:p-24 md:pt-0 flex items-center w-full">
          <div className="flex items-center justify-center w-full">
            <div className="flex flex-col p-4">
              <h1
                className={`${cakelan.className} text-3xl text-antiqueWhite mb-4`}
              >
                QUEM SOU EU
              </h1>
              <p className="text-base mb-4">
                Bem-vindo ao mágico universo de Winny O'Brien, onde a sabedoria
                ancestral encontra o toque contemporâneo. Minha jornada começou
                como uma trama tecida pelo destino, guiada pelas cartas do Tarot
                que, desde cedo, dançaram em minhas mãos como mensageiras do
                desconhecido. Ao longo de minha trajetória, abracei a magia como
                um chamado pessoal, mergulhando nas profundezas da bruxaria e
                dos feitiços, desvendando os segredos que permeiam o tecido do
                universo.
              </p>
              <p className="text-base mb-4">
                Em minha carreira como bruxa, busco compartilhar esse
                conhecimento ancestral de uma maneira única e envolvente. Cada
                consulta de Tarot é uma jornada única, uma exploração íntima dos
                caminhos que se abrem diante de nós. É uma experiência que vai
                além das cartas, transcende o tempo e conecta os fios do
                passado, presente e futuro em um tapete encantado de
                possibilidades. Convido você a se juntar a mim nesta viagem
                mágica, onde os segredos da bruxaria se entrelaçam com os
                eventos do cotidiano, revelando um mundo de magia acessível a
                todos que desejam despertar o bruxo interior. Winny O'Brien é
                mais do que uma leitora de Tarot, é uma guia em sua própria
                jornada espiritual.
              </p>
              <a
                href="https://www.instagram.com/winnyobrien/"
                target="_blank"
                rel="noreferrer"
                className="hover:bg-white transition-all hover:text-richBlack flex justify-around self-end gap-2 text-xl border px-4 md:px-8 py-2 rounded-full place-self-start"
              >
                Mais sobre mim
              </a>
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
      <Image
        src="/divider-detail.svg"
        width={920}
        height={2}
        className="mt-20"
        alt="Graphic detail"
      />
      <div className="flex justify-around items-center mt-2">
        <Image
          src="/star-detail.svg"
          width={17}
          height={17}
          alt="Star detail"
        />
        <Image
          src="/star-detail.svg"
          width={30}
          height={30}
          alt="Star detail"
        />
        <Image
          src="/star-detail.svg"
          width={17}
          height={17}
          alt="Star detail"
        />
      </div>
      <Carousel />
      <div className="w-full max-w-5xl flex flex-col justify-center md:px-16 p-4 pb-8 md:pb-32">
        <h1 className={`${cakelan.className} text-3xl my-4 text-antiqueWhite`}>
          atendimentos energéticos
        </h1>
        <p>
          Na arte do tarot, as tiragens representam uma técnica valiosa e
          personalizada para interpretas as cartas, proporcionando insights
          específicos sobre questõẽs ou áreas da vida. Cada disposicão das
          cartas tem um significado único, permitindo que em uma tiragem nós
          mergulhemos em sua situacão e alcancemos uma visão mais abrangente.
        </p>
        <div className="flex flex-col lg:flex-row items-center justify-center mt-6 gap-4 xl:max-w-5xl">
          <VipCard
            backgroundImage="card-1.png"
            cardInfo={vip_cards[0]}
            title={vip_cards[0].name}
          />
          <VipCard
            backgroundImage="card-2.png"
            cardInfo={vip_cards[1]}
            title={vip_cards[1].name}
          />
        </div>
      </div>
      <div className="relative min-h-[700px] w-full max-w-7xl flex flex-col lg:flex-row items-start justify-center md:px-16 p-4 pt-2 pb-32">
        <div className="p-0 md:p-4">
          <h1
            className={`${cakelan.className} text-3xl my-4 text-antiqueWhite`}
          >
            ATENDIMENTO PRESENCIAL
          </h1>
          <p className="mb-4">
            Além do serviço online, também faço atendimento presencial. O
            trabalho é realizado no Café Mal Assombrado Poa, na Rua Cel.
            Fernando Machado 513.
          </p>
          <Image
            layout="responsive"
            width={536}
            height={636}
            src="/map.svg"
            style={{ pointerEvents: "none", draggable: "false" }}
            alt="mapa com a localizacão do atendimento presencial"
          />
        </div>
        <div className="p-0 md:p-4 ">
          <h1
            className={`${cakelan.className} text-3xl my-4 text-antiqueWhite`}
          >
            PREFERE UM ATENDIMENTO MAIS INTIMISTA?
          </h1>
          <p>
            Além do serviço online, também faço atendimento presencial. O
            trabalho é realizado no Café Mal Assombrado Poa, na Rua Cel.
            Fernando Machado 513.
          </p>
          <h1
            className={`${cakelan.className} text-3xl my-4 text-antiqueWhite`}
          >
            MAIS ALGUMA DÚVIDA?
          </h1>
          <p className="md:text-md text-sm">NOME</p>
          <input
            type="text"
            className="w-full h-10 bg-richBlack border-[1px] rounded-tl-lg p-2"
          />
          <p className="md:text-md text-sm mt-4">E-MAIL</p>
          <input
            type="text"
            className="w-full h-10 bg-richBlack border-[1px] rounded-tl-lg p-2"
          />
          <p className="md:text-md text-sm mt-4">MENSAGEM</p>
          <input
            type="textarea"
            className="w-full h-44 bg-richBlack border-[1px] rounded-tl-lg p-2"
          />
          <button className="mt-4 float-right hover:bg-white transition-all hover:text-richBlack flex justify-around self-end gap-2 md:text-md border px-4 md:px-8 py-2 rounded-full place-self-start">
            <span className="whitespace-nowrap">Enviar</span>
          </button>
        </div>
      </div>
    </main>
  );
}
