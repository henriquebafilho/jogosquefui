import React from 'react';
import Times from '../Times';
import LinhaJogo from '../components/LinhaJogo';
import Estatisticas from '../components/Estatisticas';

function Inicio(props) {
  const meuTime = props.meuTime;
  let anoAtual = 0;
  return (
    <div className="App-header" style={{ backgroundColor: Times(props.meuTime).backgroundColor }}>
      <p style={{ color: Times(props.meuTime).letterColor }}>
        Eu sou {Times(props.meuTime).nomeAtual}
      </p>
      <img src={require('../escudos/' + Times(props.meuTime).escudo + '.png')} className="App-logo" alt={"Escudo do " + props.meuTime} />
      <br />
      {props.jogos().length > 0 && <Estatisticas meuTime={props.meuTime} jogos={props.jogos()} />}
      {props.jogos().length > 0 ? props.jogos().reverse().map((index) => {
        let mostraAno = false;
        if (anoAtual !== index[5].split("-")[0]) {
          anoAtual = index[5].split("-")[0];
          mostraAno = true;
        }
        return <div>
          {mostraAno ? <h1 style={{ textAlign: 'center', paddingBottom: '10px', color: Times(meuTime).letterColor }}>{anoAtual}</h1> : ""}
          <LinhaJogo meuTime={meuTime} jogo={index} />
        </div>
      }) : <div>
        <h1 style={{ color: Times(props.meuTime).letterColor, textAlign: 'center', paddingBottom: '50px' }}>Você ainda não possui jogos cadastrados</h1>
        <h4 style={{ color: Times(props.meuTime).letterColor, textAlign: 'center' }}>Vá em "Jogos do {props.meuTime}" para selecionar</h4>
        <h4 style={{ color: Times(props.meuTime).letterColor, textAlign: 'center' }}>os jogos que você já foi</h4>
      </div>}
    </div>
  )
}

export default Inicio;