import VipCard from "./vip-card";

function handleData(data) {
  return data.map((vipCard) => ({name: vipCard.name, descriptions: [vipCard.description1, vipCard.description2], price: vipCard.price})) 
}

async function getVipCards() {
  const res = await fetch(process.env.VIP_CARDS_API_URL);
  const data = await res.json();
  const cards = handleData(data);
  console.table(cards);
  return cards;
}

export default async function VipSection() {
  const vipCards = await getVipCards();
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center mt-6 gap-10 xl:max-w-5xl">
      {vipCards.map((card, index) => (
        <VipCard
          cardBg={`/card-${index + 1}.png`} checkoutBg={`/modal-background${index + 1}.png`} cardInfo={card} title={card.name}
        />
      ))}
    </div>
  );
}
