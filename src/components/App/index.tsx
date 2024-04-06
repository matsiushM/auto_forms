import {Box} from "@mui/material";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import FormInput from "../FormInput";
import LoadPhoto from "../loadPhoto";
import ButtonAppBar from "../AppBar";

const styles = {
    paperContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: "background.default",
    }
}
const App = () => {
    return <Box sx={styles.paperContainer}>
        <BrowserRouter basename='auto-parts-form.netlify.app/'>
            <ButtonAppBar/>
            <Routes>
                <Route path={'/auto-parts-form.netlify.app'} element={<FormInput/>}/>
                <Route path={'/qrscanner'} element={<LoadPhoto/>}/>
            </Routes>
        </BrowserRouter>
    </Box>
}

export default App;
