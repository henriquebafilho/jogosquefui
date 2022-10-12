import React, { Component } from 'react';
import Times from '../Times';

class Anos extends Component {
  state = {
    meuTime: this.props.meuTime,
    jogos: this.props.jogos(),
    vitorias: [],
    empates: [],
    derrotas: [],
    anos: [],
    isLoading: false
  }

  async componentDidMount() {
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

  render() {
    return (
      <div className="App-header" style={{ backgroundColor: Times(this.props.meuTime).backgroundColor, color: Times(this.props.meuTime).letterColor }}>
        <h1>Anos</h1>
        <br/>
        <table>
          <tbody>
            {this.state.isLoading && <h1>ESPERA AÍ</h1>}
            {
              !this.state.isLoading && this.state.anos.map(function (i) {
                return <div>
                  <button id='selectAno' style={{ borderColor: 'white', borderStyle: 'solid', backgroundColor: 'black', color: 'white' }}> {/* Mudar pra cores do time */}
                    <div style={{ display: 'inline', padding: '10px', fontSize: '20px' }}>{i}</div>
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