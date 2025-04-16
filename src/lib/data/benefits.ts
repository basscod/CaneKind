export interface Benefit {
  id: number;
  title: string;
  description: string;
  icon: string; // SVG path string
}

export const benefits: Benefit[] = [
  {
    id: 1,
    title: "100% Natural",
    description: "Our juice is extracted fresh from premium sugarcane with no preservatives or artificial additives.",
    icon: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 0V12m0 0L6 7.5m6 4.5l6-4.5"
  },
  {
    id: 2,
    title: "Nutrient Rich",
    description: "Packed with vitamins, minerals, and antioxidants that support overall health and wellbeing.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
  },
  {
    id: 3,
    title: "Sustainably Sourced",
    description: "We work with local farmers who practice sustainable agriculture to bring you the best quality.",
    icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
  },
  {
    id: 4,
    title: "Eco-Friendly Packaging",
    description: "Our commitment to the environment includes using biodegradable and recyclable packaging materials.",
    icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
  }
]; 