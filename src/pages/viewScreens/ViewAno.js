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
            meuTime: "Botafogo",
            jogos: props.jogosAno,
            flag: props.flag,
            clicked: false,
            logged: this.props.logged
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
        const jogos = this.state.jogos;
        let logged = this.state.logged;
        const buttonClickFunction = () => this.buttonClick();
        this.state.jogos.sort(function (a, b) {
            return a.data < b.data ? -1 : a.data > b.data ? 1 : 0;
        });

        return (
            this.state.clicked && flag === "meusJogos" ? <Anos meuTime={meuTime} meusJogos={this.props.meusJogos} fromView={true} logged={logged} /> :
                this.state.clicked && flag === "todosOsJogos" ? <TodosOsJogos meuTime={meuTime} jogos={jogos} fromView={true} logged={logged} /> :
                    <div style={{ backgroundColor: Times(this.props.meuTime).backgroundColor, color: Times(this.props.meuTime).letterColor }}>
                        <div className='a'>
                            <button style={{ outline: 'none', border: 'none', textDecoration: 'underline', fontSize: '25px', cursor: 'pointer', backgroundColor: Times(this.props.meuTime).backgroundColor, color: Times(this.props.meuTime).letterColor }} onClick={() => buttonClickFunction()}>{"< Voltar"}</button>
                        </div>
                        <div className="App-header" style={{ backgroundColor: Times(this.props.meuTime).backgroundColor, color: Times(this.props.meuTime).letterColor }}>
                            <h1 style={{ padding: '5px' }}>{this.props.ano}</h1>
                            <br />
                            <Estatisticas meuTime={this.state.meuTime} jogos={this.props.jogosAno} />
                            {
                                flag === "meusJogos" ?
                                    this.state.jogos.map((index) => {
                                        return <LinhaJogo meuTime={meuTime} jogo={index} logged={logged} />
                                    }) :
                                    this.state.jogos.map((index) => {
                                        return <LinhaJogo meuTime={meuTime} jogo={index} logged={logged} />
                                    })
                            }
                        </div>
                    </div>
        )
    }
}

export default ViewAno;