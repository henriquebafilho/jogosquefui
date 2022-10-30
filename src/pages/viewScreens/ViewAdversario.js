import React, { Component } from 'react';
import Times from '../../Times';
import common from '../../common';

class ViewAdversario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meuTime: props.meuTime,
      jogos: props.jogos(),
    }
  }

  async componentDidMount() {
    this._isMounted = true; 
  }

  render() {
    const meuTime = this.state.meuTime;
    const adversario = this.state.adversario;
    return (
      <div className="App-header" style={{ backgroundColor: Times(this.props.meuTime).backgroundColor, color: Times(this.props.meuTime).letterColor }}>
        <h1>{meuTime} x {adversario}</h1>
      </div>
    )
  }
}

export default ViewAdversario;