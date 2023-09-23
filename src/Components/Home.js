import React, { useState } from 'react'

const Home = () => {

const [first, setfirst] = useState("Vjti")
     
const getMyName  = ()=> {

    setfirst("Mumbai")
}





  return (
    <div>
        This is the home page
        <h1>This is {first}</h1>
      
      <button onClick = {()=> getMyName()}>Click here</button>

    </div>
  )
}

export default Home
