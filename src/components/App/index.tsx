import {Box} from "@mui/material";

import FormInput from "../FormInput";

const styles = {
    paperContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
}
const App = () => {
    return <Box sx={styles.paperContainer}>
        <FormInput/>
    </Box>
}

export default App
