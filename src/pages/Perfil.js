import React, { useContext, useState, useEffect } from 'react';
import Times from '../Times';
import Tabs from '../components/Tabs';
import { AuthGoogleContext } from '../contexts/authGoogle';
import Estatisticas from '../components/Estatisticas';
import { app } from '../services/firebaseConfig';
import { collection, getFirestore, getDocs } from "firebase/firestore";

function Perfil(props) {
  const { user, signOut } = useContext(AuthGoogleContext);
  const meuTime = "Botafogo";
  let userLogado;
  let nomeUsuario;
  let userFound;
  let meusJogos = [];
  let isLoading = true;
  const db = getFirestore(app);
  const usersCollectionRef = collection(db, "users");
  let [users, setUsers] = useState([]);

  try {
    userLogado = JSON.parse(user);
  } catch (error) {
    userLogado = user;
  }

  useEffect(() => {
    const getUsers = async () => {
      let data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    getUsers();
  }, []);

  const getJogos = async () => {
    try {
      userFound = users.find(userJogo =>
        userJogo.UID === userLogado.uid
      );
      for (let a = 0; a < userFound.jogos.length; a++) {
        meusJogos.push(JSON.parse(userFound.jogos[a]))
      }
      isLoading = false;
    } catch (error) {}
  }
  getJogos();
  
  try {
    nomeUsuario = userLogado.displayName.split(" ")[0] + " " + userLogado.displayName.split(" ")[1];
  } catch (error) {
    nomeUsuario = userLogado.displayName.split(" ")[0];
  }

  return (
    <>
      <div className="App-header" style={{ backgroundColor: Times(meuTime).backgroundColor }}>
        <div style={{ margin: '20px', alignItems: 'center', flexDirection: 'column', display: 'flex' }}>
          <p style={{ color: Times(meuTime).letterColor, margin: '10px' }}>
            {nomeUsuario}
          </p>
          <img src={userLogado.photoURL} style={{ borderRadius: '50%' }} alt="Foto do Usuário"></img>
        </div>
        <div className='container'>
          {meusJogos.length > 0 && <Estatisticas meuTime={meuTime} jogos={meusJogos} />}
        </div>
        <button onClick={() => signOut()}>Sair</button>
        {meusJogos.length > 0 && <Tabs meuTime={meuTime} meusJogos={meusJogos} />}
        {isLoading && <p>Carregando jogos...</p>}
        {!isLoading && meusJogos.length === 0 && <p>Nenhum jogo cadastrado</p>}
      </div>
    </>
  )
}

export default Perfil;