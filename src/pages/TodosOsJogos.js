import React from 'react';
import Times from '../Times';
import LinhaJogo from '../components/LinhaJogo';
import Estatisticas from '../components/Estatisticas';

function TodosOsJogos(props) {
  return (
    <div className="App-header" style={{ backgroundColor: Times(props.meuTime).backgroundColor, color: Times(props.meuTime).letterColor }}>
      <h1 style={{ padding: '20px' }}>Todos os jogos do {Times(props.meuTime).nomeAtual}</h1>
      <img src={require('../escudos/' + Times(props.meuTime).escudo + '.png')} className="App-logo" alt={"Escudo do " + props.meuTime} style={{ width: '100px', height: '100px' }} />
      {/* <Estatisticas meuTime={props.meuTime} jogos={props.todosOsJogos} /> */}
      <h4 style={{ padding: '20px' }}>Selecione os jogos que você já foi:</h4>
      {props.todosOsJogos.reverse().map((index) => {
        return <LinhaJogo meuTime={props.meuTime} jogo={index} />
      })}
    </div>
  )
}

export default TodosOsJogos;