import React, { Component } from 'react';
import Times from '../../Times';
import Estatisticas from '../../components/Estatisticas';
import LinhaJogo from '../../components/LinhaJogo';
import Adversarios from '../Adversarios';
import BotafogoJogos from '../../TodosOsJogos/BotafogoJogos';

class ViewAdversario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meuTime: props.meuTime,
      adversario: props.adversario,
      clicked: false,
      isLoading: false,
      jogosAdversario: []
    }
  }

  async componentDidMount() {
    this._isMounted = true;
    window.scrollTo(0, 0);
    await this.getJogosAdversario();
  }

  getJogosAdversario = async () => {
    this.setState({ isLoading: true });
    var adversario = [this.state.adversario, ...Times(this.state.adversario).nomesAnteriores];
    var jogosAdversario = BotafogoJogos().filter(jogo =>
      (jogo.golsMandante !== "" && jogo.golsVisitante !== "") &&
      ((adversario.includes(jogo.mandante) && jogo.visitante === this.state.meuTime) ||
        (jogo.mandante === this.state.meuTime && adversario.includes(jogo.visitante)))
    );
    jogosAdversario = jogosAdversario.sort(function (a, b) {
      return a.data < b.data ? -1 : a.data > b.data ? 1 : 0;
    });
    this.setState({ isLoading: false, jogosAdversario });
  }

  buttonClick = async () => {
    this.setState({ clicked: true });
  }

  render() {
    const meuTime = this.state.meuTime;
    const buttonClickFunction = () => this.buttonClick();
    let anoAtual = 0;

    return (
      this.state.clicked ? <Adversarios meuTime={meuTime} /> :
        <div style={{ backgroundColor: Times(this.props.meuTime).backgroundColor, color: Times(this.props.meuTime).letterColor }}>
          <div className='a' key="voltar">
            <button style={{ outline: 'none', border: 'none', textDecoration: 'underline', fontSize: '25px', cursor: 'pointer', backgroundColor: Times(this.props.meuTime).backgroundColor, color: Times(this.props.meuTime).letterColor }} onClick={() => buttonClickFunction()}>{"< Voltar"}</button>
          </div>
          <div className="App-header">
            <div>
              <div style={{ float: 'left', textAlign: 'center' }}>
                <img src={require('../../escudos/' + Times(meuTime).escudo + '.png')} style={{ display: 'inline', verticalAlign: 'middle', width: "4em", height: "4em", margin: '10px' }} alt={meuTime} />
                <p id='tituloAdversario'>{meuTime}</p>
              </div>
              <div style={{ float: 'left', margin: '20px' }}>
                <h1 style={{ display: 'inline', verticalAlign: 'middle' }}> x </h1>
              </div>
              <div
                style={{
                  float: 'left',
                  textAlign: 'center',
                  border: '5px solid' + Times(this.props.adversario).backgroundColor,
                  borderRadius: '5px',
                  backgroundColor: Times(this.props.adversario).backgroundColor,
                  color: Times(this.props.adversario).letterColor
                }}>
                <img src={require('../../escudos/' + Times(this.props.adversario).escudo + '.png')} style={{ display: 'inline', verticalAlign: 'middle', width: "4em", height: "4em", margin: '10px' }} alt={this.props.adversario} />
                <p id='tituloAdversario' style={{ padding: "0px 10px 0px 10px" }}>{this.props.adversario}</p>
              </div>
            </div>
            <br />
            <Estatisticas meuTime={this.state.meuTime} jogos={this.state.jogosAdversario} />
            {this.state.jogosAdversario.reverse().map((index) => {
              let mostraAno = false;
              if (anoAtual !== index.data.split("-")[0]) {
                anoAtual = index.data.split("-")[0];
                mostraAno = true;
              }
              return <div style={{ width: '100%' }}>
                {mostraAno ? <h1 style={{ textAlign: 'center', color: Times(meuTime).letterColor, margin: '40px' }}>{anoAtual}</h1> : ""}
                <LinhaJogo key={JSON.stringify(index)} meuTime={meuTime} jogo={index} />
              </div>
            })}
          </div>
        </div>
    )
  }
}

export default ViewAdversario;