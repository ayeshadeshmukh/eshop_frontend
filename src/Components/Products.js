import Product1 from "../Products/Product1";
import axios from "axios";
import React, { useState, useEffect } from "react";

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
      console.log(response.data)
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
    // console.log("image path is ",productList[0].imagePath);
  }, []);

  return (
    <div>
      {productList.map(
        (
          ProItem // the map() method is used to iterate over an array and call function on every element of the array.
        ) => (
          <div id={ProItem.productID}>
            <div
              style={{
                width: "300px",
                border: "1px solid #ccc",
                padding: "10px",
              }}
            >
              <img
                // src={"http://localhost:802/1696658747893-Screenshot 2023-09-26 at 12.24.17 PM.png"}
                src={`http://localhost:802/${ProItem.imagePath.slice(7)}`}
                alt={ProItem.imagePath}
                style={{ width: "100%", height: "auto" }}
              />

              <h3 style={{ marginTop: "10px" }}>
                Product Name: {ProItem.productname}
              </h3>
              <p>Description: {ProItem.description}</p>
              <p style={{ fontWeight: "bold" }}>Price: ${ProItem.price}</p>
              <p>category: {ProItem.category}</p>

              <button
                onClick={(event) => {
                  onclick(event.currentTarget.parentElement.parentElement);
                }}
                style={{
                  backgroundColor: "#007bff",
                  color: "#fff",
                  padding: "8px 16px",
                  border: "none",
                  cursor: "pointer",
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
