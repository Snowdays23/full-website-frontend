import * as React from 'react';
import Separator from './subcomponents/separator';
import logoSD23 from '../assets/img/Logo_SD_23.svg';
import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";  
import Snowfall from 'react-snowfall';
import { SevereCold } from '@mui/icons-material';
import Yeti from '../assets/img/yeti_illustration.svg';
import { useSearchParams } from "react-router-dom";
import { Cancel } from '@mui/icons-material';   

export const GeneralErrorPage = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    

    const fromCodeToMsg = (code) => {
        switch(code) {
            case '450':
                return "It seems there's already a payment session associated. Please pay with the first payment session you have opened.";
            case '451':
                return "It seems there's been an error retrieving checkout session or payment intent. Please start the payment process over.";
            case '452':
                return "It seems the payment was not ready to be captured. Please start over.";
            case '453':
                return "It seems the payment could not be captured. Please contact us!";
            default:
                return "Well, something really weiiiird happened, but we don't know what :/"
        }
    }
    
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
                        <h2 className='text-black font-josefin title'>AN ERROR OCCURRED</h2>
                    </div>

                    <div className="w-100"></div>
                    <Separator number={3} ></Separator>

                    <div className='col-8'>
                        <h2 className='text-black font-josefin subtitle'>{fromCodeToMsg(searchParams.get("code"))}</h2>
                    </div>

                    <div className='w-100'></div>

                    {/* <Separator number={1} ></Separator>
                    <h2 className='text-black font-josefin ' style={{fontSize: "15vw"}}><Cancel fontSize={"inherit"}/></h2> */}

                    <Separator number={3} ></Separator>

                    <div className='col-8'>
                        <h2 className='text-black font-josefin subtitle'>You can always contact us at info@snowdays.it</h2>
                    </div>
                    <div className='w-100'></div>

                    <Separator number={5} ></Separator>
                    

                    

                </div>

            </div>

            

            
            

        </div>
        
        
    );
    
}