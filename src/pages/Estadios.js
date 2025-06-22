import React, { Component } from 'react';
import Times from '../Times';
import common from '../common';
import ViewEstadio from './viewScreens/ViewEstadio';
import BotafogoJogos from '../TodosOsJogos/BotafogoJogos';

class Estadios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: props.time,
      jogos: [],
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
    await this.getJogos();
    await this.getEstadios();
    this.setState({ filtered: this.state.estadios })
  }

  getJogos = async () => {
    this.setState({ isLoading: true });
    this.setState({
      jogos: BotafogoJogos().filter(jogo => jogo.golsMandante !== "" && jogo.golsVisitante !== "")
    });
    this.setState({ isLoading: false });
  }

  getEstadios = async () => {
    let jogos = this.state.jogos;

    this.setState({ isLoading: true })
    for (let i in jogos) {
      if (!this.state.estadios.includes(jogos[i].estadio) && jogos[i].estadio !== "") {
        this.state.estadios.push(jogos[i].estadio);
      }
    }
    this.state.estadios.sort((a, b) => {
      const qtdJogosA = common.getTotalEstadio(a, jogos);
      const qtdJogosB = common.getTotalEstadio(b, jogos);

      // Ordena por quantidade de jogos (decrescente)
      if (qtdJogosB !== qtdJogosA) {
        return qtdJogosB - qtdJogosA;
      }

      // Se a quantidade de jogos for igual, ordena por nome (alfabética)
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0; // Nomes iguais
    });
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
    var jogos = this.state.jogos;
    this.setState({
      filtered: this.state.estadios.filter(estadio => {
        const normalizeString = (str) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const searchTerm = normalizeString(e.target.value.toUpperCase().trim());
        const normalizedEstadio = normalizeString(estadio.toUpperCase().trim());
        return normalizedEstadio.includes(searchTerm);
      })
    });
    this.state.filtered.sort((a, b) => {
      const qtdJogosA = common.getTotalEstadio(a, jogos);
      const qtdJogosB = common.getTotalEstadio(b, jogos);

      // Ordena por quantidade de jogos (decrescente)
      if (qtdJogosB !== qtdJogosA) {
        return qtdJogosB - qtdJogosA;
      }

      // Se a quantidade de jogos for igual, ordena por nome (alfabética)
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0; // Nomes iguais
    });
  }

  render() {
    const time = this.state.time;
    const meusJogos = this.state.jogos;
    const buttonClickFunction = (estadio) => this.buttonClick(estadio);

    return (
      <>
        {this.state.clicked ? <ViewEstadio time={this.props.time} meusJogos={meusJogos} jogosEstadio={this.state.jogosEstadio} estadio={this.state.estadioAtual} /> :
          <div className="App-header" style={{ backgroundColor: Times(this.props.time).backgroundColor, color: Times(this.props.time).letterColor, alignItems: 'normal' }}>
            <h4 style={{ textAlign: 'center' }}>{this.state.estadios.length + " estádio"}{this.state.estadios.length > 1 ? "s" : ""}{" cadastrados"}</h4>
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
                    let totalEstadio = common.getTotalEstadio(i, meusJogos);
                    let imagemEstadio;
                    try {
                      imagemEstadio = require('../estadios/' + i + '.png');
                    } catch (e) {
                      imagemEstadio = "";
                    }
                    return <div key={i}>
                      <button id='selectEstadio' onClick={() => buttonClickFunction(i)} style={{ borderColor: Times(time).letterColor, borderStyle: 'solid', backgroundColor: Times(time).backgroundColor, color: Times(time).letterColor }}>
                        {imagemEstadio !== "" ? <img src={imagemEstadio} style={{ verticalAlign: 'middle' }} alt='escudo' height='150' width='150' /> : ""}
                        <div id='tituloOpcao' style={{ padding: '10px' }}>{i}</div>
                        <div style={{ paddingBottom: '5px', fontSize: '15px', fontWeight: '100' }}>{totalEstadio} {totalEstadio > 1 ? "jogos" : "jogo"}</div>
                      </button>
                    </div>
                  }) : <div>
                    <h4 style={{ color: Times(this.state.time).letterColor, textAlign: 'center', paddingBottom: '50px' }}>Nenhum estádio encontrado</h4>
                  </div>}
              </tbody>
            </table>
          </div>}
      </>
    )
  }
}

export default Estadios;