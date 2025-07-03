import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Times from '../../Times';
import Estatisticas from '../../components/Estatisticas';
import LinhaJogo from '../../components/LinhaJogo';
import common from '../../common';

function ViewAno(props) {
    const { time } = props;
    const { ano: anoParam } = useParams();
    const [jogos, setJogos] = useState([]);

    useEffect(() => {
        setJogos(common.getJogosAno(anoParam));
    }, [anoParam]);


    let imagemAno = "";
    try {
        imagemAno = require('../../anos/' + anoParam + '.png');
    } catch (e) {
        imagemAno = "";
    }

    return (
        <div className="container" style={{ backgroundColor: Times(time).backgroundColor, color: Times(time).letterColor }}>
            <div className="App-header" style={{ backgroundColor: Times(time).backgroundColor, color: Times(time).letterColor }}>
                <div>{imagemAno !== "" ? <img src={imagemAno} style={{ verticalAlign: 'middle' }} alt='ano' height='250' width='250' /> : ""}</div>
                <h1 style={{ padding: '5px' }}>{anoParam}</h1>
                <br />
                <Estatisticas time={time} jogos={jogos} />
                {jogos.map((jogo) => {
                    return <LinhaJogo key={JSON.stringify(jogo)} time={time} jogo={jogo} />
                })}
            </div>
        </div>
    );
}

export default ViewAno;