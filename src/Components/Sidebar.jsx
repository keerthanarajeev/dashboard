
import React, { useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import './sidebar.css'
import SidebarButton from './SidebarButton';
import { MdDashboard } from "react-icons/md";
import { PiPottedPlantDuotone } from "react-icons/pi";
import { MdContactSupport } from "react-icons/md";
import { RiQuestionnaireFill } from "react-icons/ri";
import { AiOutlineSlackSquare } from "react-icons/ai";
import { IoPowerOutline } from "react-icons/io5";
import Stack from '@mui/material/Stack';



function Sidebar() {
  return (
    <>
      <div className="sidebar shadow">

        

        <div className="shadow pt-4 pb-2" style={{}}>
          <div className="pro-pic pt-1" style={{ textAlign: 'center' }}>
            <img src="https://img.freepik.com/free-photo/portrait-handsome-smiling-young-man-white-t-shirt-isolated-white_186202-8965.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1704240000&semt=ais" alt="" className='pic' />
          </div>
          <div className="name pt-1" style={{ textAlign: 'center' }}>
            <p> <span className='fw-bolder ' style={{fontSize:'14px'}}>Ram Mohan</span>  <span> <IoIosArrowForward className="text-primary" /></span></p>
          </div>
          <div className="email" style={{ marginTop: '-15px', textAlign: 'center',fontSize:'12px' }}>
            <p className=''>rammohan2@gmail.com</p>

          </div>

        </div>



        {/* profile */}

        <div className={`menu mt-4 pt-1`}>
          <Stack spacing={3}> 
            <div>
              <SidebarButton title="Dashboard"
                icons={<MdDashboard size={30} className="text-cyan-500 pt-2" />}

              />
            </div>


            <div>
              <SidebarButton
                title="Perk"
                icons={
                  <PiPottedPlantDuotone size={30} className="text-cyan-500 pt-2" />
                }
              />
            </div>

            <div>
              <SidebarButton
                title="Addons"
                icons={
                  <AiOutlineSlackSquare size={30} className="text-cyan-500 pt-2" />
                }
              />
            </div>

            <div>
              <SidebarButton
                title="FAQ"
                icons={
                  <RiQuestionnaireFill size={30} className="text-cyan-500 pt-2" />
                }
              />
            </div>

            <div>
              <SidebarButton
                title="Support"
                icons={<MdContactSupport size={30} className="text-cyan-500 pt-2 pb-6" />}
              />
            </div>
          </Stack>




        </div>

        <div className='pt-1 text-center text-primary' style={{marginTop:'50%',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <p className='fw-semibold' style={{fontSize:'16px'}}>Logout</p>
          <IoPowerOutline className="ps-1  " style={{fontSize:'19px', marginTop:'-12px'}}/>
        </div>




      

    </div >

    </>
  )
}

export default Sidebar