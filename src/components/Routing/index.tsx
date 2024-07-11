import {Route, Routes} from "react-router-dom";
import FormInput from "../FormInput";
import LoadPhoto from "../loadPhoto";
import LoginPage from "../LoginPage";
import {AuthProvider} from "../../hoc/AuthProvider.tsx";
import {RequireAuth} from "../../hoc/RequireAuth.tsx";
import ListParts from "../ListParts";

const Routing = () => {
    return (
        <AuthProvider>
            <Routes>
                <Route path={'/'} element={<RequireAuth><FormInput/></RequireAuth>}/>
                <Route path={'/qrscanner'} element={<RequireAuth><LoadPhoto/></RequireAuth>}/>
                <Route path={'/listPage'} element={<RequireAuth> <ListParts></ListParts></RequireAuth>}></Route>
                <Route path={'/login'} element={<LoginPage/>}/>
            </Routes>
        </AuthProvider>
    )
}

export default Routing;