import React from "react";
import logo from "./../login-side.jpg"
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div className="container">
      <div className="loginSide">
      <h1>Message...D</h1>
        <div class="input">
            
          <input type="text" placeholder="Enter username..." />
          <div className="button"><button>Sign In</button></div>
        </div>
      </div>
      <div className="imageSide">
          <img src="https://images.unsplash.com/photo-1577192124999-16d78c11d72a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjUzfHxtZXNzYWdlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
      </div>
    </div>
  );
};

export default HomePage;
