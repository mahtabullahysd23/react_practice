import { useState, useEffect } from 'react';
import customAxios from '../Utils/axiosInstance'; 

const useUpdateBook = (id) => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    stock: '',
    author: '',
    genre: '',
    publisher: '',
    isbn: '',
    pages: '',
    language: '',
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    customAxios
      .get(`/books/${id}`)
      .then((response) => {
        setProduct(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching book data:', error);
        setLoading(false);
      });
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    customAxios
      .patch(`/books/update/${id}`, product)
      .then((response) => {
        console.log(response.data);
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
        }, 3000);
      })
      .catch((error) => {
        console.error('Error updating book:', error);
      });
  };

  return { product, handleInputChange, handleSubmit, isSuccess, loading };
};

export default useUpdateBook;
