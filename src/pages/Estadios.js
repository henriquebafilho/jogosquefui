import React from 'react';
import Times from '../Times';
import jogos from '../jogos';

function Estadios(props) {
  var estadios = [];

  for(var i in jogos()){
    if (!estadios.includes(jogos[i][6])) {
      estadios.push(jogos[i][6]);
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
                <div>
                  <p>{total} jogo{total > 1 ? 's' : ''}</p>
                  <div className='resultsBar'>
                    <div className="vitoriasBar"
                      style={{
                        width: vitorias * 100 / total + '%',
                        borderTopLeftRadius: vitorias > 0 ? '10px' : '',
                        borderBottomLeftRadius: vitorias > 0 ? '10px' : '',
                        borderTopRightRadius: (vitorias > 0 && empates === 0 && derrotas === 0) ? '10px' : '',
                        borderBottomRightRadius: (vitorias > 0 && empates === 0 && derrotas === 0) ? '10px' : ''
                      }}>
                      {vitorias > 0 ? vitorias : ""}
                    </div>
                    <div className="empatesBar" style={{
                      width: empates * 100 / total + '%',
                      borderTopLeftRadius: (vitorias === 0 && empates > 0) ? '10px' : '',
                      borderBottomLeftRadius: (vitorias === 0 && empates > 0) ? '10px' : '',
                      borderTopRightRadius: (empates > 0 && derrotas === 0) ? '10px' : '',
                      borderBottomRightRadius: (empates > 0 && derrotas === 0) ? '10px' : ''
                    }}>
                      {empates > 0 ? empates : ""}
                    </div>
                    <div className="derrotasBar" style={{
                      width: derrotas * 100 / total + '%',
                      borderTopLeftRadius: (vitorias === 0 && empates === 0 && derrotas > 0) ? '10px' : '',
                      borderBottomLeftRadius: (vitorias === 0 && empates === 0 && derrotas > 0) ? '10px' : '',
                      borderTopRightRadius: derrotas > 0 ? '10px' : '',
                      borderBottomRightRadius: derrotas > 0 ? '10px' : ''
                    }}>
                      {derrotas > 0 ? derrotas : ""}
                    </div>
                  </div>
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