import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Perfil from './pages/Perfil.js';
import ProximosJogos from './pages/ProximosJogos.js';
import TodosOsJogos from './pages/TodosOsJogos.js';
import Adversarios from './pages/Adversarios.js';
import Anos from './pages/Anos.js';
import Estadios from './pages/Estadios.js';
import Jogos from './MeusJogos';
import FlamengoJogos from './TodosOsJogos/FlamengoJogos';
import FluminenseJogos from './TodosOsJogos/FluminenseJogos';
import VascoJogos from './TodosOsJogos/VascoJogos';
import BotafogoJogos from './TodosOsJogos/BotafogoJogos';
import Footer from './components/Footer';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Usuario from './Usuario';
import ConjuntoUsuarios from './ConjuntoUsuarios';

function App() {
  let meusJogos = new Jogos();
  let usuarioAtual = new Usuario("Leandro", "Silva", "Vasco", "", "", meusJogos);
  let conjuntoUsuarios = new ConjuntoUsuarios();
  conjuntoUsuarios.setUsuarioAtual(usuarioAtual);
  let todosOsJogos = [];

  switch (conjuntoUsuarios.getUsuarioAtual().getMeuTime()) {
    case "Botafogo":
      todosOsJogos = BotafogoJogos().reverse();
      break;
    case "Flamengo":
      todosOsJogos = FlamengoJogos().reverse();
      break;
    case "Fluminense":
      todosOsJogos = FluminenseJogos().reverse();
      break;
    case "Vasco":
      todosOsJogos = VascoJogos().reverse();
      break;
    default:
      console.error("Time não disponível.")
      break;
  }

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login conjuntoUsuarios={conjuntoUsuarios} />} />
          <Route path='/cadastro' element={<Cadastro conjuntoUsuarios={conjuntoUsuarios} />} />
          <Route path='/perfil' element={<Perfil conjuntoUsuarios={conjuntoUsuarios} meuTime={conjuntoUsuarios.getUsuarioAtual().getMeuTime()} meusJogos={meusJogos} nome={conjuntoUsuarios.getUsuarioAtual().getNome()} sobrenome={conjuntoUsuarios.getUsuarioAtual().getSobrenome()} />} />
          <Route path='/anos' element={<Anos conjuntoUsuarios={conjuntoUsuarios} meuTime={conjuntoUsuarios.getUsuarioAtual().getMeuTime()} meusJogos={meusJogos} />} />
          <Route path='/estadios' element={<Estadios conjuntoUsuarios={conjuntoUsuarios} meuTime={conjuntoUsuarios.getUsuarioAtual().getMeuTime()} meusJogos={meusJogos} />} />
          <Route path='/adversarios' element={<Adversarios conjuntoUsuarios={conjuntoUsuarios} meuTime={conjuntoUsuarios.getUsuarioAtual().getMeuTime()} meusJogos={meusJogos} />} />
          <Route path='/proximosJogos' element={<ProximosJogos conjuntoUsuarios={conjuntoUsuarios} meuTime={conjuntoUsuarios.getUsuarioAtual().getMeuTime()} meusJogos={meusJogos} jogos={todosOsJogos} />} />
          <Route path='/todosOsJogos' element={<TodosOsJogos conjuntoUsuarios={conjuntoUsuarios} meuTime={conjuntoUsuarios.getUsuarioAtual().getMeuTime()} meusJogos={conjuntoUsuarios.getUsuarioAtual().getMeusJogos()} jogos={todosOsJogos} />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
