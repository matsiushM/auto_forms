import {useEffect, useState} from "react";
import {
    Autocomplete,
    Box,
    TextField,
} from "@mui/material";

import {FUELS} from "../../config/constants.ts";

interface Props {
    getValue: (fuelType: string, engineType: string)=>void
}

const styles = {
    selectForm: {
        backgroundColor: "#efffea",
        borderRadius: "10px",
        m: 1,
        width: "Auto",
    }
}

const FuelEngineTypeInput = ({getValue}: Props) => {
    const [fuel, setFuel] = useState('');
    const [engineType, setEngineType] = useState('')
    const [engine, setEngine] = useState<string[]>('')


    useEffect(() => {
        const newTypeEngine = FUELS.find(item => item.title === fuel)?.engineType
        setEngine(newTypeEngine);
    }, [fuel]);

    useEffect(() => {
        getValue(fuel, engineType);
    }, [fuel, engineType]);

    return <Box>
        <Autocomplete
            disablePortal
            fullWidth
            id="combo-box-demo"
            sx={styles.selectForm}
            options={FUELS.map(item => item.title)}
            renderInput={(params) => <TextField {...params} label="Топливо"/>}
            onChange={(_event, item) => {
                // @ts-ignore
                setFuel(item);
            }}
        />
        {engine &&
            <Autocomplete
                disablePortal
                fullWidth
                id="combo-box-demo"
                sx={styles.selectForm}
                options={engine}
                renderInput={(params) => <TextField {...params} label="Тип"/>}
                onChange={(_event, item) => {
                    // @ts-ignore
                    setEngineType(item);
                }}
            />
        }
    </Box>
}

export default FuelEngineTypeInput;