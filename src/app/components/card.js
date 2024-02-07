import Image from "next/image";

function Card({ cardInfo }) {
  return (
    <div
      className="w-[402px] h-[603px] bg-center bg-cover"
      style={{ backgroundImage: "url(/card-layout.svg)" }}
      src="/card-layout.svg"
    >
      <h1>I</h1>
    </div>
  );
}

export default Card;
