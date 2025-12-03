import { useEffect, useState } from "react";
import { fetchProducts, type Product } from "@/lib/api";
import { Text } from "@/components/ui/text";
import ReviewCard from "@/pages/Reviews/components/review-card";
import ReviewSearch from "@/pages/Reviews/components/review-search";

export default function Reviews() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const loadProducts = async () => {
            try {
                setLoading(true);
                setError(null);
                const data = await fetchProducts();
                setProducts(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Failed to load reviews");
                console.error("Error loading products:", err);
            } finally {
                setLoading(false);
            }
        };

        loadProducts();
    }, []);

    const searchProducts = products.filter((product) => {
        if (!searchTerm) return true;
        return product.name.includes(searchTerm);
    });

    if (loading) {
        return (
            <div className="w-full py-24 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-lg text-gray-400">Loading reviews...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="w-full py-24 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-lg text-red-400">Error: {error}</p>
                    <p className="text-sm text-gray-400 mt-2">
                        Make sure the backend server is running on http://localhost:8055
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full py-16 md:py-24 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <Text
                        className="flex flex-col text-center md:text-left"
                        title={"Customer Reviews"}
                        description1={" Hear what our customers have to say about our premium coffee equipment"}>
                    </Text>
                </div>

                <div className="mb-8">
                    <ReviewSearch value={searchTerm} onChange={setSearchTerm} />
                </div>

                {searchProducts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {searchProducts.map((product) => {
                            const reviews = product.reviews ?? [];
                            const hasReviews = reviews.length > 0;

                            return (
                                <div
                                    key={product.id}
                                    className="bg-[#2D2220] rounded-xl p-6 border border-[#533629] hover:border-[#F8E4BF] transition-colors"
                                >
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
                        })}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-lg text-[#9A816E]">
                            {products.length === 0
                                ? "No products available at the moment"
                                : "No reviews match your search"}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
