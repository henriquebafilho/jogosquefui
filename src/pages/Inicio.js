import React from 'react';
import Times from '../Times';
import LinhaJogo from '../components/LinhaJogo';
import Estatisticas from '../components/Estatisticas';

function Inicio(props) {
  return (
    <div className="App-header" style={{ backgroundColor: Times(props.meuTime).backgroundColor }}>
      <img src={require('../escudos/' + Times(props.meuTime).escudo + '.png')} className="App-logo" alt={"Escudo do " + props.meuTime} />
      <p style={{ color: Times(props.meuTime).letterColor }}>
        Eu sou {Times(props.meuTime).nomeAtual}
      </p>
      {props.jogos().length > 0 && <Estatisticas meuTime={props.meuTime} jogos={props.jogos()} />}
      {props.jogos().length > 0 ? props.jogos().reverse().map((index) => {
        return <LinhaJogo meuTime={props.meuTime} jogo={index} />
      }) : <div>
        <h1 style={{ textAlign: 'center', paddingBottom: '50px' }}>Você ainda não possui jogos cadastrados</h1>
        <h4 style={{ textAlign: 'center' }}>Vá em "Todos os Jogos do {props.meuTime}" para selecionar</h4>
        <h4 style={{ textAlign: 'center' }}>os jogos que você já foi</h4>
      </div>}
    </div>
  )
}

export default Inicio;