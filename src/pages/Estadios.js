import React from 'react';
import Times from '../Times';
import jogos from '../jogos';

function Estadios(props) {
  var estadios = [];

  jogos().map(function (i) {
    // acertar taça guanabara/rio com cariocão
    if(!estadios.includes(i[6])){
      estadios.push(i[6]);
    }
  })

  estadios.sort();

  return (
    <div className="App-header" style={{backgroundColor: Times(props.meuTime).backgroundColor, color: Times(props.meuTime).letterColor}}>
        <h1>Estádios</h1>
        <table>
        <tbody>
          {
            estadios.map(function (i) {
              return <tr style={{ backgroundColor: "black", color: "white" }}>
                  <td>
                    <div style={{display: 'inline', padding: '10px'}}>{i}</div>
                  </td>
                </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Estadios;