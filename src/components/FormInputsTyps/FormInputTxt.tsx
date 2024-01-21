import {Box, TextField, Typography} from "@mui/material";
import React, {useState} from "react";

interface Props{
    title: string
}

const FormInputTxt = ({title}: Props) => {
    const [value, setValue] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return <Box sx ={{ m: 1}}>
    <Typography variant={"h4"}>{title}</Typography>
    <TextField id="outlined-basic" value={value} onChange={handleChange} label={title.toLowerCase()} variant="outlined"/>
    </Box>
}

export default FormInputTxt;