import React, {useEffect, useState} from 'react'
import "../css/cartProduct.css"
import axios from 'axios';
const Cart = () => {
const [cart, setcart] = useState([]);

const getcartdetails = () => {

  let url = "http://localhost:802/user/getcartdetails";

  axios
    .get(url)
    .then((response) => {
      const data = response.data;
      console.log(data);
       setcart(data);
    })
    .catch((error) => {
      console.error("Error fetching cart details:", error);
    });

}






useEffect(() => {
 getcartdetails();
 console.log(cart);
}, [])






 return (
   <div className="container" id="productTray">
     {cart &&
       cart.map(
         (
           cartItem // the map() method is used to iterate over an array and call function on every element of the array.
         ) => (
           <div class="cart-item">
             <div class="product-image">
               <img
                 src={"http://localhost:802/" + cartItem.detail.imagePath}
                 alt="Product Image"
               />
             </div>
             <div class="product-details">
               <h2 class="product-title">{cartItem.detail.productname}</h2>
               <p class="product-description">{cartItem.detail.description}</p>
               <p class="product-price">{cartItem.detail.price}</p>
             </div>
             <div class="quantity">
               <label for="quantity">Quantity</label>
               <input
                 type="number"
                 id="quantity"
                 name="quantity"
                 value={cartItem.quantity}
                 min="1"
               />
             </div>
           </div>
         )
       )}
   </div>
 );
}

export default Cart
