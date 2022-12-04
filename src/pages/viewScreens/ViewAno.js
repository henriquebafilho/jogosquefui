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
                    <div style={{ backgroundColor: Times(this.props.meuTime).backgroundColor, color: Times(this.props.meuTime).letterColor }}>
                        <div className='a'>
                            <button style={{ outline: 'none', border: 'none', textDecoration: 'underline', fontSize: '25px', cursor: 'pointer', backgroundColor: Times(this.props.meuTime).backgroundColor, color: Times(this.props.meuTime).letterColor }} onClick={() => buttonClickFunction()}>{"< Voltar"}</button>
                        </div>
                        <div className="App-header" style={{ backgroundColor: Times(this.props.meuTime).backgroundColor, color: Times(this.props.meuTime).letterColor }}>
                            <h1 style={{ padding: '5px' }}>{flag === "meusJogos" ? "Meus jogos em " + this.props.ano : this.props.ano}</h1>
                            <img src={require('../../escudos/' + Times(this.props.meuTime).escudo + '.png')} className="App-logo" alt={"Escudo do " + this.props.meuTime} style={{ width: '100px', height: '100px' }} />
                            <br />
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
                        </div>
                    </div>
        )
    }
}

export default ViewAno;