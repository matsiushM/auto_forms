import {useState} from "react";


import FormSelect from "../FormInputsTyps/FormSelect.tsx";
import FormInputTxt from "../FormInputsTyps/FormInputTxt.tsx";
import MarkModelInputForm from "../FormInputsTyps/MarkModelInputForm.tsx";
import FuelEngineTypeInput from "../FormInputsTyps/FuelEngineTypeInput.tsx";
import {BODY_TYPE, GEARBOX} from "../../config/constants.ts";
import {PARTS} from "../../config/constsParts.ts";
import {Auto} from "./type.ts";
import {Button, FormControl, FormControlLabel, Paper, Radio, RadioGroup, Theme, Typography} from "@mui/material";

const styles = {
    formContainer: {
        p: 3,
        backgroundColor: "background.default",
        width: '90%'
    },
}
const FormInput = () => {
    const [value, setValue] = useState('Б/У');
    const [auto, setAuto] = useState<Auto[]>([]);
    let item = {};

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };

    // @ts-ignore
    const autoAdd = (item) => {
        setAuto([...auto, item]);
    }

    const receiveAuto = (newAuto: Auto) => {
        item = newAuto;
    }

    const removeItem = (index: string) => {
        setAuto(cars => cars.filter(item => item.id !== index));
    }

    console.log(auto);

    return <Paper sx={styles.formContainer}>

        {auto.map((value, index) => (
            <MarkModelInputForm key={index} id={value.id} autoAdd={receiveAuto} removeAuto={removeItem}/>
        ))}
        <Button onClick={() => autoAdd(item)}>Добавить</Button>

        <FormInputTxt title="Год выпуска"/>
        <FormInputTxt title="Модификация"/>

        <FormInputTxt title="Объем"/>
        <FuelEngineTypeInput/>

        <FormSelect title="Тип кузова" isValue={BODY_TYPE}/>
        <FormSelect title="Коробка" isValue={GEARBOX}/>

        <FormSelect title="Запчасть" isValue={PARTS}/>

        <FormInputTxt title="Номер запчасти"/>

        <FormInputTxt title="Описание"/>

            <FormControl>
                <Typography variant={"h5"} color={"#001662"}>Состояние запчасти</Typography>
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

        <Button sx={{backgroundColor: 'blue', color: 'white', width: "100%"}}>Отправить</Button>
    </Paper>
}

export default FormInput;