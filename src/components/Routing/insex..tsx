import {BrowserRouter, Route, Routes} from "react-router-dom";
import FormInput from "../FormInput";
import LoadPhoto from "../loadPhoto";


const Routing = () => {
    return (<BrowserRouter>
        <Routes>
            <Route path={'/'} element={<FormInput/>}/>
            <Route path={'/qrscanner'} element={<LoadPhoto/>}/>
        </Routes>
    </BrowserRouter>)
}

export default Routing;