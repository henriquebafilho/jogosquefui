import React, { Component } from 'react';
import Times from '../Times';
import { FaTrophy, FaCalendarAlt } from "react-icons/fa";
import { MdStadium } from "react-icons/md";
import Common from "../common";

class LinhaJogo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            meuTime: props.meuTime,
            jogo: props.jogo,
            isLoading: false
        }
    }

    async componentDidMount() {
        this._isMounted = true;
        window.scrollTo(0, 0);
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
        const converteDia = (dia) => this.converteDia(dia);
        const converteData = (data) => this.converteData(data);
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
                    <FaCalendarAlt style={{ color: Times(this.props.jogo.mandante).letterColor, paddingRight: "5px" }} />
                    <p style={{
                        textShadow: Common.textShadow,
                        color: "white",
                        display: "inline",
                    }}>
                        {converteDia(this.props.jogo.data)}, {converteData(this.props.jogo.data)}
                    </p>
                </div>
                <div>
                    <p style={{ textShadow: Common.textShadow, color: "white", fontSize: '1em' }}><FaTrophy style={{ color: Times(this.props.jogo.mandante).letterColor }} /> {this.props.jogo.campeonato}</p>
                    <p style={{ textShadow: Common.textShadow, color: "white", marginBottom: '5px', fontSize: '1em' }}><MdStadium style={{ color: Times(this.props.jogo.mandante).letterColor }} /> {this.props.jogo.estadio !== "" ? this.props.jogo.estadio : " - "}</p>
                </div>
                <div id='placar' style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                    <p className='nomeTime' style={{
                        paddingTop: '20px',
                        paddingBottom: '20px',
                        display: 'inline',
                        width: "40%",
                        textAlign: "right",
                        paddingRight: '5px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        color: Times(this.props.jogo.mandante, this.props.jogo.data).letterColor
                    }}>
                        {this.props.jogo.mandante.toUpperCase()}
                    </p>
                    <img
                        className='escudoLinha'
                        src={process.env.PUBLIC_URL + '/escudos/' + Times(this.props.jogo.mandante, this.props.jogo.data).escudo + '.png'}
                        title={this.props.jogo.mandante}
                        style={{ display: 'inline-block', verticalAlign: 'middle' }}
                        alt={this.props.jogo.mandante}
                        loading='lazy'
                    />
                    <div style={{ paddingTop: '1%', display: 'inline', minWidth: this.props.jogo.golsMandante === "" && this.props.jogo.golsVisitante === "" ? "40px" : "90px", textAlign: "center", fontSize: '2em', textShadow: Common.textShadow, color: "white" }}>
                        {(this.props.jogo.golsMandante === "WO" || this.props.jogo.golsVisitante === "WO") && <div>WO</div>}
                        {this.props.jogo.golsMandante === "WO" ? <div>←</div> : this.props.jogo.golsVisitante === "WO" ? <div>→</div> : ''}
                        {this.props.jogo.golsMandante !== "WO" && this.props.jogo.golsVisitante !== "WO" && this.props.jogo.golsMandante === "" && this.props.jogo.golsVisitante === "" && <p className="horario" style={{ fontSize: "13px", paddingTop: "20%", minWidth: "41px" }}>{this.props.jogo.horario ? this.props.jogo.horario : " X "}</p>}
                        {this.props.jogo.golsMandante !== "WO" && this.props.jogo.golsVisitante !== "WO" && this.props.jogo.golsMandante !== "" && this.props.jogo.golsVisitante !== "" && ' ' + this.props.jogo.golsMandante + ' x ' + this.props.jogo.golsVisitante + ' '}
                    </div>
                    <img
                        className='escudoLinha' src={process.env.PUBLIC_URL + '/escudos/' + Times(this.props.jogo.visitante, this.props.jogo.data).escudo + '.png'}
                        title={this.props.jogo.visitante}
                        style={{ display: 'inline-block', verticalAlign: 'middle' }}
                        alt={this.props.jogo.visitante}
                        loading='lazy'
                    />
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
                            whiteSpace: 'nowrap'
                        }}>
                        {this.props.jogo.visitante.toUpperCase()}
                    </p>
                </div>
                {this.props.jogo.penaltis &&
                    <div style={{ textAlign: "center", textShadow: Common.textShadow, color: "white" }}>
                        <div>Pênaltis:</div>
                        <div>{this.props.jogo.penaltis}</div>
                    </div>}
            </div >
        )
    }
}

export default LinhaJogo;