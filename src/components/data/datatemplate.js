const Categories = {
    1: "___",
    2: "___",
    3: "___",
    4: "___"
};

const currentDate = new Date().toISOString().split('T')[0];

const Movies = [
  { id: 1, img: `/img/${currentDate}/1.png` },
  { id: 1, img: `/img/${currentDate}/2.png` },
  { id: 1, img: `/img/${currentDate}/3.png` },
  { id: 1, img: `/img/${currentDate}/4.png` },
  { id: 2, img: `/img/${currentDate}/5.png` },
  { id: 2, img: `/img/${currentDate}/6.png` },
  { id: 2, img: `/img/${currentDate}/7.png` },
  { id: 2, img: `/img/${currentDate}/8.png` },
  { id: 3, img: `/img/${currentDate}/9.png` },
  { id: 3, img: `/img/${currentDate}/10.png` },
  { id: 3, img: `/img/${currentDate}/11.png` },
  { id: 3, img: `/img/${currentDate}/12.png` },
  { id: 4, img: `/img/${currentDate}/13.png` },
  { id: 4, img: `/img/${currentDate}/14.png` },
  { id: 4, img: `/img/${currentDate}/15.png` },
  { id: 4, img: `/img/${currentDate}/16.png` }
];

export { currentDate, Categories, Movies };
