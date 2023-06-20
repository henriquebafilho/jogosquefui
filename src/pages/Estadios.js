import React, { Component } from 'react';
import Times from '../Times';
import common from '../common';
import ViewEstadio from './viewScreens/ViewEstadio';

class Estadios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meuTime: props.meuTime,
      jogos: props.meusJogos/* .getJogos() */,
      estadios: [],
      filtered: [],
      isLoading: false,
      clicked: false,
      estadioAtual: '',
      jogosEstadio: []
    }
    this.buttonClick = this.buttonClick.bind(this);
  }

  async componentDidMount() {
    await this.getEstadios();
    this.setState({ filtered: this.state.estadios })
  }

  getEstadios = async () => {
    let jogos = this.state.jogos;

    this.setState({ isLoading: true })
    for (let i in jogos) {
      if (!this.state.estadios.includes(jogos[i].estadio) && jogos[i].estadio !== "") {
        this.state.estadios.push(jogos[i].estadio);
      }
    }
    this.state.estadios.sort();
    this.setState({ isLoading: false })
  }

  buttonClick = async (estadio) => {
    this.setState({ clicked: true, estadioAtual: estadio });
    await this.getEstadioJogos(estadio);
  }

  getEstadioJogos = async (estadio) => {
    let estadioAtual = estadio;

    for (let a = 0; a < this.state.jogos.length; a++) {
      if (this.state.jogos[a].estadio === estadioAtual) {
        if (!this.state.jogosEstadio.includes(this.state.jogos[a])) {
          this.state.jogosEstadio.push(this.state.jogos[a]);
        }
      }
    }
  }

  searchStadium = async (e) => {
    this.setState({ filtered: this.state.estadios.filter(estadio => estadio.toUpperCase().trim().includes(e.target.value.toUpperCase().trim()))})
  }

  render() {
    const meuTime = this.state.meuTime;
    const meusJogos = this.state.jogos;
    const buttonClickFunction = (estadio) => this.buttonClick(estadio);

    return (
      <>
        {this.state.clicked ? <ViewEstadio meuTime={this.props.meuTime} meusJogos={meusJogos} jogosEstadio={this.state.jogosEstadio} estadio={this.state.estadioAtual} /> : 
          <div className="App-header" style={{ backgroundColor: Times(this.props.meuTime).backgroundColor, color: Times(this.props.meuTime).letterColor, alignItems: 'normal' }}>
            {/* <h1>Estádios</h1>
            <br /> */}
            <h4 style={{textAlign: 'center'}}>{"Você foi a " + this.state.estadios.length + " estádio"}{this.state.estadios.length > 1 ? "s" : ""}</h4>
            <br />
            <table>
              <tbody>
                {this.state.isLoading && <h1>Carregando...</h1>}
                <input
                  type="text"
                  placeholder="Insira o nome do estádio"
                  onChange={this.searchStadium}
                  style={{
                    width: '100%',
                    marginBottom: '20px',
                    height: '40px',
                    padding: '5px'
                  }}
                />
                {this.state.filtered.length > 0 ?
                  !this.state.isLoading && this.state.filtered.map(function (i) {
                    let totalEstadio = common.getTotalEstadio(i, meusJogos/* .getJogos() */);
                    let imagemEstadio;
                    try {
                      imagemEstadio = require('../estadios/' + i + '.png');
                    } catch (e) {
                      imagemEstadio = "";
                    }
                    return <div key={i}>
                      <button id='selectEstadio' onClick={() => buttonClickFunction(i)} style={{ borderColor: Times(meuTime).letterColor, borderStyle: 'solid', backgroundColor: Times(meuTime).backgroundColor, color: Times(meuTime).letterColor }}>
                        {imagemEstadio !== "" ? <img src={imagemEstadio} style={{ verticalAlign: 'middle' }} alt='escudo' height='150' width='150' /> : ""}
                        <div id='tituloOpcao' style={{ padding: '10px' }}>{i}</div>
                        <div style={{ paddingBottom: '5px', fontSize: '15px', fontWeight: '100' }}>{totalEstadio} {totalEstadio > 1 ? "jogos" : "jogo"}</div>
                      </button>
                    </div>
                  }) : <div>
                    <h4 style={{ color: Times(this.state.meuTime).letterColor, textAlign: 'center', paddingBottom: '50px' }}>Nenhum estádio encontrado</h4>
                  </div>}
              </tbody>
            </table>
          </div>}
      </>
    )
  }
}

export default Estadios;