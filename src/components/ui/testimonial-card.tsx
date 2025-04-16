import React from "react";

interface TestimonialCardProps {
  name: string;
  avatar: string;
  rating: number;
  text: string;
  date?: string;
}

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-5 h-5 ${
            index < rating ? "text-sugarcane-yellow" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

export const TestimonialCard = ({
  name,
  avatar,
  rating,
  text,
  date,
}: TestimonialCardProps) => {
  return (
    <div className="glass-card p-6">
      <div className="flex items-center mb-4">
        <div className="mr-4 w-12 h-12 rounded-full overflow-hidden border-2 border-sugarcane-yellow">
          <img
            src={avatar}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold">{name}</h4>
          <StarRating rating={rating} />
        </div>
      </div>
      <p className="text-text-secondary mb-2">"{text}"</p>
      {date && <span className="text-sm text-text-secondary">{date}</span>}
    </div>
  );
}; 