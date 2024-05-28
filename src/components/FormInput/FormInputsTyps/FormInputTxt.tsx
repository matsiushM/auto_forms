import {Box, TextField} from "@mui/material";
import theme from "../../../config/theme.ts";

interface Props {
    title: string,
    name: string,
    onChange: (name: string, value: string) => void,
}

const styles = {
    textInput: {
        backgroundColor: theme.palette.secondary.main,
        borderRadius: "10px",
        width: "100%"
    }
}

const FormInputTxt = ({name, title, onChange}: Props) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(name, event.target.value);
    };

    return <Box sx ={{m: 1}}>
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