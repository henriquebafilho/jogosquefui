import React, { Component } from 'react';
import Times from '../Times';
import common from '../common';

class Adversarios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meuTime: props.meuTime,
      jogos: props.jogos(),
      vitorias: [],
      empates: [],
      derrotas: [],
      adversarios: [],
      isLoading: false
    }
  }

  async componentDidMount() {
    this._isMounted = true; // ???
    this.setState({ isLoading: true })
    await this.getAdversarios();
    this.setState({ isLoading: false })
  }

  getAdversarios = async () => {
    var jogos = this.state.jogos;

    for (var a in jogos) {
      if (Times(jogos[a][0]).nomeAtual !== this.props.meuTime) {
        if (!this.state.adversarios.includes(Times(jogos[a][0]).nomeAtual)) {
          this.state.adversarios.push(Times(jogos[a][0]).nomeAtual);
        }
      }
      if (Times(jogos[a][1]).nomeAtual !== this.props.meuTime) {
        if (!this.state.adversarios.includes(Times(jogos[a][1]).nomeAtual)) {
          this.state.adversarios.push(Times(jogos[a][1]).nomeAtual);
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
                var totalAdversario = common.getTotalAdversario("Botafogo", i); // trocar para props.meuTime
                return <div>
                  <button id='selectTime' style={{ backgroundColor: Times(Times(i).nomeAtual).backgroundColor, color: Times(Times(i).nomeAtual).letterColor, borderColor: 'white', borderStyle: 'solid' }}>
                    <img src={require('../escudos/' + Times(Times(i).nomeAtual).escudo + '.png')} style={{ verticalAlign: 'middle' }} alt='escudo' height='75' width='75' />
                    <div style={{ paddingTop: '5px', fontSize: '20px' }}>{Times(i).nomeAtual}</div>
                    <div style={{ paddingBottom: '5px', fontSize: '10px' }}>{totalAdversario} {totalAdversario > 1 ? "jogos" : "jogo"}</div>
                  </button>
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