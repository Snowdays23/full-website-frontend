import * as React from 'react';
import Separator from '../subcomponents/separator';
import logoSD23 from '../../assets/img/Logo_SD_23.svg';
import "../../assets/css/style.css";
import "../../assets/css/bootstrap.min.css";  
import "../../assets/css/other-pages-css/styleFormPage.css";
import Snowfall from 'react-snowfall';
import TextField from '@mui/material/TextField';
import { Checkbox } from '@mui/material/';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs, { Dayjs } from 'dayjs';
import MenuItem from '@mui/material/MenuItem';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FormPageSport } from './formPageSport';
import { FormPageCatering } from './formPageCatering';
import Button from '@mui/material/Button';
import NavigateNext from '@mui/icons-material/NavigateNext';
import { FormPageGeneral } from './formPageGeneral';

export const FormPage = () => {

    const theme = createTheme({
        components: {
          MuiTextField: {
            styleOverrides: {
              root: ({ ownerState }) => ({
                ...(ownerState.variant === 'filled' &&
                  ownerState.color === 'primary' && {
                    backgroundColor: '#fff'
                  }),
              }),
            },
          },
        },
      });
    
    
    
        return (

            <div className = "wrapper-outside  ">
                
                <div className='absolute overlay-1' >

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
                            <h2 className='text-black font-josefin subtitle'>READY TO JOIN US?</h2>
                        </div>

                        <div className="w-100"></div>

                        <div className='col-10'>
                            <h2 className='text-black font-josefin normal-text'>fill in your details</h2>
                        </div>

                        <Separator number={8} ></Separator>

                        <ThemeProvider theme={theme} >

                            <div className='col-11 col-lg-8 '>
                                
                                <div id='form' className='p-1 '>
                                    <Separator number={4} ></Separator>
                                    
                                    <FormPageGeneral />

                                    <Separator number={5} ></Separator>

                                    <FormPageSport />

                                    <Separator number={5} ></Separator>

                                    <FormPageCatering />

                                    <Separator number={5} ></Separator>

                                    <div className='col-12 col-sm-7 col-lg-5 ' style={{position: "relative"}} >
                                     <Button variant="contained">Next <NavigateNext/></Button>          
                                    </div>
                                </div>
                            </div>
                        </ThemeProvider>

                        <Separator number={8} ></Separator>

                        

                    </div>

                </div>

                

                
                

            </div>
            
            
        );
    
}