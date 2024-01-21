import {useState} from "react";
import {FormControl, MenuItem, Select, SelectChangeEvent, Typography} from "@mui/material";
import {BRANDS} from "../config/constants.ts";

const MarkModelInputForm = () => {
    const [marka, setMarka] = useState('');
    const [model, setModel] = useState("")
    const handleChangeMark = (event: SelectChangeEvent) => {
        setMarka(event.target.value);
    };

    const filteredOptions = Object.values(BRANDS).find(option =>
        option.marka.toLowerCase().includes(marka.toLowerCase())
    );

    const handleChangeModel = (event: SelectChangeEvent) => {
        setModel(event.target.value)
    }

    return <>
        <FormControl fullWidth>
            <Typography variant={"h4"}>Макрка</Typography>
            <Select
                id = 'select-with-marka'
                value={marka}
                displayEmpty
                inputProps={{'aria-label': 'Without label'}}
                onChange={handleChangeMark}
            >
                {Object.values(BRANDS).map(values => (
                    <MenuItem id={values.id} value={values.marka}>{values.marka}</MenuItem>
                ))}
            </Select>
            <Typography variant={"h4"}>Модель</Typography>
            <Select
                id = 'select-with-model'
                value={model}
                displayEmpty
                onChange={handleChangeModel}
                inputProps={{'aria-label': 'Without label'}}
                defaultValue={Object.values(BRANDS)[0].marka}
            >
                {filteredOptions?.models.map(values => (
                    <MenuItem id={filteredOptions.id} value={values}>{values}</MenuItem>
                ))}
            </Select>
        </FormControl>
    </>
}

export default MarkModelInputForm;