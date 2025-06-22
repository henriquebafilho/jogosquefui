import { Component } from 'react';
import Times from '../Times';
import LinhaJogo from '../components/LinhaJogo';
import Ultimos from '../TodosOsJogos/BotafogoJogos';

class UltimosJogos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: props.time,
            ultimosJogos: [],
            isLoading: false,
            showQuantidade: 20
        }
    }

    async componentDidMount() {
        this._isMounted = true;
        window.scrollTo(0, 0);
        this.setState({ isLoading: true })
        await this.getUltimosJogos();
        this.setState({ isLoading: false })
    }

    getUltimosJogos = async () => {
        this.setState({ isLoading: true });
        this.setState({
            ultimosJogos: Ultimos().filter(jogo => jogo.golsMandante !== "" && jogo.golsVisitante !== "").reverse().slice(0, this.state.showQuantidade)
        });
        this.setState({ isLoading: false });
    }

    render() {
        const time = this.state.time;
        const jogos = this.state.ultimosJogos;
        let anoAtual = 0;
        return (
            <>
                <div className="container" style={{ color: Times(this.props.time).letterColor, backgroundColor: Times(this.props.time).backgroundColor }}>
                    {jogos.length > 0 ? jogos.map((index) => {
                        let mostraAno = false;
                        if (anoAtual !== index.data.split("-")[0]) {
                            anoAtual = index.data.split("-")[0];
                            mostraAno = true;
                        }
                        return <div key={JSON.stringify(index)}>
                            {mostraAno ? <h1 style={{ textAlign: 'center', color: Times(time).letterColor, margin: '20px' }}>{anoAtual}</h1> : ""}
                            <LinhaJogo time={time} jogo={index} jogos={jogos} />
                        </div>
                    }) : <div>
                        <h4 style={{ color: Times(time).letterColor, textAlign: 'center' }}>Nenhum jogo cadastrado</h4>
                    </div>}
                </div>
            </>
        )
    }
}

export default UltimosJogos;