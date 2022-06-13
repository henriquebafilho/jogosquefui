import React from 'react';
import Times from '../Times';
import jogos from '../jogos';

function Estadios(props) {
  var estadios = [];

  jogos().map(function (i) {
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
              return <details>
              <summary id='summaryDefault' style={{ borderColor:  'white', borderStyle: 'solid'}}>
                <div style={{display: 'inline', padding: '10px'}}>{i + ' (10)'}</div>
              </summary>
              {/* CHAMAR OS JOGOS NO ESTÁDIO */}
              <div>
                <p>Jogos no estádio {i}</p>
              </div>
            </details>
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Estadios;