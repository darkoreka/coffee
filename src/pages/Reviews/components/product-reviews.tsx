import { useEffect, useState } from "react";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import ReviewCard from "@/pages/Reviews/components/review-card";
import type { Product } from "@/lib/api";
import { addReview } from "@/lib/api";

interface ProductReviewsProps {
    product: Product;
}

export default function ProductReviews({ product }: ProductReviewsProps) {
    const [reviews, setReviews] = useState(product.reviews ?? []);
    const hasReviews = reviews.length > 0;

    const [open, setOpen] = useState(false);
    const [rating, setRating] = useState("5");
    const [text, setText] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [topError, setTopError] = useState<string | null>(null);
    const [ratingError, setRatingError] = useState<string | null>(null);
    const [textError, setTextError] = useState<string | null>(null);

    useEffect(() => {
        setReviews(product.reviews ?? []);
    }, [product]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
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
            const updated = await addReview(product.id, text, Number(rating));
            setReviews(updated.product.reviews ?? []);
            setOpen(false);
            setText("");
            setRating("5");
        } catch (err) {
            setTopError(err instanceof Error ? err.message : "Failed to submit review");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
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

                <div className="mt-6">
                    <DialogTrigger asChild>
                        <Button className="w-full">Write a review</Button>
                    </DialogTrigger>
                </div>
            </div>

            <DialogContent className="bg-[#2D2220] border border-[#533629]">
                <DialogHeader>
                    <DialogTitle>Write a review</DialogTitle>
                    <DialogDescription className="text-[#9A816E]">
                        Share your feedback for {product.name}.
                    </DialogDescription>
                </DialogHeader>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    {topError && (
                        <p className="text-sm text-red-400" role="alert">
                            {topError}
                        </p>
                    )}

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

                    <DialogFooter>
                        <Button type="submit" className="w-full sm:w-auto" disabled={submitting}>
                            {submitting ? "Submitting..." : "Submit review"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
