

import React from 'react'
import './toggle.css'

function Togglebtn() {
  return (
    <>
       <div className="toggle bg-white fw-normal p-3" style={{fontSize:'13px',textDecoration:'none',borderRadius:'6px'}}>
    
       <button className=' ps-1 pe-2' style={{border:'none',border:'1px solid black', borderRadius:'16px'}} ><span className='border bg-info ' style={{borderRadius:'10px'}}>Monthly</span><span className='' >Annually</span></button>
       </div>
    </>
  )
}

export default Togglebtn