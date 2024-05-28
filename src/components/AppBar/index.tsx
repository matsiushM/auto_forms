import {Tab, Tabs} from "@mui/material";

export default function ButtonAppBar() {
    return (
        <Tabs value={false}>
            <Tab label={"Главная"} href={"/"}/>
            <Tab label={"Добавление фото"} href={"/qrscanner"}/>
        </Tabs>
    )
}