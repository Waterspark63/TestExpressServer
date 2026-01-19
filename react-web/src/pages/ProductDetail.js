import { useParams } from "react-router-dom";

export default function ProductDetail() {
    let { id } = useParams();
    return (
        <section className="page-section">
            <h2>Product Detail #{id}</h2>
            <p>Complete product information will appear here</p>
        </section>
    );
}
