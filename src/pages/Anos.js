import { Component } from 'react';
import Times from '../Times';
import common from '../common';
import BotafogoJogos from '../TodosOsJogos/BotafogoJogos';
import { NavLink } from 'react-router-dom';

class Anos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: props.time,
      jogos: [],
      anos: [],
      filtered: [],
      isLoading: false,
      anoAtual: '',
      jogosAno: []
    }
  }

  async componentDidMount() {
    await this.getJogos();
    await this.getAnos();
    this.setState({ filtered: this.state.anos });
  }

  getJogos = async () => {
    this.setState({ isLoading: true });
    this.setState({
      jogos: BotafogoJogos().filter(jogo => jogo.golsMandante !== "" && jogo.golsVisitante !== "")
    });
    this.setState({ isLoading: false });
  }

  getAnos = async () => {
    var jogos = this.state.jogos;

    this.setState({ isLoading: true });
    for (var i in jogos) {
      const ano = jogos[i].data.split("-")[0];
      if (!this.state.anos.includes(ano)) {
        this.state.anos.push(ano);
      }
    }
    this.state.anos.sort().reverse();
    this.setState({ isLoading: false });
  }

  buttonClick = async (ano) => {
    this.setState({ clicked: true, anoAtual: ano });
    await this.getAnoJogos(ano);
  }

  getAnoJogos = async (ano) => {
    var anoAtual = ano;

    for (var a = 0; a < this.state.jogos.length; a++) {
      const ano = this.state.jogos[a].data.split("-")[0];
      if (anoAtual.toString().includes(ano)) {
        if (!this.state.jogosAno.includes(this.state.jogos[a])) {
          this.state.jogosAno.push(this.state.jogos[a]);
        }
      }
    }
  }

  searchAno = async (e) => {
    this.setState({ filtered: this.state.anos.filter(ano => ano.toString().trim().includes(e.target.value.trim())) })
  }

  render() {
    const time = this.state.time;

    return (
      <>
        <div className="App-header" style={{ backgroundColor: Times(this.props.time).backgroundColor, color: Times(this.props.time).letterColor, alignItems: 'normal' }}>
          <table>
            <tbody>
              {this.state.isLoading && <h1>Carregando...</h1>}
              <input
                type="number"
                inputMode='numeric'
                placeholder="Insira o ano"
                onChange={this.searchAno}
                style={{
                  width: '100%',
                  marginBottom: '20px',
                  marginTop: '20px',
                  height: '40px',
                  padding: '5px'
                }}
              />
              {this.state.filtered.length > 0 ?
                !this.state.isLoading && this.state.filtered.map(function (i) {
                  var totalAno = common.getTotalAno(i);
                  let imagemAno;
                  try {
                    imagemAno = require('../anos/' + i + '.png');
                  } catch (e) {
                    imagemAno = "";
                  }
                  return <div key={i}>
                    <button id='selectAno' style={{ borderColor: Times(time).letterColor, borderStyle: 'solid', backgroundColor: Times(time).backgroundColor, color: Times(time).letterColor }}>
                      <NavLink
                        to={`/jogosquefui/anos/${i}`}
                        end
                        style={{ textDecoration: 'none' }}
                      >
                        <div>{imagemAno !== "" ? <img src={imagemAno} style={{ verticalAlign: 'middle' }} alt='ano' height='150' width='150' /> : ""}</div>
                        <div id='tituloOpcao' style={{ display: 'inline', padding: '10px', fontSize: '30px' }}>{i}</div>
                        <div style={{ paddingBottom: '5px', fontSize: '15px', fontWeight: '100' }}>{totalAno} {totalAno > 1 ? "jogos" : "jogo"}</div>
                      </NavLink>
                    </button>
                  </div>
                }) : <div>
                  <h4 style={{ color: Times(this.state.time).letterColor, textAlign: 'center', paddingBottom: '50px' }}>Nenhum ano encontrado</h4>
                </div>}
            </tbody>
          </table>
        </div>
      </>
    )
  }
}

export default Anos;