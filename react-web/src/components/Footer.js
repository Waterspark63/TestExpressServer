import React from "react";
import "./footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <small>
                © {new Date().getFullYear()}    The Flower Fondue. All rights reserved.
            </small>
        </footer>
    )
}