import React, { Component } from 'react';
import LinhaJogo from './LinhaJogo';

class Tabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleState: 1
        }
    }

    toggleTab = async (index) => {
        this.setState({ toggleState: index });
    }

    render() {
        const toggleTab = (index) => this.toggleTab(index);
        let toggleState = this.state.toggleState;
        return (

            <div className="container" style={{color: "white", width: '60vw', border: "3px"}}>
                <div className="bloc-tabs">
                    <button
                        id="tab"
                        className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(1)}
                    >
                        Todos Os Jogos
                    </button>
                    <button
                        id="tab"
                        className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(2)}
                    >
                        Anos
                    </button>
                    <button
                        id="tab"
                        className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(3)}
                    >
                       Estádios
                    </button>
                    <button
                        id="tab"
                        className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(4)}
                    >
                       Adversários
                    </button>
                </div>

                <div className="content-tabs">
                    <div
                        className={toggleState === 1 ? "content  active-content" : "content"}
                    >
                        <h2>2023</h2>
                        <LinhaJogo meuTime="Botafogo" jogo={{ "mandante": "Botafogo", "visitante": "Brasiliense", "golsMandante": 7, "golsVisitante": 1, "campeonato": "Copa do Brasil 2023", "data": "2023-03-15", "estadio": "Kleber de Andrade" }} meusJogos={[]} />
                    </div>

                    <div
                        className={toggleState === 2 ? "content  active-content" : "content"}
                    >
                        <h2>2023</h2>
                        <hr />
                        <p>
                            Jogos
                        </p>
                    </div>

                    <div
                        className={toggleState === 3 ? "content  active-content" : "content"}
                    >
                        <p>
                            Você foi a 100 jogos
                        </p>
                    </div>

                    <div
                        className={toggleState === 4 ? "content  active-content" : "content"}
                    >
                        <h2>Adversários</h2>
                        <hr />
                        <p>
                            Adversários
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Tabs;