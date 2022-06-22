import React from 'react';
import Times from '../Times';
import jogos from '../jogos';
import Estatisticas from '../components/Estatisticas';

function Anos(props) {
  var anos = [];

  for (var i in jogos()) {
    const currentDate = new Date(jogos()[i][5]);
    if (!anos.includes(currentDate.getFullYear())) {
      anos.push(currentDate.getFullYear());
    }
  }

  anos.sort();
  anos.reverse();

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
                <summary id='summaryDefault' style={{ borderColor: 'white', borderStyle: 'solid' }}>
                  <div style={{ display: 'inline', padding: '10px' }}>{i + ' (' + total + ')'}</div>
                </summary>
                <Estatisticas total={total} vitorias={vitorias} empates={empates} derrotas={derrotas} />
                {jogos().reverse().map(function (jogo) {
                  var anoJogo = jogo[5].split("-");
                  if (anoJogo[0] === i.toString()) {
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

export default Anos;