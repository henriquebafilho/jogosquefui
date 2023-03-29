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
        if (this.state.jogo.golsMandante !== "" && this.state.jogo.golsVisitante !== "") {
            await this.getJogosQueFui();
        }
        this.setState({ isLoading: false })
    }

    getJogosQueFui = async () => {
        for (var a = 0; a < this.props.meusJogos.getJogos().length; a++) {
            if (this.state.jogo.data === this.props.meusJogos.getJogos()[a][5]) {
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
                background: "linear-gradient(90deg, " + Times(this.props.jogo.mandante, this.props.jogo.data).backgroundColor + " 49%, " + Times(this.props.jogo.visitante, this.props.jogo.data).backgroundColor + " 52%)",
                paddingLeft: '10px',
                paddingBottom: '10px',
                marginBottom: '10px',
                width: '100%',
                borderColor: Times(this.props.meuTime).backgroundColor === 'white' ? 'black' : 'white'
            }}>
                <div style={{ textAlign: 'left' }}>
                    <p style={{
                        display: 'inline',
                        textShadow: Times(this.props.jogo.mandante, this.props.jogo.data).backgroundColor === "white" ? "" : "0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000" ,
                        color: Times(this.props.jogo.mandante, this.props.jogo.data).backgroundColor === "white" ? Times(this.props.jogo.mandante, this.props.jogo.data).letterColor : "white",
                        fontSize: '15px'
                    }}>
                        {converteDia(this.props.jogo.data)}, {converteData(this.props.jogo.data)}
                    </p>
                </div>
                <div>
                    <p style={{ display: 'inline', textShadow: "0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000", color: "white", marginBottom: '5px', fontWeight: 'bold' }}>{this.props.jogo.campeonato}</p>
                    <p style={{ display: 'inline', textShadow: "0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000", color: "white", marginBottom: '5px', fontWeight: 'bold' }}>{this.props.jogo.estadio !== "" ? ' | ' + this.props.jogo.estadio : ""}</p>
                </div>
                <div id='placar' style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                    {/* (this.props.jogo[2] !== "" && this.props.jogo[3] !== "") && <div style={{ display: 'inline', textAlign: 'left' }}>
                        <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => {
                                if (checked) {
                                    meusJogos.removeJogo(this.props.jogo);
                                } else {
                                    meusJogos.adicionaJogo(this.props.jogo);
                                }
                                this.setState({ checked: !checked })
                            }
                            }
                            style={{
                                cursor: 'pointer',
                                width: '25px',
                                height: '25px',
                                margin: '10px',
                                position: 'absolute'
                            }} />
                    </div> */}
                    <div className='nomeTime' style={{ 
                        paddingTop: '20px', 
                        paddingBottom: '20px', 
                        display: 'inline', 
                        width: "40%", 
                        textAlign: "right", 
                        color: Times(this.props.jogo.mandante, this.props.jogo.data).letterColor, 
                        textShadow: Times(this.props.jogo.mandante, this.props.jogo.data).letterColor === "white" ? "0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000" : "none", 
                        paddingRight: '5px'
                    }}>
                       {this.props.jogo.mandante.toUpperCase()}
                    </div>
                    <img className='escudoLinha' src={require('../escudos/' + Times(this.props.jogo.mandante, this.props.jogo.data).escudo + '.png')} title={this.props.jogo.mandante} style={{ display: 'inline-block', verticalAlign: 'middle' }} alt={this.props.jogo.mandante} />
                    <div style={{ paddingTop: '10px', display: 'inline', minWidth: "120px", textAlign: "center", fontSize: '40px', textShadow: "0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000", color: "white" }}>
                        {(this.props.jogo.golsMandante === "WO" || this.props.jogo.golsVisitante === "WO") && <div>WO</div>}
                        {this.props.jogo.golsMandante === "WO" ? <div>←</div> : this.props.jogo.golsVisitante === "WO" ? <div>→</div> : ''}
                        {this.props.jogo.golsMandante !== "WO" && this.props.jogo.golsVisitante !== "WO" && ' ' + this.props.jogo.golsMandante + ' x ' + this.props.jogo.golsVisitante + ' '}
                    </div>
                    <img className='escudoLinha' src={require('../escudos/' + Times(this.props.jogo.visitante, this.props.jogo.data).escudo + '.png')} title={this.props.jogo.visitante} style={{ display: 'inline-block', verticalAlign: 'middle' }} alt={this.props.jogo.visitante} />
                    <div className='nomeTime' style={{ 
                        paddingTop: '20px', 
                        paddingBottom: '20px', 
                        display: 'inline', 
                        width: "40%", 
                        textAlign: "left", 
                        color: Times(this.props.jogo.visitante, this.props.jogo.data).letterColor, 
                        textShadow: Times(this.props.jogo.visitante, this.props.jogo.data).letterColor === "white" ? "0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000" : "none", 
                        paddingLeft: '5px' 
                    }}>
                        {this.props.jogo.visitante.toUpperCase()}
                    </div>
                </div>
                {this.props.jogo.penaltis &&
                    <div style={{ textAlign: "center", textShadow: "0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000", color: "white" }}>
                        <div>Pênaltis:</div>
                        <div>{this.props.jogo.penaltis}</div>
                    </div>}
            </div >
        )
    }
}

export default LinhaJogo;