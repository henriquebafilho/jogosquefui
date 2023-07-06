import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from '../pages/Login';
import Perfil from '../pages/Perfil';
import { PrivateRoutes } from ".";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/perfil" element={<PrivateRoutes />}>
                    <Route path="/perfil" element={<Perfil option="Perfil"/>} />
                </Route>
                <Route path="/todos" element={<PrivateRoutes />}>
                    <Route path="/todos" element={<Perfil option="Todos"/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}