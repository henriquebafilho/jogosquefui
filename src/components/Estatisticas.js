function Estatisticas(props) {
    return (
        <div>
            <p>{props.total} jogo{props.total > 1 ? 's' : ''}</p>
            <div className='resultsBar'>
                <div className="vitoriasBar"
                    style={{
                        width: props.vitorias * 100 / props.total + '%',
                        borderTopLeftRadius: props.vitorias > 0 ? '10px' : '',
                        borderBottomLeftRadius: props.vitorias > 0 ? '10px' : '',
                        borderTopRightRadius: (props.vitorias > 0 && props.empates === 0 && props.derrotas === 0) ? '10px' : '',
                        borderBottomRightRadius: (props.vitorias > 0 && props.empates === 0 && props.derrotas === 0) ? '10px' : ''
                    }}>
                    {props.vitorias > 0 ? props.vitorias : ""}
                </div>
                <div className="empatesBar" style={{
                    width: props.empates * 100 / props.total + '%',
                    borderTopLeftRadius: (props.vitorias === 0 && props.empates > 0) ? '10px' : '',
                    borderBottomLeftRadius: (props.vitorias === 0 && props.empates > 0) ? '10px' : '',
                    borderTopRightRadius: (props.empates > 0 && props.derrotas === 0) ? '10px' : '',
                    borderBottomRightRadius: (props.empates > 0 && props.derrotas === 0) ? '10px' : ''
                }}>
                    {props.empates > 0 ? props.empates : ""}
                </div>
                <div className="derrotasBar" style={{
                    width: props.derrotas * 100 / props.total + '%',
                    borderTopLeftRadius: (props.vitorias === 0 && props.empates === 0 && props.derrotas > 0) ? '10px' : '',
                    borderBottomLeftRadius: (props.vitorias === 0 && props.empates === 0 && props.derrotas > 0) ? '10px' : '',
                    borderTopRightRadius: props.derrotas > 0 ? '10px' : '',
                    borderBottomRightRadius: props.derrotas > 0 ? '10px' : ''
                }}>
                    {props.derrotas > 0 ? props.derrotas : ""}
                </div>
            </div>
        </div>
    )
}

export default Estatisticas;