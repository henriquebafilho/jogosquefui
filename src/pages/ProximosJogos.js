import React, { Component } from 'react';
import Times from '../Times';
import LinhaJogo from '../components/LinhaJogo';

class ProximosJogos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            meuTime: "Botafogo",
            proximosJogos: this.props.proximosJogos,
            isLoading: false,
            clicked: false
        }
    }

    async componentDidMount() {
        this._isMounted = true;
        this.setState({ isLoading: true })
        this.setState({
            proximosJogos: this.state.proximosJogos.sort(function (a, b) {
                return a.data > b.data ? 1 : a.data < b.data ? -1 : 0;
            })
        });
        this.setState({ isLoading: false })
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