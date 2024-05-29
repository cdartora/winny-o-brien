import Image from "next/image";

import Testimonials from "./components/testimonials";
import Carousel from "./components/carousel";
import VipCard from "./components/vip-card";

import { vip_cards } from "./data/cards";
import "./page.css";

import localFont from "next/font/local";
const cakelan = localFont({ src: "./fonts/cakelan.woff" });
export { cakelan };

export default function Home() {
  return (
    <main className="main-container">
      <div id="hero" className="hero">
        <div className="hero-inner">
          <div className="hero-details">
            <Image
              src="/name_detail_2.svg"
              width={200}
              height={3}
              className="hero-graphism"
              alt="graphic detail"
            />
            <h3 className={`${cakelan.className} hero-name`}>
              Winny O&apos;Brien
            </h3>
            <Image
              src="/name_detail.svg"
              width={200}
              height={3}
              className="hero-graphism"
              alt="graphic detail"
            />
          </div>
          <div className="hero-content">
            <div className="content-wrapper">
              <h1 className={`${cakelan.className} hero-title`}>
                desperte sua espiritualidade adormecida
              </h1>

              <a href="#tarot" className="btn-primary whitespace-nowrap">
                conheça meus caminhos
              </a>
            </div>

            <div className="spacer" />
          </div>
        </div>
      </div>

      <div id="gradient" className="transition" />

      <div id="about" className="about-container">
        <div className="about">
          <h2 className={`${cakelan.className} about-title`}>QUEM SOU EU</h2>
          <p>
            Bem-vindo ao mágico universo de Winny OBrien, onde a sabedoria
            ancestral encontra o toque contemporâneo. Minha jornada começou como
            uma trama tecida pelo destino, guiada pelas cartas do Tarot que,
            desde cedo, dançaram em minhas mãos como mensageiras do
            desconhecido. Ao longo de minha trajetória, abracei a magia como um
            chamado pessoal, mergulhando nas profundezas da bruxaria e dos
            feitiços, desvendando os segredos que permeiam o tecido do universo.
          </p>
          <p>
            Em minha carreira como bruxa, busco compartilhar esse conhecimento
            ancestral de uma maneira única e envolvente. Cada consulta de Tarot
            é uma jornada única, uma exploração íntima dos caminhos que se abrem
            diante de nós. É uma experiência que vai além das cartas, transcende
            o tempo e conecta os fios do passado, presente e futuro em um tapete
            encantado de possibilidades. Convido você a se juntar a mim nesta
            viagem mágica, onde os segredos da bruxaria se entrelaçam com os
            eventos do cotidiano, revelando um mundo de magia acessível a todos
            que desejam despertar o bruxo interior. Winny OBrien é mais do que
            uma leitora de Tarot, é uma guia em sua própria jornada espiritual.
          </p>
          <a
            href="https://www.instagram.com/winnyobrien/"
            target="_blank"
            rel="noreferrer"
            className="btn-primary about-btn"
          >
            mais sobre mim
          </a>
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

      <div
        id="vip"
        className="w-full max-w-5xl flex flex-col justify-center md:px-16 p-4 pb-8 md:pb-32"
      >
        <h1 className={`${cakelan.className} text-3xl my-4 text-antiqueWhite`}>
          atendimentos energéticos
        </h1>
        <p>
          Descubra o poderoso fluxo energético que une nossos corpos aos nossos
          sentidos emocionais, proporcionando uma compreensão mais profunda da
          vasta potência que nos cerca. <br />
          Os atendimentos energéticos são um convite para explorar o
          desenvolvimento da consciência, permitindo que você se reconcilie com
          seu passado, potencialize seu presente e vislumbre um futuro mais
          promissor.
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

      <div
        id="contact"
        className="relative min-h-[700px] w-full max-w-7xl flex flex-col lg:flex-row items-start justify-center md:px-16 p-4 pt-2 pb-32"
      >
        <div className="p-0 md:p-4">
          <h1
            className={`${cakelan.className} text-3xl my-4 text-antiqueWhite`}
          >
            CONSULTAS PRESENCIAIS
          </h1>
          <p className="mb-4">
            Além do serviço online, também faço atendimento presencial. As
            leituras são realizadas no Café Mal Assombrado Poa, na Rua Cel.
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
