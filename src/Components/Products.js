//import Product1 from "../Products/Product1";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "../css/productCard.css";
const Products = () => {
  const [productList, setproductList] = useState([]);
  const [token, settoken] = useState();

  const ProductsNew = async () => {
    try {
      const response = await axios.get("http://localhost:802/user/products");
      setproductList(response.data);
      console.log(productList);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const onclick = (eventTarget) => {
    console.log(eventTarget.id);

    let url = "http://localhost:802/user/addcart";
    let data = {
      productid: eventTarget.id,
    };

    axios.post(url, data).then((response) => {
      console.log(response.data);
    });
  };

  useEffect(() => {
    ProductsNew();
    console.log("I am in use effect");
    console.log(productList);
  }, []);

  return (
    <div className="container" id="productTray">
      {productList.map((ProItem) => (
        <div class="product-card" id={ProItem.productID}>
          <img
            src={
              ProItem.imagePath
                ? `http://localhost:802/${ProItem.imagePath.slice(7)}`
                : " "
            }
            alt="Product Image"
            class="product-image"
          />
          <div class="product-info">
            <h2 class="product-title">{ProItem.productname}</h2>
            <p class="product-description">{ProItem.description}</p>
            <p class="product-price">₹{ProItem.price} (700) 20% off</p>
            <button
              class="add-to-cart-button"
              onClick={(event) => {
                onclick(event.currentTarget.parentElement.parentElement);
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
