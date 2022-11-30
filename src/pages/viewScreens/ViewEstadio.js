import React, { Component } from 'react';
import Times from '../../Times';
import Estatisticas from '../../components/Estatisticas';
import LinhaJogo from '../../components/LinhaJogo';
import Estadios from '../Estadios';

class ViewEstadio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meuTime: props.meuTime,
      jogos: props.jogosEstadio,
      clicked: false
    }
  }

  async componentDidMount() {
    this._isMounted = true;
    window.scrollTo(0, 0);
  }

  buttonClick = async () => {
    this.setState({ clicked: true });
  }

  render() {
    const meuTime = this.state.meuTime;
    const buttonClickFunction = () => this.buttonClick();
    let anoAtual = 0;
    return (
      this.state.clicked ? <Estadios meuTime={meuTime} jogos={this.props.jogos} /> :
        <div style={{ backgroundColor: Times(this.props.meuTime).backgroundColor, color: Times(this.props.meuTime).letterColor }}>
          <div className='a'>
            <button style={{ outline: 'none', border: 'none', textDecoration: 'underline', fontSize: '25px', cursor: 'pointer', backgroundColor: Times(this.props.meuTime).backgroundColor, color: Times(this.props.meuTime).letterColor }} onClick={() => buttonClickFunction()}>{"< Voltar"}</button>
          </div>
          <div className="App-header" style={{ backgroundColor: Times(this.props.meuTime).backgroundColor, color: Times(this.props.meuTime).letterColor }}>
            <h1>{this.props.estadio}</h1>
            <br />
            <Estatisticas meuTime={this.state.meuTime} jogos={this.props.jogosEstadio} />
            {this.state.jogos.reverse().map((index) => {
              let mostraAno = false;
              if (anoAtual !== index[5].split("-")[0]) {
                anoAtual = index[5].split("-")[0];
                mostraAno = true;
              }
              return <div>
                {mostraAno ? <h1 style={{ textAlign: 'center', paddingBottom: '10px', color: Times(meuTime).letterColor }}>{anoAtual}</h1> : ""}
                <LinhaJogo meuTime={meuTime} jogo={index} />
              </div>
            })}
          </div>
        </div>
    )
  }
}

export default ViewEstadio;