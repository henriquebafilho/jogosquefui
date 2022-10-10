import React from 'react';
import Times from '../Times';

function LinhaJogo(props) {

    return (
        <div className='divJogo' style={{ background: "linear-gradient(90deg, " + Times(props.jogo[0]).backgroundColor + " 49%, " + Times(props.jogo[1]).backgroundColor + " 52%)", padding: '15px', marginBottom: '10px' }}>
            <p style={{ textShadow: "0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000" }}>{props.jogo[5]}</p>
            <p style={{ textShadow: "0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000" }}>{props.jogo[6]}</p>
            <div style={{ display: 'inline', fontSize: '25px', color: Times(props.jogo[0]).letterColor, textShadow: Times(props.jogo[0]).letterColor === "white" ? "0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000" : "none", paddingRight: '5px' }}>
                <p style={{ display: 'inline-block', verticalAlign: 'middle', paddingRight: '5px' }}>{props.jogo[0].toUpperCase() + ' '}</p>
                <img src={require('../escudos/' + Times(props.jogo[0]).escudo + '.png')} style={{ display: 'inline-block', verticalAlign: 'middle', width: "3em", height: "3em" }} alt={props.jogo[0]} />
            </div>
            <div style={{ display: 'inline', textShadow: "0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000" }}>
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