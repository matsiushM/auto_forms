import React, {useState} from "react";
import {Button, CircularProgress, FormControl, FormControlLabel, Paper, Radio, RadioGroup} from "@mui/material";

import MarkModelInputForm from "./FormInputsTyps/MarkModelInputForm.tsx";
import FuelEngineTypeInput from "./FormInputsTyps/FuelEngineTypeInput.tsx";
import FormSelect from "./FormInputsTyps/FormSelect.tsx";
import FormInputTxt from "./FormInputsTyps/FormInputTxt.tsx";
import DataInput from "./FormInputsTyps/DataInput.tsx";
import {BODY_TYPE, GEARBOX} from "../../config/constants.ts";
import {PARTS} from "../../config/constsParts.ts";
import {sendPrats} from "../../api/parts";
import AddMoreAuto from "./FormInputsTyps/AddMoreAuto.tsx";
import {v4 as uuidv4} from "uuid";

import {Auto, DescriptionParts} from "./type.ts";
import ModalMessage from "../ModalMessage.tsx";


const FormInput = () => {
    const [autoParts, setAutoParts] = useState<DescriptionParts>({
        mainAuto: {id: uuidv4(), model: "", marka: ""},
        auto: [],
        description: "",
        engineType: "",
        modification: "",
        fuel: "",
        gearBox: "",
        numberParts: "",
        parts: "",
        pratsState: "",
        typeBody: "",
        volume: 0,
        year: ""
    });
    const [responseMessage, setResponseMessage] = useState("");
    const [loading, setLoading] = useState(false)

    const handleChangePartsState = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAutoParts((prevAutoParts) => ({
            ...prevAutoParts,
            pratsState: event.target.value,
        }));
    };

    const handleClick = () => {
        setLoading(true)
        sendPrats(autoParts).then((result) => {
            setResponseMessage(result.id_1c)})
            .finally(() => {
                setLoading(false)
            });
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

    const addAuto = (item: Auto) => {
        setAutoParts((prevAutoParts) => ({
            ...prevAutoParts,
            mainAuto: item
        }))
    }

    const addMoreAuto = (item: Auto[]) => {
        setAutoParts((prevState) => ({
            ...prevState,
            auto: item,
        }))
    }

    return (
        <>
            {loading ? (<CircularProgress/>) : (
                <Paper>
                    <MarkModelInputForm addAuto={addAuto}/>

                    <AddMoreAuto onChange={addMoreAuto}/>

                    <DataInput onChange={addDate}/>

                    <FormInputTxt name={"modification"}
                                  title="Модификация"
                                  onChange={addValue}/>

                    <FormInputTxt name={"volume"}
                                  title="Объем"
                                  onChange={addValue}/>

                    <FuelEngineTypeInput getValue={addFuelEngine}/>

                    <FormSelect title="Тип кузова" name={"typeBody"} isValue={BODY_TYPE} addValueSelect={addValue}/>
                    <FormSelect title="Коробка" name={"gearBox"} isValue={GEARBOX} addValueSelect={addValue}/>

                    <FormSelect title="Запчасть" name={"parts"} isValue={PARTS} addValueSelect={addValue}/>

                    <FormInputTxt name={"numberParts"}
                                  title="Номер запчасти"
                                  onChange={addValue}/>

                    <FormInputTxt name={"description"}
                                  title="Описание"
                                  onChange={addValue}/>

                    <FormControl sx={{m: 1}}>
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

                    <Button variant="contained" sx={{width: "100%"}} onClick={handleClick}>
                        Отправить
                    </Button>
                </Paper>
            )}
            <ModalMessage massage={responseMessage} isOpen={!!responseMessage}/>
        </>
    )
}
export default FormInput;