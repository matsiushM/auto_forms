import {createContext, useState} from "react";

export const AuthContext = createContext<AuthContextType>(null);

// @ts-ignore
export const AuthProvider = ({children}) => {
    const [user, setUser] = useState("");

    const singIn = (newUser: string, cd: () => void) => {
        setUser(newUser)
        cd();
    }

    const value = {user, singIn}

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}