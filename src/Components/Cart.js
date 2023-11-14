import React, { useEffect, useState } from "react";
import "../css/cartProduct.css";
import axios from "axios";
const Cart = () => {
  const [cart, setcart] = useState([]);

  const getcartdetails = async() => {
    console.log("inside cart details")
    let url = "http://localhost:802/user/getcartdetails";
      
    await axios
      .get(url)
      .then((response) => {
        const data = response.data;
        console.log(response);
        setcart(data);
      })
      .catch((error) => {
        console.error("Error fetching cart details:", error);
      });
  };


   const deletecart = async(eventTarget) =>{
        let url = `http://localhost:802/user/deletefromcart?productID=${eventTarget.id}`;
        let data = {
          productid: eventTarget.id,
        };
await axios.delete(url,data).then((response)=>{
          getcartdetails();
          console.log(response.data)
        })
     



   }

   const updateCart = (quantity,rootelement) => {
      console.log(quantity,rootelement.id)

      let url = `http://localhost:802/user/updatequantity?productID=${rootelement.id}&quantity=${quantity}`;

      axios.put(url).then((response)=>{
        console.log(response.data)
        getcartdetails();
      }) 


   }







  useEffect(() => {
    getcartdetails();
    console.log(cart);
  }, []);

  //src={"http://localhost:802/" + cartItem.detail.imagePath}
  {
    /* <h2 class="product-title">{cartItem.detail.productname}</h2>
               <p class="product-description">{cartItem.detail.description}</p>
               <p class="product-price">{cartItem.detail.price}</p> */
  }
  // value={cartItem.quantity}

  return (
    <>
      <section class="bg-light my-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-9">
              <div class="card border shadow-0">
                <div class="m-4">
                  <h4 class="card-title mb-4">Your shopping cart</h4>
                  {cart &&
                    cart.map(
                      (
                        cartItem // the map() method is used to iterate over an array and call function on every element of the array.
                      ) => (
                        <div
                          id={cartItem.detail.productID}
                          class="row gy-3 mb-4"
                        >
                          <div class="col-lg-5">
                            <div class="me-lg-5">
                              <div class="d-flex">
                                <img
                                  src={
                                    "http://localhost:802/" +
                                    cartItem.detail.imagePath
                                  }
                                  class="border rounded me-3"
                                  style={{ width: "150px", height: "150px" }}
                                />

                                <h5 class=" ">{cartItem.detail.productname}</h5>
                                <p> {"..."}</p>
                                <p class="text-muted">
                                  {cartItem.detail.description}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-2 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap">
                            <div class="">
                              <select
                                style={{ width: "100px" }}
                                class="form-select me-4"
                                value={cartItem.quantity}
                                onChange={(event) => {
                                  updateCart(
                                    event.target.value,
                                    event.currentTarget.parentElement
                                      .parentElement.parentElement
                                  );
                                }}
                              >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                              </select>
                            </div>
                            <div class="">
                              <p class="product-price">
                               Total  ${cartItem.detail.price * cartItem.quantity}
                              </p>{" "}
                              <br />
                              <small class="text-muted text-nowrap">
                                {" "}
                                ${cartItem.detail.price} / per item{" "}
                              </small>
                            </div>
                          </div>
                          <div class="col-lg col-sm-6 d-flex justify-content-sm-center justify-content-md-start justify-content-lg-center justify-content-xl-end mb-2">
                            <div class="float-md-end">
                              <a
                                href="#"
                                class="btn btn-light border text-danger icon-hover-danger"
                                onClick={(event) => {
                                  deletecart(
                                    event.currentTarget.parentElement
                                      .parentElement.parentElement
                                  );
                                }}
                              >
                                {" "}
                                Remove
                              </a>
                            </div>
                          </div>
                        </div>
                      )
                    )}
                </div>

                <div class="border-top pt-4 mx-4 mb-4">
                  <p>
                    <i class="fas fa-truck text-muted fa-lg"></i> Free Delivery
                    within 1-2 weeks
                  </p>
                  <p class="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-3">
              <div class="card mb-3 border shadow-0">
                <div class="card-body">
                  <form>
                    <div class="form-group">
                      <label class="form-label">Have coupon?</label>
                      <div class="input-group">
                        <input
                          type="text"
                          class="form-control border"
                          name=""
                          placeholder="Coupon code"
                        />
                        <button class="btn btn-light border">Apply</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="card shadow-0 border">
                <div class="card-body">
                  <div class="d-flex justify-content-between">
                    <p class="mb-2">Total price:</p>
                    <p class="mb-2"> $34</p>
                  </div>
                  <div class="d-flex justify-content-between">
                    <p class="mb-2">Discount:</p>
                    <p class="mb-2 text-success">-$60.00</p>
                  </div>
                  <div class="d-flex justify-content-between">
                    <p class="mb-2">TAX:</p>
                    <p class="mb-2">$14.00</p>
                  </div>
                  <hr />
                  <div class="d-flex justify-content-between">
                    <p class="mb-2">Total price:</p>
                    <p class="mb-2 fw-bold">$283.00</p>
                  </div>

                  <div class="mt-3">
                    <a href="#" class="btn btn-success w-100 shadow-0 mb-2">
                      {" "}
                      Make Purchase{" "}
                    </a>
                    <a href="#" class="btn btn-light w-100 border mt-2">
                      {" "}
                      Back to shop{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
