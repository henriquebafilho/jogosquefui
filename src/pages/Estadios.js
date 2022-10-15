import React, { Component } from 'react';
import Times from '../Times';
import common from '../common';

class Estadios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meuTime: props.meuTime,
      jogos: props.jogos(),
      vitorias: [],
      empates: [],
      derrotas: [],
      estadios: [],
      isLoading: false
    }
    this.buttonClick = this.buttonClick.bind(this);
  }

  async componentDidMount() {
    this._isMounted = true; // ???
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
  
  buttonClick() {
    console.log("FUI CLICADO");
  }

  render() {
    const meuTime = this.state.meuTime;
    const buttonClickFunction = () => this.buttonClick();
    return (
      <div className="App-header" style={{ backgroundColor: Times(this.props.meuTime).backgroundColor, color: Times(this.props.meuTime).letterColor }}>
        <h1>Estádios</h1>
        <br />
        <h4>{"Você foi a " + this.state.estadios.length + " estádios"}</h4>
        <br />
        <table>
          <tbody>
          {this.state.isLoading && <h1>Carregando...</h1>}
            {
              !this.state.isLoading && this.state.estadios.map(function (i) {
                var totalEstadio = common.getTotalEstadio(i);
                return <div>
                  <button id='selectEstadio' onClick={() => buttonClickFunction()} style={{ borderColor: 'white', borderStyle: 'solid', backgroundColor: Times(meuTime).backgroundColor, color: Times(meuTime).letterColor }}>
                    <div style={{ display: 'inline', padding: '10px', fontSize: '20px' }}>{i}</div>
                    <div style={{ paddingBottom: '5px', fontSize: '10px' }}>{totalEstadio} {totalEstadio > 1 ? "jogos" : "jogo"}</div>
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

export default Estadios;