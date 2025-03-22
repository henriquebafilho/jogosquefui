import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
/* import Login from './pages/Login'; */
import Perfil from './pages/Perfil';
import BotafogoJogos from './TodosOsJogos/BotafogoJogos';
import BotafogoJogos2 from './TodosOsJogos/BotafogoJogos2';
import ConjuntoUsuarios from './ConjuntoUsuarios';
/* import Navbar from './components/Navbar'; */
import VoltarAoTopo from './components/VoltarAoTopo';
import Usuario from './Usuario';
//import React, { useState, useEffect } from 'react';

function App() {
  let conjuntoUsuarios = new ConjuntoUsuarios();
  let usuario = new Usuario("Henrique", "Filho", "Botafogo", "henriquebafilho@gmail.com", "Bfr1904*");
  conjuntoUsuarios.adicionaUsuario(usuario);
  usuario = conjuntoUsuarios.getUsuarios().filter(user =>
    user.email === usuario.getEmail()
  );
  usuario = usuario[0];
  //getHenriqueJogos(usuario);
  document.body.style = 'background: black;';
  /* const [receitas, setReceitas] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${'Seafood'}`)
      .then(response => response.json())
      .then(data => setReceitas(data.meals));
  }, []);
  console.log(receitas); */

  let jogos1 = BotafogoJogos();
  let jogos2 = BotafogoJogos2();
  jogos1.concat(jogos2);

  return (
    <>
      <Router>
        {/*<Navbar conjuntoUsuarios={conjuntoUsuarios} meuTime={"Botafogo"} meusJogos={conjuntoUsuarios.getUsuarioAtual().meusJogos} style={{ position: 'fixed' }} />*/}
        <Routes>
          <Route exact path='/jogosquefui' element={<Perfil
            conjuntoUsuarios={conjuntoUsuarios}
            meuTime="Botafogo"
            meusJogos={jogos1}
          />}
            style={{ backgroundColor: "black" }}
          />
        </Routes>
      </Router>
      <VoltarAoTopo />
      <Footer />
    </>
  );
}

export default App;