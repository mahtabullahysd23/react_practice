import { useEffect, useState } from 'react';
import customAxios from '../Utils/axiosInstance';

const useAddBook = () => {
  const [product, setProduct] = useState();

  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    customAxios
      .post('/books/add', product)
      .then((response) => {
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
        }, 3000);
      })
      .catch((error) => {
        console.error('Error adding book:', error);
      });
  }, [product]);

  return { product,isSuccess, setProduct };
  };



export default useAddBook;
