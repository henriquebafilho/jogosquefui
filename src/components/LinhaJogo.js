import React from 'react';
import Times from '../Times';

function LinhaJogo(props) {

    function converteData(data) {
        var array = data.split("-");
        var novaData = array[2] + "/" + array[1] + "/" + array[0];

        return novaData;
    }

    function converteDia(data) {
        data = new Date(data);
        var dia = data.getDay();
        switch (dia) {
            case 0: return "Seg";
            case 1: return "Ter";
            case 2: return "Qua";
            case 3: return "Qui";
            case 4: return "Sex";
            case 5: return "Sáb";
            case 6: return "Dom";
        }
    }/* 
    var dia = new Date().toLocaleDateString();
    var boleana = Date("2002-11-11").toLocaleDateString() < dia;
    console.log(boleana) */

    return (
        <div className='divJogo' style={{
            background: "linear-gradient(90deg, " + Times(props.jogo[0]).backgroundColor + " 49%, " + Times(props.jogo[1]).backgroundColor + " 52%)",
            padding: '15px',
            marginBottom: '10px',
            width: '60vw',
            borderColor: Times(props.meuTime).backgroundColor === 'white' ? 'black' : 'white'
        }}>
            <p style={{ textShadow: "0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000", color: "white" }}>{converteDia(props.jogo[5])}, {converteData(props.jogo[5])} | {props.jogo[4]} | {props.jogo[6]}</p>
            <div className='divPlacar' style={{
                clear: 'both',
                whiteSpace: 'nowrap'
            }}>
                <div className='divMandante' style={{ 
                    color: Times(props.jogo[0]).letterColor,
                    textShadow: Times(props.jogo[0]).letterColor === "white" ? "0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000" : "none",
                    paddingRight: '5px',
                    width: '40%',
                    float: 'left',
                    textAlign: 'right',
                    verticalAlign: 'middle',
                    fontSize: 'clamp(0.5em, 0.8em + 0.8vw, 1vw)'
                    }}>
                    <p style={{
                        display: 'inline',
                        verticalAlign: 'middle',
                        paddingRight: '5px',
                        textAlign: 'right',
                        overflow: props.jogo[0].split(" ").size > 1 && props.jogo[0].length() >= 13 ? 'none' : 'hidden',
                        textOverflow: props.jogo[0].split(" ").size > 1 && props.jogo[0].length() >= 13 ? 'none' : 'ellipsis',
                        whiteSpace: props.jogo[0].split(" ").size > 1 && props.jogo[0].length() >= 13 ? "nowrap" : "pre-wrap"
                    }}>{props.jogo[0].toUpperCase() + ' '}</p>
                    <img src={require('../escudos/' + Times(props.jogo[0]).escudo + '.png')} style={{ width: "3em", height: "3em", float: 'right' }} alt={props.jogo[0]} />
                </div>
                <div className='divResultado' style={{
                    display: 'inline-block',
                    textShadow: "0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000",
                    color: "white",
                    width: '15%',
                    height: '1.5em',
                    fontSize: '1.4em'
                }}>
                    <p style={{ display: 'inline', verticalAlign: 'middle' }}>{props.jogo[2]}</p>
                    <p style={{ display: 'inline', verticalAlign: 'middle' }}> x </p>
                    <p style={{ display: 'inline', verticalAlign: 'middle' }}>{props.jogo[3]}</p>
                </div>
                <div className='divVisitante' style={{
                    color: Times(props.jogo[1]).letterColor,
                    textShadow: Times(props.jogo[1]).letterColor === "white" ? "0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000" : "none",
                    paddingLeft: '5px',
                    width: '40%',
                    float: 'right',
                    textAlign: 'left',
                    verticalAlign: 'middle',
                    fontSize: 'clamp(0.5em, 0.8em + 0.8vw, 1vw)'
                }}>
                    <img src={require('../escudos/' + Times(props.jogo[1]).escudo + '.png')} style={{ display: 'inline', float: 'left', verticalAlign: 'middle', width: "3em", height: "3em" }} alt={props.jogo[1]} />
                    <p style={{ 
                        display: 'inline',
                        verticalAlign: 'middle',
                        paddingLeft: '5px',
                        textAlign: 'left',
                        overflow: props.jogo[1].split(" ").size > 1 && props.jogo[1].length() >= 13 ? 'none' : 'hidden',
                        textOverflow: props.jogo[1].split(" ").size > 1 && props.jogo[1].length() >= 13 ? 'none' : 'ellipsis',
                        whiteSpace: props.jogo[1].split(" ").size > 1 && props.jogo[1].length() >= 13 ? "nowrap" : "pre-wrap"
                     }}>{props.jogo[1].toUpperCase() + ' '}</p>
                </div>
            </div>
        </div>
    )
}

export default LinhaJogo;