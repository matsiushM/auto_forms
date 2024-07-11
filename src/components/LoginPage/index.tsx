import {
    InputLabel,
    Select,
    FormControl,
    SelectChangeEvent,
    MenuItem,
    Button,
    Paper,
    CircularProgress,
    Box
} from "@mui/material";
import {useEffect, useState} from "react";
import loginUsers from "../../api/login";
import {useAuth} from "../../hook/useAuth.tsx";
import {LoginData} from "./type.ts";
import {useNavigate} from "react-router-dom";

const styles = {
    paperStyles: {
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        maxWidth: 230,
        p: 2
    },
    form: {
        minWidth: 200,
        m: 1
    },
    circular: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    }
}

const LoginPage = () => {
    const [data, setData] = useState<LoginData[]>([]);
    const [userLogin, setUserLogin] = useState('');
    const [loading, setLoading] = useState<boolean>(false);

    const {singIn} = useAuth()
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        loginUsers().then((response) => {
            setData(response.data);
        }).catch(error => {
            console.error("Error fetching login data: ", error);
        }).finally(() => setLoading(false));
    }, []);

    const handleChange = (event: SelectChangeEvent) => {
        setUserLogin(event.target.value as string);
    };

    const handleClick = () => {
        singIn(userLogin, () => navigate("/", {replace: true}))
    }

    return (
        <Paper sx={styles.paperStyles}>
            <FormControl sx={styles.form}>
                <InputLabel id="demo-simple-select-label">Пользователь</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={userLogin}
                    label="Пользователь"
                    onChange={handleChange}
                >
                    {loading ? (
                        <MenuItem disabled>
                            <Box sx={styles.circular}>
                                <CircularProgress />
                            </Box>
                        </MenuItem>
                    ) : (
                        data.map((item) =>
                            <MenuItem key={item.login} value={item.login}>{item.Name_1c}</MenuItem>
                        )
                    )}
                </Select>
            </FormControl>
            <Button variant={"contained"} onClick={handleClick}>Войти</Button>
        </Paper>
    );
}

export default LoginPage;
