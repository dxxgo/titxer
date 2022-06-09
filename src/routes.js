import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from './Pages/Inicio';
import Login from "./Pages/Login";
import UltimaAvaliacao from "./Pages/UltimaAvaliacao";

export default function RoutesApp() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/titxer/"  element={<Inicio />} />
                <Route path="/titxer/ultima-avaliacao"  element={<UltimaAvaliacao />} />
                <Route path="/titxer/login"  element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}
