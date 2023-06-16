import React, { useContext } from 'react';
import Times from '../Times';
import Tabs from '../components/Tabs';
import { AuthGoogleContext } from '../contexts/authGoogle';

function Perfil(props) {
  const { user, signOut } = useContext(AuthGoogleContext);
  const meuTime = "Botafogo";
  let userLogado;

  try {
    userLogado = JSON.parse(user);
  } catch (error) {
    userLogado = user;
  }
  //console.log(userLogado);

  const nomeUsuario = userLogado.displayName.split(" ")[0] + " " + userLogado.displayName.split(" ")[1];

  let meusJogos = props.meusJogos;
  meusJogos.sort(function (a, b) {
    return a.data < b.data ? -1 : a.data > b.data ? 1 : 0;
  });

  return (
    <>
      <div className="App-header" style={{ backgroundColor: Times(meuTime).backgroundColor }}>
        <div style={{ margin: '20px' }}>
          <img src={userLogado.photoURL} alt="userPhoto"></img>
          <p style={{ display: 'inline', color: Times(meuTime).letterColor, margin: '10px' }}>
            {nomeUsuario}
          </p>
        </div>
        {/*<img src={require('../escudos/' + Times(meuTime).escudo + '.png')} className="App-logo" alt="Escudo do Botafogo" style={{ verticalAlign: 'middle', width: '100px', height: '100px' }} />*/}
        <br />
        <button onClick={() => signOut()}>Sair</button>
        <Tabs meuTime={meuTime} meusJogos={meusJogos} />
      </div>
    </>
  )
}

export default Perfil;