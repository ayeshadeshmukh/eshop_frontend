import React, { useState } from "react";
import axios from "axios";

const AddProduct = (event) => {
  const [productname, setproductname] = useState();
  const [description, setdescription] = useState();
  const [price, setprice] = useState();
  const [category, setcategory] = useState();
  const [image, setimage] = useState();

  const onSubmitHandler = (event) => {
    console.log("Submitted");
    event.preventDefault();
    const currentTimeInSeconds = Math.floor(Date.now() / 1000);

    console.log("Current time in seconds:", currentTimeInSeconds);

    const formData = new FormData();
    formData.append("productname", productname);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("productID", currentTimeInSeconds);
    formData.append("image", image[0]);

    formData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });
    let url = "http://localhost:802/admin/addproduct";

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    axios.post(url, formData, config).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <div className="container">
      <form onSubmit={onSubmitHandler}>
        <div class="form-group">
          <label for="name">Name</label>
          <input
            onChange={(event) => {
              setproductname(event.target.value);
            }}
            type="name"
            class="form-control"
            id="name"
            aria-describedby="name"
            placeholder="Enter your name"
          />
        </div>

        <div class="form-group">
          <label for="description">Description</label>
          <input
            onChange={(event) => {
              setdescription(event.target.value);
            }}
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Enter the description of the product"
          />
        </div>

        <div class="form-group">
          <label for="Price">Price</label>
          <input
            onChange={(event) => {
              setprice(event.target.value);
            }}
            type="number"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Enter the price"
          />
        </div>
        <div class="form-group">
          <label for="category">Choose your category</label>
          <select
            id="category"
            name="category"
            onChange={(event) => {
              setcategory(event.target.value);
            }}
          >
            <option defaultValue={"Select"}>Select</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kids">kids</option>
          </select>
        </div>

        <div class="form-group">
          <label for="Image">Choose your image</label>
          <input
            onChange={(event) => {
              setimage(event.target.files);
            }}
            type="file"
            class="form-control"
            id="exampleimage"
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
