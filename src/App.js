import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio.js';
import TodosOsJogos from './pages/TodosOsJogos.js';
import Adversarios from './pages/Adversarios.js';
import Anos from './pages/Anos.js';
import Estadios from './pages/Estadios.js';
/* import ViewAdversario from './pages/viewScreens/ViewAdversario';
import ViewAno from './pages/viewScreens/ViewAno';
import ViewEstadio from './pages/viewScreens/ViewEstadio'; */
import Jogos from './meusJogos';
import FlamengoJogos from './TodosOsJogos/FlamengoJogos';
import FluminenseJogos from './TodosOsJogos/FluminenseJogos';
import VascoJogos from './TodosOsJogos/VascoJogos';

function App() {
  var meuTime = "Botafogo";
  var todosOsJogos = [];

  switch (meuTime) {
    case "Flamengo":
      todosOsJogos = FlamengoJogos();
      break;
    case "Fluminense":
      todosOsJogos = FluminenseJogos();
      break;
    case "Vasco":
      todosOsJogos = VascoJogos();
      break;
    default:
      todosOsJogos = Jogos();
      break;
  }

  return (
    <>
      <Router>
        <Navbar meuTime={meuTime} style={{ position: 'fixed' }} />
        <Routes>
          <Route path='/' element={<Inicio meuTime={meuTime} jogos={Jogos} />} />
          <Route path='/anos' element={<Anos meuTime={meuTime} jogos={Jogos} />} />
          <Route path='/estadios' element={<Estadios meuTime={meuTime} jogos={Jogos} />} />
          <Route path='/adversarios' element={<Adversarios meuTime={meuTime} jogos={Jogos} />} />
          {/* <Route path='/viewAnos'/>
          <Route path='/viewEstadios'/>
          <Route path='/viewAdversarios'/> */}
          <Route path='/todosOsJogos' element={<TodosOsJogos meuTime={meuTime} todosOsJogos={todosOsJogos} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
