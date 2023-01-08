import React, { Component } from 'react';
import Times from '../Times';

class LinhaJogo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            meuTime: props.meuTime,
            jogo: props.jogo,
            isLoading: false,
            clicked: false,
            checked: false
        }
    }

    async componentDidMount() {
        this._isMounted = true;
        window.scrollTo(0, 0);
        this.setState({ isLoading: true })
        await this.getJogosQueFui();
        this.setState({ isLoading: false })
    }

    getJogosQueFui = async () => {
        for (var a = 0; a < this.props.meusJogos.getJogos().length; a++) {
            if (this.state.jogo[5] === this.props.meusJogos.getJogos()[a][5]) {
                this.setState({ checked: true });
                break;
            }
        }
    }

    converteData(data) {
        var array = data.split("-");
        var novaData = array[2] + "/" + array[1] + "/" + array[0];

        return novaData;
    }

    converteDia(data) {
        data = new Date(data);
        var dia = data.getDay();
        switch (dia) {
            case 0: return "Segunda";
            case 1: return "Terça";
            case 2: return "Quarta";
            case 3: return "Quinta";
            case 4: return "Sexta";
            case 5: return "Sábado";
            case 6: return "Domingo";
            default: return "";
        }
    }

    render() {
        const checked = this.state.checked;
        const converteDia = (dia) => this.converteDia(dia);
        const converteData = (data) => this.converteData(data);
        const meusJogos = this.props.meusJogos;
        return (
            <div className='divJogo' style={{
                background: "linear-gradient(90deg, " + Times(this.props.jogo[0]).backgroundColor + " 49%, " + Times(this.props.jogo[1]).backgroundColor + " 52%)",
                padding: '15px',
                marginBottom: '10px',
                width: '60vw',
                borderColor: Times(this.props.meuTime).backgroundColor === 'white' ? 'black' : 'white'
            }}>
                <div>
                    <p style={{ display: 'inline', textShadow: "0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000", color: "white", marginBottom: '5px', fontWeight: 'bold' }}>{converteDia(this.props.jogo[5])}, {converteData(this.props.jogo[5])}</p>
                    <p style={{ display: 'inline', textShadow: "0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000", color: "white", marginBottom: '5px' }}> - {this.props.jogo[4]} - </p>
                    <p style={{ display: 'inline', textShadow: "0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000", color: "white", marginBottom: '5px', fontWeight: 'bold' }}>{this.props.jogo[6]}</p>
                </div>
                <div style={{ display: 'inline', fontSize: '25px', color: Times(this.props.jogo[0]).letterColor, textShadow: Times(this.props.jogo[0]).letterColor === "white" ? "0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000" : "none", paddingRight: '5px' }}>
                    <p style={{ display: 'inline-block', verticalAlign: 'middle', paddingRight: '5px' }}>{this.props.jogo[0].toUpperCase() + ' '}</p>
                    <img src={require('../escudos/' + Times(this.props.jogo[0]).escudo + '.png')} title={this.props.jogo[0]} style={{ display: 'inline-block', verticalAlign: 'middle', width: "4rem", height: "4rem" }} alt={this.props.jogo[0]} />
                </div>
                <div style={{ display: 'inline-block', textAlign: 'center', textShadow: "0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000", color: "white" }}>
                    <p style={{ display: 'inline', verticalAlign: 'middle', fontSize: '30px' }}>{this.props.jogo[2] + ' x ' + this.props.jogo[3]}</p>
                </div>
                <div style={{ position: 'initial', display: 'inline', fontSize: '25px', color: Times(this.props.jogo[1]).letterColor, textShadow: Times(this.props.jogo[1]).letterColor === "white" ? "0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000" : "none", paddingLeft: '5px' }}>
                    <img src={require('../escudos/' + Times(this.props.jogo[1]).escudo + '.png')} title={this.props.jogo[1]} style={{ display: 'inline-block', verticalAlign: 'middle', width: "4rem", height: "4rem" }} alt={this.props.jogo[1]} />
                    {<p style={{ display: 'inline-block', verticalAlign: 'middle', paddingLeft: '5px' }}>{this.props.jogo[1].toUpperCase() + ' '}</p>}
                </div>
                {(this.props.jogo[2] !== "" && this.props.jogo[3] !== "") && <div>
                    <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => {
                            if(checked){
                                meusJogos.removeJogo(this.props.jogo);
                            } else {
                                meusJogos.adicionaJogo(this.props.jogo);
                            }
                            this.setState({ checked: !checked })
                        }
                        }
                        style={{
                            backgroundColor: "#ff0000",
                            borderRadius: '5px',
                            cursor: 'pointer'
                        }} />
                </div>}
            </div >
        )
    }
}

export default LinhaJogo;