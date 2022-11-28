import React, { Component } from 'react';
import Times from '../Times';
import common from '../common';
import Estatisticas from '../components/Estatisticas';
import ViewAno from './viewScreens/ViewAno';

class TodosOsJogos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meuTime: props.meuTime,
      jogos: props.jogos,
      anos: [],
      isLoading: false,
      clicked: false,
      anoAtual: '',
      jogosAno: []
    }
    this.buttonClick = this.buttonClick.bind(this);
  }

  async componentDidMount() {
    this._isMounted = true;
    window.scrollTo(0, 0);
    this.setState({ isLoading: true })
    await this.getAnos();
    this.setState({ isLoading: false })
  }

  getAnos = async () => {
    var jogos = this.state.jogos;

    for (var i in jogos) {
      const currentDate = new Date(jogos[i][5]);
      if (!this.state.anos.includes(currentDate.getFullYear())) {
        this.state.anos.push(currentDate.getFullYear());
      }
    }
    this.state.anos.sort();
    this.state.anos.reverse();

  }

  buttonClick = async (ano) => {
    this.setState({ clicked: true, anoAtual: ano });
    await this.getAnoJogos(ano);
  }

  getAnoJogos = async (ano) => {
    var anoAtual = ano;

    for (var a = 0; a < this.state.jogos.length; a++) {
      const currentDate = new Date(this.state.jogos[a][5]);
      if (anoAtual.toString().includes(currentDate.getFullYear())) {
        if (!this.state.jogosAno.includes(this.state.jogos[a])) {
          this.state.jogosAno.push(this.state.jogos[a]);
        }
      }
    }
  }

  render() {
    const meuTime = this.state.meuTime;
    const jogos = this.state.jogos;
    const buttonClickFunction = (ano) => this.buttonClick(ano);
    return (
      this.state.clicked ? <ViewAno flag="todosOsJogos" meuTime={this.props.meuTime} jogos={jogos} jogosAno={this.state.jogosAno} ano={this.state.anoAtual} /> :
      (<div className="App-header" style={{ backgroundColor: Times(this.props.meuTime).backgroundColor, color: Times(this.props.meuTime).letterColor }}>
        <h1 style={{ padding: '20px' }}>Jogos do {Times(this.props.meuTime).nomeAtual}</h1>
        <img src={require('../escudos/' + Times(this.props.meuTime).escudo + '.png')} className="App-logo" alt={"Escudo do " + this.props.meuTime} style={{ width: '100px', height: '100px' }} />
        <br />
        {<Estatisticas meuTime={this.props.meuTime} jogos={this.props.jogos} />}
        <h4 style={{ padding: '20px' }}>Selecione o ano do jogo</h4>
        <table>
          <tbody>
            {this.state.isLoading && <h1>Carregando...</h1>}
            {!this.state.isLoading && this.state.anos.map(function (i) {
              var totalAno = common.getTotalAno(i, jogos);
              return <div>
                <button id='selectAno' onClick={() => buttonClickFunction(i)} style={{ borderColor: Times(meuTime).letterColor, borderStyle: 'solid', backgroundColor: Times(meuTime).backgroundColor, color: Times(meuTime).letterColor, width: '60vw' }}>
                  <div style={{ display: 'inline', padding: '10px', fontSize: '40px' }}>{i}</div>
                  <div style={{ paddingBottom: '5px', fontSize: '15px' }}>{totalAno} {totalAno > 1 ? "jogos" : "jogo"}</div>
                </button>
              </div>
            })}
          </tbody>
        </table>
      </div>)
    )
  }
}

export default TodosOsJogos;