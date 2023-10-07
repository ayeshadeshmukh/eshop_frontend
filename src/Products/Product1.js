import React from "react";

const Product1 = (props) => {
  return (
    <div>
      <div
        style={{ width: "300px", border: "1px solid #ccc", padding: "10px" }}
      >
        <img
          src={props.image}
          alt="Product Image"
          style={{ width: "100%", height: "auto" }}
        />


        <h3 style={{ marginTop: "10px" }}>Product Name: {props.productname}</h3>
        <p>Description: {props.description}</p>
        <p style={{ fontWeight: "bold" }}>Price: ${props.price}</p>
        <p>category: {props.category}</p>

        <button
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
  );
};

export default Product1;
