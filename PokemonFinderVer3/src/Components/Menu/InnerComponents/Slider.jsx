import { memo, useState } from "react";
import Slider from "@mui/material/Slider";



function slider() {
    const [value1, setValue1] = useState([1, 1025]);

    const handleChange1 = (event, newValue) => {
        setValue1(newValue);
    };

    const valuetext = (value) => `${value}`;
    return (
        <Slider
            getAriaLabel={() => 'Minimum distance'}
            value={value1}
            onChange={handleChange1}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            disableSwap
            min={1}
            max={1025}

            sx={{
                '& .MuiSlider-thumb': {
                    width: 16,
                    height: 16,
                },
                
            }}
        />
    );
}

export default memo(slider);
