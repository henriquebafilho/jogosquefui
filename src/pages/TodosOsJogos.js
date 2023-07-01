import React, { Component } from 'react';
import Times from '../Times';
import common from '../common';
import ViewAno from './viewScreens/ViewAno';
import BotafogoJogos from '../TodosOsJogos/BotafogoJogos';

class TodosOsJogos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meuTime: "Botafogo",
      jogos: [],
      anos: [],
      isLoading: false,
      clicked: false,
      anoAtual: '',
      jogosAno: [],
      toggleState: 1
    }
    this.buttonClick = this.buttonClick.bind(this);
  }

  async componentDidMount() {
    this.setState({ isLoading: true })
    await this.getJogos();
    await this.getAnos();
    this.setState({ isLoading: false })
  }

  getJogos = async () => {
    let todosOsJogos = BotafogoJogos().reverse();
    let jogosTerminados = [];

    todosOsJogos.forEach((jogo) => {
      if (jogo.golsMandante !== "" && jogo.golsVisitante !== "") {
        jogosTerminados.push(jogo);
      }
    })

    this.setState({ jogos: jogosTerminados });
  }

  getAnos = async () => {
    let jogos = this.state.jogos;

    for (let i in jogos) {
      const currentDate = new Date(jogos[i].data);
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
    let anoAtual = ano;

    for (let a = 0; a < this.state.jogos.length; a++) {
      const currentDate = new Date(this.state.jogos[a].data);
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
      <>
        {this.state.clicked ? <ViewAno flag="todosOsJogos" meuTime={this.state.meuTime} jogosAno={this.state.jogosAno} ano={this.state.anoAtual} /> :
          <div id="App-header-todos" style={{ backgroundColor: Times(this.state.meuTime).backgroundColor, color: Times(this.state.meuTime).letterColor, display: 'flex' }}>
            <h1 style={{ padding: '20px' }}>Jogos do {Times(this.state.meuTime).nomeAtual}</h1>
            <img src={require('../escudos/' + Times(this.state.meuTime).escudo + '.png')} className="App-logo" alt={"Escudo do " + this.state.meuTime} style={{ width: '100px', height: '100px' }} />
            {jogos.length > 0 ? <h4 style={{ padding: '20px' }}>Selecione o ano do jogo</h4> : <h4 style={{ padding: '20px' }}>Não há jogos disponíveis</h4>}
            <table>
              <tbody>
                {this.state.isLoading && <h1>Carregando...</h1>}
                {!this.state.isLoading && this.state.anos.map(function (i) {
                  let totalAno = common.getTotalAno(i, jogos);
                  return <div key={i}>
                    <button id='selectAno' onClick={() => buttonClickFunction(i)} style={{ borderColor: Times(meuTime).letterColor, borderStyle: 'solid', backgroundColor: Times(meuTime).backgroundColor, color: Times(meuTime).letterColor, width: '60vw' }}>
                      <div style={{ display: 'inline', padding: '10px', fontSize: '40px' }}>{i}</div>
                      <div style={{ paddingBottom: '5px', fontSize: '15px', fontWeight: '100' }}>{totalAno} {totalAno > 1 ? "jogos" : "jogo"}</div>
                    </button>
                  </div>
                })}
              </tbody>
            </table>
          </div>}
      </>
    )
  }
}

export default TodosOsJogos;