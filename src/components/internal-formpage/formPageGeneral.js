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
import PanTool from '@mui/icons-material/PanTool';
import { Typography, Alert } from '@mui/material/';

export const FormPageGeneral = ({setFilledGeneral, setGeneralData}) => {

    const [value, setValue] = React.useState('');
    
    const handleChange = (val) => {
      setValue(val);
    };

    const [gender, setGender] = React.useState('');

    const handleChangeGender = (event) => {
      setGender(event.target.value);
    };

    const [type, setType] = React.useState('');

    const [host, setHost] = React.useState(true);

    const handleChangeNeedsAccomodation = (event) => {
      setHost(event.target.checked);
    }

    const [name, setName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [studnr, setStudnr] = React.useState('');
    const [phonenr, setPhonenr] = React.useState('');
    
    const [nrGuests, setNrGuests] = React.useState(1);
    const [city, setCity] = React.useState('');
    const [cap, setCap] = React.useState('');
    const [address, setAddress] = React.useState('');
    
    const [helper, setHelper] = React.useState(false);
    
    const handleChangeType = (event) => {
      setType(event.target.value);
      if(event.target.value === "StudentDorm")
        setNrGuests(1);
    };

    const [visibleInfo2, setVisibleInfo2] = React.useState(false);
    
    
    React.useEffect(() => {
      
      if(gender !== ''  && name !== '' && ( value !== '' && value !== null)
        && name !== ''&& lastName !== '' && email !== '' && studnr !== '' && phonenr !== '' 
        && ((host === true && type !== '' && nrGuests !== '' && city !== '' && cap !== '' && address !== '') || host === false)) {
        setFilledGeneral(true);
    
        setGeneralData({
          first_name: name,
          last_name: lastName,
          email: email,
          dob: `${value.toDate().getFullYear()}-${new String(value.toDate().getMonth() + 1).padStart(2, '0')}-${new String(value.toDate().getDate()).padStart(2, '0')}`,
          student_nr: studnr,
          phone: phonenr,
          gender: gender,
          needs_accomodation: host
        });
      }
      else {
        setFilledGeneral(false);
        setGeneralData({});
      }

    },[gender, value, name, lastName, email, studnr, phonenr, host, type, nrGuests, city, cap, address]);

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

      const types = [
        {
          value: 'StudentDorm',
          label: 'Student Dorm',
        },
        {
          value: 'Private',
          label: 'Private Accomodation',
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

                <div className='col-11 col-sm-11 col-lg-10' style={{position: "relative", right: 0 }}>
                    { visibleInfo2 ? <Alert severity="info"><strong>Useful info:</strong> phone number has to be of the format: <strong>'+prefix phone_number'</strong>, example: <strong>'+49 3202020202'</strong> (with a space between prefix and phone number)</Alert> : <div></div> }

                </div>

                <Separator number={2} />
                  
                    <div className='col-6 col-lg-5' style={{position: "relative", right: -13}}>
                        <TextField required id="filled-basic" label="Name" variant="filled" style={{width:'90%'}} onChange = {(val) => setName(val.target.value)}/>
                    </div>
                    <div className="d-none d-lg-block col-lg-1"></div>
                    <div className='col-6 col-lg-5' style={{position: "relative", right: 13 }}>
                        <TextField required id="filled-basic" label="Last Name" variant="filled" style={{width:'90%'}} onChange = {(val) => setLastName(val.target.value)}/>
                    </div>
                </div>
                <Separator number={2} ></Separator>
                <div className='row justify-content-center'>
                    <div className='col-6 col-lg-5' style={{position: "relative", right: -13}}>
                        <TextField required id="filled-basic" label="Unibz Email" variant="filled" style={{width:'90%'}}  onChange = {(val) => setEmail(val.target.value)}  />
                    </div>
                    <div className="d-none d-lg-block col-lg-1"></div>
                    <div className='col-6 col-lg-5' style={{position: "relative", right: 13}} >
                       <LocalizationProvider dateAdapter={AdapterDayjs } >
                            <DesktopDatePicker
                            label="Date of Birth *"
                            inputFormat="DD/MM/YYYY"
                            value={value}
                            onChange={handleChange}
                            renderInput={(params) => <TextField {...params} style={{width:'90%'}} id="filled-basic" variant="filled" />}
                            maxDate="12/12/2022"
                            />
                        </LocalizationProvider>                                        
                    </div>
                </div>
                <Separator number={2} ></Separator>
                <div className='row justify-content-center'>
                    <div className='col-6 col-lg-5' style={{position: "relative", right: -13}}>
                        <TextField 
                            required id="filled-basic" label="Student Nr" variant="filled" style={{width:'90%'}} onChange = {(val) => setStudnr(val.target.value)} />
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
                        required
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
                    <div className='col-12 col-lg-11 ' style={{position: "relative"}}>
                        
                        <TextField required id="filled-basic" label="Phone Number" placeholder="ex:+39 3202020202" variant="filled" style={{width:'90%'}} onChange = {(val) => setPhonenr(val.target.value)}  onFocus = {() => setVisibleInfo2(true)} onBlur = { () => setVisibleInfo2(false)} />
                        <br/>
                        
                    </div>
                </div>
                <Separator number={2} ></Separator>
                <div className='row justify-content-center'>

                <div class="w-100"><br/></div>

                    <div className='col-11 col-sm-11 col-lg-10' style={{position: "relative", right: 0 }}>
                        <div style={{backgroundColor: "white", height: '100%', width: '100%', paddingTop: 10}}>
                            <label><Home style={{marginBottom: 5, marginRight: 5}} /> I Can Host <Checkbox defaultChecked onChange={handleChangeNeedsAccomodation} /></label>
                        </div>
                    </div>
                </div>

                {
                  host ? 

                    <div>
                      <Separator number={2} ></Separator>
                      <div className='row justify-content-center'>
                        
                        <div className='col-6 col-lg-5' style={{position: "relative", right: -13}} >
                            <TextField
                            id="filled-select-type-host"
                            select
                            label="Type"
                            value={type}
                            onChange={handleChangeType}
                            variant="filled"
                            style={{width:'90%'}}
                            required
                            >
                                {types.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>                                   
                        </div>
                        <div className="d-none d-lg-block col-lg-1"></div>
                        <div className='col-6 col-lg-5' style={{position: "relative", right: 13}}>
                          { type === "StudentDorm" ?

                            <TextField 
                                required id="filled-basic" label="Nr Guests" type="number" variant="filled" style={{width:'90%'}} value="1" disabled/>

                            :

                            <TextField 
                                required id="filled-basic" label="Nr Guests" type="number" variant="filled" style={{width:'90%'}} onChange={(value) => setNrGuests(value.target.value)} defaultValue="1"/>
                          
                          }
                            
                        </div>

                    </div>
                    <Separator number={2} ></Separator>
                    <div className='row justify-content-center'>
                        
                        < div className='col-6 col-lg-5' style={{position: "relative", right: -13}}>
                            <TextField 
                                required id="filled-basic" label="City" variant="filled" onChange={(value) => setCity(value.target.value)} style={{width:'90%'}}/>
                        </div>
                        <div className="d-none d-lg-block col-lg-1"></div>
                        <div className='col-6 col-lg-5' style={{position: "relative", right: 13}}>
                            <TextField 
                                required id="filled-basic" label="CAP" type="number" variant="filled" onChange={(value) => setCap(value.target.value)} style={{width:'90%'}} />
                        </div>

                    </div>
                    <Separator number={2} ></Separator>
                    <div className='row justify-content-center'>
                        
                        < div className='col-12 col-lg-11' style={{position: "relative"}}>
                            <TextField 
                                required id="filled-basic" label="Address" variant="filled" onChange={(value) => setAddress(value.target.value)} style={{width:'90%'}}/>
                        </div>
                    </div>
                    <Separator number={2} ></Separator>
                  </div>

                   : <div></div>
                }

                <div className='row justify-content-center'>

                <div class="w-100"><br/></div>

                    <div className='col-11 col-sm-11 col-lg-10' style={{position: "relative", right: 0 }}>
                        <div style={{backgroundColor: "white", height: '100%', width: '100%', paddingTop: 10}}>
                            <label><PanTool style={{marginBottom: 5, marginRight: 5}} /> I Want To Be Helper <Checkbox onChange={(event) => {setHelper(event.target.checked);}}/></label>
                        </div>
                    </div>
                </div>

            </div>
            
        );
    
}