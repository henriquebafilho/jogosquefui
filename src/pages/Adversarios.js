import React from 'react';
import Times from '../Times';

function Adversarios(props) {
  return (
    <div className="App-header" style={{backgroundColor: Times(props.meuTime).backgroundColor, color: Times(props.meuTime).letterColor}}>
        <h1>Adversários</h1>
    </div>
  )
}

export default Adversarios;