import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Perfil from './pages/Perfil';
import VoltarAoTopo from './components/VoltarAoTopo';
import ViewAno from './pages/viewScreens/ViewAno';
import Anos from './pages/Anos';
import Times from './Times';

function App() {
  const meuTime = "Botafogo";
  document.body.style = `background: ${Times(meuTime).backgroundColor}; color: ${Times(meuTime).letterColor}`;

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/jogosquefui' element={<Perfil meuTime={meuTime} />} />
          <Route exact path='/jogosquefui/anos/' element={<Anos meuTime={meuTime} />} />
          <Route exact path='/jogosquefui/anos/:ano' element={<ViewAno />} />
        </Routes>
      </Router>
      <VoltarAoTopo />
      <Footer />
    </>
  );
}

export default App;