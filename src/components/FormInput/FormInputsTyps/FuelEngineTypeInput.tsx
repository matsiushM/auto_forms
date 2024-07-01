import {useState} from "react";
import {
    Autocomplete,
    Box,
    TextField,
} from "@mui/material";

import {FUELS} from "../../../config/constants.ts";


interface Props {
    getValue: (fuelType: string, engineType: string)=>void
}

const styles = {
    selectForm: {
        width: 'inherit',
        borderRadius: "10px",
        m: 1
    }
}

const FuelEngineTypeInput = ({getValue}: Props) => {
    const [fuel, setFuel] = useState('');
    const [engines, setEngines] = useState<string[]>([])

    const selectFuel =(selectedFuel: string) => {
        const newTypeEngine = FUELS.find(item => item.title === selectedFuel)?.engineType
        setFuel(selectedFuel);
        setEngines(newTypeEngine!);
    }

    return <Box>
        <Autocomplete
            disablePortal
            fullWidth
            id="combo-box-demo"
            sx={styles.selectForm}
            options={FUELS.map(item => item.title)}
            renderInput={(params) => <TextField {...params} label="Топливо"/>}
            onChange={(_event, item) => {
                selectFuel(item!);
            }}
        />
        {engines &&
            <Autocomplete
                disablePortal
                fullWidth
                id="combo-box-demo"
                sx={styles.selectForm}
                options={engines}
                renderInput={(params) => <TextField {...params} label="Тип"/>}
                onChange={(_event, selectedEngine) => {
                    getValue(fuel, selectedEngine!);
                }}
            />
        }
    </Box>
}

export default FuelEngineTypeInput;