import React, { Component } from 'react';
import Times from '../Times';
import LinhaJogo from '../components/LinhaJogo';
import BotafogoJogos from '../TodosOsJogos/BotafogoJogos';

class ProximosJogos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            meuTime: "Botafogo",
            proximosJogos: [],
            isLoading: false,
            clicked: false
        }
    }

    async componentDidMount() {
        this._isMounted = true;
        this.setState({ isLoading: true })
        await this.getProximosJogos();
        this.setState({ isLoading: false })
    }

    getProximosJogos = async () => {
        let todosOsJogos;
        let proximosJogos = [];

        switch (this.state.meuTime) {
            case "Botafogo":
                todosOsJogos = BotafogoJogos();
                break;
            default:
                console.error("Time não disponível.")
                break;
        }

        todosOsJogos.map(function (i) {
            if (i.golsMandante === "" && i.golsVisitante === "") {
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
                <div className="container" style={{ backgroundColor: Times(meuTime).backgroundColor }}>
                    {jogos.length > 0 ? jogos.map((index) => {
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