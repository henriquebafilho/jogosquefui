import React from 'react';
import Times from '../Times';
import jogos from '../jogos';

function Adversarios(props) {
  var adversarios = [];

  for(var i in jogos()){
    if (Times(jogos()[i][0]).nomeAtual !== props.meuTime) {
      if (!adversarios.includes(Times(jogos()[i][0]).nomeAtual)) {
        adversarios.push(Times(jogos()[i][0]).nomeAtual);
      }
    }
    if (Times(i[1]).nomeAtual !== props.meuTime) {
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
                  <img src={require('../escudos/' + Times(Times(i).nomeAtual).escudo + '.png')} style={{ verticalAlign: 'middle' }} alt='escudo' height='90' width='90' />
                  <div style={{ display: 'inline', padding: '10px' }}>{Times(i).nomeAtual + ' (' + total + ')'}</div>
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

export default Adversarios;