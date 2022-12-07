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
import Send from '@mui/icons-material/Send';
import { FormPageGeneral } from './formPageGeneral';
import { CheckBox } from '@mui/icons-material';
import PrivacyPolicy from '../../assets/docs/terms__cond.pdf';

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

      
      const [read, setRead] = React.useState(false);
      const [filledGeneral, setFilledGeneral] = React.useState(false);
      const [filledSport, setFilledSport] = React.useState(false);
      
      const [filled, setFilled] = React.useState(false);
      
      React.useEffect(() => {

        if(read && filledGeneral && filledSport)
            setFilled(true);
        else
            setFilled(false);

      }, [read, filledGeneral, filledSport]);
    
    
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
                            <h2 className='text-black font-josefin subtitle'>fill in your details</h2>
                        </div>

                        <Separator number={8} ></Separator>

                        <ThemeProvider theme={theme} >

                            <div className='col-11 col-lg-8 '>
                                
                                <div id='form' className='p-1 '>
                                    <Separator number={4} ></Separator>
                                    
                                    <FormPageGeneral setFilledGeneral={setFilledGeneral}/>

                                    <Separator number={5} ></Separator>

                                    <FormPageSport setFilledSport={setFilledSport}/>

                                    <Separator number={5} ></Separator>

                                    <FormPageCatering />

                                    <div className='d-xs-block d-lg-none'>
                                        <Separator number={5} ></Separator>
                                    </div>

                                    <Separator number={7} ></Separator>

                                    <div className="row justify-content-center">

                                        <div className='col-11 col-lg-10' style={{position: "relative", right: 0 }}>
                                            <div style={{backgroundColor: "white", height: '100%', width: '100%', paddingTop: 10}}>
                                                <label> I have read and I accept the <a href={PrivacyPolicy} target="_blank"> Privacy Policy</a> <Checkbox checked={read} onClick={() => {setRead(!read)}} /> </label>
                                            </div>
                                        </div>

                                    </div>

                                    <Separator number={5} ></Separator>

                                    <div className="row justify-content-center">

                                        <div className='col-12 col-sm-7 col-lg-5' style={{position: "relative", justifyContent: "center"}} >
                                        {filled ?
                                        <Button 
                                        style={{
                                            borderRadius: 30,
                                            backgroundColor: "#fff",
                                            color: "#000"
                                        }}
                                        size="large"
                                        variant="contained">Submit <Send fontSize={"inherit"} style={{marginLeft: 5}}/></Button>  
                                        :
                                        <Button 
                                        disabled
                                        style={{
                                            borderRadius: 30,
                                            backgroundColor: "#fff",
                                            color: "#a9a9a9"
                                        }}
                                        size="large"
                                        variant="contained">Submit <Send fontSize={"inherit"} style={{marginLeft: 5}}/></Button>  
                                        }           
                                        </div>
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