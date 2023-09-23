import Product1 from "../Products/Product1";
import axios from "axios";
import React, { useState, useEffect } from "react";

const Products = () => {
  const [productList, setproductList] = useState([]);
  const [token, settoken] = useState();

  const ProductsNew = async () => {
    const userinfo = JSON.parse(localStorage.getItem("userinfo")); //here we are bringing token from local storage i.e one we created in sign in because we have to take token wherever we go

    if (userinfo) {
      settoken(userinfo.token);
    }

    console.log(token);

    const config = {
      headers: {
        token: token,
      },
    };

    try {
      const response = await axios.get(
        "http://localhost:802/user/products",
        config
      );
      setproductList(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    ProductsNew();
    console.log("I am in use effect");
  }, []);

  return (
    <div>
      {productList.map(
        (
          ProItem // the map() method is used to iterate over an array and call function on every element of the array.
        ) => (
          <Product1
            key={ProItem.srno}
            srno={ProItem.srno}
            productname={ProItem.productname}
            description={ProItem.description}
            price={ProItem.price}
            category={ProItem.category}
            image={ProItem.image}
          />
        )
      )}
    </div>
  );
};

export default Products;
