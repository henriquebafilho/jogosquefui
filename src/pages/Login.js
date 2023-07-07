import { useContext } from "react";
import { AuthGoogleContext } from "../contexts/authGoogle";
import { Navigate } from "react-router-dom";
import '../App.css';
import BotafogoJogos from '../TodosOsJogos/BotafogoJogos';
import Tabs from "../components/Tabs";

export const Login = () => {
    const { signInGoogle, signed } = useContext(AuthGoogleContext);

    async function loginGoogle() {
        await signInGoogle();
    }

    if (!signed) {
        return (
            <div className="App-header" style={{ justifyContent: 'center' }}>
                <div style={{ margin: '50px', alignItems: 'center', flexDirection: 'column', display: 'flex' }}>
                    <h1 style={{ color: 'white', marginBottom: '20px' }}>Jogos Que Fui</h1>
                    <button onClick={loginGoogle}>Logar com o Google</button>
                </div>
                <div className='container'>
                <Tabs meuTime="Botafogo" meusJogos={BotafogoJogos()} option="Todos" />
                </div>
            </div>
        );
    } else {
        return <Navigate to="/perfil" />;
    }

}

export default Login;