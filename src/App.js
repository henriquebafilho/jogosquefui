import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio.js';
import TodosOsJogos from './pages/TodosOsJogos.js';
import Adversarios from './pages/Adversarios.js';
import Campeonatos from './pages/Campeonatos.js';
import Estadios from './pages/Estadios.js';

function App() {
  var meuTime = "Botafogo";
  return (
    <>
      <Router>
          <Navbar meuTime={meuTime} style={{position: 'fixed'}}/>
          <Routes>
            <Route path='/inicio' element={<Inicio meuTime={meuTime}/>}/>
            <Route path='/adversarios' element={<Adversarios meuTime={meuTime}/>}/>
            <Route path='/campeonatos' element={<Campeonatos meuTime={meuTime}/>}/>
            <Route path='/estadios' element={<Estadios meuTime={meuTime}/>}/>
            <Route path='/todosOsJogos' element={<TodosOsJogos meuTime={meuTime}/>}/>
          </Routes>
      </Router>
      </>
  );
}

export default App;
