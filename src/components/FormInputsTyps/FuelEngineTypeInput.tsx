import {useState} from "react";
import {Box, FormControl, MenuItem, Select, SelectChangeEvent, Typography} from "@mui/material";
import {FUELS} from "../../config/constants.ts";


const styles = {
    selectForm: {
        height: "35px",
        backgroundColor:"#efffea",
        borderRadius: "10px"
    }
}

const FuelEngineTypeInput = () => {
    const [fuel, setFuel] = useState('');
    const [engineType, setEngineType] = useState("")
    const handleChangeMark = (event: SelectChangeEvent) => {
        setFuel(event.target.value);
    };

    const handleChangeEngineType = (event: SelectChangeEvent) => {
        setEngineType(event.target.value)
    }
    const filteredOptions = Object.values(FUELS).find(option =>
        option.title.toLowerCase().includes(fuel.toLowerCase())
    );

    return <Box sx ={{ m: 1}}>
        <FormControl fullWidth>
            <Typography variant={"h5"} color={"#001662"}>Топливо</Typography>
            <Select
                id='select-with-fuel'
                value={fuel}
                displayEmpty
                inputProps={{'aria-label': 'Without label'}}
                onChange={handleChangeMark}
                sx = {styles.selectForm}
            >
                {Object.values(FUELS).map(values => (
                    <MenuItem key={values.id} value={values.title}>{values.title}</MenuItem>
                ))}
            </Select>
        </FormControl>

        {filteredOptions?.engineType.length !== 0 &&
            <FormControl fullWidth>
                <Typography variant={"h5"} color={"#001662"}>Тип</Typography>
                <Select
                    id='select-with-engine-type'
                    value={engineType}
                    displayEmpty
                    onChange={handleChangeEngineType}
                    inputProps={{'aria-label': 'Without label'}}
                    sx = {styles.selectForm}
                >
                    {filteredOptions?.engineType.map((values, index) => (
                        <MenuItem key={index} value={values}>{values}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        }
    </Box>
}

export default FuelEngineTypeInput;