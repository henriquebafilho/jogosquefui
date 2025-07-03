import { Routes, Route, Navigate } from 'react-router-dom';
import TabMain from '../components/TabMain';
import ProximosJogos from './ProximosJogos';
import Anos from './Anos';
import Estadios from './Estadios';
import Adversarios from './Adversarios';
import UltimosJogos from './UltimosJogos';
import Times from '../Times';
import { useTime } from '../Time';
import TabRecentes from '../components/TabRecentes';
import ViewAno from './viewScreens/ViewAno';

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

      <TabMain />

      <TabRecentes />

      <Routes>
        <Route path="/" element={<UltimosJogos time={time} />} />
        <Route path="proximos" element={<ProximosJogos time={time} />} />
        <Route path="anos" element={<Anos time={time} />} />
        <Route path="anos/:ano" element={<ViewAno time={time} />} />
        <Route path="estadios" element={<Estadios time={time} />} />
        <Route path="adversarios" element={<Adversarios time={time} />} />
        <Route path="*" element={<Navigate to="/jogosquefui/" replace />} />
      </Routes>
    </div>
  );
}

export default Principal;