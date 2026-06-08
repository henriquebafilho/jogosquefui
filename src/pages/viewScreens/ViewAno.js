import { Component } from 'react';
import Times from '../../Times';
import Estatisticas from '../../components/Estatisticas';
import Anos from '../Anos';
import LinhaJogo from '../../components/LinhaJogo';

class ViewAno extends Component {
    constructor(props) {
        super(props);
        this.state = {
            meuTime: props.meuTime
        }
    }

    async componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        const meuTime = this.props.meuTime;
        const jogos = [...this.props.jogosAno].sort(function (a, b) {
            return a.data < b.data ? -1 : a.data > b.data ? 1 : 0;
        });
        var imagemAno;
        try {
            imagemAno = process.env.PUBLIC_URL + '/anos/' + this.props.ano + '.png';
        } catch (e) {
            imagemAno = "";
        }
        return (
            <div style={{ backgroundColor: Times(this.props.meuTime).backgroundColor, color: Times(this.props.meuTime).letterColor }}>
                <div className='a'>
                    <button style={{ outline: 'none', border: 'none', textDecoration: 'underline', fontSize: '25px', cursor: 'pointer', backgroundColor: Times(this.props.meuTime).backgroundColor, color: Times(this.props.meuTime).letterColor }} onClick={this.props.onBack}>{"< Voltar"}</button>
                </div>
                <div className="App-header" style={{ backgroundColor: Times(this.props.meuTime).backgroundColor, color: Times(this.props.meuTime).letterColor }}>
                    <img
                        src={imagemAno}
                        style={{ verticalAlign: 'middle' }}
                        alt='ano'
                        height='250'
                        width='250'
                        loading='lazy'
                        onError={(e) => { e.target.style.display = 'none' }}
                    />
                    <h1 style={{ padding: '5px' }}>{this.props.ano}</h1>
                    <br />
                    <Estatisticas meuTime={this.props.meuTime} jogos={this.props.jogosAno} />
                    {
                        jogos.map((index) => {
                            return <LinhaJogo key={JSON.stringify(index)} meuTime={meuTime} jogo={index} meusJogos={this.props.meusJogos} />
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ViewAno;
/* 
import React from 'react';
import { useParams } from 'react-router-dom';
import Times from '../../Times';
import Estatisticas from '../../components/Estatisticas';
import Anos from '../Anos';
import LinhaJogo from '../../components/LinhaJogo';
import BotafogoJogos from '../../TodosOsJogos/BotafogoJogos';

function getAnoJogos(ano) {
    let jogos = BotafogoJogos();
    let jogosAno = [];

    for (var a = 0; a < jogos.length; a++) {
        const anoAtual = jogos[a].data.split("-")[0];
        if (anoAtual.toString().includes(ano)) {
            if (!jogosAno.includes(jogos[a])) {
                jogosAno.push(jogos[a]);
            }
        }
    }
    return jogosAno;
}

function ViewAno() {
    const { ano } = useParams();
    const jogos = getAnoJogos(ano);

    console.log(jogos);
    return (
        <div>
            
        </div>
    )
}

export default ViewAno; */