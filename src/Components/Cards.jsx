

import React from 'react'
import { CiUser } from "react-icons/ci";
import { TiCloudStorageOutline } from "react-icons/ti";
import { MdOutlineEmail } from "react-icons/md";
import { Stack } from '@mui/material';
import { FaPlay } from "react-icons/fa";
import './card.css'


function Cards({ title, amnt1, amunt2, button, subtitle, users, storage, email, feature }) {
    return (
        <>
            <div className="row maincard">
                <div className=" dash-card col-sm-12 card shadow p-4 " >
         
                    <div className="">

                        <p className="fw-bold fs-5 sm:text-2xl lg:text-xl">{title}</p>
                        <div style={{ marginTop: '-18px' }}>
                            <span className="" style={{ textDecoration: 'line-through', fontSize: '12px' }}>{amnt1}</span>
                        </div>
                        <p className="text-xl">{amunt2}</p>
                        <p style={{ marginTop: '-12px' }}>{button}</p>

                    </div>
                    <hr />
                    <div className=" lh-1" style={{ fontSize: '12px' }}>
                        <p>{subtitle}</p>

                        <div className='ps-2'>
                            <p className="flex gap-2">
                                <span className='pe-2'><CiUser /></span>
                                {users}
                            </p>
                        </div>
                        <div className='ps-2'>
                            <p className="flex gap-2">
                                <span className='pe-1'><TiCloudStorageOutline />  </span>
                                {storage}
                            </p>
                        </div>
                        <div className='ps-2'>
                            <p className="flex gap-2">
                                <span className='pe-1'> <MdOutlineEmail /> </span>
                                {email}
                            </p>
                        </div>

                        <div className='ps-4 fw-semibold text-decoration-underline'>
                            <p>{feature} <FaPlay className='' style={{ fontSize: '8px', color: 'orange' }} /></p>

                        </div >
                    </div >

                </div>
            </div>
        </>
    )
}

export default Cards