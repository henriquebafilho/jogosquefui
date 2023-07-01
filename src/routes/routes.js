import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from '../pages/Login';
import Perfil from '../pages/Perfil';
import { PrivateRoutes } from ".";
import BotafogoJogos from '../TodosOsJogos/BotafogoJogos';

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<PrivateRoutes />}>
                    <Route path="/home" element={<Perfil meusJogos={BotafogoJogos()} />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}