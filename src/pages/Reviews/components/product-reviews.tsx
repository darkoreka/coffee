import { useEffect, useState } from "react";
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
                    <img src={product.image} alt={product.name} className="mt-4 rounded-lg mx-auto md:mx-0 max-h-48 object-contain" />
                </div>

                <div className="space-y-4">
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
