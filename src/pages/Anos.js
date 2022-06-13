import React from 'react';
import Times from '../Times';
import jogos from '../jogos';

function Anos(props) {
  var anos = [];

  jogos().map(function (i) {
    const currentDate = new Date(i[5]);
    if(!anos.includes(currentDate.getFullYear())){
      anos.push(currentDate.getFullYear());
    }
  })

  anos.sort();
  anos.reverse();

  return (
    <div className="App-header" style={{backgroundColor: Times(props.meuTime).backgroundColor, color: Times(props.meuTime).letterColor}}>
        <h1>Anos</h1>
        <table>
        <tbody>
          {
            anos.map(function (i) {
              return <details>
              <summary id='summaryDefault' style={{ borderColor:  'white', borderStyle: 'solid'}}>
                <div style={{display: 'inline', padding: '10px'}}>{i + ' (10)'}</div>
              </summary>
              {/* CHAMAR OS JOGOS NO ANO */}
              <div>
                <p>Jogos no ano de {i}</p>
              </div>
            </details>
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Anos;