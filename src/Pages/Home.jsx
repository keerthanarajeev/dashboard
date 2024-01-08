
import React, { useState } from 'react'
import CustomNavbar from '../Components/CustomNavbar'
import Sidebar from '../Components/Sidebar'
import Cards from '../Components/Cards'
import Button from '../Components/Button'
import Grid from '@mui/material/Grid';
import Card2 from '../Components/Card2'
import Button2 from '../Components/Button2'
import Togglebtn from '../Components/Togglebtn'
import './home.css'


function Home() {



  return (
    <div>

      <CustomNavbar />



      <div className="homepage" style={{ display: 'flex' }}>


        <Sidebar />


        <div className="mainpage ms-5" >

          <div>
            <div>
              <p className="fw-bolder fs-5 pt-5">
                Choose a plan that's just right for you !

                <div className='text-end' style={{ marginTop: '-30px' }}><Togglebtn /></div>
              </p>
            </div>

            <div className="maincard" >

              <div className="row gx-5">

                <div className="col-sm-4">
                  <Cards
                    title="Basic"
                    amnt1="$89.99/mo"
                    amunt2="$9.99/mo"
                    button={<Button color="bg-warning" />}
                    subtitle="What you'll get:"
                    users="Upto 25 Users"
                    storage="Upto 25gb Storage"
                    email="Email Support"
                    feature="EXPLORE FEATURES"
                  />

                </div>

                <div className="col-sm-4">
                  <Cards
                    title="Standard"
                    amnt1="$189.99/mo"
                    amunt2="$99.99/mo"
                    button={<Button color="bg-danger" />}
                    subtitle="What you'll get:"
                    users="Upto 50 Users"
                    storage="Upto 60gb Storage"
                    email="Email+Chat Support"
                    feature="EXPLORE FEATURES"
                  />
                </div>


                <div className="col-sm-4">
                  <Cards
                    title="Premium"
                    amnt1="$389.99/mo"
                    amunt2="$199.99/mo"
                    button={<Button color="bg-primary" />}
                    subtitle="What you'll get:"
                    users="Upto 75 Users"
                    storage="Upto 100gb Storage"
                    email="Email+Chat+Whatsapp Support"
                    feature="EXPLORE FEATURES"
                  />
                </div>
              </div>






            </div>

          </div>

          <div className="" style={{ display: 'flex' }}>
          <div className="row gx-2">
            <div className='col-md-6 col-lg-6 '>
                <Card2
                  button1={<Button2 color="bg-success" title="Free Forever" />}
                  title="Free Starter"
                  subtitle="The quickest and easiest way to try protocols with basic functionalitiies "
                  button2={<Button color="bg-success" />}
                  category="What you'll get"
                  user="upto 8 users"
                  store="Upto 3gb storage"
                  mail="Email Support"
                  about="Basic of Documents,Tasks Flow,Voting, Accounting,Banking, Notes,Investor, Director and Team Management included"
                />
              </div>

              <div className='col-md-6 col-lg-6'>

                <Card2
                  button1={<Button2 color="bg-info" title="Lets Connect" />}
                  title="Enterprise plan"
                  subtitle="Effortiessly customise and fine-tune services as your needs shifts,ensuring the perfect tools for succesS "
                  button2={<Button2 color="bg-info" title="contact us" />}
                  category="What you'll get"
                  user="More than 75 Users"
                  store="Upto 3gb storage"
                  mail="Email Support"
                  about="Customization of all other features"
                />
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Home