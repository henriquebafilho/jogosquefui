import React, { Component } from 'react';
import Times from '../Times';
import Estatisticas from '../components/Estatisticas';
import LinhaJogo from '../components/LinhaJogo';

class Adversarios extends Component {
  state = {
    meuTime: this.props.meuTime,
    jogos: this.props.jogos(),
    vitorias: [],
    empates: [],
    derrotas: [],
    adversarios: [],
    isLoading: false
  }

  async componentDidMount() {
    this.setState({ isLoading: true })
    await this.getAdversarios();
    this.setState({ isLoading: false })
  }

  getAdversarios = async () => {
    var jogos = this.state.jogos;

    for (var i in jogos) {
      if (Times(jogos[i][0]).nomeAtual !== this.props.meuTime) {
        if (!this.state.adversarios.includes(Times(jogos[i][0]).nomeAtual)) {
          this.state.adversarios.push(Times(jogos[i][0]).nomeAtual);
        }
      }
      if (Times(jogos[i][1]).nomeAtual !== this.props.meuTime) {
        if (!this.state.adversarios.includes(Times(jogos[i][1]).nomeAtual)) {
          this.state.adversarios.push(Times(jogos[i][1]).nomeAtual);
        }
      }
    }
    this.state.adversarios.sort();
  }

  getVitoriasAdversario(adversario) {
    var vitorias = 0;
    var jogos = this.state.jogos;

    for (var a in jogos) {
      if (((jogos[a][0] === this.props.meuTime) && (jogos[a][2] > jogos[a][3]))) {
        if (Times(jogos()[a][1]).nomeAtual === Times(adversario).nomeAtual) {
          vitorias += 1;
        }
      }
      if ((jogos[a][1] === this.props.meuTime) && (jogos[a][3] > jogos[a][2])) {
        if (Times(jogos()[a][0]).nomeAtual === Times(adversario).nomeAtual) {
          vitorias += 1;
        }
      }
    }
    return vitorias;
  }

  getEmpatesAdversario = (adversario) => {
    var empates = 0;
    var jogos = this.state.jogos;

    for (var a in jogos) {
      if (((jogos[a][0] === this.props.meuTime) && (jogos[a][2] === jogos[a][3]))) {
        if (Times(jogos[a][1]).nomeAtual === Times(adversario).nomeAtual) {
          empates += 1;
        }
      }
      if ((jogos[a][1] === this.props.meuTime) && (jogos[a][3] === jogos[a][2])) {
        if (Times(jogos[a][0]).nomeAtual === Times(adversario).nomeAtual) {
          empates += 1;
        }
      }
    }
    return empates;
  }

  getDerrotasAdversario = (adversario) => {
    var derrotas = 0;
    var jogos = this.state.jogos;

    for (var a in jogos) {
      if (((jogos[a][0] === this.props.meuTime) && (jogos[a][2] < jogos[a][3]))) {
        if (Times(jogos[a][1]).nomeAtual === Times(adversario).nomeAtual) {
          derrotas += 1;
        }
      }
      if ((jogos[a][1] === this.props.meuTime) && (jogos[a][3] < jogos[a][2])) {
        if (Times(jogos[a][0]).nomeAtual === Times(adversario).nomeAtual) {
          derrotas += 1;
        }
      }
    }
    return derrotas;
  }

  render() {
    return (
      <div className="App-header" style={{ backgroundColor: Times(this.props.meuTime).backgroundColor, color: Times(this.props.meuTime).letterColor }}>
        <h1>Adversários</h1>
        <table>
          <tbody>
            {this.state.isLoading && <h1>ESPERA AÍ</h1>}
            {
              !this.state.isLoading && this.state.adversarios.map(function (i) {
                return <details>
                  <summary id='summaryAdversario' style={{ backgroundColor: Times(Times(i).nomeAtual).backgroundColor, color: Times(Times(i).nomeAtual).letterColor, borderColor: 'white', borderStyle: 'solid' }}>
                    <img src={require('../escudos/' + Times(Times(i).nomeAtual).escudo + '.png')} style={{ verticalAlign: 'middle' }} alt='escudo' height='75' width='75' />
                    <div style={{ display: 'inline', padding: '10px' }}>{Times(i).nomeAtual /* + ' (' + total + ')' */}</div>
                  </summary>
                  {/*this.state.jogos.reverse().map(function (jogo) {
                    if (Times(jogo[0]).nomeAtual === Times(i).nomeAtual || Times(jogo[1]).nomeAtual === Times(i).nomeAtual) {
                      return <LinhaJogo jogo={jogo} />
                    }
                  })*/}
                  {/* CHAMAR CLASSE VIEW ADVERSARIO */}
                </details>
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default Adversarios;