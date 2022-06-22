import React from 'react';
import Times from '../Times';
import jogos from '../jogos';
import Estatisticas from '../components/Estatisticas';

function Estadios(props) {
  var estadios = [];

  for (var i in jogos()) {
    if (!estadios.includes(jogos()[i][6])) {
      estadios.push(jogos()[i][6]);
    }
  }

  estadios.sort();

  /* ESTATÍSTICAS */

  function getVitoriasEstadio(estadio) {
    var vitorias = 0;
    for (var a in jogos()) {
      if ((jogos()[a][6] === estadio)) {
        if (((jogos()[a][0] === props.meuTime) && (jogos()[a][2] > jogos()[a][3])) ||
          ((jogos()[a][1] === props.meuTime) && (jogos()[a][3] > jogos()[a][2]))) {
          vitorias += 1;
        }
      }
    }
    return vitorias;
  }

  function getEmpatesEstadio(estadio) {
    var empates = 0;
    for (var a in jogos()) {
      if ((jogos()[a][6] === estadio)) {
        if ((jogos()[a][0] === props.meuTime || jogos()[a][1] === props.meuTime) && jogos()[a][2] === jogos()[a][3]) {
          empates += 1;
        }
      }
    }
    return empates;
  }

  function getDerrotasEstadio(estadio) {
    var derrotas = 0;
    for (var a in jogos()) {
      if ((jogos()[a][6] === estadio)) {
        if ((jogos()[a][0] === props.meuTime && jogos()[a][2] < jogos()[a][3]) || (jogos()[a][1] === props.meuTime && jogos()[a][3] < jogos()[a][2])) {
          derrotas += 1;
        }
      }
    }
    return derrotas;
  }

  return (
    <div className="App-header" style={{ backgroundColor: Times(props.meuTime).backgroundColor, color: Times(props.meuTime).letterColor }}>
      <h1>Estádios</h1>
      <table>
        <tbody>
          {
            estadios.map(function (i) {
              var vitorias = getVitoriasEstadio(i);
              var empates = getEmpatesEstadio(i);
              var derrotas = getDerrotasEstadio(i);
              var total = vitorias + empates + derrotas;
              return <details>
                <summary id='summaryDefault' style={{ borderColor: 'white', borderStyle: 'solid' }}>
                  <div style={{ display: 'inline', padding: '10px' }}>{i + ' (' + total + ')'}</div>
                </summary>
                <Estatisticas total={total} vitorias={vitorias} empates={empates} derrotas={derrotas} />
                {jogos().reverse().map(function (jogo) {
                  if (jogo[6] === i) {
                    return <div style={{textAlign: 'center'}}>
                      {jogo[0] + ' ' + jogo[2] + ' x ' + jogo[3] + ' ' + jogo[1]}
                    </div>
                  }
                })}
              </details>
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Estadios;