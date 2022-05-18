import './App.css';
import Times from './Times';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Adversarios from './pages/Adversarios.js';
import Campeonatos from './pages/Campeonatos.js';
import Estadios from './pages/Estadios.js';

function App() {
  var meuTime = "Cruzeiro";
  return (
    <>
      <Router>
          <Navbar/>
          <Routes>
            <Route path='/' exact component={Home}/>
            <Route path='/adversarios' exact component={Adversarios}/>
            <Route path='/campeonatos' component={Campeonatos}/>
            <Route path='/estadios' component={Estadios}/>
          </Routes>
      </Router>
      <div className="App">
        <header className="App-header" style={{backgroundColor: Times(meuTime).backgroundColor}}>
          <img src={require('./escudos/'+Times(meuTime).escudo+'.png')} className="App-logo" alt={"Escudo do "+meuTime} />
          <p style={{color: Times(meuTime).letterColor}}>
            Eu sou {Times(meuTime).nomeAtual}
          </p>
          <details style={{color: Times(meuTime).letterColor}}>
            <summary style={{color: Times(meuTime).letterColor}}>
              Summary
            </summary>
            <p>
              Details
            </p>
          </details>
        </header>
      </div>
      </>
  );
}

export default App;
