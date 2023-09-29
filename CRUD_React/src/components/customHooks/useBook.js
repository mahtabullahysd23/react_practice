import { useState, useEffect } from 'react';

const useBook =()=>{

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [count,setCount] = useState(0);
    console.log(count);

    useEffect(() => {
        setLoading(true);
        fetch("http://127.0.0.1:8000/api/books")
          .then((res) => res.json())
          .then((json) => {
            setProducts(json.data.books);
            setLoading(false);
          });
      }, [count]);

    return {products, loading,count,setCount};
}

export default useBook;