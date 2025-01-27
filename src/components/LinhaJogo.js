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
        for (var a = 0; a < this.props.meusJogos/*.getJogos()*/.length; a++) {
            if (this.state.jogo.data === this.props.meusJogos/*.getJogos()*/[a][5]) {
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
        //const checked = this.state.checked;
        const converteDia = (dia) => this.converteDia(dia);
        const converteData = (data) => this.converteData(data);
        //const meusJogos = this.props.meusJogos;
        return (
            <div className='divJogo' 
            style={{
                background: "linear-gradient(90deg, " + Times(this.props.jogo.mandante, this.props.jogo.data).backgroundColor + " 49%, " + Times(this.props.jogo.visitante, this.props.jogo.data).backgroundColor + " 52%)",
                paddingLeft: '10px',
                paddingBottom: '10px',
                marginBottom: '10px',
                width: '100%',
                borderColor: Times(this.props.meuTime).backgroundColor === 'white' ? 'black' : 'white'
            }}
            key={JSON.stringify(this.props.jogo)}
            >
                <div>
                    <p style={{
                        display: 'inline',
                        textShadow: "0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000",
                        color: "white"
                    }}>
                        {converteDia(this.props.jogo.data)}, {converteData(this.props.jogo.data)}
                    </p>
                </div>
                <div>
                    <p style={{ display: 'inline', textShadow: "0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000", color: "white", marginBottom: '5px', fontSize: '1em' }}>{this.props.jogo.campeonato}</p>
                    <p style={{ display: 'inline', textShadow: "0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000", color: "white", marginBottom: '5px', fontSize: '1em' }}>{this.props.jogo.estadio !== "" ? ' | ' + this.props.jogo.estadio : ""}</p>
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
                    <p className='nomeTime' style={{ 
                        paddingTop: '20px', 
                        paddingBottom: '20px', 
                        display: 'inline', 
                        width: "40%", 
                        textAlign: "right", 
                        color: Times(this.props.jogo.mandante, this.props.jogo.data).letterColor,
                        paddingRight: '5px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        fontWeight: Times(this.props.jogo.mandante, this.props.jogo.data).letterColor !== "white" ? "bold" : "normal" 
                    }}>
                       {this.props.jogo.mandante.toUpperCase()}
                    </p>
                    <img className='escudoLinha' src={require('../escudos/' + Times(this.props.jogo.mandante, this.props.jogo.data).escudo + '.png')} title={this.props.jogo.mandante} style={{ display: 'inline-block', verticalAlign: 'middle' }} alt={this.props.jogo.mandante} />
                    <div style={{ paddingTop: '1%', display: 'inline', minWidth: this.props.jogo.golsMandante === "" && this.props.jogo.golsVisitante === "" ? "40px" : "90px", textAlign: "center", fontSize: '2em', textShadow: "0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000", color: "white" }}>
                        {(this.props.jogo.golsMandante === "WO" || this.props.jogo.golsVisitante === "WO") && <div>WO</div>}
                        {this.props.jogo.golsMandante === "WO" ? <div>←</div> : this.props.jogo.golsVisitante === "WO" ? <div>→</div> : ''}
                        {this.props.jogo.golsMandante !== "WO" && this.props.jogo.golsVisitante !== "WO" && this.props.jogo.golsMandante === "" && this.props.jogo.golsVisitante === "" && <p className="horario" style={{ fontSize: "15px", paddingTop: "20%", minWidth: "41px" }}>{this.props.jogo.horario ? this.props.jogo.horario : " X "}</p>}
                        {this.props.jogo.golsMandante !== "WO" && this.props.jogo.golsVisitante !== "WO" && this.props.jogo.golsMandante !== "" && this.props.jogo.golsVisitante !== "" && ' ' + this.props.jogo.golsMandante + ' x ' + this.props.jogo.golsVisitante + ' '}
                    </div>
                    <img className='escudoLinha' src={require('../escudos/' + Times(this.props.jogo.visitante, this.props.jogo.data).escudo + '.png')} title={this.props.jogo.visitante} style={{ display: 'inline-block', verticalAlign: 'middle' }} alt={this.props.jogo.visitante} />
                    <p className='nomeTime' 
                    style={{ 
                        paddingTop: '20px', 
                        paddingBottom: '20px', 
                        display: 'inline', 
                        width: "40%", 
                        textAlign: "left", 
                        color: Times(this.props.jogo.visitante, this.props.jogo.data).letterColor, 
                        paddingLeft: '5px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        fontWeight: Times(this.props.jogo.visitante, this.props.jogo.data).letterColor !== "white" ? "bold" : "normal" 
                    }}>
                        {this.props.jogo.visitante.toUpperCase()}
                    </p>
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