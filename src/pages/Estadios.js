import React, { Component } from 'react';
import Times from '../Times';
import common from '../common';
import ViewEstadio from './viewScreens/ViewEstadio';

class Estadios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meuTime: props.meuTime,
      jogos: props.jogos,
      estadios: [],
      isLoading: false,
      clicked: false,
      estadioAtual: '',
      jogosEstadio: []
    }
    this.buttonClick = this.buttonClick.bind(this);
  }

  async componentDidMount() {
    this._isMounted = true;
    window.scrollTo(0, 0);
    this.setState({ isLoading: true })
    await this.getEstadios();
    this.setState({ isLoading: false })
  }

  getEstadios = async () => {
    var jogos = this.state.jogos;

    for (var i in jogos) {
      if (!this.state.estadios.includes(jogos[i][6])) {
        this.state.estadios.push(jogos[i][6]);
      }
    }

    this.state.estadios.sort();
  }

  buttonClick = async (estadio) => {
    this.setState({ clicked: true, estadioAtual: estadio });
    await this.getEstadioJogos(estadio);
  }

  getEstadioJogos = async (estadio) => {
    var estadioAtual = estadio;

    for (var a = 0; a < this.state.jogos.length; a++) {
      if (this.state.jogos[a][6] === estadioAtual) {
        if (!this.state.jogosEstadio.includes(this.state.jogos[a])) {
          this.state.jogosEstadio.push(this.state.jogos[a]);
        }
      }
    }
  }

  render() {
    const meuTime = this.state.meuTime;
    const jogos = this.state.jogos;
    const buttonClickFunction = (estadio) => this.buttonClick(estadio);
    return (
      this.state.clicked ? <ViewEstadio meuTime={this.props.meuTime} jogos={jogos} jogosEstadio={this.state.jogosEstadio} estadio={this.state.estadioAtual} /> :
        <div className="App-header" style={{ backgroundColor: Times(this.props.meuTime).backgroundColor, color: Times(this.props.meuTime).letterColor }}>
          <h1>Estádios</h1>
          <br />
          <h4>{"Você foi a " + this.state.estadios.length + " estádios"}</h4>
          <br />
          <table>
            <tbody>
              {this.state.isLoading && <h1>Carregando...</h1>}
              {this.state.estadios.length > 0 ?
                !this.state.isLoading && this.state.estadios.map(function (i) {
                  var totalEstadio = common.getTotalEstadio(i, jogos);
                  return <div>
                    <button id='selectEstadio' onClick={() => buttonClickFunction(i)} style={{ borderColor: Times(meuTime).letterColor, borderStyle: 'solid', backgroundColor: Times(meuTime).backgroundColor, color: Times(meuTime).letterColor, width: '60vw' }}>
                      <div style={{ display: 'inline', padding: '10px', fontSize: '40px' }}>{i}</div>
                      <div style={{ paddingBottom: '5px', fontSize: '15px' }}>{totalEstadio} {totalEstadio > 1 ? "jogos" : "jogo"}</div>
                    </button>
                  </div>
                }) : <div>
                  <h1 style={{ color: Times(this.state.meuTime).letterColor, textAlign: 'center', paddingBottom: '50px' }}>Você ainda não possui jogos cadastrados</h1>
                  <h4 style={{ color: Times(this.state.meuTime).letterColor, textAlign: 'center' }}>Vá em "Jogos do {this.state.meuTime}" para selecionar</h4>
                  <h4 style={{ color: Times(this.state.meuTime).letterColor, textAlign: 'center' }}>os jogos que você já foi</h4>
                </div>}
            </tbody>
          </table>
        </div>
    )
  }
}

export default Estadios;