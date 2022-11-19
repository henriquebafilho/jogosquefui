import React, { Component } from 'react';
import Times from '../../Times';
import Estatisticas from '../../components/Estatisticas';
import Anos from '../Anos';
import LinhaJogo from '../../components/LinhaJogo';

class ViewAno extends Component {
    constructor(props) {
        super(props);
        this.state = {
            meuTime: props.meuTime,
            jogos: props.jogosAno,
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
        const buttonClickFunction = () => this.buttonClick();
        return (
            this.state.clicked ? <Anos meuTime={meuTime} jogos={this.props.jogos} /> :
                (<div className="App-header" style={{ backgroundColor: Times(this.props.meuTime).backgroundColor, color: Times(this.props.meuTime).letterColor }}>
                    <div class='a' style={{ textAlign: 'left' }}>
                        <button style={{ textDecoration: 'underline' }} onClick={() => buttonClickFunction()}>{"< Voltar"}</button>
                    </div>
                    <h1>{this.props.ano}</h1>
                    <Estatisticas meuTime={this.state.meuTime} jogos={this.props.jogosAno} />
                    {this.state.jogos.reverse().map((index) => {
                        return <LinhaJogo meuTime={meuTime} jogo={index} />
                    })}
                </div>)
        )
    }
}

export default ViewAno;