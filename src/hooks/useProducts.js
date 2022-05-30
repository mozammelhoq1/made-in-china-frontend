import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = `https://fathomless-fjord-91095.herokuapp.com/products`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return [products];
};
export default useProducts;
