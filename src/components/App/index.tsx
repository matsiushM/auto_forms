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
        height: '80%',
        width: '100%',
    }
}
const App = () => {

    return <Box sx={styles.paperContainer}>
        <BrowserRouter>
                    <ButtonAppBar/>
                    <Routes>
                        <Route path={'/'} element={<FormInput/>}/>
                        <Route path={'/qrscanner'} element={<LoadPhoto/>}/>
                    </Routes>
        </BrowserRouter>
    </Box>
}

export default App;
