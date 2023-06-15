import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../services/firebaseConfig";

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);

    function handleSignIn(e) {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    if(user){
        console.log(user);
    }

    return (
        <>
            <div style={{ backgroundColor: '#030348' }}>
                <form className="App-header">
                    <h1 style={{ padding: '100px', color: 'white' }}>Jogos Que Fui</h1>
                    <input name='email' onChange={(e) => setEmail(e.target.value)} style={{ width: '400px', padding: '10px', margin: '20px' }} type="text" placeholder="Insira seu e-mail" />
                    <input name='senha' onChange={(e) => setPassword(e.target.value)} style={{ width: '400px', padding: '10px', margin: '20px' }} type="password" placeholder="Insira sua senha" />
                    <p style={{ fontSize: '20px', color: 'red' }}>{error}</p>
                    <input type="submit" value="Entrar" onClick={handleSignIn} style={{ width: '250px', padding: '10px', margin: '20px', backgroundColor: '#09ab4c', color: 'white', borderRadius: '7px' }} />
                    <Link to="/register">Não tem uma conta? Cadastre-se!</Link>
                </form>
            </div>
        </>
    )
}

export default Login;