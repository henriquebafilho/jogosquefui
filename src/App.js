import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Perfil from './pages/Perfil';
import VoltarAoTopo from './components/VoltarAoTopo';
import Times from './Times';
import { TimeProvider } from './MeuTime';

function App() {
  const meuTime = "Botafogo"; //tentar usar context aqui
  document.body.style = `background: ${Times(meuTime).backgroundColor}; color: ${Times(meuTime).letterColor}`;

  return (
    <>
      <TimeProvider>
        <Router>
          <Routes>
            <Route exact path='/jogosquefui/*' element={<Perfil meuTime={meuTime} />} />
          </Routes>
        </Router>
        <VoltarAoTopo />
        <Footer />
      </TimeProvider>
    </>
  );
}

export default App;