import React from 'react';
import Times from '../Times';

function TodosOsJogos(props) {
  return (
    <>
      <div className='todosOsJogos'>
          <h1>Todos os Jogos do {Times(props.meuTime).nomeAtual}</h1>
      </div>
    </>
  )
}

export default TodosOsJogos;