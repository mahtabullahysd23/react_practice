import React, { useContext } from 'react';
import './Products.scss';
import { useNavigate } from 'react-router-dom';
import { productContet } from '../../App';
const ProductCard = (props) => {
  const {product_id,name, price, author, genre, publisher, pages, language, rating, imageSrc } = props;
  const navigate = useNavigate();
  const {deleted,setDeleted} = useContext(productContet);
  const handleClick = () => {
    fetch(`http://localhost:8000/api/books/delete/${product_id}`, {
      method: "DELETE",
    }).then(() => {
      setDeleted(!deleted);
    });
  };

  return (
    <div className="product-card">
      <img src={imageSrc} alt={name} className="product-image" />
      <h2>{name}</h2>
      <p><strong>Price:</strong> ${price}</p>
      <p><strong>Author:</strong> {author}</p>
      <p><strong>Genre:</strong> {genre}</p>
      <p><strong>Publisher:</strong> {publisher}</p>
      <p><strong>Pages:</strong> {pages}</p>
      <p><strong>Language:</strong> {language}</p>
      <p><strong>Rating:</strong> {rating}</p>
      <div className="product-buttons">
        <button className="edit-button" onClick={()=>{ navigate(`/edit/${product_id}`)}}>Edit</button>
        <button className="delete-button" onClick={handleClick}>Delete</button>
      </div>
    </div>
    
  );
};

export default ProductCard;
