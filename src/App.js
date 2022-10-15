import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio.js';
import TodosOsJogos from './pages/TodosOsJogos.js';
import Adversarios from './pages/Adversarios.js';
import Anos from './pages/Anos.js';
import Estadios from './pages/Estadios.js';
import Jogos from './jogos'

function App() {
  var meuTime = "Botafogo";
  return (
    <>
      <Router>
          <Navbar meuTime={meuTime} style={{position: 'fixed'}}/>
          <Routes>
            <Route path='/' element={<Inicio meuTime={meuTime} jogos={Jogos}/>}/>
            <Route path='/anos' element={<Anos meuTime={meuTime} jogos={Jogos}/>}/>
            <Route path='/estadios' element={<Estadios meuTime={meuTime} jogos={Jogos}/>}/>
            <Route path='/adversarios' element={<Adversarios meuTime={meuTime} jogos={Jogos}/>}/>
            <Route path='/todosOsJogos' element={<TodosOsJogos meuTime={meuTime}/>}/>
          </Routes>
      </Router>
      </>
  );
}

export default App;
