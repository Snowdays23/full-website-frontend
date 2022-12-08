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


export const FormPageCatering = ({setCateringData}) => {

    const [vegan, setVegan] = React.useState(false);
    const invertVegan = () => {
        setVegan(!vegan);
        if(!vegan == true)
            setVegetarian(true);
        
    }; 

    const [vegetarian, setVegetarian] = React.useState(false);
    const invertVegetarian = () => setVegetarian(!vegetarian); 

    const [gluten, setGluten] = React.useState(false);

    const [notes, setNotes] = React.useState('')

    React.useEffect(() => {
        setCateringData({
            eating_habits: {
                gluten_free: gluten,
                vegetarian: vegetarian,
                vegan: vegan,
                lactose_free: false // TODO: change when selector is available
            },
            additional_notes: notes
        });
    }, [gluten, vegetarian, vegan, notes]);
    
    return (
        <div>
            <div className='row '>
                <div className='d-xs-block d-lg-none'>
                        <Separator number={7} ></Separator>
                </div>
                    <div className='col-12'>
                        <h2 className='text-white font-josefin subtitle'>Nutrition Information</h2>
                    </div>
                    <Separator number={2} />
                </div>
            <div className='row justify-content-center'>
                <div className='col-12 col-sm-7 col-lg-5' style={{position: "relative", right: -20 }}>
                    <div style={{backgroundColor: "white", height: '100%', width: '88%', paddingTop: 10}}>
                        <label> Vegan <Checkbox onClick ={ () => invertVegan()}/></label>
                    </div>
                </div>

                <div className='d-block d-lg-none'>
                    <Separator number = {2}  />
                </div>

                <div className='col-12 col-sm-7 col-lg-5' style={{position: "relative", right: -20 }}>
                    <div style={{backgroundColor: "white", height: '100%', width: '88%', paddingTop: 10}}>
                        {vegan ? 
                        <label> Vegetarian <Checkbox disabled defaultChecked /> </label>
                        :
                        <label> Vegetarian <Checkbox onClick ={ () => invertVegetarian()} /></label>
                        }
                    </div>
                </div>

                <Separator number = {2}  />

                <div className='w-100'></div>

                <div className='col-12 col-sm-7 col-lg-5' style={{position: "relative", right: -20 }}>
                    <div style={{backgroundColor: "white", height: '100%', width: '88%', paddingTop: 10}}>
                        <label> Gluten Free <Checkbox onClick ={ () => setGluten(!gluten)}  /></label>
                    </div>
                </div>

                <Separator number = {2}  />

                <div className='w-100'></div>

                <div className='col-11 col-sm-10' style={{position: "relative", right: 0 }}>
                <TextField
                    id="filled-multiline-static"
                    label="Other Notes"
                    multiline
                    rows={4}
                    defaultValue=""
                    onChange = {(val) => setNotes(val.target.value)}
                    placeholder='Write anything you would like to tell us about intollerances or side notes any nutrition problem. We will try to do our best to satisfy every request'
                    variant="filled"
                    style={{width:'100% '}}
                    />
                </div>
            </div>
        </div>
        
    );
    
}