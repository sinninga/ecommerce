import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import { FeatureImage } from "../../components/feature-image";

export const Shop = () => {
  return (
    <>
    <FeatureImage />
    <div className="shop">
        <div id="shop-title" className="shopTitle">
            <h1 id="adam-shop">Vintage Guitars</h1>
        </div>
        <div className="products">
            {PRODUCTS.map((product) => (
                <Product data={product} key={product.id}/>
            ))}
        </div>
    </div>
    </>
  );
};