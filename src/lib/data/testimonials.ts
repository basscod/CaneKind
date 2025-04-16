export interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  date?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Emma Thompson",
    avatar: "/images/testimonial-1.jpg",
    rating: 5,
    text: "The natural sweetness of CaneKind's juice is unlike anything I've tried before. It's refreshing, pure, and gives me an energy boost without the crash.",
    date: "3 months ago"
  },
  {
    id: 2,
    name: "David Chen",
    avatar: "/images/testimonial-2.jpg",
    rating: 5,
    text: "I'm so glad I discovered CaneKind. Their Ginger Fusion is my post-workout go-to. It's refreshing and helps with recovery.",
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Sarah Miller",
    avatar: "/images/testimonial-3.jpg",
    rating: 4,
    text: "As someone who avoids processed sugars, CaneKind has been a revelation. Natural sweetness that actually makes me feel good!",
    date: "2 weeks ago"
  },
  {
    id: 4,
    name: "James Wilson",
    avatar: "/images/testimonial-4.jpg",
    rating: 5,
    text: "I was skeptical at first, but CaneKind has become a staple in my fridge. The Mint Refresh is perfect for hot summer days.",
    date: "1 month ago"
  },
  {
    id: 5,
    name: "Olivia Patel",
    avatar: "/images/testimonial-5.jpg",
    rating: 4,
    text: "I love the sustainable packaging and the commitment to natural ingredients. Plus, the taste is incredible!",
    date: "2 months ago"
  }
]; 