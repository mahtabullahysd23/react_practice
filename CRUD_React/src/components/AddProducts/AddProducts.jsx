import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import "./AddProducts.scss";
import useAddBook from "../customHooks/useAddBook";

const AddProducts = () => {
    const { product, handleInputChange, handleSubmit, isSuccess } = useAddBook();
  return (
    <div className="add-product">
      <h2>Add New Product</h2>
      {isSuccess && <div className="success-message">Successfully Added!</div>}
      <form onSubmit={handleSubmit}>
        <div className="flex-form">
          <div>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                autocomplete="off"
                type="text"
                id="name"
                name="name"
                value={product.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="price">Price:</label>
              <input
                type="number"
                id="price"
                name="price"
                value={product.price}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="stock">Stock:</label>
              <input
                type="number"
                id="stock"
                name="stock"
                value={product.stock}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="author">Author:</label>
              <input
                autocomplete="off"
                type="text"
                id="author"
                name="author"
                value={product.author}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="genre">Genre:</label>
              <input
                autocomplete="off"
                type="text"
                id="genre"
                name="genre"
                value={product.genre}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="publisher">Publisher:</label>
              <input
                autocomplete="off"
                type="text"
                id="publisher"
                name="publisher"
                value={product.publisher}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="isbn">ISBN:</label>
              <input
                type="text"
                id="isbn"
                name="isbn"
                value={product.isbn}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="pages">Pages:</label>
              <input
                autocomplete="off"
                type="number"
                id="pages"
                name="pages"
                value={product.pages}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="language">Language:</label>
              <input
                autocomplete="off"
                type="text"
                id="language"
                name="language"
                value={product.language}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit">Add Product</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProducts;
