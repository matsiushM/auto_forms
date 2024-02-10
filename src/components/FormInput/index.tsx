import React, {useState} from "react";
import {Box, Button, FormControl, FormControlLabel, Paper, Radio, RadioGroup, Typography} from "@mui/material";

import MarkModelInputForm from "../FormInputsTyps/MarkModelInputForm.tsx";
import FuelEngineTypeInput from "../FormInputsTyps/FuelEngineTypeInput.tsx";
import FormSelect from "../FormInputsTyps/FormSelect.tsx";
import FormInputTxt from "../FormInputsTyps/FormInputTxt.tsx";
import DataInput from "../FormInputsTyps/DataInput.tsx";
import {BODY_TYPE, GEARBOX} from "../../config/constants.ts";
import {PARTS} from "../../config/constsParts.ts";
import {Auto, DescriptionParts} from "./type.ts";

const styles = {
    formContainer: {
        p: 3,
        backgroundColor: "background.default",
        width: '90%'
    },
}

const FormInput = () => {
    // const [auto, setAuto] => useState([]);
    const [autoParts, setAutoParts] = useState<DescriptionParts>({
        auto: [],
        description: "",
        engineType: "",
        fuel: "",
        gearBox: "",
        numberParts: "",
        parts: "",
        pratsState: "",
        typeBody: "",
        volume: 0,
        year: "",
    });

    let item = {};

    const handleChangePartsState = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAutoParts((prevAutoParts) => ({
            ...prevAutoParts,
            pratsState: event.target.value,
        }));
    };

    const handleClick = () => {
        // const newParts = {
        //     // auto: auto,
        //     // year: year,
        //     // volume: volume,
        //     // fuel: fuel,
        //     // engineType: engineType,
        //     // typeBody: typeBode,
        //     // gearBox: gearBox,
        //     // parts: parts,
        //     // numberParts: numberParts,
        //     // description: description,
        //     // pratsState: partsState,
        // }

        // const credentials = btoa(`111:`);

        // const options = {
        //     method: 'POST',
        //     headers: {
        //         'Authorization': `Basic ${credentials}`,
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(newParts),
        // };

        // fetch('http://178.124.201.2/InfoBase/hs/Zagruzka/Stoks/', options)
        //     .then(response => {
        //         if (!response.ok) {
        //             throw new Error(`HTTP error! status: ${response.status}`);
        //         }
        //         return response.json();
        //     })
        //     .then(data => console.log(data))
        //     .catch(error => console.error('Error:', error));
    }

    const addValue = (name: string, value: string) => {
        setAutoParts((prevAutoParts) => ({
            ...prevAutoParts,
            [name]: value,
        }));
    };

    const addDate = (date: string) => {
        setAutoParts((prevAutoParts) => ({
        ...prevAutoParts,
        year: date
    }))
    }

    const addFuelEngine = (fuelType: string, engineType: string) => {
        setAutoParts((prevAutoParts)=> ({
            ...prevAutoParts,
            fuel: fuelType,
            engineType: engineType
        }))
    }

    // @ts-ignore
    const autoAdd = (newItem) => {
        setAutoParts((prevAutoParts) => ({
            ...prevAutoParts,
            auto: [...prevAutoParts.auto, newItem], // Добавляем новый элемент в массив
        }));
    };

    const receiveAuto = (newAuto: Auto) => {
        item = newAuto;
    }

    const removeItem = (index: string) => {
        setAutoParts(cars => ({
            ...cars,
            auto: cars.auto.filter(item => item.id !== index),
        }));
    };

    console.log(autoParts);
    return (
        <Paper sx={styles.formContainer}>

            {autoParts.auto.map((value, index) => (
                <MarkModelInputForm key={index} id={value.id} autoAdd={receiveAuto} removeAuto={removeItem}/>
            ))}
            <Button onClick={() => autoAdd(item)}>Добавить</Button>

            <Box>
                <DataInput  getValueDate={addDate}/>
            </Box>

            <FormInputTxt name={"modification"}
                          title="Модификация"
                          addValue={addValue}/>

            <FormInputTxt name={"volume"}
                          title="Объем"
                          addValue={addValue}/>

            <FuelEngineTypeInput getValue={addFuelEngine}/>

            <FormSelect title="Тип кузова" name={"typeBody"} isValue={BODY_TYPE} addValueSelect = {addValue}/>
            <FormSelect title="Коробка" name={"gearBox"} isValue={GEARBOX} addValueSelect = {addValue}/>

            <FormSelect title="Запчасть" name={"parts"} isValue={PARTS} addValueSelect = {addValue}/>

            <FormInputTxt name={"numberParts"}
                          title="Номер запчасти"
                          addValue={addValue}/>

            <FormInputTxt name={"description"}
                          title="Описание"
                          addValue={addValue}/>

            <FormControl>
                <Typography variant={"h5"} color={"#001662"}>Состояние запчасти</Typography>
                <RadioGroup
                    name="radio-buttons-group"
                    value={autoParts.pratsState}
                    onChange={handleChangePartsState}
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

            <Button sx={{backgroundColor: 'blue', color: 'white', width: "100%"}}
                    onClick={handleClick}>Отправить</Button>
        </Paper>
    )
}
export default FormInput;