import React from 'react';
import Times from '../Times';

function Inicio(props) {
  return (
    <div className="App-header" style={{backgroundColor: Times(props.meuTime).backgroundColor}}>
      <img src={require('../escudos/'+Times(props.meuTime).escudo+'.png')} className="App-logo" alt={"Escudo do "+props.meuTime} />
      <p style={{color: Times(props.meuTime).letterColor}}>
        Eu sou {Times(props.meuTime).nomeAtual}
      </p>
  </div>
  )
}

export default Inicio;