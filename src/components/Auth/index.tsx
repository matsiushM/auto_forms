import { ChangeEvent, useState } from "react";
import { Button, Paper, TextField, Typography, Box } from "@mui/material";

interface Props {
    inputLogin: (log: string, pass: string) => void;
}

const Auth = ({ inputLogin }: Props) => {
    const [login, setLogin] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleChangeLogin = (event: ChangeEvent<HTMLInputElement>) => {
        setLogin(event.target.value);
    };

    const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleClick = () => {
        inputLogin(login, password);
    };

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh"
            }}
        >
            <Paper sx={{ display: "flex", flexDirection: "column", p: 2 }}>
                <Typography>Авторизация</Typography>
                <TextField
                    label={"Login"}
                    onChange={handleChangeLogin}
                    sx={{ m: 1 }}
                />
                <TextField
                    label={"Password"}
                    onChange={handleChangePassword}
                    type={"password"}
                    sx={{ m: 1 }}
                />
                <Button variant={"contained"} onClick={handleClick}>Войти</Button>
            </Paper>
        </Box>
    );
};

export default Auth;
