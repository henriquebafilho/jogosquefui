import React, { Component } from 'react';
import Times from '../Times';
import LinhaJogo from '../components/LinhaJogo';
import Proximos from '../TodosOsJogos/ProximosJogos';

class ProximosJogos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: props.time,
            proximosJogos: [],
            isLoading: false
        }
    }

    async componentDidMount() {
        this._isMounted = true;
        window.scrollTo(0, 0);
        await this.getProximosJogos();
    }

    getProximosJogos = async () => {
        this.setState({ isLoading: true })
        let todosOsJogos = Proximos();

        let proximosJogos = todosOsJogos.filter(function (i) {
            return i.golsMandante === "" && i.golsVisitante === "";
        });
        this.setState({ proximosJogos, isLoading: false });
    }

    render() {
        const time = this.state.time;
        const jogos = this.state.proximosJogos;
        return (
            <>
                <div className="container" style={{ color: Times(this.props.time).letterColor, backgroundColor: Times(this.props.time).backgroundColor }}>
                    {jogos.length > 0 ? jogos.map((index) => {
                        return <div>
                            <LinhaJogo key={JSON.stringify(index)} time={time} jogo={index} />
                        </div>
                    }) : <div>
                        <h4 style={{ color: Times(time).letterColor, textAlign: 'center' }}>Não há jogos futuros</h4>
                    </div>}
                </div>
            </>
        )
    }
}

export default ProximosJogos;