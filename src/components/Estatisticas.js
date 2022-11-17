import Times from '../Times';
import Common from '../common';

function Estatisticas(props) {
    // Calcular vitórias, empates e derrotas de acordo com o array de jogos
    var total = props.jogos.length;
    var vitorias = Common.getVitorias(props.meuTime, props.jogos);
    var empates = Common.getEmpates(props.meuTime, props.jogos);
    var derrotas = Common.getDerrotas(props.meuTime, props.jogos);
    return (
        <div style={{paddingBottom: '100px', width: '60vw'}}>
            <p style={{ color: Times(props.meuTime).letterColor}}>{total} jogo{total > 1 ? 's' : ''}</p>
            <div className='resultsBar' style={{ borderColor: Times(props.meuTime).backgroundColor  === 'white' ? 'black' : 'white'}}>
                <div className="vitoriasBar"
                    style={{
                        width: vitorias * 100 / total + '%',
                        borderTopLeftRadius: vitorias > 0 ? '10px' : '',
                        borderBottomLeftRadius: vitorias > 0 ? '10px' : '',
                        borderTopRightRadius: (vitorias > 0 && empates === 0 && derrotas === 0) ? '10px' : '',
                        borderBottomRightRadius: (vitorias > 0 && empates === 0 && derrotas === 0) ? '10px' : ''
                    }}>
                    {vitorias > 0 ? vitorias : ""}
                </div>
                <div className="empatesBar" style={{
                    width: empates * 100 / total + '%',
                    borderTopLeftRadius: (vitorias === 0 && empates > 0) ? '10px' : '',
                    borderBottomLeftRadius: (vitorias === 0 && empates > 0) ? '10px' : '',
                    borderTopRightRadius: (empates > 0 && derrotas === 0) ? '10px' : '',
                    borderBottomRightRadius: (empates > 0 && derrotas === 0) ? '10px' : ''
                }}>
                    {empates > 0 ? empates : ""}
                </div>
                <div className="derrotasBar" style={{
                    width: derrotas * 100 / total + '%',
                    borderTopLeftRadius: (vitorias === 0 && empates === 0 && derrotas > 0) ? '10px' : '',
                    borderBottomLeftRadius: (vitorias === 0 && empates === 0 && derrotas > 0) ? '10px' : '',
                    borderTopRightRadius: derrotas > 0 ? '10px' : '',
                    borderBottomRightRadius: derrotas > 0 ? '10px' : ''
                }}>
                    {derrotas > 0 ? derrotas : ""}
                </div>
            </div>
        </div>
    )
}

export default Estatisticas;