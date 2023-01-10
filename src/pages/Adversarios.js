import React, { Component } from 'react';
import Times from '../Times';
import common from '../common';
import ViewAdversario from './viewScreens/ViewAdversario';

class Adversarios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meuTime: props.meuTime,
      jogos: props.meusJogos.getJogos(),
      adversarios: [],
      isLoading: false,
      clicked: false,
      adversarioAtual: '',
      jogosAdversario: []
    }
    this.buttonClick = this.buttonClick.bind(this);
  }

  async componentDidMount() {
    this._isMounted = true;
    window.scrollTo(0, 0);
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

  buttonClick = async (adversario) => {
    this.setState({ clicked: true, adversarioAtual: adversario });
    await this.getAdversarioJogos(adversario);
  }

  getAdversarioJogos = async (adversario) => {
    var adversarioAtual = adversario;

    for (var a = 0; a < this.state.jogos.length; a++) {
      if (((this.state.jogos[a][0] === this.state.meuTime) && (Times(this.state.jogos[a][1]).nomeAtual === adversarioAtual)) ||
        ((this.state.jogos[a][1] === this.state.meuTime) && (Times(this.state.jogos[a][0]).nomeAtual === adversarioAtual))) {
        if (!this.state.jogosAdversario.includes(this.state.jogos[a])) {
          this.state.jogosAdversario.push(this.state.jogos[a]);
        }
      }
    }
  }

  render() {
    const meuTime = this.state.meuTime;
    const meusJogos = this.props.meusJogos;
    const buttonClickFunction = (adversario) => this.buttonClick(adversario);
    return (
      this.state.clicked ? <ViewAdversario meuTime={this.props.meuTime} meusJogos={meusJogos} jogosAdversario={this.state.jogosAdversario} adversario={this.state.adversarioAtual} /> :
        (<div className="App-header" style={{ backgroundColor: Times(this.props.meuTime).backgroundColor, color: Times(this.props.meuTime).letterColor }}>
          <h1>Adversários</h1>
          <br />
          <table>
            <tbody>
              {this.state.isLoading && <h1>Carregando...</h1>}
              {this.state.adversarios.length > 0 ?
                !this.state.isLoading && this.state.adversarios.map(function (i) {
                  var totalAdversario = common.getTotalAdversario(meuTime, i, meusJogos.getJogos());
                  return <div >
                    <button id='selectTime' onClick={() => buttonClickFunction(Times(i).nomeAtual)} style={{ backgroundColor: Times(Times(i).nomeAtual).backgroundColor, color: Times(Times(i).nomeAtual).letterColor, borderColor: Times(meuTime).backgroundColor === 'white' ? 'black' : 'white', borderStyle: 'solid', width: '60vw' }}>
                      <img src={require('../escudos/' + Times(Times(i).nomeAtual).escudo + '.png')} style={{ verticalAlign: 'middle' }} alt='escudo' height='75' width='75' />
                      <div style={{ paddingTop: '5px', fontSize: '30px' }}>{Times(i).nomeAtual}</div>
                      <div style={{ paddingBottom: '5px', fontSize: '15px' }}>{totalAdversario} {totalAdversario > 1 ? "jogos" : "jogo"}</div>
                    </button>
                  </div>
                }) : <div>
                  <h1 style={{ color: Times(this.state.meuTime).letterColor, textAlign: 'center', paddingBottom: '50px' }}>Você ainda não possui jogos cadastrados</h1>
                  <h4 style={{ color: Times(this.state.meuTime).letterColor, textAlign: 'center' }}>Vá em "Jogos do {this.state.meuTime}" para selecionar os jogos que você já foi</h4>
                </div>}
            </tbody>
          </table>
        </div>)
    )
  }
}

export default Adversarios;