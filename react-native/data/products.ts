export type Product = {
    id: string,
    name: string,
    category: string,
    price: number,
    image?: string,
    description?: string,
}

export const PRODUCTS: Product[] = [
    { id: "1", name: "Sneakers Alpha", category: "Shoes", price: 499000, image: require("../assets/images/products/1-600x400.jpg"), description: "Alpha Sneakers." },
    { id: "2", name: "Sneakers Beta", category: "Shoes", price: 499000, image: require("../assets/images/products/2-600x400.jpg"), description: "Beta Sneakers." },
    { id: "3", name: "Sneakers Charlie", category: "Shoes", price: 499000, image: require("../assets/images/products/3-600x400.jpg"), description: "Alpha Sneakers." }
]