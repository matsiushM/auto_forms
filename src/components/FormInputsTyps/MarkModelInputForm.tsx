import {useEffect, useMemo, useState} from "react";
import {
    Autocomplete,
    Box,
    Button,
    Divider,
    TextField,
} from "@mui/material";
import {v4 as uuidv4} from "uuid";

import {BRANDS} from "../../config/constants.ts";
import {Auto} from "../FormInput/type.ts";

const styles = {
    selectForm: {
        size: 'small',
        backgroundColor: "#efffea",
        borderRadius: "10px",
        m: 1
    }
}

interface props {
    id: string
    autoAdd: (newAuto: Auto) => void
    removeAuto: (index: string) => void
}

const MarkModelInputForm = ({id, autoAdd, removeAuto}: props) => {
    const [marka, setMarka] = useState<string>('');
    const [model, setModel] = useState<string>('');
    const [carsModel, setCarModel] = useState<string[]>([]);


    useEffect(() => {
        const newModel = BRANDS.find(item => item.marka === marka)?.models;
        // @ts-ignore
        setCarModel(newModel);
    }, [marka]);


    useEffect(() => {
        autoAdd({
            id: uuidv4(),
            marka: marka,
            model: model,
        });
    }, [model]);

    const stateMarka = useMemo(() => {
        return BRANDS.map(item => item.marka)
    }, []);


    return <Box>
        <Autocomplete
            disablePortal
            fullWidth
            id="combo-box-demo"
            sx={styles.selectForm}
            options={stateMarka}
            renderInput={(params) => <TextField {...params} label="Марка"/>}
            onChange={(_event, item) => {
                // @ts-ignore
                setMarka(item);
            }}
        />
        {carsModel &&
            <Autocomplete
                disablePortal
                fullWidth
                id="combo-box-demo"
                sx={styles.selectForm}
                options={carsModel}
                renderInput={(params) => <TextField {...params} label="Модель"/>}
                onChange={(_event, item) => {
                    // @ts-ignore
                    setModel(item);
                }}
            />
        }
        <Button onClick={() => removeAuto(id)}>убрать</Button>
        <Divider/>
    </Box>
}

export default MarkModelInputForm;