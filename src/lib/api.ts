
const API_BASE_URL = "http://localhost:8055";

export interface Review {
    id: string;
    text: string;
    rating: number;
    createdAt: string;
}

export interface Product {
    id: string;
    name: string;
    description: string;
    image: string;
    reviews: Review[];
}

// Get all
export async function fetchProducts(): Promise<Product[]> {
    try {
        const response = await fetch(`${API_BASE_URL}/products`);
        if (!response.ok) {
            throw new Error(`Failed to fetch products: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
}

// Get by id
export async function fetchProductById(productId: string): Promise<Product | null> {
    try {
        const response = await fetch(`${API_BASE_URL}/products/${productId}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch product: ${response.statusText}`);
        }
        const products = await response.json();
        return products.length > 0 ? products[0] : null;
    } catch (error) {
        console.error(`Error fetching product ${productId}:`, error);
        throw error;
    }
}

// post review
export async function addReview(
    productId: string,
    text: string,
    rating: number
): Promise<{ product: Product }> {
    try {
        const response = await fetch(`${API_BASE_URL}/products/${productId}/reviews`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ text, rating }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || `Failed to add review: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error(`Error adding review to product ${productId}:`, error);
        throw error;
    }
}
