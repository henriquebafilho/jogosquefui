import React, { Component } from 'react';
import Times from '../Times';
import LinhaJogo from '../components/LinhaJogo';
import Navbar from '../components/Navbar';

class ProximosJogos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            meuTime: props.meuTime,
            jogos: props.jogos,
            proximosJogos: [],
            isLoading: false,
            clicked: false
        }
        this.buttonClick = this.buttonClick.bind(this);
    }

    async componentDidMount() {
        this._isMounted = true;
        window.scrollTo(0, 0);
        this.setState({ isLoading: true })
        await this.getProximosJogos();
        this.setState({ isLoading: false })
    }

    buttonClick = async (estadio) => {
        this.setState({ clicked: true, estadioAtual: estadio });
        await this.getEstadioJogos(estadio);
    }

    getProximosJogos = async () => {
        var jogos = [];
        this.state.jogos.map(function (i) {
            if (i[2] === "" && i[3] === "") {
                jogos.push(i);
            }
        })
        this.setState({ proximosJogos: jogos })
    }

    render() {
        const meuTime = this.state.meuTime;
        const jogos = this.state.proximosJogos;
        return (
            <>
                <Navbar meuTime={meuTime} style={{ position: 'fixed' }} />
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