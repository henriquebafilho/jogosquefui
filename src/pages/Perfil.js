/* import React from 'react';
import Times from '../Times';
import Tabs from '../components/Tabs';
import BotafogoJogos from '../TodosOsJogos/BotafogoJogos';

function Perfil(props) {
  const meuTime = props.meuTime;
  let meusJogos = BotafogoJogos();
  meusJogos.sort(function (a, b) {
    return a.data < b.data ? -1 : a.data > b.data ? 1 : 0;
  });

  return (
    <>
      <div className="App-header" style={{ backgroundColor: Times(props.meuTime).backgroundColor }}>
        
        <Tabs meuTime={meuTime} meusJogos={meusJogos} />
      </div>
    </>
  )
}

export default Perfil; */

import { Routes, Route, Navigate } from 'react-router-dom'; // Importe Navigate também
import Tabs from '../components/Tabs';
import ProximosJogos from './ProximosJogos';
import Anos from './Anos';
import Estadios from './Estadios';
import Adversarios from './Adversarios';
import Times from '../Times';
import { useTime } from '../MeuTime';

function Perfil() {
  const meuTime = useTime().time;
  document.body.style = `background: ${Times(meuTime).backgroundColor}; color: ${Times(meuTime).letterColor}`;
  return (
    <div className="App-header" style={{ backgroundColor: Times(meuTime).backgroundColor }}>
      <div style={{ margin: '20px' }}>
        <p style={{ display: 'inline', color: Times(meuTime).letterColor }}>
          Botafogo de Futebol e Regatas
        </p>
      </div>
      <img src={require('../escudos/' + Times(meuTime).escudo + '.png')} className="App-logo" alt={"Escudo do " + meuTime} style={{ verticalAlign: 'middle', width: '100px', height: '100px' }} />
      <br />

      <Tabs meuTime={meuTime} />

      <main style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Navigate to="proximos" replace />} />
          <Route path="proximos" element={<ProximosJogos meuTime={meuTime} />} />
          <Route path="anos" element={<Anos meuTime={meuTime} />} />
          <Route path="estadios" element={<Estadios meuTime={meuTime} />} />
          <Route path="adversarios" element={<Adversarios meuTime={meuTime} />} />
        </Routes>
      </main>
    </div>
  );
}

export default Perfil;