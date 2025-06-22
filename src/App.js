import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Principal from './pages/Principal';
import VoltarAoTopo from './components/VoltarAoTopo';
import Times from './Times';
import { TimeProvider } from './Time';

function App() {
  const time = "Botafogo"; //tentar usar context aqui
  document.body.style = `background: ${Times(time).backgroundColor}; color: ${Times(time).letterColor}`;

  return (
    <>
      <TimeProvider>
        <Router>
          <Routes>
            <Route exact path='/jogosquefui/*' element={<Principal time={time} />} />
          </Routes>
        </Router>
        <VoltarAoTopo />
        <Footer />
      </TimeProvider>
    </>
  );
}

export default App;