import React, { Component } from 'react';
import Times from '../Times';

class Estadios extends Component {
  state = {
    meuTime: this.props.meuTime,
    jogos: this.props.jogos(),
    vitorias: [],
    empates: [],
    derrotas: [],
    estadios: [],
    isLoading: false
  }

  async componentDidMount() {
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

  render() {
    return (
      <div className="App-header" style={{ backgroundColor: Times(this.props.meuTime).backgroundColor, color: Times(this.props.meuTime).letterColor }}>
        <h1>Estádios</h1>
        <br />
        <h4>{"Você foi a " + this.state.estadios.length + " estádios"}</h4>
        <br />
        <table>
          <tbody>
            {this.state.isLoading && <h1>ESPERA AÍ</h1>}
            {
              !this.state.isLoading && this.state.estadios.map(function (i) {
                return <div>
                  <button id='selectEstadio' style={{ borderColor: 'white', borderStyle: 'solid', backgroundColor: 'black', color: 'white' }}> {/* Mudar pra cores do time */}
                    <div style={{ display: 'inline', padding: '10px', fontSize: '20px' }}>{i}</div>
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