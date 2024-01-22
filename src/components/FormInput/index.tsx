import React, {useState} from "react";
import {
    Box, Button,
    FormControl,
    FormControlLabel, FormLabel,
    Paper, Radio, RadioGroup,
} from "@mui/material";

import FormSelect from "../FormInputsTyps/FormSelect.tsx";
import FormInputTxt from "../FormInputsTyps/FormInputTxt.tsx";
import {BODY_TYPE, GEARBOX} from "../config/constants.ts";
import {PARTS} from "../config/constsParts.ts";
import MarkModelInputForm from "../FormInputsTyps/MarkModelInputForm.tsx";
import FuelEngineTypeInput from "../FormInputsTyps/FuelEngineTypeInput.tsx";

const styles = {
    formContainer: {
        p: 5,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: "#d9d9d9",
    },
    inputFields: {
        display: "flex"
    }
}
const FormInput = () => {

    const [value, setValue] = useState('Б/У');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };

    return <Paper sx={styles.formContainer}>
        <Box sx={styles.inputFields}>
            <MarkModelInputForm/>
        </Box>

        <Box sx={styles.inputFields}>
            <FormInputTxt title={"Год выпуска"}/>
            <FormInputTxt title={"Модификация"}/>
        </Box>

        <Box sx={styles.inputFields}>
            <FormInputTxt title={"Объем"}/>
            <FuelEngineTypeInput/>
        </Box>

        <Box sx={styles.inputFields}>
            <FormSelect title={"Тип кузова"} isValue={BODY_TYPE}/>
            <FormSelect title={"Коробка"} isValue={GEARBOX}/>
        </Box>

        <FormSelect title={"Запчасть"} isValue={PARTS}/>

        <FormInputTxt title={"Номер запчасти"}/>

        <FormInputTxt title={"Описание"}/>

        <Box sx={{m: 1}}>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Состояние запчасти</FormLabel>
                <RadioGroup
                    name="radio-buttons-group"
                    value={value}
                    onChange={handleChange}
                >
                    <FormControlLabel
                        value={'Б/У'}
                        control={
                            <Radio/>
                        }
                        label="Б/У"

                    />
                    <FormControlLabel
                        value={'Новая'}
                        control={
                            <Radio/>
                        }
                        label="Новая"
                    />
                </RadioGroup>
            </FormControl>
        </Box>
        <Button sx={{backgroundColor: 'blue', color: 'white'}}>Отправить</Button>
    </Paper>
}

export default FormInput;