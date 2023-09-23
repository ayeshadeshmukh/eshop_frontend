import React, { useState } from "react";
import axios from "axios";


const SignUp = () => {
     
  const [name, setname] = useState();
  const [phone, setphone] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [cpassword, setcpassword] = useState();




  const onSubmitHandler = (event) =>{      //here event parameter is use to stop the form page on refreshing on its own
    console.log('Submitted')
    event.preventDefault()     //prevents
    console.log(name,phone,email,password,cpassword)
    //I'll write post and get request code using axios under this line
    
    let url = "http://localhost:802/user/signup";
    let data = {
      'name' : name,
      "phone" : phone,
      'email' : email,
      'password': password,
      'cpassword' : cpassword
    }
         if(password==cpassword){
       //(url,data u want to sending to the server)
    axios.post(url, data)
      .then((response) => {
        console.log(response.data)
      });
    }

    else{
       alert("Password doesnot match")

    }
  




  }
  return (
    <div className="container">
      <form onSubmit={onSubmitHandler}>
        <div class="form-group">
          <label for="Jane Doe">Enter Your Name</label>
          <input
            onChange={(event) => {setname(event.target.value)}} //The onChange event in React detects when the value of an input element changes.
            type="name"                                          //target = where did it change/where the event has occur , value = after the change what was the value
            class="form-control"
            id="Jane Doe"
            aria-describedby="name"
            placeholder="Enter Your Name"
          />
        </div>
        <div class="form-group">
          <label for="000000000">Enter Your Phone Number</label>
          <input
            onChange={(event) => {
              setphone(event.target.value);
            }}
            type="phone"
            class="form-control"
            id="0000000000"
            aria-describedby="phone"
            placeholder="Enter Your Phone Number"
          />
        </div>

        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            onChange={(event) => {
              setemail(event.target.value);
            }}
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>

        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            onChange={(event) => {
              setpassword(event.target.value);
            }}
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Confirm Password</label>
          <input
            onChange={(event) => {
              setcpassword(event.target.value);
            }}
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Confirm Password"
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;
