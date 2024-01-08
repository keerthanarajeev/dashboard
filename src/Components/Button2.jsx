import React from 'react'

function Button2({color,title}) {
  return (
    <>

       <div className="btnconnect" >
        <button className={color} style={{border:'none',borderRadius:'5px',fontSize:'10px',padding:'3px'}}>{title}</button>
       </div>
    
    
    </>
  )
}

export default Button2