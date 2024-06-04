import MarkModelInputForm from "./MarkModelInputForm.tsx";
import {Box, Button} from "@mui/material";
import {v4 as uuidv4} from "uuid";
import {useEffect, useState} from "react";

import {Auto} from "../type.ts";

interface Props {
    onChange: (item: Auto[]) => void
}

const AddMoreAuto = ({onChange}: Props) => {
    const [moreAuto, setMoreAuto] = useState<Auto[]>([])

    const addAuto = () => {
        setMoreAuto(prevState => prevState.concat({id: uuidv4(), marka: '', model: ''}))
    }

    const removeAuto= (id: string) => {
        setMoreAuto(prevState=>  prevState.filter(item =>  item.id !== id))
    }

    const addAutoItem =(item: Auto) => {
        setMoreAuto(prevState => {
            const index  = prevState.findIndex(auto => auto.id === item.id)
            prevState[index] = item;
            return prevState;
        })
    }

    useEffect(() => {
        onChange(moreAuto)
    }, [moreAuto]);

    return (
        <Box>
            {moreAuto.map((item) => (
                <Box key={item.id} >
                    <MarkModelInputForm auto={item} addAuto={addAutoItem}/>
                    <Button onClick={()=>removeAuto(item.id)}>Удалить</Button>
                </Box>
            ))}
            <Button onClick={addAuto}>
                Добавить
            </Button>
        </Box>
    );
}

export default AddMoreAuto;