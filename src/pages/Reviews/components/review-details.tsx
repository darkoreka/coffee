
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Text } from "@/components/ui/text";
import ReviewCard from "./review-card";
import { addReview, fetchProductById, type Product } from "@/lib/api";

export default function ReviewDetails() {
    const { productId } = useParams();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [rating, setRating] = useState("5");
    const [text, setText] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [topError, setTopError] = useState<string | null>(null);
    const [ratingError, setRatingError] = useState<string | null>(null);
    const [textError, setTextError] = useState<string | null>(null);

    useEffect(() => {
        const loadProduct = async () => {
            if (!productId) {
                setError("Missing product id");
                setLoading(false);
                return;
            }

            try {
                setLoading(true);
                setError(null);
                const result = await fetchProductById(productId);
                if (!result) {
                    setError("Product not found");
                } else {
                    setProduct(result);
                }
            } catch (err) {
                setError(err instanceof Error ? err.message : "Failed to load product");
            } finally {
                setLoading(false);
            }
        };

        loadProduct();
    }, [productId]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!productId) return;

        setSubmitting(true);
        setTopError(null);
        setRatingError(null);
        setTextError(null);

        const missingRating = !rating.trim();
        const missingText = !text.trim();

        if (missingRating && missingText) {
            setTopError("Please add a rating and review text.");
            setSubmitting(false);
            return;
        }

        if (missingRating) {
            setRatingError("Please add a rating.");
            setSubmitting(false);
            return;
        }

        if (missingText) {
            setTextError("Please add your review.");
            setSubmitting(false);
            return;
        }

        try {
            const updated = await addReview(productId, text, Number(rating));
            setProduct(updated.product);
            setText("");
            setRating("5");
        } catch (err) {
            setTopError(err instanceof Error ? err.message : "Failed to submit review");
        } finally {
            setSubmitting(false);
        }
    };

    if (loading) {
        return (
            <div className="w-full py-24 px-4 text-center">
                <p className="text-lg text-gray-400">Loading product...</p>
            </div>
        );
    }

    if (error || !product) {
        return (
            <div className="w-full py-24 px-4 text-center space-y-4">
                <p className="text-lg text-red-400">Error: {error ?? "Product not found"}</p>
                <Link to="/reviews" className="text-[#F8E4BF] underline">
                    Back to reviews
                </Link>
            </div>
        );
    }

    const hasReviews = product.reviews?.length > 0;

    return (
        <div className="w-full py-16 md:py-24 px-4">
            <div className="max-w-5xl mx-auto space-y-10">
                <div className="flex flex-col md:flex-row gap-6">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full md:w-72 h-72 object-contain rounded-xl bg-[#1e1513]"
                    />
                    <div className="flex-1">
                        <Text
                            className="flex flex-col text-center md:text-left"
                            titleSize="lg"
                            title={product.name}
                            description1={product.description}
                        />
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold text-white">Reviews</h2>
                        <Link to="/reviews" className="text-sm text-[#F8E4BF] underline">
                            Back to all products
                        </Link>
                    </div>

                    {hasReviews ? (
                        product.reviews.map((review) => <ReviewCard key={review.id} review={review} />)
                    ) : (
                        <p className="text-sm text-[#9A816E]">No reviews yet</p>
                    )}
                </div>

                <div className="bg-[#2D2220] rounded-xl p-6 border border-[#533629] space-y-4">
                    <h3 className="text-lg font-semibold text-white">Add a review</h3>

                    {topError && (
                        <p className="text-sm text-red-400" role="alert">
                            {topError}
                        </p>
                    )}

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <label className="flex flex-col gap-2 text-sm text-white">
                            Rating (1-5)
                            <Input
                                type="number"
                                min={1}
                                max={5}
                                value={rating}
                                onChange={(event) => setRating(event.target.value)}
                                className="text-white"
                            />
                            {ratingError && (
                                <span className="text-xs text-red-400" role="alert">
                                    {ratingError}
                                </span>
                            )}
                        </label>

                        <label className="flex flex-col gap-2 text-sm text-white">
                            Your review
                            <Textarea
                                value={text}
                                onChange={(event) => setText(event.target.value)}
                                placeholder="What did you think?"
                                className="text-white"
                            />
                            {textError && (
                                <span className="text-xs text-red-400" role="alert">
                                    {textError}
                                </span>
                            )}
                        </label>

                        <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                            <Button type="submit" className="sm:w-auto w-full" disabled={submitting}>
                                {submitting ? "Submitting..." : "Submit review"}
                            </Button>
                            {product.reviews?.length ? null : (
                                <span className="text-xs text-[#9A816E]">
                                    Be the first to review this product.
                                </span>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
