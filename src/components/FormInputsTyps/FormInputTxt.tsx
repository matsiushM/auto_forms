import {Box, TextField, Typography} from "@mui/material";

interface Props {
    title: string,
    name: string,
    addValue: (name: string, value: string) => void,
}

const styles = {
    textInput: {
        // height: "35px",
        backgroundColor: "#efffea",
        borderRadius: "10px",
        width: "100%"
    }
}

const FormInputTxt = ({name, title, addValue}: Props) => {


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        addValue(name, event.target.value);
    };

    return <Box sx ={{m: 1}}>
        <Typography variant={"h6"} color={"#001662"}>{title}</Typography>
        <TextField
            id="outlined-basic"
            onChange={handleChange}
            label={title.toLowerCase()}
            variant="outlined"
            sx={styles.textInput}
        />
    </Box>
}

export default FormInputTxt;