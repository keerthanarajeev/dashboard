import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import './button.css'


function Button({ color }) {
  return (
    <div>
      <button
        className={"" +color} 
        style={{border:'none',borderRadius:'5px',fontSize:'11px',paddingLeft:'10px',paddingRight:'10px',paddingTop:'3px',paddingBottom:'3px'}}
      >
        Get Started
        <FaArrowRightLong style={{fontSize:'12px'}} />
      </button>
    </div>
  );
}

export default Button;
