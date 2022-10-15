import React, { Component } from 'react';
import Times from '../Times';
import common from '../common';

class Anos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meuTime: props.meuTime,
      jogos: props.jogos(),
      vitorias: [],
      empates: [],
      derrotas: [],
      anos: [],
      isLoading: false
    }
    this.buttonClick = this.buttonClick.bind(this);
  }

  async componentDidMount() {
    this._isMounted = true; // ???
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
  
  buttonClick() {
    console.log("FUI CLICADO");
  }

  render() {
    const meuTime = this.state.meuTime;
    const buttonClickFunction = () => this.buttonClick();
    return (
      <div className="App-header" style={{ backgroundColor: Times(this.props.meuTime).backgroundColor, color: Times(this.props.meuTime).letterColor }}>
        <h1>Anos</h1>
        <br/>
        <table>
          <tbody>
            {this.state.isLoading && <h1>Carregando...</h1>}
            {
              !this.state.isLoading && this.state.anos.map(function (i) {
                var totalAno = common.getTotalAno(i);
                return <div>
                  <button id='selectAno' onClick={() => buttonClickFunction()} style={{ borderColor: 'white', borderStyle: 'solid', backgroundColor: Times(meuTime).backgroundColor, color: Times(meuTime).letterColor }}>
                    <div style={{ display: 'inline', padding: '10px', fontSize: '20px' }}>{i}</div>
                    <div style={{ paddingBottom: '5px', fontSize: '10px' }}>{totalAno} {totalAno > 1 ? "jogos" : "jogo"}</div>
                  </button>
                </div>
              })
            }
          </tbody>
        </table>
      </div >
    )
  }
}

export default Anos;