export interface Product {
  id: number;
  title: string;
  price: string;
  imageSrc: string;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    title: "Pure Sugarcane Juice",
    price: "£4.99",
    imageSrc: "/images/pure-sugarcane.jpg",
    description: "Our classic, 100% natural sugarcane juice with no additives or preservatives."
  },
  {
    id: 2,
    title: "Lemon Zest Blend",
    price: "£5.49",
    imageSrc: "/images/lemon-blend.jpg",
    description: "Fresh sugarcane juice with a tangy twist of lemon to brighten your day."
  },
  {
    id: 3,
    title: "Ginger Fusion",
    price: "£5.99",
    imageSrc: "/images/ginger-fusion.jpg",
    description: "Spicy ginger meets sweet sugarcane in this energizing, warming blend."
  },
  {
    id: 4,
    title: "Mint Refresh",
    price: "£5.49",
    imageSrc: "/images/mint-refresh.jpg",
    description: "Cool mint infused with pure sugarcane juice for a refreshing experience."
  },
  {
    id: 5,
    title: "Berry Blast",
    price: "£6.49",
    imageSrc: "/images/berry-blast.jpg",
    description: "Sweet sugarcane juice blended with mixed berries for a fruity taste."
  },
  {
    id: 6,
    title: "Coconut Delight",
    price: "£6.99",
    imageSrc: "/images/coconut-delight.jpg",
    description: "Tropical coconut flavor combined with sugarcane for an exotic treat."
  }
]; 