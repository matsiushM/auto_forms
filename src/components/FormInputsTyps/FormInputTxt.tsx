import {Box, TextField, Typography} from "@mui/material";
import React, {useState} from "react";

interface Props{
    title: string
}

const styles = {
    textInput: {
        // height: "35px",
        backgroundColor:"#efffea",
        borderRadius: "10px"
    }
}

const FormInputTxt = ({title}: Props) => {
    const [value, setValue] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return <Box sx ={{ m: 1}}>
    <Typography variant={"h6"} color={"#001662"}>{title}</Typography>
    <TextField
        fullWidth
        size ={'small'}
        id="outlined-basic"
        value={value}
        onChange={handleChange}
        label={title.toLowerCase()}
        variant="outlined"
        sx = {styles.textInput}
    />
    </Box>
}

export default FormInputTxt;