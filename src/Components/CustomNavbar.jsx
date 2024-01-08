import React from 'react'
import Container from 'react-bootstrap/Container';
import './customnavbar.css'
import Navbar from 'react-bootstrap/Navbar';
import logo_ from '../images/logo_.png'
import { MdKeyboardArrowDown } from "react-icons/md";
import icon from '../../src/images/icon.jpg'

function CustomNavbar() {
    return  (
        
        <>

            <div className="navbar" >

                <Navbar className="nav">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img
                                alt=""
                                src={logo_}
                                width="120"
                                height="120"
                                className='logo'
                            />{' '}
                        </Navbar.Brand>

                    </Container>
                    <div className=" company shadow rounded bg-white text-dark">
                        <img src={icon} alt="" className='iconimage ps-1' style={{width:'18px'}}/>
                    <p className="pe-2 pt-2 ps-2 fw-bolder" style={{fontSize:'10px',width:'130px',height:'14px'}} >XYZ Enterprises Pvt. Ltd</p>
                    </div>
                    <div className="shadow ms-2 ps-1 pb-1 bg-white text-dark" style={{width:'28px'}}>
                    <MdKeyboardArrowDown />
                    </div>
                    

                </Navbar>


            </div>
        </>
    )
}

export default CustomNavbar