import {Navigate, useLocation} from "react-router-dom";
import {useAuth} from "../hook/useAuth.tsx";
import {ReactNode} from "react";



const RequireAuth = ({ children }: { children: ReactNode }) => {
    const location = useLocation()
    const {user} = useAuth();

    if(!user) {
        return <Navigate to="/login" state={{from: location}}/>
    }

    return children;
}

export {RequireAuth};