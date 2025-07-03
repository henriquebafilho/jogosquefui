import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Principal from './pages/Principal';
import VoltarAoTopo from './components/VoltarAoTopo';
import { TimeProvider } from './Time';

function App() {
  return (
    <>
      <TimeProvider>
        <Router>
          <Routes>
            <Route exact path='/jogosquefui/*' element={<Principal />} />
          </Routes>
        </Router>
        <VoltarAoTopo />
        <Footer />
      </TimeProvider>
    </>
  );
}

export default App;