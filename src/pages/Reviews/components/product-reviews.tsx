import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { Text } from "@/components/ui/text";
import ReviewCard from "@/pages/Reviews/components/review-card";
import type { Product } from "@/lib/api";
import { Link } from "react-router-dom";

interface ProductReviewsProps {
    product: Product;
}

export default function ProductReviews({ product }: ProductReviewsProps) {
    const [reviews, setReviews] = useState(product.reviews ?? []);
    const hasReviews = reviews.length > 0;
    const reviewCount = reviews.length;

    const averageRating = hasReviews
        ? Number(
            (
                reviews.reduce((total, review) => total + review.rating, 0) /
                reviewCount
            ).toFixed(1)
        )
        : null;
    const filledStars = averageRating ? Math.round(averageRating) : 0;

    useEffect(() => {
        setReviews(product.reviews ?? []);
    }, [product]);

    return (
        <Link to={`/reviews/${product.id}`}>
            <div className="bg-[#2D2220] rounded-xl p-6 border border-[#533629] hover:border-[#F8E4BF] transition-colors">
                <div className="mb-6">
                    <Text
                        className="flex flex-col text-center md:text-left"
                        titleSize="sm"
                        title={product.name}
                        description1={product.description}>
                    </Text>
                    <img src={`${product.image}?id=${product.id}`} alt={product.name} className="mt-4 rounded-lg mx-auto md:mx-0 max-h-48 object-contain" />
                </div>

                <div className="space-y-4">
                    {hasReviews && (
                        <div className="flex items-center gap-2 text-sm text-[#F8E4BF]">
                            <div className="flex gap-1">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star
                                        key={i}
                                        size={16}
                                        className={
                                            i < filledStars
                                                ? "fill-[#F8E4BF] text-[#F8E4BF]"
                                                : "text-[#533629]"
                                        }
                                    />
                                ))}
                            </div>
                            <span className="font-semibold">
                                {(averageRating?.toFixed(1) ?? "0.0")}/5
                            </span>
                            <span className="text-[#9A816E]">
                                ({reviewCount} review{reviewCount === 1 ? "" : "s"})
                            </span>
                        </div>
                    )}

                    {hasReviews ? (
                        reviews.map((review) => (
                            <ReviewCard key={review.id} review={review} />
                        ))
                    ) : (
                        <p className="text-sm text-[#9A816E]">No reviews yet</p>
                    )}
                </div>
            </div>
        </Link>
    );
}
