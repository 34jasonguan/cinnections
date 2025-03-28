const Categories = {
    1: "Starring Robert Pattinson",
    2: "'Best Leading Actor' Winners",
    3: "Set in Paris",
    4: "Predominantly Yellow Colour Palette"
};

const currentDate = new Date().toISOString().split('T')[0];

const Movies = [
    { id: 1, img: `/build/img/${currentDate}/1.png` },
    { id: 1, img: `/build/img/${currentDate}/2.png` },
    { id: 1, img: `/build/img/${currentDate}/3.png` },
    { id: 1, img: `/build/img/${currentDate}/4.png` },
    { id: 2, img: `/build/img/${currentDate}/5.png` },
    { id: 2, img: `/build/img/${currentDate}/6.png` },
    { id: 2, img: `/build/img/${currentDate}/7.png` },
    { id: 2, img: `/build/img/${currentDate}/8.png` },
    { id: 3, img: `/build/img/${currentDate}/9.png` },
    { id: 3, img: `/build/img/${currentDate}/10.png` },
    { id: 3, img: `/build/img/${currentDate}/11.png` },
    { id: 3, img: `/build/img/${currentDate}/12.png` },
    { id: 4, img: `/build/img/${currentDate}/13.png` },
    { id: 4, img: `/build/img/${currentDate}/14.png` },
    { id: 4, img: `/build/img/${currentDate}/15.png` },
    { id: 4, img: `/build/img/${currentDate}/16.png` }
  ];  

export { currentDate, Categories, Movies };
