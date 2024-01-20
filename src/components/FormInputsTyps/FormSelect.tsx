import {FormControl, MenuItem, Select, SelectChangeEvent, Typography} from "@mui/material";
import {useState} from "react";

interface Props{
    isValue: object;
    title: string;
}


const FormSelect = ({title, isValue}: Props) => {
    const [item, setItem] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setItem(event.target.value);
    };

    return <FormControl sx = {{m: 1}}>
        <Typography variant={"h4"}>{title}</Typography>
        <Select
            value={item}
            displayEmpty
            onChange={handleChange}
            inputProps={{ 'aria-label': 'Without label' }}
            defaultValue={Object.values(isValue)[0].title}
        >
            {Object.values(isValue).map(values =>(
                <MenuItem value={values.title}>{values.title}</MenuItem>
            ))}
        </Select>
    </FormControl>
}
export default FormSelect