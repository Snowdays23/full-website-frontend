import React, { Component } from 'react';
import Separator from '../subcomponents/separator';
import "../../assets/css/style.css";
import "../../assets/css/bootstrap.min.css";  
import "../../assets/css/other-pages-css/styleSustainability.css";
import SpiritImage from "../../assets/img/other-pages/sport/spiritImage.png";
import { Navbar } from '../homepage/subcomponents/navbar';
import { display } from '@mui/system';
import { Footer } from '../homepage/subcomponents/footer';



// const SponsorLogo = ({img, link = ""}) => {

// }

// const SponsorChessboard = ({sponsors}) => (

// )

 
export const Sponsor = () => {

        return (

            <div className = "wrapper-outside  ">

                <Navbar pageNumberNow={1} />

                <Separator number = {10} />

                <div className='container' >

                    <div className='row justify-content-center' >
                        <div className='col-11 col-lg-12 justify-left-text'  >

                            <h2 className='text-blue-light font-josefin title' >SPONSOR</h2>

                            



                        </div>

                        <Separator number = {3} />

                        <div className='row justify-content-center' >

                            <div>
                                <h3 className='text-blue-light font-josefin subtitle' > MAIN SPONSOR </h3>
                            </div>

                            <div className = 'row justify-content-left' style={{width : "100%"}} >
                                <div className = "col-12 col-md-4">
                                    <a href="" target="_blank" /*onFocus={() => setWidth("20vw")} onBlur={() => setWidth("17vw")}*/><img  src={SpiritImage} style={{width: "17vw", height: "auto"}} alt="Icon" /></a>
                                </div>
                                <div className = "col-11 col-md-4">
                                    <img  src={SpiritImage} style={{width: "17vw", height: "auto"}} alt="Icon" />
                                </div>
                                <div className = "col-11 col-md-4">
                                    <img  src={SpiritImage} style={{width: "17vw", height: "auto"}} alt="Icon" />
                                </div>
                            </div>

                        </div>

                        <Separator number = {3} />

                        <div className='row justify-content-center' >

                            <div>
                                <h3 className='text-blue-light font-josefin subtitle' > SPONSOR </h3>
                            </div>

                        </div>

                        <Separator number = {3} />

                        <div className='row justify-content-center' >

                            <div>
                                <h3 className='text-blue-light font-josefin subtitle' > PARTNER </h3>
                            </div>

                        </div>


                    </div>

                </div>

                <Separator number = {5} />

                <Footer/>

            </div>
            
            
        )
}