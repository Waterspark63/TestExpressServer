import React from "react";
import "./header.css";
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <header className="header">
            <div className="brand">
                ✦ The Flower Fondue ✦
            </div>
            <nav className="nav">
                <Link to="/">
                    Home &#x1F3E0;
                </Link>
                <Link to="/products">
                    Products &#x1F50E;
                </Link>
                <Link to="/cart">
                    Cart &#x1F6D2;
                </Link>
            </nav>
        </header>
    );
}