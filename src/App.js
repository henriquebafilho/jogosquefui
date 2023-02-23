import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Login from './pages/Login';
import ConjuntoUsuarios from './ConjuntoUsuarios';
import Navbar from './components/Navbar';

function App() {
  let conjuntoUsuarios = new ConjuntoUsuarios();

  return (
    <>
      <Router>
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
