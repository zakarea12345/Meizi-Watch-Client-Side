import { useEffect, useState } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://obscure-shore-04909.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return {products, setProducts};
};

export default useProducts;
