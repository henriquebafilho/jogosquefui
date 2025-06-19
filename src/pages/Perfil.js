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
        <div style={{ margin: '20px' }}>
          <p style={{ display: 'inline', color: Times(props.meuTime).letterColor }}>
            Botafogo de Futebol e Regatas
          </p>
        </div>
        <img src={require('../escudos/' + Times(props.meuTime).escudo + '.png')} className="App-logo" alt={"Escudo do " + props.meuTime} style={{ verticalAlign: 'middle', width: '100px', height: '100px' }} />
        <br />
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

function Perfil() {
  const meuTime = "Botafogo";
  document.body.style = `background: ${Times(meuTime).backgroundColor}; color: ${Times(meuTime).letterColor}`;
  return (
    <div>
      {/* Cabeçalho do Perfil (fica sempre visível) */}
      <header>
        <h1>Meu Perfil</h1>
        <p>Informações de usuário</p>
      </header>

      {/* Componente de Tabs */}
      <Tabs />

      {/* Conteúdo das Telas (renderizado pela rota filha) */}
      <main style={{ padding: '20px' }}>
        <Routes>
          {/* Redireciona para a primeira tela por padrão se a rota for apenas /perfil */}
          <Route path="/" element={<Navigate to="tela1" replace />} />
          <Route path="proximos" element={<ProximosJogos meuTime={meuTime}/>} />
          <Route path="anos" element={<Anos meuTime={meuTime}/>} />
          <Route path="estadios" element={<Estadios meuTime={meuTime}/>} />
          <Route path="adversario" element={<Adversarios meuTime={meuTime}/>} />
        </Routes>
      </main>
    </div>
  );
}

export default Perfil;