import React from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/UseAuth";
import useProducts from "../../Hooks/UseProducts";

const Others = () => {
  const [products] = useProducts();
  const { isloading } = useAuth();
  return (
    <div>
      <h3 className="text-start fw-bold ms-3">Others Products</h3>
      <hr className="bg-orange-500" style={{ padding: "1px 0px" }} />
      <div className="row container-fluid mx-auto">
        {isloading ? (
          <div className="spinner-grow text-danger mx-auto mb-3" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          products
            .filter((product) => product.category === "Others")
            .map((womensProduct) => (
              <div
                className="col-lg-2 col-md-4 col-sm-6 product-container text-start"
                key={womensProduct._id}
              >
                <img
                  className="w-100 pt-4"
                  src={womensProduct.url}
                  alt="rnjgrn"
                />
                <div className="ps-2">
                  <Rating
                    className="text-warning mt-4"
                    readonly
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star"
                    initialRating={womensProduct.star}
                  ></Rating>
                  <h5>{womensProduct.name}</h5>
                  <span>Category: {womensProduct.category}</span>
                  <h6 className="my-2">
                    Price:{" "}
                    <span className="text-danger">${womensProduct.price}</span>
                  </h6>
                  <Link to={`/myCart/${womensProduct._id}`}>
                    <button className="btn btn-warning my-3">
                      Add To Cart
                    </button>
                  </Link>
                </div>
              </div>
            ))
        )}
      </div>
    </div>
  );
};

export default Others;
