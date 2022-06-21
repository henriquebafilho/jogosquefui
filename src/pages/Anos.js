import React from 'react';
import Times from '../Times';
import jogos from '../jogos';

function Anos(props) {
  var anos = [];

  for(var i in jogos()){
    const currentDate = new Date(jogos[i][5]);
    if (!anos.includes(currentDate.getFullYear())) {
      anos.push(currentDate.getFullYear());
    }
  }

  anos.sort();
  anos.reverse();

  function getPartidasAno(ano) {
    var selecionados = [];

    for (var a in jogos()) {
      var dataCortada = jogos()[a][5].split("-");

      if (dataCortada[0] === ano) {
        selecionados.push(jogos()[a]);
      }
    }

    return selecionados;
  }

  /* ESTATÍSTICAS */

  function getVitoriasAno(ano) {
    var vitorias = 0;
    for (var a in jogos()) {
      var dataCortada = jogos()[a][5].split("-");
      if ((dataCortada[0].toString() === ano.toString()) && ano !== null) {
        if (((jogos()[a][0] === props.meuTime) && (jogos()[a][2] > jogos()[a][3])) ||
          ((jogos()[a][1] === props.meuTime) && (jogos()[a][3] > jogos()[a][2]))) {
          vitorias += 1;
        }
      }
    }
    return vitorias;
  }

  function getEmpatesAno(ano) {
    var empates = 0;
    for (var a in jogos()) {
      var dataCortada = jogos()[a][5].split("-");
      if (dataCortada[0].toString() === ano.toString()) {
        if ((jogos()[a][0] === props.meuTime || jogos()[a][1] === props.meuTime) && jogos()[a][2] === jogos()[a][3]) {
          empates += 1;
        }
      }
    }
    return empates;
  }

  function getDerrotasAno(ano) {
    var derrotas = 0;
    for (var a in jogos()) {
      var dataCortada = jogos()[a][5].split("-");
      if (dataCortada[0].toString() === ano.toString()) {
        if ((jogos()[a][0] === props.meuTime && jogos()[a][2] < jogos()[a][3]) || (jogos()[a][1] === props.meuTime && jogos()[a][3] < jogos()[a][2])) {
          derrotas += 1;
        }
      }
    }
    return derrotas;
  }

  return (
    <div className="App-header" style={{ backgroundColor: Times(props.meuTime).backgroundColor, color: Times(props.meuTime).letterColor }}>
      <h1>Anos</h1>
      <table>
        <tbody>
          {
            anos.map(function (i) {
              var vitorias = getVitoriasAno(i);
              var empates = getEmpatesAno(i);
              var derrotas = getDerrotasAno(i);
              var total = vitorias + empates + derrotas;
              return <details>
                <summary id='summaryDefault' style={{ borderColor: 'white', borderStyle: 'solid'}}>
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
                <div>
                  {getPartidasAno(i)}
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