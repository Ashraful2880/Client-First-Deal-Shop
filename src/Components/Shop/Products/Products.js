import React from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth';
import useProducts from '../../Hooks/UseProducts';
import './Products.css';

const Products = () => {
    const [products]=useProducts();
   const {isloading}=useAuth();
    return (      
        <div className="row container-fluid mx-auto">
            <h3 className="text-start fw-bold">All Products</h3>
            <hr style={{padding:'2px 0px', backgroundColor:'#FCC902'}}/>
            {isloading? 
                <div className="spinner-grow text-danger mx-auto mb-3" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
              :
            products.map(product=>
                <div className="col-lg-2 col-md-4 col-sm-6 product-container text-start" key={product._id}>
                <img className="w-100 pt-5" src={product.url} alt="Products" />
                    <div className=" ps-2">
                        <Rating className="text-warning mt-4" readonly emptySymbol="far fa-star" fullSymbol="fas fa-star" initialRating={product.star}>
                        </Rating>
                        <h5>{product.name}</h5>
                        <span>Category: {product.category}</span>
                        <h6 className="my-2">Price: <span className="text-danger">${product.price}</span></h6>
                        <Link to={`/myCart/${product._id}`}><button className="btn btn-warning my-3">Add To Cart</button></Link>
                    </div>
                </div>
                )
            }
        </div>
    );
};

export default Products;