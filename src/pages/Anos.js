import React, { Component } from 'react';
import Times from '../Times';
import common from '../common';
import ViewAno from './viewScreens/ViewAno';

class Anos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meuTime: props.meuTime,
      jogos: props.jogos,
      anos: [],
      isLoading: false,
      viewAno: false
    }
    this.buttonClick = this.buttonClick.bind(this);
  }

  async componentDidMount() {
    this._isMounted = true; 
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
    this.setState({
      viewAno: true
    })
  }

  render() {
    const meuTime = this.state.meuTime;
    const buttonClickFunction = () => this.buttonClick();
    const jogos = this.state.jogos;
    return (
      <div className="App-header" style={{ backgroundColor: Times(this.props.meuTime).backgroundColor, color: Times(this.props.meuTime).letterColor }}>
        <h1>Anos</h1>
        <br />
        <table>
          <tbody>
            {this.state.isLoading && <h1>Carregando...</h1>}
            {
              !this.state.isLoading && this.state.anos.map(function (i) {
                var totalAno = common.getTotalAno(i, jogos);
                return <div>
                  <button id='selectAno' onClick={() => buttonClickFunction()} style={{ borderColor: Times(meuTime).letterColor, borderStyle: 'solid', backgroundColor: Times(meuTime).backgroundColor, color: Times(meuTime).letterColor, width: '60vw' }}>
                    <div style={{ display: 'inline', padding: '10px', fontSize: '40px' }}>{i}</div>
                    <div style={{ paddingBottom: '5px', fontSize: '15px' }}>{totalAno} {totalAno > 1 ? "jogos" : "jogo"}</div>
                  </button>
                </div>
              })
            }
            {this.state.viewAno &&
              <ViewAno
                meuTime={this.state.meuTime}
                jogos={this.state.jogos}
                ano={"2022"}
              />}
          </tbody>
        </table>
      </div >
    )
  }
}

export default Anos;