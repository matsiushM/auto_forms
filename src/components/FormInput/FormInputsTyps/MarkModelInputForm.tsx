import {useEffect, useMemo, useState} from "react";
import {Autocomplete, Divider, TextField} from "@mui/material";
import {BRANDS} from "../../../config/constants.ts";
import {v4 as uuidv4} from "uuid";

import {Auto} from "../type.ts";

interface Props {
    auto?: Auto
    addAuto: (item: Auto) => void,
}

const styles = {
    selectForm: {
        width: 'inherit',
        borderRadius: "10px",
        m: 1
    },
}

const MarkModelInputForm = ({auto, addAuto}: Props) => {
    const [autoItem, setAutoItem] = useState<Auto>(auto || {id: uuidv4(), marka: "", model: ""});

    const stateMarka = useMemo(() => BRANDS.map(item => item.marka), []);

    const stateModel = useMemo(() => BRANDS.find(brand => brand.marka === autoItem.marka)?.models, [autoItem.marka]);

    const selectMarka = (item: string) => {
        if (item === null) {
            setAutoItem((prevState) => ({
                ...prevState,
                marka: "",
                model: "",
            }));
            return;
        }
        setAutoItem((prevState) => ({
            ...prevState,
            marka: item,
        }))
    }

    const selectModel = (item: string) => {
        if(item === null) item = "";
        setAutoItem((prevState) => ({
            ...prevState,
            model: item,
        }))
    }

    useEffect(() => {
        addAuto(autoItem);
    }, [autoItem.model]);

    return (
        <>
            <Autocomplete
                disablePortal
                fullWidth
                sx={styles.selectForm}
                options={stateMarka}
                renderInput={(params) => <TextField {...params} label="Марка"/>}
                onChange={(_, item) => {
                    selectMarka(item!)
                }}
            />
            {autoItem.marka && (
                <Autocomplete
                    disablePortal
                    fullWidth
                    sx={styles.selectForm}
                    options={stateModel!}
                    renderInput={(params) => <TextField {...params} label="Модель"/>}
                    onChange={(_, item) => {
                        selectModel(item!)
                    }}
                />
            )}
            <Divider/>
        </>
    )
};
export default MarkModelInputForm;
