import React , { useState, useEffect, useRef }from 'react'
import lottie from "lottie-web"

const Services =()=> {

  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
    container:container.current,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData: require("../animation.json")
  });
}, []);

  return (
  
    <>
    <h2 style={{ display:"block", fontWeight:"900", margin:"30px auto", textAlign:"center", color:"#0E9E2C"}}>CURIOUS ABOUT OUR SERVICES? CHECK BACK! </h2>

   

    <div style={{  width: "800px", height: "400px", display: "block", margin: "30px auto",}} ref={container}> </div>

  
    </>
  )
}

export default Services