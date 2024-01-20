import {Box, TextField, Typography} from "@mui/material";

interface Props{
    title: string
}

const FormInputTxt = ({title}: Props) => {
    return <Box sx ={{ m: 1}}>
    <Typography variant={"h4"}>{title}</Typography>
    <TextField id="outlined-basic" label={title.toLowerCase()} variant="outlined"/>
    </Box>
}

export default FormInputTxt;