import React, { Component } from 'react';
import Times from '../Times';
import LinhaJogo from '../components/LinhaJogo';
import Proximos from '../TodosOsJogos/ProximosJogos';

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
        let todosOsJogos = Proximos();

        let proximosJogos = todosOsJogos.filter(function (i) {
            return i.golsMandante === "" && i.golsVisitante === "";
        });
        this.setState({ proximosJogos });
    }

    render() {
        const meuTime = this.state.meuTime;
        const jogos = this.state.proximosJogos;
        return (
            <>
                <div className="container" style={{ color: Times(this.props.meuTime).letterColor, backgroundColor: Times(this.props.meuTime).backgroundColor }}>
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