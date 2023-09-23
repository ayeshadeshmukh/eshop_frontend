import React, { useState } from 'react'
import axios from 'axios'

const AddProduct = (event) => {
   const [productname, setproductname] = useState()
   const [description, setdescription] = useState()
   const [price, setprice] = useState()
   const [category, setcategory] = useState()
   const [image, setimage] = useState()
    

     
    const onSubmitHandler = (event) => {
         console.log("Submitted");
         event.preventDefault(); 
         console.log(productname,description,price,category,image)

        let url = "http://localhost:802/admin/addproduct";
        let data = {
          "productname": productname,
          "description": description,
          "price": price,
          "category" : category,
          "image" : image
        };

         axios.post(url, data).then((response) => {
          console.log(response.data);
        });




    }

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
            // placeholder="Enter the price"
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddProduct
















