import React from 'react'
import './sidebarbutton.css'

function SidebarButton({ title, icons }) {
    return (
        <>

            <div className="sidebtn border border-shadow border-left-0 " style={{display:'flex', alignItems:'center', justifyContent:'left', width:'90%', height:'45px'}}>
                <p >{icons}</p>
                <p className=" p-title text-xl fw-semibold ps-2" style={{fontSize:'14px'}}>{title}</p>
            </div>

        </>
    )
}

export default SidebarButton