import React from 'react';
import Times from '../Times';
import LinhaJogo from '../components/LinhaJogo';
import Estatisticas from '../components/Estatisticas';

function Inicio(props) {
  return (
    <div className="App-header" style={{backgroundColor: Times(props.meuTime).backgroundColor}}>
      <img src={require('../escudos/'+Times(props.meuTime).escudo+'.png')} className="App-logo" alt={"Escudo do "+props.meuTime} />
      <p style={{color: Times(props.meuTime).letterColor}}>
        Eu sou {Times(props.meuTime).nomeAtual}
      </p>
      <Estatisticas meuTime={props.meuTime} jogos={props.jogos()} /* remover os 4 últimos e calculá-los dentro de estatísticas */ vitorias={118} empates={47} derrotas={73} total={238} /> {/* mudar parâmetros */}
      {props.jogos().reverse().map((index) => {
        return <LinhaJogo meuTime={props.meuTime} jogo={index}/>
      })}
  </div>
  )
}

export default Inicio;