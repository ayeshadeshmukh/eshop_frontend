import Product1 from "../Products/Product1";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "../css/productCard.css";
const Products = () => {
  const [productList, setproductList] = useState([]);
  const [token, settoken] = useState();

  const ProductsNew = async () => {
    // const userinfo = JSON.parse(localStorage.getItem("userinfo")); //here we are bringing token from local storage i.e one we created in sign in because we have to take token wherever we go

    // if (userinfo) {
    //   settoken(userinfo.token);
    // }

    // console.log(token);

    // const config = {
    //   headers: {
    //     token: token,
    //   },
    // };

    try {
      const response = await axios.get("http://localhost:802/user/products");
      setproductList(response.data);
      console.log(productList)
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

    //(url,data u want to sending to the server)
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
      {productList.map(
        (
          ProItem // the map() method is used to iterate over an array and call function on every element of the array.
        ) => (
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
        )
      )}
    </div>
  );
};

export default Products;

//  <div>
//       {productList.map(
//         (
//           ProItem // the map() method is used to iterate over an array and call function on every element of the array.
//         ) => (
//           <Product1
//             key={ProItem.srno}
//             srno={ProItem.srno}
//             productname={ProItem.productname}
//             description={ProItem.description}
//             price={ProItem.price}
//             category={ProItem.category}
//             image={ProItem.image}
//           />
//         )
//       )}
//     </div>
