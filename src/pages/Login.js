import { useContext } from "react";
import { AuthGoogleContext } from "../contexts/authGoogle";
import { Navigate } from "react-router-dom";
import '../App.css';

export const Login = () => {
    const { signInGoogle, signed } = useContext(AuthGoogleContext);

    async function loginGoogle() {
        await signInGoogle();
    }

    if (!signed) {
        return (
            <div className="App-header" style={{justifyContent: 'center'}}>
                <h1 style={{ color: 'white' }}>Jogos Que Fui</h1>
                <button onClick={loginGoogle}>Logar com o Google</button>
            </div>
        );
    } else {
        return <Navigate to="/perfil" />;
    }

}

export default Login;