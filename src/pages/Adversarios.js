import React, { Component } from 'react';
import Times from '../Times';

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

  render() {
    return (
      <div className="App-header" style={{ backgroundColor: Times(this.props.meuTime).backgroundColor, color: Times(this.props.meuTime).letterColor }}>
        <h1>Adversários</h1>
        <br />
        <table>
          <tbody>
            {this.state.isLoading && <h1>ESPERA AÍ</h1>}
            {
              !this.state.isLoading && this.state.adversarios.map(function (i) {
                return <div>
                  <button id='selectTime' style={{ backgroundColor: Times(Times(i).nomeAtual).backgroundColor, color: Times(Times(i).nomeAtual).letterColor, borderColor: 'white', borderStyle: 'solid' }}>
                    <img src={require('../escudos/' + Times(Times(i).nomeAtual).escudo + '.png')} style={{ verticalAlign: 'middle' }} alt='escudo' height='75' width='75' />
                    <div style={{ padding: '5px' }}>{Times(i).nomeAtual /* + ' (' + total + ')' */}</div>
                  </button>
                  {/*this.state.jogos.reverse().map(function (jogo) {
                    if (Times(jogo[0]).nomeAtual === Times(i).nomeAtual || Times(jogo[1]).nomeAtual === Times(i).nomeAtual) {
                      return <LinhaJogo jogo={jogo} />
                    }
                  })*/}
                  {/* CHAMAR CLASSE VIEW ADVERSARIO */}
                </div>
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default Adversarios;