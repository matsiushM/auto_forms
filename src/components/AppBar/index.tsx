import {AppBar, Box, IconButton, Tab, Tabs, Toolbar} from "@mui/material";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';


export default function ButtonAppBar() {

    return (
        <AppBar position="static">
            <Toolbar>
                <Box display="flex" justifyContent="center" flexGrow={1} marginLeft={10}>
                    <Tabs>
                        <Tab label="Главная" href="/" />
                        <Tab label="Добавление фото" href="/qrscanner" />
                    </Tabs>
                </Box>
                <IconButton
                    size="large"
                    aria-label="exit"
                    aria-haspopup="true"
                >
                    <ExitToAppIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}
