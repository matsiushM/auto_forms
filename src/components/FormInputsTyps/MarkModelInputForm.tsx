import {useEffect, useState} from "react";
import {Box, Button, Divider, FormControl, MenuItem, Select, SelectChangeEvent, Typography} from "@mui/material";
import {v4 as uuidv4} from "uuid";

import {BRANDS} from "../../config/constants.ts";

interface props{
    id: string
    autoAdd: Function
    removeAuto: Function
}

const MarkModelInputForm = ({id, autoAdd, removeAuto}:props) => {
    const [marka, setMarka] = useState('');
    const [model, setModel] = useState('');

    const styles = {
        selectForm: {
            height: "35px",
            backgroundColor: "#efffea",
            borderRadius: "10px"
        }
    }
    const handleChangeMark = (event: SelectChangeEvent) => {
        setMarka(event.target.value);

    };

    const handleChangeModel = (event: SelectChangeEvent) => {
        setModel(event.target.value)
    }

    const filteredOptions = Object.values(BRANDS).find(option =>
        option.marka.toLowerCase().includes(marka.toLowerCase())
    );

    useEffect(() => {
        autoAdd({
            id: uuidv4(),
            marka: marka,
            model: model,
        });
    }, [model]);

    return <Box sx={{m: 1}}>
        <FormControl fullWidth>
            <Typography variant={"h6"} color={"#001662"}>Марка</Typography>
            <Select
                id='select-with-marka'
                value={marka}
                displayEmpty
                inputProps={{'aria-label': 'Without label'}}
                onChange={handleChangeMark}
                sx={styles.selectForm}
            >
                {Object.values(BRANDS).map(values => (
                    <MenuItem key={values.id} value={values.marka}>{values.marka}</MenuItem>
                ))}
            </Select>
        </FormControl>
        <FormControl fullWidth>
            <Typography variant={"h6"} color={"#001662"}>Модель</Typography>
            <Select
                id='select-with-model'
                value={model}
                displayEmpty
                onChange={handleChangeModel}
                inputProps={{'aria-label': 'Without label'}}
                sx={styles.selectForm}
            >
                {filteredOptions?.models.map((values, index) => (
                    <MenuItem key={index} value={values}>{values}</MenuItem>
                ))}
            </Select>
        </FormControl>
        <Button onClick={() => removeAuto(id)}>убрать</Button>
        <Divider/>
    </Box>
}

export default MarkModelInputForm;