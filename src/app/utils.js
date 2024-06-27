export function handleData(data) {
  return data.map((card, index) => ({
    number: card.number,
    name: card.name,
    summary: card.summary,
    descriptions: [card.description1, card.description2],
    durations: [
      {
        time: 30,
        title: "Leitura Completa (30min)",
        description: "Uma leitura detalhada e abrangente.",
        price: card["30"],
        image: "duration",
      },
      {
        time: 45,
        title: "Leitura Equilibrada (45min)",
        description:
          "Uma leitura balanceada, abrangendo várias questões com uma profundidade moderada.",
        price: card["45"],
        image: "duration",
      },
      {
        time: 60,
        title: "Leitura Profunda (60min)",
        description:
          "Uma leitura extensa e minuciosa, ideal para explorar temas complexos e obter insights aprofundados.",
        price: card["60"],
        image: "duration-more",
      },
    ],
    imgUrl: `tarot/${index + 1}.svg`,
  }));
}