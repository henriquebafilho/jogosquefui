import React, { Component } from 'react';
import Adversarios from '../pages/Adversarios';
import Anos from '../pages/Anos';
import Estadios from '../pages/Estadios';
import Times from '../Times';
import Estatisticas from './Estatisticas';
import LinhaJogo from './LinhaJogo';

class Tabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleState: 1,
            meusJogos: props.meusJogos,
            meuTime: props.meuTime,
            currentPage: 1,
            itemsPerPage: 20
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

    render() {
        const toggleTab = (index) => this.toggleTab(index);
        let toggleState = this.state.toggleState;
        let meusJogos = this.state.meusJogos;
        let meuTime = this.state.meuTime;
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
                        <Estatisticas meuTime={meuTime} jogos={meusJogos} />
                        {meusJogos.length > 0 ? currentItems.map((index) => {
                            let mostraAno = false;
                            if (anoAtual !== index.data.split("-")[0]) {
                                anoAtual = index.data.split("-")[0];
                                mostraAno = true;
                            }
                            return <div key={JSON.stringify(index)}>
                                {mostraAno ? <h2>{anoAtual}</h2> : ""}
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