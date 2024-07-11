import {useContext} from "react";
import {AuthContext} from "../hoc/AuthProvider.tsx";

export const useAuth = () => {
    return useContext(AuthContext);
}