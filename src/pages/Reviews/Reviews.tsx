import { useEffect, useState } from "react";
import { fetchProducts, type Product } from "@/lib/api";
import { Text } from "@/components/ui/text";
import ReviewSearch from "@/pages/Reviews/components/review-search";
import ProductReviews from "@/pages/Reviews/components/product-reviews";

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

    const term = searchTerm.trim().toLowerCase();

    const searchProducts = products.filter((product) => {
        if (!term) return true;
        return (
            product.name.toLowerCase().includes(term) ||
            product.description.toLowerCase().includes(term)
        );
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
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {searchProducts.map((product) => (
                            <ProductReviews key={product.id} product={product} />
                        ))}
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
