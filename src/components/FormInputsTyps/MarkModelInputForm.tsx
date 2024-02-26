import { useState } from "react";
import { Autocomplete, Box, Button, Divider, TextField } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { BRANDS } from "../../config/constants.ts";
import { Auto } from "../FormInput/type.ts";

const styles = {
    selectForm: {
        lineHeight: '40px',
        backgroundColor: "#efffea",
        borderRadius: "10px",
        m: 1,
        width: "Auto",
    },

}
interface props {
    autoAdd: (newAuto: Auto[]) => void
}

const MarkModelInputForm = ({ autoAdd }: props) => {
    const [cars, setCars] = useState<Auto[]>([{ id: uuidv4(), marka: '', model: '' }]);

    const addCar = () => {
        setCars(prevCars => [...prevCars, { id: uuidv4(), marka: '', model: '' }]);
        autoAdd(cars);
    }

    const removeCar = (id: string) => {
        setCars(prevCars => prevCars.filter(car => car.id !== id));
    }

    const stateMarka = BRANDS.map(item => item.marka);


    return (
        <Box>
            {cars.map((car, index) => (
                <Box key={car.id}>
                    <Autocomplete
                        disablePortal
                        fullWidth
                        id={`combo-box-marka-${index}`}
                        sx={styles.selectForm}
                        options={stateMarka}
                        renderInput={(params) => <TextField {...params} label="Марка" />}
                        onChange={(_, item) => {
                            const updatedCars = [...cars];
                            updatedCars[index].marka = item || '';
                            setCars(updatedCars);
                        }}
                    />
                    {car.marka && (
                        <Autocomplete
                            disablePortal
                            fullWidth
                            id={`combo-box-model-${index}`}
                            sx={styles.selectForm}
                            options={BRANDS.find(brand => brand.marka === car.marka)?.models || []}
                            renderInput={(params) => <TextField {...params} label="Модель" />}
                            onChange={(_, item) => {
                                const updatedCars = [...cars];
                                updatedCars[index].model = item || '';
                                setCars(updatedCars);
                            }}
                        />
                    )}
                    {index > 0 &&  <Button onClick={() => removeCar(car.id)}>Убрать</Button>}
                    <Divider />
                </Box>
            ))}
            <Button onClick={addCar}>Добавить</Button>
        </Box>
    );
};

export default MarkModelInputForm;
