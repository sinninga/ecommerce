import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
    return (
        <div className="navbar">
            <a href="/ecommerce" className="site-name">
                Vintage Guitars
            </a>
            <div className="links-container">
                <div className="links">
                    <Link to="/ecommerce"> Shop </Link>
                    <Link to="/ecommerce/cart">
                        <ShoppingCart size={30} />
                    </Link>
                </div>
            </div>
        </div>
  );
}