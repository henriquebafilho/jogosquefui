import React, { Component } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import '../Navbar.css';
import { IconContext } from 'react-icons';
import Perfil from '../pages/Perfil';
/* import Estadios from '../pages/Estadios';
import Anos from '../pages/Anos';
import Adversarios from '../pages/Adversarios';
import ProximosJogos from '../pages/ProximosJogos';
import Login from '../pages/Login'; */
import TodosOsJogos from '../pages/TodosOsJogos';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: false,
            sidebar: false,
            meuTime: this.props.meuTime
        }
        this.buttonClick = this.buttonClick.bind(this);
        this.showSideBar = this.showSideBar.bind(this);
    }

    showSideBar = async () => {
        // if (this.props.conjuntoUsuarios.getUsuarioAtual() !== "") {
        //     this.setState({ sidebar: !this.state.sidebar, meuTime: this.props.conjuntoUsuarios.getUsuarioAtual().meuTime });
        // }
        this.setState({ sidebar: !this.state.sidebar })
    }

    buttonClick = async (title) => {
        if (title === "Sair") {
            this.props.conjuntoUsuarios.setUsuarioAtual("");
        }

        const perfil = document.getElementById("App-header-todos");
        perfil.style.display = 'none';
        this.setState({ title: title, sidebar: false });
    }

    render() {
        const buttonClickFunction = (title) => this.buttonClick(title);
        const showSideBar = () => this.showSideBar();

        return ( 
            <>
                <IconContext.Provider value={{ color: "white" }}>
                    <header className='navbar'>
                        <Link to='#' className='menu-bars' style={{ position: 'fixed' }}>
                            <FaIcons.FaBars onClick={showSideBar} />
                        </Link>
                    </header>
                    <nav className={this.state.sidebar ? 'nav-menu active' : 'nav-menu'}>
                        <ul className='nav-menu-items' onClick={showSideBar}>
                            <li className='navbar-toggle'>
                                <Link to='#' className='menu-bars'>
                                    <AiIcons.AiOutlineClose />
                                </Link>
                            </li>
                            {SidebarData.map((item) => {
                                return (<div key={JSON.stringify(item)}>
                                    <li key={item.title} className={item.cName}>
                                        <button onClick={() => buttonClickFunction(item.title)}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </button>
                                    </li>
                                </div>)
                            })}
                        </ul>
                    </nav>
                </IconContext.Provider>
                {this.state.title === "Meus Jogos" &&
                    <Perfil
                        conjuntoUsuarios={this.props.conjuntoUsuarios}
                        meuTime={this.props.conjuntoUsuarios.getUsuarioAtual().meuTime}
                        meusJogos={this.props.conjuntoUsuarios.getUsuarioAtual().meusJogos}
                    />}
                {this.state.title === "Jogos do Botafogo" &&
                    <TodosOsJogos
                        conjuntoUsuarios={this.props.conjuntoUsuarios}
                        meuTime={this.props.conjuntoUsuarios.getUsuarioAtual().meuTime}
                        meusJogos={this.props.conjuntoUsuarios.getUsuarioAtual().meusJogos}
                    />}
            </>
        );
    }
}
export default Navbar;