import { Star } from "lucide-react";

type StarRatingProps = {
  count?: number;
  className?: string;
};

export function StarRating({ count = 5, className = "h-3.5 w-3.5" }: StarRatingProps) {
  return (
    <span className="flex text-purple-neon">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className={`${className} fill-current`} />
      ))}
    </span>
  );
}
