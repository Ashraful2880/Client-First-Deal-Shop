import { useEffect, useState } from "react";


const useProducts = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(()=>{
        fetch('https://safe-bastion-76919.herokuapp.com/Products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return [products, setProducts]
};

export default useProducts;