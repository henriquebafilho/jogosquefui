import React, { Component } from 'react';
import Times from '../../Times';
import Estatisticas from '../../components/Estatisticas';
import LinhaJogo from '../../components/LinhaJogo';
import Estadios from '../Estadios';

class ViewEstadio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: props.time,
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
    const time = this.state.time;
    const buttonClickFunction = () => this.buttonClick();
    let anoAtual = 0;
    var imagemEstadio;
    this.state.jogos.sort(function (a, b) {
      return a.data < b.data ? -1 : a.data > b.data ? 1 : 0;
    });
    try {
      imagemEstadio = require('../../estadios/' + this.props.estadio + '.png');
    } catch (e) {
      imagemEstadio = "";
    }
    return (
      this.state.clicked ? <Estadios time={time} meusJogos={this.props.meusJogos} /> :
        <div style={{ backgroundColor: Times(this.props.time).backgroundColor, color: Times(this.props.time).letterColor }}>
          <div className='a'>
            <button style={{ outline: 'none', border: 'none', textDecoration: 'underline', fontSize: '25px', cursor: 'pointer', backgroundColor: Times(this.props.time).backgroundColor, color: Times(this.props.time).letterColor }} onClick={() => buttonClickFunction()}>{"< Voltar"}</button>
          </div>
          <div className="App-header" style={{ backgroundColor: Times(this.props.time).backgroundColor, color: Times(this.props.time).letterColor }}>
            {imagemEstadio !== "" ? <img src={imagemEstadio} style={{ verticalAlign: 'middle' }} alt='estadio' height='250' width='250' /> : ""}
            <h1>{this.props.estadio}</h1>
            <br />
            <Estatisticas time={this.state.time} jogos={this.props.jogosEstadio} />
            {this.state.jogos.reverse().map((index) => {
              let mostraAno = false;
              if (anoAtual !== index.data.split("-")[0]) {
                anoAtual = index.data.split("-")[0];
                mostraAno = true;
              }
              return <div style={{ width: '100%' }}>
                {mostraAno ? <h1 style={{ textAlign: 'center', color: Times(time).letterColor, margin: '40px' }}>{anoAtual}</h1> : ""}
                <LinhaJogo key={JSON.stringify(index)} time={time} jogo={index} meusJogos={this.props.meusJogos}/>
              </div>
            })}
          </div>
        </div>
    )
  }
}

export default ViewEstadio;