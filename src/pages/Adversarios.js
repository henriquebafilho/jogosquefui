import React from 'react';
import Times from '../Times';

function Adversarios(props) {
  var adversarios = ['Palmeiras', 'Corinthians'];

  return (
    <div className="App-header" style={{ backgroundColor: Times(props.meuTime).backgroundColor, color: Times(props.meuTime).letterColor }}>
      <h1>Adversários</h1>
      <table style={{ border: Times(props.meuTime).letterColor, borderStyle: 'solid' }}>
        <tbody>
          {
            adversarios.map(function (i) {
              return <tr>
                <td><img src={require('../escudos/'+Times(Times(i).nomeAtual).escudo+'.png')} alt='escudo' height='100' width='100' /></td>
                <td>{Times(i).nomeAtual}</td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Adversarios;