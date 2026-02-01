import React, { Component } from 'react';
import Times from '../Times';
import common from '../common';
import ViewAdversario from './viewScreens/ViewAdversario';
import BotafogoJogos from '../TodosOsJogos/BotafogoJogos';

class Adversarios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meuTime: props.meuTime,
      jogos: [],
      adversarios: [],
      filtered: [],
      isLoading: false,
      clicked: false,
      adversarioAtual: '',
      jogosAdversario: []
    }
    this.buttonClick = this.buttonClick.bind(this);
  }

  async componentDidMount() {
    await this.getJogos();
    await this.getAdversarios();
    this.setState({ filtered: this.state.adversarios })
  }

  getJogos = async () => {
    this.setState({ isLoading: true });
    this.setState({
      jogos: BotafogoJogos().filter(jogo => jogo.golsMandante !== "" && jogo.golsVisitante !== "")
    });
    this.setState({ isLoading: false });
  }

  getAdversarios = async () => {
    var jogos = this.state.jogos;

    this.setState({ isLoading: true });

    for (var a in jogos) {
      if (Times(jogos[a].mandante).nomeAtual !== this.props.meuTime) {
        if (!this.state.adversarios.includes(Times(jogos[a].mandante).nomeAtual)) {
          this.state.adversarios.push(Times(jogos[a].mandante).nomeAtual);
        }
      }
      if (Times(jogos[a].visitante).nomeAtual !== this.props.meuTime) {
        if (!this.state.adversarios.includes(Times(jogos[a].visitante).nomeAtual)) {
          this.state.adversarios.push(Times(jogos[a].visitante).nomeAtual);
        }
      }
    }

    this.state.adversarios.sort((a, b) => {
      const qtdJogosA = common.getTotalAdversario(this.state.meuTime, a);
      const qtdJogosB = common.getTotalAdversario(this.state.meuTime, b);

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

    this.setState({ isLoading: false });
  }

  buttonClick = async (adversario) => {
    this.setState({ clicked: true, adversarioAtual: adversario });
  }

  searchTeam = async (e) => {
    this.setState({
      filtered: this.state.adversarios.filter(time => {
        const normalizeString = (str) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const searchTerm = normalizeString(e.target.value.toUpperCase().trim());
        const normalizedTime = normalizeString(time.toUpperCase().trim());
        return normalizedTime.includes(searchTerm);
      })
    });

    this.state.filtered.sort((a, b) => {
      const qtdJogosA = common.getTotalAdversario(this.state.meuTime, a);
      const qtdJogosB = common.getTotalAdversario(this.state.meuTime, b);

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
    const meuTime = this.state.meuTime;
    const filtered = this.state.filtered;
    const buttonClickFunction = (adversario) => this.buttonClick(adversario);
    return (
      <>
        {this.state.clicked ? <ViewAdversario meuTime={this.props.meuTime} adversario={this.state.adversarioAtual} /> :
          <div className="App-header" style={{ backgroundColor: Times(this.props.meuTime).backgroundColor, color: Times(this.props.meuTime).letterColor, alignItems: 'normal' }}>
            <table>
              <tbody>
                <input
                  type="text"
                  placeholder="Insira o nome do time"
                  onChange={this.searchTeam}
                  style={{
                    width: '100%',
                    marginBottom: '20px',
                    marginTop: '20px',
                    height: '40px',
                    padding: '5px'
                  }}
                />
                {!this.state.isLoading ?
                  filtered.length > 0 ? filtered.map(function (i) {
                    var totalAdversario = common.getTotalAdversario(meuTime, i);
                    const nomesAnteriores = Times(i).nomesAnteriores;
                    return <div key={i}>
                      <button id='selectAdversario' onClick={() => buttonClickFunction(Times(i).nomeAtual)} style={{ backgroundColor: Times(Times(i).nomeAtual).backgroundColor, color: Times(Times(i).nomeAtual).letterColor, borderColor: Times(meuTime).backgroundColor === 'white' ? 'black' : 'white', borderStyle: 'solid' }}>
                        <img
                          src={process.env.PUBLIC_URL + '/escudos/' + Times(Times(i).nomeAtual).escudo + '.png'}
                          style={{ verticalAlign: 'middle' }}
                          alt='escudo'
                          height='75'
                          width='75'
                          loading='lazy'
                          onError={(e) => { e.target.src = '/escudos/escudo.png' }}
                        />
                        <div id='tituloOpcao' style={{ paddingTop: '5px' }}>{Times(i).nomeAtual}</div>
                        <div style={{ paddingBottom: '5px', fontSize: '15px', fontWeight: '100' }}>{totalAdversario} {totalAdversario > 1 ? "jogos" : "jogo"}</div>
                        {nomesAnteriores.length > 0 &&
                          <div>
                            <div>Nomes anteriores:</div>
                            {nomesAnteriores.map((nome) => {
                              return <div>-{nome}</div>;
                            })}
                          </div>
                        }
                      </button>
                    </div>
                  }) : <div>
                    <h4 style={{ color: Times(this.state.meuTime).letterColor, textAlign: 'center', paddingBottom: '50px' }}>Nenhum adversário encontrado</h4>
                  </div>
                  : <div>
                    <h4 style={{ color: Times(this.state.meuTime).letterColor, textAlign: 'center', paddingBottom: '50px' }}>Carregando adversários...</h4>
                  </div>}
              </tbody>
            </table>
          </div>}
      </>
    )
  }
}

export default Adversarios;