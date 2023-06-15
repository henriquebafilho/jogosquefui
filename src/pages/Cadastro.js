import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../services/firebaseConfig";

export function Cadastro() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth);

    function handleSignOut(e) {
        e.preventDefault();
        createUserWithEmailAndPassword(email, password);
    }

    return (
        <>
            <div className="App-header" style={{ backgroundColor: '#030348' }}>
                <h1 style={{ paddingTop: '5%', paddingBottom: '2%', color: 'white' }}>Jogos Que Fui</h1>
                <h3 style={{ padding: '10px', color: 'white' }}>Cadastre-se</h3>
                {/*<input name='nome' onChange={this.onChangeCadastro} style={{ width: '400px', padding: '10px', margin: '20px' }} type="text" placeholder="Nome" required />
                <input name='sobrenome' onChange={this.onChangeCadastro} style={{ width: '400px', padding: '10px', margin: '20px' }} type="text" placeholder="Sobrenome" required />*/}
                <input name='email' onChange={(e) => setEmail(e.target.value)} style={{ width: '400px', padding: '10px', margin: '20px' }} type="text" placeholder="Insira seu e-mail" required />
                <input name='senha' onChange={(e) => setPassword(e.target.value)} style={{ width: '400px', padding: '10px', margin: '20px' }} type="password" placeholder="Insira sua senha" required />
                {/*<input name='senha2' onChange={this.onChangeCadastro} style={{ width: '400px', padding: '10px', margin: '20px' }} type="password" placeholder="Insira sua senha novamente" value={this.state.senha2} required />
                <p style={{ fontSize: '20px', color: '#09ab4c' }}>{sucessoCadastro}</p>*/}
                <p style={{ fontSize: '20px', color: 'red' }}>{error}</p>
                <button onClick={handleSignOut} style={{ width: '250px', padding: '10px', margin: '20px', backgroundColor: '#09ab4c', color: 'white', borderRadius: '7px' }}>Cadastrar</button>
                <Link to="/">Voltar</Link>
            </div>
        </>
    )
}

export default Cadastro;