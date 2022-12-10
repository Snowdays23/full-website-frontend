import * as React from 'react';
import Separator from './subcomponents/separator';
import logoSD23 from '../assets/img/Logo_SD_23.svg';
import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";  
import Snowfall from 'react-snowfall';
import { Cancel } from '@mui/icons-material';

export const UnsuccessCheckoutPage = () => {
    
    
    return (

        <div className = "wrapper-outside  ">
            
            <div className='absolute overlay-1' style={{width: "100vw", minHeight: "100vh", height: "auto"}} >

                <div className='d-xs-block d-lg-none'>
                    <Snowfall  snowflakeCount={80}/>    
                </div>

                <div className='d-none d-lg-block'>
                    <Snowfall  snowflakeCount={180}/>   
                </div>
                

                <div className='row justify-content-center'>

                    <div className='col-12 mt-5'>
                        <img src={logoSD23}  id = "main-logo" className='white-shadow-stronger'  alt="Snowdays23 logo: blue snowflake with writing: SNOWDAYS"/>
                    </div>

                </div>

                <Separator number={8} ></Separator>

                <div className='row justify-content-center'>

                    <div className='col-10 '>
                        <h2 className='text-black font-josefin title'>SOMETHING WENT WRONG</h2>
                    </div>

                    <div className="w-100"></div>

                    <div className='col-8'>
                        <h2 className='text-black font-josefin subtitle'>You stopped the payment process!</h2>
                        <h2 className='text-black font-josefin ' style={{fontSize: "15vw"}}><Cancel fontSize={"inherit"}/></h2>
                        <h2 className='text-black font-josefin subtitle'>Please open the link from your email again and pay for your ticket :)</h2>
                    </div>

                    <Separator number={8} ></Separator>

                    
                    <Separator number={8} ></Separator>

                    

                </div>

            </div>

            

            
            

        </div>
        
        
    );
    
}