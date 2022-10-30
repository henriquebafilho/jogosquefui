import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio.js';
import TodosOsJogos from './pages/TodosOsJogos.js';
import Adversarios from './pages/Adversarios.js';
import Anos from './pages/Anos.js';
import Estadios from './pages/Estadios.js';
import ViewAdversario from './pages/viewScreens/ViewAdversario';
import ViewAno from './pages/viewScreens/ViewAno';
import ViewEstadio from './pages/viewScreens/ViewEstadio';
import Jogos from './FluminenseJogos'

function App() {
  var meuTime = "Fluminense";
  return (
    <>
      <Router>
        <Navbar meuTime={meuTime} style={{ position: 'fixed' }} />
        <Routes>
          <Route path='/' element={<Inicio meuTime={meuTime} jogos={Jogos} />} />
          <Route path='/anos' element={<Anos meuTime={meuTime} jogos={Jogos} />} />
          <Route path='/estadios' element={<Estadios meuTime={meuTime} jogos={Jogos} />} />
          <Route path='/adversarios' element={<Adversarios meuTime={meuTime} jogos={Jogos} />} />
          <Route path='/viewAnos'/>
          <Route path='/viewEstadios'/>
          <Route path='/viewAdversarios'/>
          <Route path='/todosOsJogos' element={<TodosOsJogos meuTime={meuTime} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
