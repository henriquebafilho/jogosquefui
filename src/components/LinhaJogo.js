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
            case 0: return "Segunda";
            case 1: return "Terça";
            case 2: return "Quarta";
            case 3: return "Quinta";
            case 4: return "Sexta";
            case 5: return "Sábado";
            case 6: return "Domingo";
        }
    }

    return (
        <div className='divJogo' style={{ 
            background: "linear-gradient(90deg, " + Times(props.jogo[0]).backgroundColor + " 49%, " + Times(props.jogo[1]).backgroundColor + " 52%)", 
            padding: '15px', 
            marginBottom: '10px', 
            width: '60vw', 
            borderColor: Times(props.meuTime).backgroundColor  === 'white' ? 'black' : 'white'}}>
            <p style={{ textShadow: "0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000", color:"white", marginBottom: '5px' }}>{converteDia(props.jogo[5])}, {converteData(props.jogo[5])} | {props.jogo[4]} | {props.jogo[6]}</p>
            <div style={{ display: 'inline', fontSize: '25px', color: Times(props.jogo[0]).letterColor, textShadow: Times(props.jogo[0]).letterColor === "white" ? "0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000" : "none", paddingRight: '5px' }}>
                <p style={{ display: 'inline-block', verticalAlign: 'middle', paddingRight: '5px' }}>{props.jogo[0].toUpperCase() + ' '}</p>
                <img src={require('../escudos/' + Times(props.jogo[0]).escudo + '.png')} style={{ display: 'inline-block', verticalAlign: 'middle', width: "3em", height: "3em" }} alt={props.jogo[0]} />
            </div>
            <div style={{ display: 'inline', textShadow: "0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000", color:"white" }}>
                <p style={{ display: 'inline-block', verticalAlign: 'middle' }}>{props.jogo[2] + ' x ' + props.jogo[3]}</p>
            </div>
            <div style={{ display: 'inline', fontSize: '25px', color: Times(props.jogo[1]).letterColor, textShadow: Times(props.jogo[1]).letterColor === "white" ? "0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000" : "none", paddingLeft: '5px' }}>
                <img src={require('../escudos/' + Times(props.jogo[1]).escudo + '.png')} style={{ display: 'inline-block', verticalAlign: 'middle', width: "3em", height: "3em" }} alt={props.jogo[1]} />
                <p style={{ display: 'inline-block', verticalAlign: 'middle', paddingLeft: '5px' }}>{props.jogo[1].toUpperCase() + ' '}</p>
            </div>
        </div>
    )
}

export default LinhaJogo;