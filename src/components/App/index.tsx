import {Box} from "@mui/material";
import ButtonAppBar from "../AppBar";
import Routing from "../Routing";
import {useLocation} from "react-router-dom";

const styles = {
    paperContainer: {
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "background.default",
        width: "100%",
        height: "100%",
    }
}
const App = () => {
    const location = useLocation();

    return <Box sx={styles.paperContainer}>
        {location.pathname !== "/login" && <ButtonAppBar/>}
        <Routing/>
    </Box>
}

export default App;
