import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="site-name">
                Vintage Guitars
            </div>
            <div className="links-container">
                <div className="links">
                    <Link to="/"> Shop </Link>
                    <Link to="/cart">
                        <ShoppingCart size={30} />
                    </Link>
                </div>
            </div>
        </div>
  );
}