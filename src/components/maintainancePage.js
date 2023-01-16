import * as React from 'react';
import Separator from './subcomponents/separator';
import logoSD23 from '../assets/img/Logo_SD_23.svg';
import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";  
import Snowfall from 'react-snowfall';
import { SevereCold } from '@mui/icons-material';
import Yeti from '../assets/img/yeti_illustration.svg';

export const MaintanancePage = () => {
    
    
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
                        <h2 className='text-black font-josefin title'>MAINTENANCE</h2>
                    </div>

                    <div className="w-100"></div>

                    <div className='col-8'>
                        <h2 className='text-black font-josefin subtitle'>Sorry, we're out for a bit! We're going through maintenance and we'll back very soon.</h2>
                    </div>

                    <div className='w-100'></div>

                    <div className='col-10 '>
                        <img src={Yeti}  id = "main-logo"  style={{width:"20vw", height: "auto"}} alt="Yeti"/>
                    </div>

                    <Separator number={8} ></Separator>

                    
                    <Separator number={8} ></Separator>

                    

                </div>

            </div>

            

            
            

        </div>
        
        
    );
    
}