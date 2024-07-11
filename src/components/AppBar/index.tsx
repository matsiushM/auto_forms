import {Box, Button, Divider, Drawer, IconButton, Toolbar, Typography, useTheme} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {useState} from "react";
import {Link as RoutLink} from "react-router-dom";

const drawerWidth = 240;

const styles = {
    appBar: {
        width: "100%",
    }
}

export default function PersistentDrawerRight() {
    const theme = useTheme();

    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };


    return (
        <Box sx={styles.appBar}>
            <Toolbar>
                <Typography variant="h6" noWrap sx={{flexGrow: 1}} component="div">
                    Добавление запчастей
                </Typography>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="end"
                    onClick={handleDrawerOpen}
                    sx={{...(open && {display: 'none'})}}
                >
                    <MenuIcon/>
                </IconButton>
            </Toolbar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                    },
                }}
                variant="temporary"
                anchor="right"
                open={open}
                onClose={handleDrawerClose}
            >
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                </IconButton>
                <Divider/>
                <Button color={"inherit"} component={RoutLink} onClick={handleDrawerClose} to="/">Главаная</Button>
                <Button color={"inherit"} component={RoutLink} onClick={handleDrawerClose} to={"/qrscanner"}>Добавление фото</Button>
                <Button  color={"inherit"} component={RoutLink} onClick={handleDrawerClose} to={"/listPage"}>Список запчастей</Button>
            </Drawer>
        </Box>
    );
}
