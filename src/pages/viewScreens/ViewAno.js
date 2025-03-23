import React, { Component } from 'react';
import Times from '../../Times';
import Estatisticas from '../../components/Estatisticas';
import Anos from '../Anos';
import LinhaJogo from '../../components/LinhaJogo';
import TodosOsJogos from '../TodosOsJogos';

class ViewAno extends Component {
    constructor(props) {
        super(props);
        this.state = {
            meuTime: props.meuTime,
            jogos: props.jogosAno,
            flag: props.flag,
            clicked: false
        }
    }

    async componentDidMount() {
        window.scrollTo(0, 0);
    }

    buttonClick = async () => {
        this.setState({ clicked: true });
    }

    render() {
        const meuTime = this.state.meuTime;
        const flag = this.state.flag;
        const buttonClickFunction = () => this.buttonClick();
        var imagemAno;
        this.state.jogos.sort(function (a, b) {
            return a.data < b.data ? -1 : a.data > b.data ? 1 : 0;
        });
        try {
            imagemAno = require('../../anos/' + this.props.ano + '.png');
        } catch (e) {
            imagemAno = "";
        }
        return (
            this.state.clicked && flag === "meusJogos" ? <Anos conjuntoUsuarios={this.props.conjuntoUsuarios} meuTime={meuTime} meusJogos={this.props.meusJogos} fromView={true} /> :
                this.state.clicked && flag === "todosOsJogos" ? <TodosOsJogos conjuntoUsuarios={this.props.conjuntoUsuarios} meuTime={meuTime} jogos={this.props.jogos} meusJogos={this.props.meusJogos} fromView={true} /> :
                    <div style={{ backgroundColor: Times(this.props.meuTime).backgroundColor, color: Times(this.props.meuTime).letterColor }}>
                        <div className='a'>
                            <button style={{ outline: 'none', border: 'none', textDecoration: 'underline', fontSize: '25px', cursor: 'pointer', backgroundColor: Times(this.props.meuTime).backgroundColor, color: Times(this.props.meuTime).letterColor }} onClick={() => buttonClickFunction()}>{"< Voltar"}</button>
                        </div>
                        <div className="App-header" style={{ backgroundColor: Times(this.props.meuTime).backgroundColor, color: Times(this.props.meuTime).letterColor }}>
                            <div>{imagemAno !== "" ? <img src={imagemAno} style={{ verticalAlign: 'middle' }} alt='ano' height='250' width='250' /> : ""}</div>
                            <h1 style={{ padding: '5px' }}>{this.props.ano}</h1>
                            <br />
                            <Estatisticas meuTime={this.state.meuTime} jogos={this.props.jogosAno} />
                            {
                                flag === "meusJogos" ?
                                    this.state.jogos.map((index) => {
                                        return <LinhaJogo meuTime={meuTime} jogo={index} meusJogos={this.props.meusJogos} />
                                    }) :
                                    this.state.jogos.map((index) => {
                                        return <LinhaJogo meuTime={meuTime} jogo={index} meusJogos={this.props.meusJogos} />
                                    })
                            }
                        </div>
                    </div>
        )
    }
}

export default ViewAno;

/* import React from 'react';
import { useParams } from 'react-router-dom';

function ViewAno() {
  const { ano } = useParams();

  return (
    <div>
      <h1>Jogos do ano: {ano}</h1>
    </div>
  );
}

export default ViewAno; */