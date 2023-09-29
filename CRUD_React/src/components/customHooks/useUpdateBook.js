import { useState, useEffect } from "react";
const useUpdateBook = (id) => {
    const [product, setProduct] = useState({
        name: "",
        price: "",
        stock: "",
        author: "",
        genre: "",
        publisher: "",
        isbn: "",
        pages: "",
        language: "",
      });
      const [isSuccess, setIsSuccess] = useState(false);
    
      useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/books/${id}`)
        .then((res) => res.json())
        .then((json) => {
          setProduct(json.data);
        });
    
      }, []);
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setProduct({
          ...product,
          [name]: value,
        });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`http://127.0.0.1:8000/api/books/update/${id}`, {
          method: "PATCH",
          body: JSON.stringify(product),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((json) => {
            console.log(json);
            setIsSuccess(true);
            setTimeout(() => {
              setIsSuccess(false);
            }, 3000);
          });
      };
      return { product, handleInputChange, handleSubmit, isSuccess };
};

export default useUpdateBook;