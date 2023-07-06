import React, { useContext, useState, useEffect } from 'react';
import Times from '../Times';
import Tabs from '../components/Tabs';
import { AuthGoogleContext } from '../contexts/authGoogle';
import Estatisticas from '../components/Estatisticas';
import { app } from '../services/firebaseConfig';
import { collection, getFirestore, getDocs } from "firebase/firestore";
import Navbar from '../components/Navbar';
import BotafogoJogos from '../TodosOsJogos/BotafogoJogos';

function Perfil(props) {
  const { user } = useContext(AuthGoogleContext);
  const meuTime = "Botafogo";
  let userLogado;
  let nomeUsuario;
  let option = props.option;
  let [users, setUsers] = useState([]);
  let meusJogos = [];
  let isLoading = true;

  try {
    userLogado = JSON.parse(user);
  } catch (error) {
    userLogado = user;
  }

  useEffect(() => {
    const getUsers = async () => {
      const db = getFirestore(app);
      const usersCollectionRef = collection(db, "users");
      let data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      isLoading = false;
    }
    getUsers();
  }, []);

  const getJogos = async () => {
    try {
      const todosOsJogos = BotafogoJogos();
      let userFound = users.find(userJogo =>
        userJogo.UID === userLogado.uid
      );
      let meusJogosIndex = [];
      for (let a = 0; a < userFound.jogos.length; a++) {
        const jogo = todosOsJogos.filter(jogo => jogo.id === userFound.jogos[a]);
        meusJogosIndex.push(jogo[0]);
      }
      meusJogos = meusJogosIndex;
      isLoading = false;
    } catch (error) {
      isLoading = false;
    }
  }
  getJogos();

  try {
    nomeUsuario = userLogado.displayName.split(" ")[0] + " " + userLogado.displayName.split(" ")[1];
  } catch (error) {
    nomeUsuario = userLogado.displayName.split(" ")[0];
  }

  return (
    <>
      { }
      <Navbar style={{ position: 'fixed' }} meuTime="Botafogo" />
      <div className="App-header" style={{ backgroundColor: Times(meuTime).backgroundColor }}>
        <div style={{ margin: '20px', alignItems: 'center', flexDirection: 'column', display: 'flex' }}>
          {option === "Perfil" && <>
            <p style={{ color: Times(meuTime).letterColor, margin: '10px' }}>
              {nomeUsuario}
            </p>
            <img src={userLogado.photoURL} style={{ borderRadius: '50%' }} alt="Foto do Usuário"></img>
          </>}
          {option === "Todos" && <>
            <p style={{ color: Times(meuTime).letterColor, margin: '10px' }}>Jogos do Botafogo</p>
            <img src={require('../escudos/Botafogo.png')} width="20%" height="20%" alt="Escudo do Botafogo"></img>
          </>}
        </div>
        <div className='container'>
          {option === "Perfil" && meusJogos.length > 0 && <Estatisticas meuTime={meuTime} jogos={meusJogos} />}
        </div>
        {option === "Perfil" && meusJogos.length > 0 && <Tabs meuTime={meuTime} meusJogos={meusJogos} option={option} />}
        {option === "Todos" && meusJogos.length > 0 && <Tabs meuTime={meuTime} meusJogos={BotafogoJogos()} option={option} />}
        {isLoading ? <p style={{ margin: '20px' }}>Carregando jogos...</p> : meusJogos.length === 0 &&
          <>
            <p style={{ margin: '20px' }}>Nenhum jogo cadastrado</p>
            <p>Vá em "Jogos do Botafogo" para cadastrar seus jogos</p>
          </>}
      </div>
    </>
  )
}

export default Perfil;