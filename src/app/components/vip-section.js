import VipCard from "./vip-card";

function handleData(data) {
  
}

async function getVipCards() {
  const res = await fetch(process.env.VIP_CARDS_API_URL);
  const data = await res.json();
  console.table(data);
  // const cards = handleData(data);
  return data;
}

export default async function VipSection() {
  const vipCards = await getVipCards();
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center mt-6 gap-10 xl:max-w-5xl">
      {vipCards.map((card, index) => (
        <VipCard
          backgroundImage={`card-${index + 1}.png`} cardInfo={card} title={card.name}
        />
      ))}
    </div>
  );
}
