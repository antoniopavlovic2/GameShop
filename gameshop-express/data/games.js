const igre = [
  {
    id: 1,
    naziv: "Minecraft",
    zanr: "Sandbox",
    platforme: ["PC", "PS5", "Xbox"],
    cijene: {
      standard: 29.99,
      deluxe: 49.99
    },
    dostupno: true,
    slika: "minecraft.jpg"
  },
  {
    id: 2,
    naziv: "GTA V",
    zanr: "Action",
    platforme: ["PC", "PS5", "Xbox"],
    cijene: {
      standard: 39.99,
      deluxe: 59.99
    },
    dostupno: true,
    slika: "gta.jpg"
  },
  {
    id: 3,
    naziv: "The Witcher 3",
    zanr: "RPG",
    platforme: ["PC", "PS5"],
    cijene: {
      standard: 19.99,
      deluxe: 34.99
    },
    dostupno: true,
    slika: "witcher.jpg"
  },
  {
    id: 4,
    naziv: "Forza Horizon 5",
    zanr: "Racing",
    platforme: ["PC", "Xbox"],
    cijene: {
      standard: 49.99,
      deluxe: 79.99
    },
    dostupno: false,
    slika: "forza.jpg"
  },
  {
    id: 5,
    naziv: "Elden Ring",
    zanr: "RPG",
    platforme: ["PC", "PS5", "Xbox"],
    cijene: {
      standard: 59.99,
      deluxe: 89.99
    },
    dostupno: true,
    slika: "eldenring.jpg"
  }
];

const narudzbe = [];

export { igre, narudzbe};