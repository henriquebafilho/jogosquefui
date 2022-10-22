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
      <Estatisticas meuTime={props.meuTime} vitorias={10} empates={10} derrotas={10} total={30} /> {/* mudar parâmetros */}
      {props.jogos().reverse().map((index) => {
        return <LinhaJogo jogo={index}/>
      })}
  </div>
  )
}

export default Inicio;