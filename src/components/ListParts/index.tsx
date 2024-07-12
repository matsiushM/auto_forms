import {
    Box,
    Button,
    Checkbox,
    CircularProgress,
    Divider,
    List,
    ListItem,
    ListItemText,
    Paper,
    Typography
} from "@mui/material";
import {useAuth} from "../../hook/useAuth.tsx";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import theme from "../../config/theme.ts";
import {ChangeEvent, useState} from "react";
import {getPratsData, sendPratsID} from "../../api/parts";

import {ListPartData, searchPartsDate} from "./type.ts";
import {green} from "@mui/material/colors";

const styles = {
    selectData: {
        m: 1,
        backgroundColor: theme.palette.secondary.main,
    },
    circular: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 5
    }
}

const ListParts = () => {
    const {user} = useAuth();
    const [loading, setLoading] = useState<boolean>(false);
    const [searchData, setSearchData] = useState<searchPartsDate>({
        login: user,
        Date1: dayjs().subtract(0, 'day').format("DD.MM.YYYY"),
        Date2: dayjs().subtract(0, 'day').format("DD.MM.YYYY"),
    })
    const [listPartsData, setListPartsData] = useState<ListPartData[]>([])

    const handleBeforeChange = (date: string) => {
        setSearchData((prevState) => ({
            ...prevState,
            Date1: date
        }))
    }

    const handleAfterChange = (date: string) => {
        setSearchData((prevState) => ({
            ...prevState,
            Date2: date
        }))
    }

    const handleClick = () => {
        setLoading(true)
        getPratsData(searchData)
            .then((response) =>  {const dataWithChecked = response.data.map((item: ListPartData) => ({
            ...item,
            checked: JSON.parse(item.in1c)
        }))
                setListPartsData(dataWithChecked)
            })
            .catch(error => {
                console.error("Error fetching login data: ", error);
            })
            .finally(() => setLoading(false))
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>, id: string) => {
        setListPartsData((prevState) =>
            prevState.map((item) =>
                item.ID === id ? { ...item, checked: event.target.checked } : item
            )
        );
    };

const handleSendClick = () => {
    const idParts = listPartsData.filter(item => item.checked).map(item=> item.ID)
    console.log(idParts)
    sendPratsID({login: user,data: idParts})
}

    return (
        <Box sx={{display: "flex", justifyContent: "center", flexDirection: "column", width: "auto"}}>
            <Typography>Пользователь: {user}</Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    format='DD.MM.YYYY'
                    views={['day', 'month', 'year']}
                    label="От"
                    sx={styles.selectData}
                    maxDate={dayjs().subtract(0, 'day')}
                    defaultValue={dayjs().subtract(0, 'day')}
                    onChange={(newValue) => {
                        handleBeforeChange(newValue!.format("DD.MM.YYYY"));
                    }}
                />
                <DatePicker
                    format='DD.MM.YYYY'
                    views={['day', 'month', 'year']}
                    label="До"
                    sx={styles.selectData}
                    maxDate={dayjs().subtract(0, 'day')}
                    defaultValue={dayjs().subtract(0, 'day')}
                    onChange={(newValue) => {
                        handleAfterChange(newValue!.format("DD.MM.YYYY"));
                    }}
                />
            </LocalizationProvider>
            <Button onClick={handleClick} variant={"contained"}>Поиск</Button>

            {loading ?
                <Box sx={styles.circular}>
                    <CircularProgress/>
                </Box>
                :
                <Paper sx={{m: 2, display: "flex", justifyContent: "center", flexDirection: "column", width: "auto"}}>
                    <List disablePadding sx={{width: '100%'}}>
                        {listPartsData.map((item) => (
                            <>
                                <ListItem key={item.ID}>
                                    {JSON.parse(item.in1c) ? (<Checkbox
                                            checked={JSON.parse(item.in1c)}
                                            disableRipple
                                            sx={{
                                                color: green[800],
                                                '&.Mui-checked': {
                                                    color: green[600],
                                                },
                                            }}
                                        />)
                                        :
                                        (<Checkbox
                                            checked={item.checked}
                                            onChange={(event) => handleChange(event, item.ID)}
                                        />)}

                                    <ListItemText>{item.Name}</ListItemText>
                                </ListItem>
                                <Divider/>
                            </>
                        ))}
                    </List>
                    <Button variant={"contained"} onClick={handleSendClick}>Отправить</Button>
                </Paper>
            }
        </Box>
    );
}

export default ListParts;