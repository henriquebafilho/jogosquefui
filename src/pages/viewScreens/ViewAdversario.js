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
  }

  buttonClick = async () => {
    this.setState({ clicked: true });
  }

  render() {
    const meuTime = this.state.meuTime;
    const jogos = this.state.jogos;
    const buttonClickFunction = () => this.buttonClick();
    return (
      this.state.clicked ? <Adversarios meuTime={meuTime} jogos={this.props.jogos} /> :
        <div className="App-header" style={{ backgroundColor: Times(this.props.meuTime).backgroundColor, color: Times(this.props.meuTime).letterColor }}>
          <div class='a' style={{textAlign: 'left'}}>
            <button style={{ textDecoration: 'underline'}} onClick={() => buttonClickFunction()}>{"< Voltar"}</button>
          </div>
          <h1>{meuTime} x {this.props.adversario}</h1>
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