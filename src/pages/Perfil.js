import React, { useContext } from 'react';
import Times from '../Times';
import Tabs from '../components/Tabs';
import { AuthGoogleContext } from '../contexts/authGoogle';

function Perfil(props) {
  const { user, signOut } = useContext(AuthGoogleContext);
  const meuTime = "Botafogo";
  let userLogado;
  let nomeUsuario;

  try {
    userLogado = JSON.parse(user);
  } catch (error) {
    userLogado = user;
  }

  try {
    nomeUsuario = userLogado.displayName.split(" ")[0] + " " + userLogado.displayName.split(" ")[1];
  } catch (error) {
    nomeUsuario = userLogado.displayName.split(" ")[0];
  }

  let meusJogos = props.meusJogos;
  meusJogos.sort(function (a, b) {
    return a.data < b.data ? -1 : a.data > b.data ? 1 : 0;
  });

  return (
    <>
      <div className="App-header" style={{ backgroundColor: Times(meuTime).backgroundColor }}>
        <div style={{ margin: '20px', alignItems: 'center', flexDirection: 'column', display: 'flex' }}>
          <p style={{ color: Times(meuTime).letterColor, margin: '10px' }}>
            {nomeUsuario}
          </p>
          <img src={userLogado.photoURL} style={{ borderRadius: '50%' }} alt="Foto do Usuário"></img>
        </div>
        <button onClick={() => signOut()}>Sair</button>
        <Tabs meuTime={meuTime} meusJogos={meusJogos} />
      </div>
    </>
  )
}

export default Perfil;