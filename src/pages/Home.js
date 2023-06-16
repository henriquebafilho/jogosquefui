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
    console.log(userLogado);

    return (
        <div>
            <h1>Olá, {userLogado.displayName}</h1>
            <button onClick={() => signOut()}>Sair</button>
        </div>
    );
};