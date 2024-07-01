import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: "#121212", // Темный фон
        },
        primary: {
            main: "#bb86fc", // Основной фиолетовый цвет
        },
        secondary: {
            main: "#03dac6", // Вторичный мятный цвет
        },
        text: {
            primary: "#ffffff", // Белый текст
            secondary: "#b0bec5", // Светло-серый текст
        },
    }
});

export default theme;
