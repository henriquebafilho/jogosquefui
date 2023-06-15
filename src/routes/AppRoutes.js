import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Cadastro />} />
            </Routes>
        </BrowserRouter>
    );
}