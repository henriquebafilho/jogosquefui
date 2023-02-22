import React, { Component } from 'react';
import Times from '../Times';
import LinhaJogo from '../components/LinhaJogo';
import FlamengoJogos from '../TodosOsJogos/FlamengoJogos';
import FluminenseJogos from '../TodosOsJogos/FluminenseJogos';
import VascoJogos from '../TodosOsJogos/VascoJogos';
import BotafogoJogos from '../TodosOsJogos/BotafogoJogos';

class ProximosJogos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            meuTime: props.meuTime,
            proximosJogos: [],
            isLoading: false,
            clicked: false
        }
    }

    async componentDidMount() {
        this._isMounted = true;
        window.scrollTo(0, 0);
        this.setState({ isLoading: true })
        await this.getProximosJogos();
        this.setState({ isLoading: false })
    }

    getProximosJogos = async () => {
        let todosOsJogos;
        let proximosJogos = [];

        switch (this.state.meuTime) {
            case "Botafogo":
                todosOsJogos = BotafogoJogos().reverse();
                break;
            case "Flamengo":
                todosOsJogos = FlamengoJogos().reverse();
                break;
            case "Fluminense":
                todosOsJogos = FluminenseJogos().reverse();
                break;
            case "Vasco":
                todosOsJogos = VascoJogos().reverse();
                break;
            default:
                console.error("Time não disponível.")
                break;
        }

        todosOsJogos.map(function (i) {
            if (i[2] === "" && i[3] === "") {
                proximosJogos.push(i);
            }
        })
        this.setState({ proximosJogos: proximosJogos })
    }

    render() {
        const meuTime = this.state.meuTime;
        const jogos = this.state.proximosJogos;
        return (
            <>
                <div className="App-header" style={{ backgroundColor: Times(meuTime).backgroundColor }}>
                    <h1 style={{ color: Times(meuTime).letterColor, padding: '20px' }}>Próximos Jogos</h1>
                    <img src={require('../escudos/' + Times(meuTime).escudo + '.png')} className="App-logo" alt={"Escudo do " + meuTime} style={{ width: '100px', height: '100px' }} />
                    <br />
                    {jogos.length > 0 ? jogos.reverse().map((index) => {
                        return <div>
                            <LinhaJogo meuTime={meuTime} jogo={index} />
                        </div>
                    }) : <div>
                        <h4 style={{ color: Times(meuTime).letterColor, textAlign: 'center' }}>Não há jogos futuros</h4>
                    </div>}
                </div>
            </>
        )
    }
}

export default ProximosJogos;