import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import useBook from '../customHooks/useBook'
const Products = () => {
    const {products, loading} = useBook();
  return (
    <div>
      {loading ? (
        <div class="lodder-container">
          <div class="loadingio-spinner-spinner-t3jku8puph">
            <div class="ldio-4jy3oy6837s">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="product-list">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product_id={product._id}
              name={product.name}
              price={product.price}
              author={product.author}
              genre={product.genre}
              publisher={product.publisher}
              pages={product.pages}
              language={product.language}
              rating={product.rating}
              imageSrc={
                "https://cdn.pixabay.com/photo/2014/11/25/16/29/strawberry-545371_640.jpg"
              }
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
