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
    let anoAtual = 0;
    return (
      this.state.clicked ? <Adversarios meuTime={meuTime} jogos={this.props.jogos} /> :
        <div style={{ backgroundColor: Times(this.props.meuTime).backgroundColor, color: Times(this.props.meuTime).letterColor }}>
          <div className='a'>
            <button style={{ outline: 'none', border: 'none', textDecoration: 'underline', fontSize: '25px', cursor: 'pointer', backgroundColor: Times(this.props.meuTime).backgroundColor, color: Times(this.props.meuTime).letterColor }} onClick={() => buttonClickFunction()}>{"< Voltar"}</button>
          </div>
          <div className="App-header">
            <div>
              <div style={{ float: 'left', textAlign: 'center', width: '180px' }}>
                <img src={require('../../escudos/' + Times(meuTime).escudo + '.png')} style={{ display: 'inline', verticalAlign: 'middle', width: "3em", height: "3em", margin: '10px' }} alt={meuTime} />
                <p style={{ fontSize: '20px' }}>{meuTime}</p>
              </div>
              <div style={{ float: 'left', margin: '25px' }}>
                <h1 style={{ display: 'inline', verticalAlign: 'middle' }}> x </h1>
              </div>
              <div style={{
                float: 'left',
                textAlign: 'center',
                border: '5px solid' + Times(this.props.adversario).backgroundColor,
                borderRadius: '5px',
                width: '180px',
                backgroundColor: Times(this.props.adversario).backgroundColor,
                color: Times(this.props.adversario).letterColor
              }}>
                <img src={require('../../escudos/' + Times(this.props.adversario).escudo + '.png')} style={{ display: 'inline', verticalAlign: 'middle', width: "3em", height: "3em", margin: '10px' }} alt={this.props.adversario} />
                <p style={{ fontSize: '20px' }}>{this.props.adversario}</p>
              </div>
            </div>
            <br />
            <Estatisticas meuTime={this.state.meuTime} jogos={this.props.jogosAdversario} />
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

export default ViewAdversario;