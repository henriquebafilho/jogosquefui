import { useContext } from "react";
import { AuthGoogleContext } from "../contexts/authGoogle";

export const Home = () => {
    const { user, signOut } = useContext(AuthGoogleContext);
    let userLogado;

    try {
        userLogado = JSON.parse(user);
    } catch (error) {
        userLogado = user;
    }
    //console.log(userLogado);

    const nomeUsuario = userLogado.displayName.split(" ")[0];

    return (
        <div className="App-header">
            {
                <img src={userLogado.photoURL} alt="userPhoto"></img>
            }
            <h1>Olá, {nomeUsuario}</h1>
            <button onClick={() => signOut()}>Sair</button>
        </div>
    );
};