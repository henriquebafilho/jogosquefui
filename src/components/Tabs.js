import React, { Component } from 'react';
import Adversarios from '../pages/Adversarios';
import Anos from '../pages/Anos';
import Estadios from '../pages/Estadios';
import Times from '../Times';
import Estatisticas from './Estatisticas';
import LinhaJogo from './LinhaJogo';
import ProximosJogos from '../pages/ProximosJogos';

class Tabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleState: 1,
            meusJogos: props.meusJogos.filter(jogo => jogo.golsMandante !== "" && jogo.golsVisitante !== ""),
            meuTime: props.meuTime,
            currentPage: 1,
            itemsPerPage: 20,
            ultimos: 1
        };
        this.handleNextPage = this.handleNextPage.bind(this);
        this.handlePrevPage = this.handlePrevPage.bind(this);
    }

    async componentDidMount(){
        this.setState({ meusJogos: this.state.meusJogos.sort(function (a, b) {
            return a.data < b.data ? 1 : a.data > b.data ? -1 : 0;
        })})
    }

    handleNextPage() {
        this.setState({
          currentPage: this.state.currentPage + 1
        });
      }
    
      handlePrevPage() {
        this.setState({
          currentPage: this.state.currentPage - 1
        });
      }

    toggleTab = async (index) => {
        this.setState({ toggleState: index });
    }

    ultimosTab = async (index) => {
        this.setState({ ultimos: index })
    }

    render() {
        const toggleTab = (index) => this.toggleTab(index);
        const ultimosTab = (index) => this.ultimosTab(index);
        let toggleState = this.state.toggleState;
        let meusJogos = this.state.meusJogos;
        let meuTime = this.state.meuTime;
        let ultimos = this.state.ultimos;
        let anoAtual = 0;
        const { currentPage, itemsPerPage } = this.state;

        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = meusJogos.slice(indexOfFirstItem, indexOfLastItem);

        const totalPages = Math.ceil(meusJogos.length / itemsPerPage);
        return (
            <div className="container" style={{ color: "white", border: "3px" }}>
                <div className="bloc-tabs">
                    <button id="tab" className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>
                        Todos
                    </button>
                    <button id="tab" className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>
                        Anos
                    </button>
                    <button id="tab" className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}>
                        Estádios
                    </button>
                    <button id="tab" className={toggleState === 4 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(4)}>
                        Adversários
                    </button>
                </div>

                <div className="content-tabs">
                    <div className={toggleState === 1 ? "content  active-content" : "content"}>
                        <div className="container" style={{ color: "white", backgroundColor: 'black', border: "3px", maxWidth: '80%', marginBottom: '20px' }}>
                            <div className="bloc-tabs">
                                <button id="tab" className={ultimos === 1 ? "tabs active-tabs" : "tabs"} onClick={() => ultimosTab(1)}>
                                    Últimos Jogos
                                </button>
                                <button id="tab" className={ultimos === 1 ? "tabs" : "tabs active-tabs"} onClick={() => ultimosTab(2)}>
                                    Próximos Jogos
                                </button>
                            </div>
                        </div>
                        {ultimos === 1 ? 
                        <div className="container" style={{ color: "white", backgroundColor: 'black'}}>
                            <Estatisticas meuTime={meuTime} jogos={meusJogos} />
                            {meusJogos.length > 0 ? currentItems.map((index) => {
                                let mostraAno = false;
                                if (anoAtual !== index.data.split("-")[0]) {
                                    anoAtual = index.data.split("-")[0];
                                    mostraAno = true;
                                }
                                return <div key={JSON.stringify(index)}>
                                    {mostraAno ? <h1 style={{ textAlign: 'center', color: Times(meuTime).letterColor, margin: '40px' }}>{anoAtual}</h1> : ""}
                                    <LinhaJogo meuTime={meuTime} jogo={index} meusJogos={meusJogos} />
                                </div>
                            }) : <div>
                                <h1 style={{ color: Times(meuTime).letterColor, textAlign: 'center', paddingBottom: '50px' }}>Você ainda não possui jogos cadastrados</h1>
                                <h4 style={{ color: Times(meuTime).letterColor, textAlign: 'center' }}>Vá em "Jogos do {meuTime}" para selecionar os jogos que você já foi</h4>
                            </div>}
                            <div style={{ textAlign: 'center' }}>
                                <button style={{ margin: '10px' }} onClick={this.handlePrevPage} disabled={currentPage === 1}>Anterior</button>
                                <button style={{ margin: '10px' }} onClick={this.handleNextPage} disabled={currentPage === totalPages}>Próxima</button>
                            </div>
                        </div> 
                        :
                        <div className={ultimos === 2 ? "content  active-content" : "content"}>
                            {/* <p>*Os jogos sem horário definido são em datas estimatidas e podem sofrer alteração.</p>
                            <br /> */}
                            <ProximosJogos meuTime={meuTime} />
                        </div>
                    }
                    </div>

                    <div className={toggleState === 2 ? "content  active-content" : "content"}>
                        <Anos meuTime={meuTime} meusJogos={meusJogos} />
                    </div>

                    <div className={toggleState === 3 ? "content  active-content" : "content"}>
                        <Estadios meuTime={meuTime} meusJogos={meusJogos} />
                    </div>

                    <div className={toggleState === 4 ? "content  active-content" : "content"}>
                        <Adversarios meuTime={meuTime} meusJogos={meusJogos} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Tabs;