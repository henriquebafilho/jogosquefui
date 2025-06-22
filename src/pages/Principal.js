import { Routes, Route, Navigate } from 'react-router-dom';
import Tabs from '../components/Tabs';
import ProximosJogos from './ProximosJogos';
import Anos from './Anos';
import Estadios from './Estadios';
import Adversarios from './Adversarios';
import Times from '../Times';
import { useTime } from '../Time';

function Principal() {
  const time = useTime().time;
  document.body.style = `background: ${Times(time).backgroundColor}; color: ${Times(time).letterColor}`;
  return (
    <div className="App-header" style={{ backgroundColor: Times(time).backgroundColor }}>
      <div style={{ margin: '20px' }}>
        <p style={{ display: 'inline', color: Times(time).letterColor }}>
          Botafogo de Futebol e Regatas
        </p>
      </div>
      <img src={require('../escudos/' + Times(time).escudo + '.png')} className="App-logo" alt={"Escudo do " + time} style={{ verticalAlign: 'middle', width: '100px', height: '100px' }} />
      <br />

      <Tabs time={time} />

      <main style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Navigate to="proximos" replace />} />
          <Route path="proximos" element={<ProximosJogos time={time} />} />
          <Route path="anos" element={<Anos time={time} />} />
          <Route path="estadios" element={<Estadios time={time} />} />
          <Route path="adversarios" element={<Adversarios time={time} />} />
        </Routes>
      </main>
    </div>
  );
}

export default Principal;