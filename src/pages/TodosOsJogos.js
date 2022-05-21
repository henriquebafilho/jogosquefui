import React from 'react';
import Times from '../Times';

function TodosOsJogos(props) {
  return (
    <>
      <div className="App-header" style={{backgroundColor: Times(props.meuTime).backgroundColor, color: Times(props.meuTime).letterColor}}>
          <h1>Todos os Jogos do {Times(props.meuTime).nomeAtual}</h1>
      </div>
    </>
  )
}

export default TodosOsJogos;