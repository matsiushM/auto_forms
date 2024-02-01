import {Box, FormControl, MenuItem, Select, SelectChangeEvent, Typography} from "@mui/material";
import {useState} from "react";

interface Props {
    isValue: object;
    title: string;
}

const styles = {
    selectForm: {
        height: "35px",
        backgroundColor: "#efffea",
        borderRadius: "10px"
    }
}


const FormSelect = ({title, isValue}: Props) => {
    const [item, setItem] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setItem(event.target.value);
    };

    return <Box sx={{m: 1}}>
        <FormControl fullWidth>
            <Typography variant={"h5"} color={"#001662"}>{title}</Typography>
            <Select
                value={item}
                displayEmpty
                onChange={handleChange}
                inputProps={{'aria-label': 'Without label'}}
                defaultValue={Object.values(isValue)[0].title}
                sx={styles.selectForm}
            >
                {Object.values(isValue).map(values => (
                    <MenuItem key={values.id} id={values.id} value={values.title}>{values.title}</MenuItem>
                ))}
            </Select>
        </FormControl>
    </Box>
}
export default FormSelect