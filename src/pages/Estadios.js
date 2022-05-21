import React from 'react';
import Times from '../Times';

function Estadios(props) {
  return (
    <div className="App-header" style={{backgroundColor: Times(props.meuTime).backgroundColor, color: Times(props.meuTime).letterColor}}>
        <h1>Estádios</h1>
    </div>
  )
}

export default Estadios;