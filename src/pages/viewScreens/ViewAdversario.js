import React, { Component } from 'react';
import Times from '../../Times';
import Estatisticas from '../../components/Estatisticas';
import LinhaJogo from '../../components/LinhaJogo';
import Adversarios from '../Adversarios';

class ViewAdversario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meuTime: props.meuTime,
      jogos: props.jogosAdversario,
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
    return (
      this.state.clicked ? <Adversarios meuTime={meuTime} jogos={this.props.jogos} /> :
        <div className="App-header" style={{ backgroundColor: Times(this.props.meuTime).backgroundColor, color: Times(this.props.meuTime).letterColor }}>
          <div className='a' style={{ textAlign: 'left' }}>
            <button style={{ textDecoration: 'underline' }} onClick={() => buttonClickFunction()}>{"< Voltar"}</button>
          </div>
          <div>
            <h1 style={{ display: 'inline', verticalAlign: 'middle' }}>{meuTime}</h1>
            <img src={require('../../escudos/' + Times(meuTime).escudo + '.png')} style={{ display: 'inline', verticalAlign: 'middle', width: "3em", height: "3em", margin: '5px' }} alt={meuTime} />
            <h1 style={{ display: 'inline', verticalAlign: 'middle' }}> x </h1>
            <img src={require('../../escudos/' + Times(this.props.adversario).escudo + '.png')} style={{ display: 'inline', verticalAlign: 'middle', width: "3em", height: "3em", margin: '10px' }} alt={this.props.adversario} />
            <h1 style={{ display: 'inline', verticalAlign: 'middle' }}>{this.props.adversario}</h1>
          </div>
          <br />
          <Estatisticas meuTime={this.state.meuTime} jogos={this.props.jogosAdversario} />
          {this.state.jogos.reverse().map((index) => {
            return <LinhaJogo meuTime={meuTime} jogo={index} />
          })}
        </div>
    )
  }
}

export default ViewAdversario;