import {createContext, ReactNode, useState} from "react";

export const AuthContext = createContext<AuthContextType>({user: "",  singIn: () => {} });

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState("");

    const singIn = (newUser: string, cd: () => void) => {
        setUser(newUser)
        cd();
    }

    const value: AuthContextType = {user, singIn}

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}