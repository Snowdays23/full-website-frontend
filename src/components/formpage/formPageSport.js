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
import DeleteForever from '@mui/icons-material/DeleteForever';
import DownhillSkiing from '@mui/icons-material/DownhillSkiing' ;
import Snowmobile from '@mui/icons-material/Snowmobile' ;
import Today from '@mui/icons-material/Today' ;
import { Gear } from './subcomponents/gear';

export const FormPageSport = ({setFilledSport, setSportData}) => {

    const [currentGears, setCurrentGears] = React.useState([""]);

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

      const [sport, setSport] = React.useState('none');

      const [maxGears, setMaxGears] = React.useState(1);

      const handleChangeSport = (event) => {
        setSport(event.target.value);
        if(event.target.value === "ski" || event.target.value === "snowboard") {
          setWantSkii(true)
          setNeedRent(false)
          if(event.target.value === "ski")
            setMaxGears(4);
          else {
            if(currentGears.length > 3)
                setCurrentGears(currentGears.slice(0, currentGears.length-1))
            setMaxGears(3);
          }
        }
        else {
          setWantSkii(false)
          setNeedRent(false)
        }
      }

      const handleAddGear = () => {
        if(currentGears.length < maxGears)
          setCurrentGears([...currentGears, ""])
        }

      const handleRemoveGear = () => {
        if(currentGears.length > 1)
          setCurrentGears(currentGears.slice(0, currentGears.length-1))
      }

      const sports = [
        {
          value: 'none',
          label: 'None',
        },
        {
          value: 'ski',
          label: "Skii",
        },
        {
          value: 'snowboard',
          label: 'Snowboard',
        }
      ]

      const [height, setHeight] = React.useState('');
      const [weight, setWeight] = React.useState('');
      const [shoeSize, setShoeSize] = React.useState('');


      const [needRent, setNeedRent] = React.useState(false);

      const invertNeedRent = () => setNeedRent(!needRent);

      const [wantSkii, setWantSkii] = React.useState(false);

      const invertWantSkii = () => {setWantSkii(!wantSkii)
        setNeedRent(false)};

      React.useEffect(() => {
        if(sport !== '' && ((needRent === true && height !== '' && weight !== '' && shoeSize !== '' && size !== '' && (currentGears.find((value) => (value === "")) === undefined)) || needRent === false)) {
          setFilledSport(true);
          setSportData({
            height: needRent && sport != null && sport !== "none" ? height || null : null,
            weight: needRent && sport != null && sport !== "none" ? weight || null : null,
            shoe_size: needRent && sport != null && sport !== "none" ? shoeSize || null : null, 
            helmet_size: needRent && sport != null && sport !== "none" ? size || null : null,
            needs_rent: needRent,
            rented_gear: needRent && sport != null && sport !== "none" ? currentGears.flatMap(g => {
              if (g && g !== "") {
                return [{name: g}];
              }
              return [];
            }) : [],
            selected_sport: sport
          });
        } else {
          setFilledSport(false);
          setSportData({});
        }
  
      },[sport, needRent, height, weight, shoeSize, size, currentGears]);

        
    
        return (
            <div>
                {/* <Separator number={4} ></Separator> */}
                <div className='row justify-content-center'>
                    <div className='row '>
                    <div className='d-xs-block d-lg-none'>
                            <Separator number={7} ></Separator>
                    </div>
                      <div className='col-12'>
                          <h2 className='text-white font-josefin subtitle'>Sport Information</h2>
                      </div>
                      <Separator number={2} />
                    </div>
                    <div className='col-12 col-sm-12 col-lg-11' style={{position: "relative"}} >
                        <TextField
                            required
                        id="filled-select-sport"
                        select
                        label="Sport"
                        value={sport}
                        onChange={handleChangeSport}
                        variant="filled"
                        style={{width:'90%'}}
                        >
                            {sports.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                {option.label}
                                </MenuItem>
                            ))}
                        </TextField>                                   
                    </div>
                    <div className="w-100">
                        <Separator number ={2} />
                    </div>
                    <div className='col-11 col-lg-10' style={{position: "relative", right: 0 }}>
                        <div style={{backgroundColor: "white", height: '100%', width: '100%', paddingTop: 10}}>
                            <label><Snowmobile style={{marginBottom: 5, marginRight: 5}} /> Need to rent {wantSkii ? <Checkbox  onClick={() => invertNeedRent()} checked={needRent}/> : <Checkbox disabled checked={needRent}/>} </label>
                        </div>
                    </div>
                </div>

                
            {  needRent ? <div>
                <Separator number = {2} /> 

                <div className='row justify-content-center'>
                    <div className='col-6 col-lg-5' style={{position: "relative", right: -13}}>
                        <TextField required id="filled-basic" onChange = {(val) => setHeight(val.target.value)} label="Height (cm)" variant="filled" style={{width:'90%'}} type="number" InputLabelProps={{ shrink: true }} />
                    </div>
                    <div className="d-none d-lg-block col-lg-1"></div>
                    <div className='col-6 col-lg-5' style={{position: "relative", right: 13 }}>
                        <TextField required id="filled-basic" onChange = {(val) => setWeight(val.target.value)} label="Weight (kg)" variant="filled" style={{width:'90%'}} type="number" InputLabelProps={{ shrink: true }} />
                    </div>
                </div> 

                <Separator number = {2} />

                <div className='row justify-content-center'>
                    <div className='col-6 col-lg-5' style={{position: "relative", right: -13}}>
                        <TextField required id="filled-basic" onChange = {(val) => setShoeSize(val.target.value)} label="Shoe Size (EU)" variant="filled" style={{width:'90%'}} type="number" InputLabelProps={{ shrink: true }} inputProps={{ inputMode: 'numeric',  pattern: "d*",  min: 0}} />
                    </div>
                    <div className="d-none d-lg-block col-lg-1"></div>
                    <div className='col-6 col-lg-5' style={{position: "relative", right: 13}} >
                        <TextField
                        required
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

                {currentGears.map((val, index) => <div> <Gear id={index+1} value={val} currentGears={currentGears} setCurrentGears={setCurrentGears} sport={sport}/> <Separator number = {2} /> </div>)}

                <div className='row justify-content-center'>
                    <Separator number = {2} />
                    <div className='col-12 col-sm-10 ' style={{position: "relative"}} >
                      <Button 
                        style={{
                            borderRadius: 30,
                            backgroundColor: "#fff",
                            color: "#000",
                            marginRight : 10
                        }}
                        size="large"
                        variant="contained"
                        onClick={handleRemoveGear}
                        ><DeleteForever/> <label className='d-none d-md-block ' style={{marginTop: 8}}>
                          &nbsp;&nbsp; Remove Gear </label></Button>      

                      <Button 
                      style={{
                          borderRadius: 30,
                          backgroundColor: "#fff",
                          color: "#000",
                          marginLeft : 10
                      }}
                      size="large"
                      variant="contained"
                      onClick={handleAddGear}
                      ><AddCircle/> <label className='d-none d-md-block ' style={{marginTop: 8}}>
                      &nbsp;&nbsp; Add Gear </label></Button>      
                    </div>
                </div>
                 </div> : <div></div>}

            </div>
            
        );
    
}