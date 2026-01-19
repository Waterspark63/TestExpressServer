import React from "react";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";
import "./Products.css";

const data = Array.from({ length: 8 }).map((_, i) => ({
    id: i + 1,
    title: `Product ${i + 1}`,
    price: 100000 + i * 25000,
    image: `https://picsum.photos/seed/${i+1}/600/400`,
}));

export default function Products() {
    const navigate = useNavigate();
    return (
        <section className="page-section">
            <div className="toolbar">
                <h2>All Products</h2>
                <input className="search" placeholder="Search Product..."/>
            </div>
            <div className="products-grid">
                {data.map(item => (
                    <ProductCard key={item.id} title={item.title} price={item.price} image={item.image} onClick={() => navigate(`/products/${item.id}`)} />
                ))}
            </div>
        </section>
    )
}