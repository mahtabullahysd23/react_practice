import React, { useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import useBook from '../../customHooks/useBook'
import Loader from "../Loader/Loader";
import SearchBar from "./Search";
const Products = () => {
    const {products, loading ,setSearchQuery} = useBook(); 
    const handleSearch = (query) => {
        if(query === ''){
          setSearchQuery('/books')
        }
        else{
          setSearchQuery(`/books?Search=${query}`);
        }
    };
  return (
    <div>
      <SearchBar onSearch={handleSearch}/>
      {loading ? (
        <Loader />
      ) : (
        products.length > 0?
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
        </div>:<div className="Not_found">
          <h1>No Products Found</h1>
        </div>
      )}
    </div>
  );
};

export default Products;
