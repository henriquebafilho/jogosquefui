import React from 'react';
import Times from '../Times';
import jogos from '../jogos';

function Adversarios(props) {
  var adversarios = [];

  jogos().map(function (i) {
    if (Times(i[0]).nomeAtual !== props.meuTime) {
      if (!adversarios.includes(Times(i[0]).nomeAtual)) {
        adversarios.push(Times(i[0]).nomeAtual);
      }
    }
    if (Times(i[1]).nomeAtual !== props.meuTime) {
      if (!adversarios.includes(Times(i[1]).nomeAtual)) {
        adversarios.push(Times(i[1]).nomeAtual);
      }
    }
  })

  adversarios.sort();

  return (
    <div className="App-header" style={{ backgroundColor: Times(props.meuTime).backgroundColor, color: Times(props.meuTime).letterColor }}>
      <h1>Adversários</h1>
      <table>
        <tbody>
          {
            adversarios.map(function (i) {
              return <tr style={{ backgroundColor: Times(Times(i).nomeAtual).backgroundColor, color: Times(Times(i).nomeAtual).letterColor }}>
                  <td>
                    <img src={require('../escudos/' + Times(Times(i).nomeAtual).escudo + '.png')} style={{verticalAlign: 'middle'}} alt='escudo' height='90' width='90' />
                    <div style={{display: 'inline'}}>{Times(i).nomeAtual}</div>
                    {/* <p style={{display: 'inline', textAlign: 'right'}}>+</p> */}
                  </td>
                </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Adversarios;