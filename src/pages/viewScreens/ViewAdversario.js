import React, { Component } from 'react';
import Times from '../../Times';
import Estatisticas from '../../components/Estatisticas';
import LinhaJogo from '../../components/LinhaJogo';

class ViewAdversario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meuTime: props.meuTime,
      jogos: props.jogos
    }
  }

  async componentDidMount() {
    this._isMounted = true;
  }

  render() {
    const meuTime = this.state.meuTime;
    return (
      <div className="App-header" style={{ backgroundColor: Times(this.props.meuTime).backgroundColor, color: Times(this.props.meuTime).letterColor }}>
        <h1>{meuTime} x {this.props.adversario}</h1>
        <br />
        <Estatisticas meuTime={this.state.meuTime} jogos={this.props.jogos} />
        {this.state.jogos.reverse().map((index) => {
          return <LinhaJogo meuTime={meuTime} jogo={index} />
        })}
      </div>
    )
  }
}

export default ViewAdversario;