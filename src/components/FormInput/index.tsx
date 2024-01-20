import {useState} from "react";
import {
    Box,
    Checkbox,
    FormControlLabel,
    Paper,
    Typography
} from "@mui/material";

import FormSelect from "../FormInputsTyps/FormSelect.tsx";
import FormInputTxt from "../FormInputsTyps/FormInputTxt.tsx";
import {BODY_TYPE, FUELS, GEARBOX} from "../config/constants.ts";
import {PARTS} from "../config/constsParts.ts";
import MarkModelInputForm from "../FormInputsTyps/MarkModelInputForm.tsx";

const styles = {
    formContainer: {
        p: 5,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: "#d9d9d9",
    },
    inputMarka: {
        display: "flex"
    }
}
const FormInput = () => {

    const [state, setState] = useState({
        usedParts: true,
        newParts: false,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        });
    };

    const {usedParts, newParts} = state;

    return <Paper sx={styles.formContainer}>
        <Box sx={styles.inputMarka}>
            <MarkModelInputForm />
        </Box>

        <Box sx={styles.inputMarka}>
            <FormInputTxt title={"Год выпуска"}/>
            <FormInputTxt title={"Модификация"}/>
        </Box>

        <Box sx={styles.inputMarka}>
            <FormInputTxt title={"Объем"}/>
            <FormSelect title={"Топливо"} isValue={FUELS}/>
            {/*<FormSelect title={"Тип"}/>*/}
        </Box>

        <Box sx={styles.inputMarka}>
            <FormSelect title={"Тип кузова"} isValue={BODY_TYPE}/>
            <FormSelect title={"Коробка"} isValue={GEARBOX}/>
        </Box>

        <FormSelect title={"Запчасть"} isValue={PARTS}/>

        <FormInputTxt title={"Номер запчасти"}/>

        <FormInputTxt title={"Описание"}/>

        <Box sx={{m:1}}>
            <Typography variant={"h4"}>Состояние запчасти</Typography>
                    <FormControlLabel
                        control={
                            <Checkbox checked={usedParts} onChange={handleChange} name="usedParts" />
                        }
                        label="Б/У"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={newParts} onChange={handleChange} name="newParts" />
                        }
                        label="Новая"
                    />
        </Box>
    </Paper>
}

export default FormInput;