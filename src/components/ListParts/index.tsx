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
import {useState} from "react";
import {getPratsData} from "../../api/parts";

import {ListPartData, searchPartsDate} from "./type.ts";

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
        Date1: "",
        Date2: "",
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
            .then((response) => setListPartsData(response.data))
            .catch(error => {
                console.error("Error fetching login data: ", error);
            })
            .finally(() => setLoading(false))
    }


    return (
        <Box sx={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
            <Typography>Пользователь: {user}</Typography>
            <Box>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        format='DD.MM.YYYY'
                        views={['day', 'month', 'year']}
                        label="От"
                        sx={styles.selectData}
                        maxDate={dayjs().subtract(0, 'day')}
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
                        onChange={(newValue) => {
                            handleAfterChange(newValue!.format("DD.MM.YYYY"));
                        }}
                    />
                </LocalizationProvider>
            </Box>
            <Button onClick={handleClick} variant={"contained"}>Поиск</Button>

            {loading ? <Box sx={styles.circular}>
                    <CircularProgress/>
                </Box> :
                <Paper sx={{m: 2}}>
                    <List disablePadding sx={{width: '100%'}}>
                        {listPartsData.map((item) => (
                            <>
                                <ListItem key={item.ID}>
                                    <Checkbox
                                        edge="start"
                                        checked={JSON.parse(item.in1c)}
                                        tabIndex={-1}
                                        disableRipple
                                    />
                                    <ListItemText>{item.Name}</ListItemText>
                                </ListItem>
                                <Divider/>
                            </>
                        ))}
                    </List>
                </Paper>
            }
        </Box>
    );
}

export default ListParts;