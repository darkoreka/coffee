import { Text } from "@/components/ui/text";
import ReviewCard from "@/pages/Reviews/components/review-card";
import type { Product } from "@/lib/api";

interface ProductReviewsProps {
    product: Product;
}

export default function ProductReviews({ product }: ProductReviewsProps) {
    const reviews = product.reviews ?? [];
    const hasReviews = reviews.length > 0;

    return (
        <div className="bg-[#2D2220] rounded-xl p-6 border border-[#533629] hover:border-[#F8E4BF] transition-colors">
            <div className="mb-6">
                <Text
                    className="flex flex-col text-center md:text-left"
                    titleSize="sm"
                    title={product.name}
                    description1={product.description}>
                </Text>
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
    );
}
