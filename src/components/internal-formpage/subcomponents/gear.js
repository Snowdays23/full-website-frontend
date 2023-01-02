

import * as React from 'react';
import "../../../assets/css/style.css";
import "../../../assets/css/bootstrap.min.css";  
import "../../../assets/css/other-pages-css/styleFormPage.css";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
export const Gear = ({id, value, currentGears, setCurrentGears, sport}) => {

    const [gear, setGear] = React.useState(value);

    const handleChangeGear = (event) => {
        setGear(event.target.value);
        const actualPos = id-1;
        const beforeCG = currentGears.slice(0, actualPos);
        const afterCG = currentGears.slice(actualPos+1, currentGears.length);
        setCurrentGears([...beforeCG, event.target.value, ...afterCG]);
    };

    let gears = [{
      value: 'helmet',
      label: "Helmet"
    }];

    if(sport === "ski") {
      gears.push({
          value: 'ski',
          label: 'Skii'
      });
      gears.push({
        value: 'skiboots',
        label: "Skii Boots"
      });
      gears.push({
        value: 'poles',
        label: "Skii Poles",
      });
    } else if(sport === "snowboard") {
      gears.push({
        value: 'snowboard',
        label: 'Snowboard'
      });
      gears.push({
        value: 'snowboardboots',
          label: "Snowboard Boots"
      });
    }
    
    return (
        <div>
            <div className='row justify-content-center'>
                <div className='col-12 col-sm-12 col-lg-11' style={{position: "relative"}} >
                    <TextField
                    required
                    id="filled-select-gear"
                    select
                    label={"Gear " + id}
                    value={gear}
                    onChange={handleChangeGear}
                    variant="filled"
                    style={{width:'90%'}}
                    error={ gear === ''}
                    >
                        {gears.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                    </TextField>                                   
                </div>
            </div>
        </div>
        
    );
    
}