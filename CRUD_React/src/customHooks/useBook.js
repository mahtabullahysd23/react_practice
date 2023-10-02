import { useState, useEffect, useContext } from "react";
import { productContet } from "../App";
import customAxios from "../Utils/axiosInstance";

const useBook = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const { deleted } = useContext(productContet);
  const [searchQuery, setSearchQuery] = useState("/books");

  const callApi = () => {
    setLoading(true);
    customAxios
      .get(searchQuery)
      .then((response) => {
        setProducts(response.data.data.books);
        setLoading(false);
      })
      .catch((error) => {
        setProducts([]);
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (searchQuery === "/books") {
      callApi();
    } else {
      const timeOut = setTimeout(() => {
        callApi();
      }, 1000);
      return () => clearTimeout(timeOut);
    }
  }, [deleted, searchQuery]);

  return { products, loading, count, setCount, setSearchQuery };
};

export default useBook;
