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
import Button from '@mui/material/Button';
import Home from '@mui/icons-material/Home';
import { Typography, Alert } from '@mui/material/';

export const FormPageGeneral = ({setFilledGeneral, setGeneralData}) => {

    const [name, setName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phonenr, setPhonenr] = React.useState('');

    const [visibleInfo1, setVisibleInfo1] = React.useState(false);
    const [visibleInfo2, setVisibleInfo2] = React.useState(false);


    React.useEffect(() => {
      
      if(name !== ''&& lastName !== '' && email !== ''&&  phonenr !== '' ) {
        setFilledGeneral(true);
    
        setGeneralData({
          first_name: name,
          last_name: lastName,
          email: email,
          phone: phonenr,
          university: "unibz"
        });
      }
      else {
        setFilledGeneral(false);
        setGeneralData({});
      }

    },[name, lastName, email, phonenr]);
    
        return (
            <div>              
              <div className='row '>
                <div className='d-xs-block d-lg-none'>
                  <Separator number={7} ></Separator>
                </div>
                <div className='col-12'>
                    <h2 className='text-white font-josefin subtitle'>General Information</h2>
                </div>
                <Separator number={2} />
              </div>
                <div className='row justify-content-center'>

                <div className='col-11 col-sm-11 col-lg-10' style={{position: "relative", right: 0 }}>
                    {visibleInfo1 ? <Alert severity="info"><strong>Useful info:</strong> you have to sign up with the same <strong> email </strong> that you sent when you requested to participate to Snowdays.</Alert> : <div></div> }
                    
                    { visibleInfo2 ? <Alert severity="info"><strong>Useful info:</strong> phone number has to be of the format: <strong>'+prefix phone_number'</strong>, example: <strong>'+49 3202020202'</strong> (with a space between prefix and phone number)</Alert> : <div></div> }
                </div>

                <Separator number={2} />
                  
                    <div className='col-6 col-lg-5' style={{position: "relative", right: -13}}>
                        <TextField required id="filled-basic" label="Name" variant="filled" style={{width:'90%'}} onChange = {(val) => setName(val.target.value)} error={ name === ''}/>
                    </div>
                    <div className="d-none d-lg-block col-lg-1"></div>
                    <div className='col-6 col-lg-5' style={{position: "relative", right: 13 }}>
                        <TextField required id="filled-basic" label="Last Name" variant="filled" style={{width:'90%'}} onChange = {(val) => setLastName(val.target.value)} error={ lastName === ''}/>
                    </div>
                </div>
                <Separator number={2} ></Separator>
                <div className='row justify-content-center'>
                    <div className='col-6 col-lg-5' style={{position: "relative", right: -13}}>
                        <TextField required id="filled-basic" label="Email" variant="filled" style={{width:'90%'}}  onChange = {(val) => setEmail(val.target.value)} onFocus = {() => setVisibleInfo1(true)} onBlur = { () => setVisibleInfo1(false)} error={ email === ''} />
                    </div>
                    <div className="d-none d-lg-block col-lg-1"></div>
                    <div className='col-6 col-lg-5 ' style={{position: "relative", right: 13}}>
                        <TextField required id="filled-basic" label="Phone Number" placeholder="ex:+49 3202020202" variant="filled" style={{width:'90%'}} onChange = {(val) => setPhonenr(val.target.value)}  onFocus = {() => setVisibleInfo2(true)} onBlur = { () => setVisibleInfo2(false)}  error={ phonenr === ''}/>
                        <br/>
                    </div>
                </div>
                
            </div>
            
        );
    
}