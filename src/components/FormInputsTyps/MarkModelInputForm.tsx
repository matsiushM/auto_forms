import {FormControl, MenuItem, Select, SelectChangeEvent, Typography} from "@mui/material";
import {useState} from "react";
import {BRANDS} from "../config/constants.ts";

const MarkModelInputForm = () => {
    const [item, setItem] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setItem(event.target.value);
    };

    return <FormControl sx = {{m: 1}}>
        <Typography variant={"h4"}>Макрка</Typography>
        <Select
            value={item}
            displayEmpty
            onChange={handleChange}
            inputProps={{ 'aria-label': 'Without label' }}
            defaultValue={Object.values(BRANDS)[0].marka}
        >
            {Object.values(BRANDS).map(values =>(
                <MenuItem id={values.id} value={values.marka}>{values.marka}</MenuItem>
            ))}
        </Select>
    </FormControl>
}
export default MarkModelInputForm;