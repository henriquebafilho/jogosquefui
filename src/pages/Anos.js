import React, { Component } from 'react';
import Times from '../Times';
import common from '../common';
import ViewAno from './viewScreens/ViewAno';

class Anos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meuTime: props.meuTime,
      jogos: props.meusJogos/* .getJogos() */,
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
    var anoAtual = ano;

    for (var a = 0; a < this.state.jogos.length; a++) {
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
    const meusJogos = this.props.meusJogos;
    const buttonClickFunction = (ano) => this.buttonClick(ano);

    return (
      <>
        {/* this.state.clicked ? <ViewAno conjuntoUsuarios={this.props.conjuntoUsuarios} flag="meusJogos" meuTime={this.props.meuTime} meusJogos={meusJogos} jogosAno={this.state.jogosAno} ano={this.state.anoAtual} /> : */
          <div className="App-header" style={{ backgroundColor: Times(this.props.meuTime).backgroundColor, color: Times(this.props.meuTime).letterColor }}>
            {/* <h1>Anos</h1>
            <br /> */}
            <table>
              <tbody>
                {this.state.isLoading && <h1>Carregando...</h1>}
                {this.state.anos.length > 0 ?
                  !this.state.isLoading && this.state.anos.map(function (i) {
                    var totalAno = common.getTotalAno(i, meusJogos/* .getJogos() */);
                    return <div>
                      <button id='selectAno' /* onClick={() => buttonClickFunction(i)} */ style={{ borderColor: Times(meuTime).letterColor, borderStyle: 'solid', backgroundColor: Times(meuTime).backgroundColor, color: Times(meuTime).letterColor, width: '60vw' }}>
                        <div style={{ display: 'inline', padding: '10px', fontSize: '40px' }}>{i}</div>
                        <div style={{ paddingBottom: '5px', fontSize: '15px', fontWeight: '100' }}>{totalAno} {totalAno > 1 ? "jogos" : "jogo"}</div>
                      </button>
                    </div>
                  }) : <div>
                    <h1 style={{ color: Times(this.state.meuTime).letterColor, textAlign: 'center', paddingBottom: '50px' }}>Você ainda não possui jogos cadastrados</h1>
                    <h4 style={{ color: Times(this.state.meuTime).letterColor, textAlign: 'center' }}>Vá em "Jogos do {this.state.meuTime}" para selecionar os jogos que você já foi</h4>
                  </div>}
              </tbody>
            </table>
          </div>}
      </>
    )
  }
}

export default Anos;