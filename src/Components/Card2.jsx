

import React from 'react'
import { CiUser } from "react-icons/ci";
import { TiCloudStorageOutline } from "react-icons/ti";
import { MdOutlineMailOutline } from "react-icons/md";
import { Grid, Stack } from '@mui/material';
import { TiTick } from "react-icons/ti";
import Button from './Button';
import './card2.css'


function Card2({ button1, title, subtitle, button2, category, user, store, mail, about, }) {
    return (
        <>
            <div>
                <div className='card2 shadow mt-5 mb-5 p-3'>


                    <Grid container spacing={2}>
                        <Grid item xs={6}>

                            <Stack spacing={2}>
                                <p>{button1}</p>
                                <p className="fs-4 fw-bolder">{title}</p>
                                <p className="lh-1" style={{fontSize:'13px'}}>{subtitle}</p>
                                <p>{button2}</p>
                            </Stack>

                        </Grid>
                        
                        <Grid item xs={6} style={{fontSize:'12px'}}>
                                <p className='mb-1'>{category}</p>
                                <p className="mb-1">
                                    <CiUser className='me-2'/>
                                    {user}
                                </p>
                                <p className="mb-1">
                                    <TiCloudStorageOutline  className='me-2' />
                                    {store}
                                </p>
                                <p className="mb-1">
                                    <MdOutlineMailOutline  className='me-2' />
                                    {mail}
                                </p>
                                <p className="text-xs break-words ">
                                <TiTick className='me-2'/>
                                    {about}</p>                       
                                    
                             </Grid>
                        


                    </Grid>

                </div>
            </div>


        </>
    )
}

export default Card2