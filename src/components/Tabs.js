import React, { Component } from 'react';

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

            <div className="container">
                <div className="bloc-tabs">
                    <button
                        id="tab"
                        className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(1)}
                    >
                        Todos
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
                        <h2>Todos</h2>
                        <hr />
                        <p>
                            Todos os Jogos
                        </p>
                    </div>

                    <div
                        className={toggleState === 2 ? "content  active-content" : "content"}
                    >
                        <h2>Anos</h2>
                        <hr />
                        <p>
                            Anos
                        </p>
                    </div>

                    <div
                        className={toggleState === 3 ? "content  active-content" : "content"}
                    >
                        <h2>Estádios</h2>
                        <hr />
                        <p>
                            Estádios
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