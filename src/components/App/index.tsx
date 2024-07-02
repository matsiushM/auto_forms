import {Box} from "@mui/material";
import ButtonAppBar from "../AppBar";
import Routing from "../Routing/insex..tsx";

const styles = {
    paperContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: "background.default",
        height: '80%',
        width: '100%',
    }
}
const App = () => {
    return <Box sx={styles.paperContainer}>
        <ButtonAppBar/>
        <Routing/>
    </Box>
}

export default App;
