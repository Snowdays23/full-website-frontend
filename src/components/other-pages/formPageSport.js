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
import AddCircle from '@mui/icons-material/AddCircle';
import DownhillSkiing from '@mui/icons-material/DownhillSkiing' ;
import Snowmobile from '@mui/icons-material/Snowmobile' ;
import Today from '@mui/icons-material/Today' ;

export const FormPageSport = () => {

    const [gear, setGear] = React.useState('');

    const handleChangeGear = (event) => {
        setGear(event.target.value);
    };

    const gears = [
        {
          value: 'Snowboard',
          label: 'Snowboard (+50 € / day)',
        },
        {
          value: 'Snowboard_Boots',
          label: "Snowboard Boots (+10 € / day)",
        },
        {
          value: 'Skii',
          label: 'Skii (+30 € / day)',
        },
        {
          value: 'Skii_Boots',
          label: "Skii Boots (+20 € / day)",
        },
        {
          value: 'Skii_Poles',
          label: "Skii Poles (+5 € / day)",
        },
        {
          value: 'Helmet',
          label: "Helmet (+5 € / day)",
        }
      ];

      const [size, setSize] = React.useState('');

    const handleChangeSize = (event) => {
        setSize(event.target.value);
    };

    const sizes = [
        {
          value: 'XS',
          label: 'XS',
        },
        {
          value: 'S',
          label: "S",
        },
        {
          value: 'M',
          label: 'M',
        },
        {
          value: 'L',
          label: "L",
        },
        {
          value: 'XL',
          label: "XL",
        }
      ];


      const [needRent, setNeedRent] = React.useState(false);

      const invertNeedRent = () => setNeedRent(!needRent);

      const [wantSkii, setWantSkii] = React.useState(false);

      const invertWantSkii = () => {setWantSkii(!wantSkii)
        setNeedRent(false)};
    
        return (
            <div>
                {/* <Separator number={4} ></Separator> */}
                <div className='row justify-content-center'>
                    <div className='col-12 col-lg-5' style={{position: "relative", right: -20 }}>
                        <div style={{backgroundColor: "white", height: '100%', width: '88%', paddingTop: 10}}>
                            <label><DownhillSkiing style={{marginBottom: 5, marginRight: 5}} /> Want to ski / snowboard <Checkbox onClick={() => invertWantSkii()} /></label>
                        </div>
                    </div>
                    <div className="w-100 d-block d-lg-none">
                        <Separator number ={2} />
                    </div>
                    <div className='col-12 col-lg-5' style={{position: "relative", right: -20 }}>
                        <div style={{backgroundColor: "white", height: '100%', width: '88%', paddingTop: 10}}>
                            <label><Snowmobile style={{marginBottom: 5, marginRight: 5}} /> Need to rent {wantSkii ? <Checkbox  onClick={() => invertNeedRent()} checked={needRent}/> : <Checkbox disabled checked={needRent}/>} </label>
                        </div>
                    </div>
                </div>

                
            {  needRent ? <div>
                <Separator number = {2} /> 

                <div className='row justify-content-center'>
                    <div className='col-6 col-lg-5' style={{position: "relative", right: -13}}>
                        <TextField id="filled-basic" label="Height" variant="filled" style={{width:'90%'}} type="number" InputLabelProps={{ shrink: true }} />
                    </div>
                    <div className="d-none d-lg-block col-lg-1"></div>
                    <div className='col-6 col-lg-5' style={{position: "relative", right: 13 }}>
                        <TextField id="filled-basic" label="Weight" variant="filled" style={{width:'90%'}} type="number" InputLabelProps={{ shrink: true }} />
                    </div>
                </div> 

                <Separator number = {2} />

                <div className='row justify-content-center'>
                    <div className='col-6 col-lg-5' style={{position: "relative", right: -13}}>
                        <TextField id="filled-basic" label="Shoe Size" variant="filled" style={{width:'90%'}} type="number" InputLabelProps={{ shrink: true }} inputProps={{ inputMode: 'numeric',  pattern: "d*",  min: 0}} />
                    </div>
                    <div className="d-none d-lg-block col-lg-1"></div>
                    <div className='col-6 col-lg-5' style={{position: "relative", right: 13}} >
                        <TextField
                        id="filled-select-helmet-size"
                        select
                        label="Helmet Size"
                        value={size}
                        onChange={handleChangeSize}
                        variant="filled"
                        style={{width:'90%'}}
                        >
                            {sizes.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                {option.label}
                                </MenuItem>
                            ))}
                        </TextField>                                   
                    </div>
                </div>

                <Separator number = {2} />

                <div className='row justify-content-center'>
                    <div className='col-12 col-sm-7 col-lg-5' style={{position: "relative"}} >
                        <TextField
                        id="filled-select-gear"
                        select
                        label="Gear"
                        value={gear}
                        onChange={handleChangeGear}
                        variant="filled"
                        style={{width:'90%'}}
                        >
                            {gears.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                {option.label}
                                </MenuItem>
                            ))}
                        </TextField>                                   
                    </div>
                    <div class="w-100"></div>
                    <Separator number = {2} />
                    <div className='col-12 col-sm-7 col-lg-5 ' style={{position: "relative"}} >
                      <Button variant="contained"><AddCircle/> &nbsp;&nbsp; Add Gear </Button>          
                    </div>
                </div>
                 </div> : <div></div>}

            </div>
            
        );
    
}