import React from 'react';
import Times from '../Times';

function Campeonatos(props) {
  return (
    <div className="App-header" style={{backgroundColor: Times(props.meuTime).backgroundColor, color: Times(props.meuTime).letterColor}}>
        <h1>Campeonatos</h1>
    </div>
  )
}

export default Campeonatos;