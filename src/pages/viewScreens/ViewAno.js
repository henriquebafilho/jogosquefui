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
        this._isMounted = true;
        window.scrollTo(0, 0);
    }

    buttonClick = async () => {
        this.setState({ clicked: true });
    }

    render() {
        const meuTime = this.state.meuTime;
        const flag = this.state.flag;
        const buttonClickFunction = () => this.buttonClick();
        return (
            this.state.clicked && flag === "meusJogos" ? <Anos meuTime={meuTime} jogos={this.props.jogos} /> :
                this.state.clicked && flag === "todosOsJogos" ? <TodosOsJogos meuTime={meuTime} jogos={this.props.jogos} /> :
                    (<div className="App-header" style={{ backgroundColor: Times(this.props.meuTime).backgroundColor, color: Times(this.props.meuTime).letterColor }}>
                        <div className='a' style={{ textAlign: 'left' }}>
                            <button style={{ textDecoration: 'underline' }} onClick={() => buttonClickFunction()}>{"< Voltar"}</button>
                        </div>
                        <h1>{flag === "meusJogos" ? "Meus jogos em" : "Jogos do " + meuTime + " em"}</h1>
                        <h1>{this.props.ano}</h1>
                        <Estatisticas meuTime={this.state.meuTime} jogos={this.props.jogosAno} />
                        {
                            flag === "meusJogos" ?
                                this.state.jogos.reverse().map((index) => {
                                    return <LinhaJogo meuTime={meuTime} jogo={index} />
                                }) :
                                this.state.jogos.map((index) => {
                                    return <LinhaJogo meuTime={meuTime} jogo={index} />
                                })
                        }
                    </div>)
        )
    }
}

export default ViewAno;