import React from 'react';
import Times from '../Times';
import jogos from '../jogos';

function Campeonatos(props) {
  var campeonatos = [];

  jogos().map(function (i) {
    // acertar taça guanabara/rio com cariocão
    if(!campeonatos.includes(i[4])){
      campeonatos.push(i[4]);
    }
  })

  campeonatos.sort();

  return (
    <div className="App-header" style={{backgroundColor: Times(props.meuTime).backgroundColor, color: Times(props.meuTime).letterColor}}>
        <h1>Campeonatos</h1>
        <table>
        <tbody>
          {
            campeonatos.map(function (i) {
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

export default Campeonatos;