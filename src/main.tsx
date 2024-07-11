import ReactDOM from 'react-dom/client'
import App from "./components/App";
import {ThemeProvider} from "@mui/material";
import theme from "./config/theme.ts";
import CssBaseline from "@mui/material/CssBaseline";
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <CssBaseline/>
            <App/>
        </BrowserRouter>
    </ThemeProvider>
)
