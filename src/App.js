import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Perfil from './pages/Perfil.js';
import ProximosJogos from './pages/ProximosJogos.js';
import TodosOsJogos from './pages/TodosOsJogos.js';
import Adversarios from './pages/Adversarios.js';
import Anos from './pages/Anos.js';
import Estadios from './pages/Estadios.js';
import Jogos from './meusJogos';
import FlamengoJogos from './TodosOsJogos/FlamengoJogos';
import FluminenseJogos from './TodosOsJogos/FluminenseJogos';
import VascoJogos from './TodosOsJogos/VascoJogos';
import BotafogoJogos from './TodosOsJogos/BotafogoJogos';
import Footer from './components/Footer';

function App() {
  var meuTime = "Botafogo";
  var todosOsJogos = [];
  var meusJogos = new Jogos();

  switch (meuTime) {
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
      todosOsJogos = Jogos().reverse();
      break;
  }

  return (
    <>
      <Router>
        <Navbar meuTime={meuTime} style={{ position: 'fixed' }} />
        <Routes>
          <Route path='/perfil' element={<Perfil meuTime={meuTime} meusJogos={meusJogos} />} /> {/* colocar como /inicio e a tela principal como / */}
          <Route path='/anos' element={<Anos meuTime={meuTime} meusJogos={meusJogos} />} />
          <Route path='/estadios' element={<Estadios meuTime={meuTime} meusJogos={meusJogos} />} />
          <Route path='/adversarios' element={<Adversarios meuTime={meuTime} meusJogos={meusJogos} />} />
          <Route path='/proximosJogos' element={<ProximosJogos meuTime={meuTime} jogos={todosOsJogos} meusJogos={meusJogos} />} />
          <Route path='/todosOsJogos' element={<TodosOsJogos meuTime={meuTime} jogos={todosOsJogos} meusJogos={meusJogos} />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
