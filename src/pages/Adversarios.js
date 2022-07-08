import React from 'react';
import Times from '../Times';
import jogos from '../jogos';
import Estatisticas from '../components/Estatisticas';
import LinhaJogo from '../components/LinhaJogo';

function Adversarios(props) {
  var adversarios = [];

  for (var i in jogos()) {
    if (Times(jogos()[i][0]).nomeAtual !== props.meuTime) {
      if (!adversarios.includes(Times(jogos()[i][0]).nomeAtual)) {
        adversarios.push(Times(jogos()[i][0]).nomeAtual);
      }
    }
    if (Times(jogos()[i][1]).nomeAtual !== props.meuTime) {
      if (!adversarios.includes(Times(jogos()[i][1]).nomeAtual)) {
        adversarios.push(Times(jogos()[i][1]).nomeAtual);
      }
    }
  }

  adversarios.sort();

  /* ESTATÍSTICAS */

  function getVitoriasEstadio(adversario) {
    var vitorias = 0;
    for (var a in jogos()) {
      if (((jogos()[a][0] === props.meuTime) && (jogos()[a][2] > jogos()[a][3]))) {
        if (Times(jogos()[a][1]).nomeAtual === Times(adversario).nomeAtual) {
          vitorias += 1;
        }
      }
      if ((jogos()[a][1] === props.meuTime) && (jogos()[a][3] > jogos()[a][2])) {
        if (Times(jogos()[a][0]).nomeAtual === Times(adversario).nomeAtual) {
          vitorias += 1;
        }
      }
    }
    return vitorias;
  }

  function getEmpatesEstadio(adversario) {
    var empates = 0;
    for (var a in jogos()) {
      if (((jogos()[a][0] === props.meuTime) && (jogos()[a][2] === jogos()[a][3]))) {
        if (Times(jogos()[a][1]).nomeAtual === Times(adversario).nomeAtual) {
          empates += 1;
        }
      }
      if ((jogos()[a][1] === props.meuTime) && (jogos()[a][3] === jogos()[a][2])) {
        if (Times(jogos()[a][0]).nomeAtual === Times(adversario).nomeAtual) {
          empates += 1;
        }
      }
    }
    return empates;
  }

  function getDerrotasEstadio(adversario) {
    var derrotas = 0;
    for (var a in jogos()) {
      if (((jogos()[a][0] === props.meuTime) && (jogos()[a][2] < jogos()[a][3]))) {
        if (Times(jogos()[a][1]).nomeAtual === Times(adversario).nomeAtual) {
          derrotas += 1;
        }
      }
      if ((jogos()[a][1] === props.meuTime) && (jogos()[a][3] < jogos()[a][2])) {
        if (Times(jogos()[a][0]).nomeAtual === Times(adversario).nomeAtual) {
          derrotas += 1;
        }
      }
    }
    return derrotas;
  }

  return (
    <div className="App-header" style={{ backgroundColor: Times(props.meuTime).backgroundColor, color: Times(props.meuTime).letterColor }}>
      <h1>Adversários</h1>
      <table>
        <tbody>
          {
            adversarios.map(function (i) {
              var vitorias = getVitoriasEstadio(i);
              var empates = getEmpatesEstadio(i);
              var derrotas = getDerrotasEstadio(i);
              var total = vitorias + empates + derrotas;
              return <details>
                <summary id='summaryAdversario' style={{ backgroundColor: Times(Times(i).nomeAtual).backgroundColor, color: Times(Times(i).nomeAtual).letterColor, borderColor: 'white', borderStyle: 'solid' }}>
                  <img src={require('../escudos/' + Times(Times(i).nomeAtual).escudo + '.png')} style={{ verticalAlign: 'middle' }} alt='escudo' height='75' width='75' />
                  <div style={{ display: 'inline', padding: '10px' }}>{Times(i).nomeAtual + ' (' + total + ')'}</div>
                </summary>
                <Estatisticas total={total} vitorias={vitorias} empates={empates} derrotas={derrotas} />
                {jogos().reverse().map(function (jogo) {
                  if (Times(jogo[0]).nomeAtual === Times(i).nomeAtual || Times(jogo[1]).nomeAtual === Times(i).nomeAtual) {
                    return <LinhaJogo jogo={jogo}/>
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

export default Adversarios;