import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Text } from "@/components/ui/text";
import type { Review } from "@/lib/api";
import ReviewCard from "../Reviews/components/review-card";

const sampleReview: Review = {
    id: "sample-review-1",
    text: "This is an amazing component! Works perfectly for displaying customer reviews.",
    rating: 5,
    createdAt: new Date().toISOString(),
};

export default function ShowRoom() {
    const [navActive, setNavActive] = useState(false)
    return (
        <div className="flex min-h-svh flex-col items-center justify-center gap-8">
            <Button variant="default">Click me</Button>
            <Button variant="secondary">Click me</Button>
            <Button
                variant={navActive ? 'navbarActive' : 'navbar'}
                onClick={() => setNavActive((v) => !v)}
                aria-pressed={navActive}
            >
                Click me
            </Button>
            <Text
                className="flex flex-col text-center md:text-left"
                title={"Customer Reviews"}
                description1={" Hear what our customers have to say about our premium coffee equipment"}>
            </Text>

            <ReviewCard review={sampleReview} />
        </div>
    )
}