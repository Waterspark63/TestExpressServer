import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from "./pages/Products";
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import ProtectedRoute from "./routes/ProtectedRoute";
import React from "react";
import "./app.css";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <main className="main">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/:id" element={<ProductDetail />} />
                    <Route path="/cart" element={<Cart />} />

                    <Route path="/login" element={<Login/>} />
                    <Route path="/register" element={<Register/>} />
                    <Route path="/profile" element={<ProtectedRoute><Profile/></ProtectedRoute>} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    )
}
export default App;
