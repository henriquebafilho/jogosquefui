import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Perfil from './pages/Perfil.js';
import ProximosJogos from './pages/ProximosJogos.js';
import TodosOsJogos from './pages/TodosOsJogos.js';
import Adversarios from './pages/Adversarios.js';
import Anos from './pages/Anos.js';
import Estadios from './pages/Estadios.js';
import Jogos from './MeusJogos';
import Footer from './components/Footer';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Usuario from './Usuario';
import ConjuntoUsuarios from './ConjuntoUsuarios';
import Navbar from './components/Navbar';

function App() {
  let conjuntoUsuarios = new ConjuntoUsuarios();

  return (
    <>
      <Router>
      {/* {conjuntoUsuarios.getUsuarioAtual() !== "" && <Navbar conjuntoUsuarios={conjuntoUsuarios} meuTime={conjuntoUsuarios.getUsuarioAtual().meuTime} meusJogos={conjuntoUsuarios.getUsuarioAtual().meusJogos} style={{ position: 'fixed' }} />} */}
      <Navbar conjuntoUsuarios={conjuntoUsuarios} meuTime={conjuntoUsuarios.getUsuarioAtual().meuTime} meusJogos={conjuntoUsuarios.getUsuarioAtual().meusJogos} style={{ position: 'fixed' }} />
        <Routes>
          <Route path='/' element={<Login conjuntoUsuarios={conjuntoUsuarios} />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
