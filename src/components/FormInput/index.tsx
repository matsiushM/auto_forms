import React, {useState} from "react";
import {Button, FormControl, FormControlLabel, Paper, Radio, RadioGroup} from "@mui/material";

import MarkModelInputForm from "./FormInputsTyps/MarkModelInputForm.tsx";
import FuelEngineTypeInput from "./FormInputsTyps/FuelEngineTypeInput.tsx";
import FormSelect from "./FormInputsTyps/FormSelect.tsx";
import FormInputTxt from "./FormInputsTyps/FormInputTxt.tsx";
import DataInput from "./FormInputsTyps/DataInput.tsx";
import {BODY_TYPE, GEARBOX} from "../../config/constants.ts";
import {PARTS} from "../../config/constsParts.ts";
import {Auto, DescriptionParts} from "./type.ts";

const FormInput = () => {
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

    const handleChangePartsState = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAutoParts((prevAutoParts) => ({
            ...prevAutoParts,
            pratsState: event.target.value,
        }));
    };

    const handleClick = () => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(autoParts),
        };

        fetch('http://localhost:3000/data', options)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));

        alert("Форма отправлена");
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
        setAutoParts((prevAutoParts) => ({
            ...prevAutoParts,
            fuel: fuelType,
            engineType: engineType
        }))
    }

    const addCar = (item: Auto[]) => {
            setAutoParts((prevAutoParts) => ({
                ...prevAutoParts,
                auto: [...item]
            }));
        };

    return (
        <Paper >
            <MarkModelInputForm autoAdd={addCar}/>

            <DataInput getValueDate={addDate}/>

            <FormInputTxt name={"modification"}
                          title="Модификация"
                          addValue={addValue}/>

            <FormInputTxt name={"volume"}
                          title="Объем"
                          addValue={addValue}/>

            <FuelEngineTypeInput getValue={addFuelEngine}/>

            <FormSelect title="Тип кузова" name={"typeBody"} isValue={BODY_TYPE} addValueSelect={addValue}/>
            <FormSelect title="Коробка" name={"gearBox"} isValue={GEARBOX} addValueSelect={addValue}/>

            <FormSelect title="Запчасть" name={"parts"} isValue={PARTS} addValueSelect={addValue}/>

            <FormInputTxt name={"numberParts"}
                          title="Номер запчасти"
                          addValue={addValue}/>

            <FormInputTxt name={"description"}
                          title="Описание"
                          addValue={addValue}/>

            <FormControl sx={{m:1}}>
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

            <Button variant="contained" sx={{width: "100%"}}
                    onClick={handleClick}>
                Отправить
            </Button>
        </Paper>
    )
}
export default FormInput;