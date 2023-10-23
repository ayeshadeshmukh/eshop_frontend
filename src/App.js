import "./App.css";
import Nav from "./Navbar/Navbar";
import About from "./Components/About";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import Products from "./Components/Products";
import Favorites from "./Components/Favorites";
import Home from "./Components/Home";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import AddProduct from "./Admin/AddProduct";
import Cart from "./Components/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [name, setname] = useState();

  // useEffect(() => {
  //   const data = JSON.parse(localStorage.getItem("userinfo"));
  //   setname(data.name);
  // }, []);

  return (
    <>
      <Nav></Nav>
      
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/favorites" element={<Favorites />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/addproduct" element={<AddProduct />} />
      </Routes>
    </>
  );
}

export default App;
