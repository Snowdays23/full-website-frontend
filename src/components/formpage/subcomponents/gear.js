

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
      value: 'Helmet',
      label: "Helmet (+5 € / day)"
    }];

    if(sport === "Skii") {
      gears.push({
          value: 'Skii',
          label: 'Skii (+30 € / day)'
      });
      gears.push({
        value: 'Skii_Boots',
        label: "Skii Boots (+20 € / day)"
      });
      if(currentGears.find((value) => (value === "Skii_Poles")) === undefined)
        gears.push({
          value: 'Skii_Poles',
          label: "Skii Poles (+5 € / day)",
        });
    } else if(sport === "Snowboard") {
      gears.push({
        value: 'Snowboard',
          label: 'Snowboard (+50 € / day)'
      });
      gears.push({
        value: 'Snowboard_Boots',
          label: "Snowboard Boots (+10 € / day)"
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