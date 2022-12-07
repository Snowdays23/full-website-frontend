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
import { Typography } from '@mui/material/';

export const FormPageGeneral = ({setFilledGeneral}) => {

    const [value, setValue] = React.useState('');
    
    const handleChange = (newValue) => {
      console.log(newValue);
        setValue(newValue);
    };

    const [gender, setGender] = React.useState('');

    const handleChangeGender = (event) => {
        setGender(event.target.value);
    };
    
    const [university, setUniversity] = React.useState('');

    const handleChangeUniversity = (event) => {
        setUniversity(event.target.value);
    };

    const [name, setName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [studnr, setStudnr] = React.useState('');
    const [phonenr, setPhonenr] = React.useState('');


    React.useEffect(() => {
      
      if(gender !== '' && university !== '' && name !== '' && ( value !== '' && value !== null)
        && name !== ''&& lastName !== '' && email !== '' && studnr !== '' && phonenr !== '' ) 
        setFilledGeneral(true);
      else
        setFilledGeneral(false);

    },[gender, university, value, name, lastName, email, studnr, phonenr]);

    const genders = [
        {
          value: 'M',
          label: 'Male',
        },
        {
          value: 'F',
          label: 'Female',
        },
        {
          value: 'N',
          label: "Don't want to specify",
        }
      ];

    const universities = [
        {
          value: 'WHU',
          label: 'WHU - Otto Beisheim School of Management',
        },
        {
          value: 'FS',
          label: 'Frankfurt School',
        },
        {
          value: 'Maastricht',
          label: "Maastricht University",
        },
        {
          value: 'TUM',
          label: "TUM - Technische Universität München",
        },
        {
          value: 'ESB',
          label: "ESB Business School",
        },
        {
          value: 'ZU',
          label: "Zeppelin Universität",
        },
        {
          value: 'NAK',
          label: "Nordakademie",
        },
        {
          value: 'Unitn',
          label: "Università di Trento",
        },
        {
          value: 'EBS',
          label: "EBS Universität",
        },
        {
          value: 'HSBA',
          label: "HSBA - Hamburg School of Business Administration",
        },
        {
          value: 'NOVA',
          label: "Nova SBE",
        }
        ,
        {
          value: 'ESADE',
          label: "ESADE Business School",
        }
        
      ];
    
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
                  
                    <div className='col-6 col-lg-5' style={{position: "relative", right: -13}}>
                        <TextField id="filled-basic" label="Name" variant="filled" style={{width:'90%'}} onChange = {(val) => setName(val.target.value)}/>
                    </div>
                    <div className="d-none d-lg-block col-lg-1"></div>
                    <div className='col-6 col-lg-5' style={{position: "relative", right: 13 }}>
                        <TextField id="filled-basic" label="Last Name" variant="filled" style={{width:'90%'}} onChange = {(val) => setLastName(val.target.value)}/>
                    </div>
                </div>
                <Separator number={2} ></Separator>
                <div className='row justify-content-center'>
                    <div className='col-6 col-lg-5' style={{position: "relative", right: -13}}>
                        <TextField id="filled-basic" label="Email" variant="filled" style={{width:'90%'}}  onChange = {(val) => setEmail(val.target.value)}/>
                    </div>
                    <div className="d-none d-lg-block col-lg-1"></div>
                    <div className='col-6 col-lg-5' style={{position: "relative", right: 13}} >
                       <LocalizationProvider dateAdapter={AdapterDayjs } >
                            <DesktopDatePicker
                            label="Date Birth"
                            inputFormat="DD/MM/YYYY"
                            value={value}
                            onChange={handleChange}
                            renderInput={(params) => <TextField {...params} style={{width:'90%'}} id="filled-basic" variant="filled" />}
                            maxDate="10/12/2022"
                            />
                        </LocalizationProvider>                                        
                    </div>
                </div>
                <Separator number={2} ></Separator>
                <div className='row justify-content-center'>
                    <div className='col-6 col-lg-5' style={{position: "relative", right: -13}}>
                        <TextField id="filled-basic" label="Student Nr" variant="filled" style={{width:'90%'}} onChange = {(val) => setStudnr(val.target.value)} />
                    </div>
                    <div className="d-none d-lg-block col-lg-1"></div>
                    <div className='col-6 col-lg-5' style={{position: "relative", right: 13}} >
                        <TextField
                        id="filled-select-gender"
                        select
                        label="Gender"
                        value={gender}
                        onChange={handleChangeGender}
                        variant="filled"
                        style={{width:'90%'}}
                        >
                            {genders.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                {option.label}
                                </MenuItem>
                            ))}
                        </TextField>                                   
                    </div>
                </div>
                <Separator number={2} ></Separator>
                <div className='row justify-content-center'>
                <div className='col-6 col-lg-5' style={{position: "relative", right: -13}} >
                        <TextField
                        id="filled-select-gender"
                        select
                        label="University"
                        value={university}
                        onChange={handleChangeUniversity}
                        variant="filled"
                        style={{width:'90%'}}
                        >
                            {universities.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                {option.label}
                                </MenuItem>
                            ))}
                        </TextField>                                   
                    </div>
                    <div className="d-none d-lg-block col-lg-1"></div>
                    <div className='col-6 col-lg-5' style={{position: "relative", right: 13}}>
                        <TextField id="filled-basic" label="Phone Number" placeholder="ex:+493202020202" variant="filled" style={{width:'90%'}} onChange = {(val) => setPhonenr(val.target.value)}/>
                    </div>
                </div>
                <Separator number={2} ></Separator>
                <div className='row justify-content-center'>
                    <div className='col-11 col-sm-11 col-lg-10' style={{position: "relative", right: 0 }}>
                        <div style={{backgroundColor: "white", height: '100%', width: '100%', paddingTop: 10}}>
                            <label><Home style={{marginBottom: 5, marginRight: 5}} /> Need Accomodation <Checkbox defaultChecked /></label>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    
}