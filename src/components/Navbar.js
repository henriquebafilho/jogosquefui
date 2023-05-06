import React, { Component } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import '../Navbar.css';
import { IconContext } from 'react-icons';
import Perfil from '../pages/Perfil';
import Estadios from '../pages/Estadios';
import Anos from '../pages/Anos';
import Adversarios from '../pages/Adversarios';
import ProximosJogos from '../pages/ProximosJogos';
import TodosOsJogos from '../pages/TodosOsJogos';
import Login from '../pages/Login';

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
                            {SidebarData.map((item, index) => {
                                return (<div key={JSON.stringify(item)}>
                                    {item.title === "Anos" && <span style={{ color: 'white' }}>Meus Jogos</span>}
                                    {item.title === "Próximos Jogos" && <span style={{ color: 'white' }}>Meu Time</span>}
                                    <li key={item.title} className={item.cName}>
                                        <button onClick={() => buttonClickFunction(item.title)}>
                                            {item.icon}
                                            <span>{item.title === "Todos os Jogos" ? "Jogos do " + this.state.meuTime : item.title}</span>
                                        </button>
                                    </li>
                                </div>)
                            })}
                        </ul>
                    </nav>
                </IconContext.Provider>
                {this.state.title === "Perfil" &&
                    <Perfil
                        conjuntoUsuarios={this.props.conjuntoUsuarios}
                        meuTime={this.props.conjuntoUsuarios.getUsuarioAtual().meuTime}
                        meusJogos={this.props.conjuntoUsuarios.getUsuarioAtual().meusJogos}
                    />}
                {this.state.title === "Anos" &&
                    <Anos
                        conjuntoUsuarios={this.props.conjuntoUsuarios}
                        meuTime={this.props.conjuntoUsuarios.getUsuarioAtual().meuTime}
                        meusJogos={this.props.conjuntoUsuarios.getUsuarioAtual().meusJogos}
                    />}
                {this.state.title === "Estádios" &&
                    <Estadios
                        conjuntoUsuarios={this.props.conjuntoUsuarios}
                        meuTime={this.props.conjuntoUsuarios.getUsuarioAtual().meuTime}
                        meusJogos={this.props.conjuntoUsuarios.getUsuarioAtual().meusJogos}
                    />}
                {this.state.title === "Adversários" &&
                    <Adversarios
                        conjuntoUsuarios={this.props.conjuntoUsuarios}
                        meuTime={this.props.conjuntoUsuarios.getUsuarioAtual().meuTime}
                        meusJogos={this.props.conjuntoUsuarios.getUsuarioAtual().meusJogos}
                    />}
                {this.state.title === "Próximos Jogos" &&
                    <ProximosJogos
                        conjuntoUsuarios={this.props.conjuntoUsuarios}
                        meuTime={this.props.conjuntoUsuarios.getUsuarioAtual().meuTime}
                        meusJogos={this.props.conjuntoUsuarios.getUsuarioAtual().meusJogos}
                    />}
                {this.state.title === "Todos os Jogos" &&
                    <TodosOsJogos
                        conjuntoUsuarios={this.props.conjuntoUsuarios}
                        meuTime={this.props.conjuntoUsuarios.getUsuarioAtual().meuTime}
                        meusJogos={this.props.conjuntoUsuarios.getUsuarioAtual().meusJogos}
                    />}
                {this.state.title === "Sair" &&
                    <Login
                        conjuntoUsuarios={this.props.conjuntoUsuarios}
                        meuTime={this.props.conjuntoUsuarios.getUsuarioAtual().meuTime}
                        meusJogos={this.props.conjuntoUsuarios.getUsuarioAtual().meusJogos}
                    />}
            </>
        );
    }
}
export default Navbar;