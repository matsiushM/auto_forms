import {
    Autocomplete,
    TextField,
} from "@mui/material";

interface Props {
    isValue: {id: string, title: string}[];
    title: string;
    name: string
    addValueSelect: (name: string, value: string)=>void
}

const styles = {
    selectForm: {
        backgroundColor: "#efffea",
        borderRadius: "10px",
        m: 1
    }
}

const FormSelect = ({title, isValue, addValueSelect, name}: Props) => {
    const handleChange = (event: React.SyntheticEvent<Element, Event>, value: string) => {
        addValueSelect(name, value);
    };

    return<Autocomplete
            disablePortal
            fullWidth
            id="combo-box-select"
            sx={styles.selectForm}
            options={isValue.map(item => item.title)}
            renderInput={(params) => <TextField {...params} label={title}/>}
            onChange={handleChange}
        />
}
export default FormSelect