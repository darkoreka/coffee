import { Star } from "lucide-react";
import type { Review } from "@/lib/api";

interface ReviewCardProps {
    review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
    return (
        <div className="bg-[#1a1410] rounded-lg p-4 border border-[#533629]">
            <div className="flex items-center gap-2 mb-2">
                <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                            key={i}
                            size={16}
                            className={
                                i < review.rating
                                    ? "fill-[#F8E4BF] text-[#F8E4BF]"
                                    : "text-[#533629]"
                            }
                        />
                    ))}
                </div>
                <span className="text-xs text-[#9A816E]">
                    ({review.rating}/5)
                </span>
            </div>

            <p className="text-sm text-white mb-3">
                {review.text}
            </p>

            <p className="text-xs text-[#9A816E]">
                {new Date(review.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                })}
            </p>
        </div>
    );
}
