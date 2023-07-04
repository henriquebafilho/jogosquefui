import React, { useContext, useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from "react-icons/bi";
import * as ImIcons from "react-icons/im";
import { Link, Navigate } from 'react-router-dom';
import '../Navbar.css';
import { IconContext } from 'react-icons';
import { AuthGoogleContext } from '../contexts/authGoogle';

function Navbar() {
    let title = "";
    let [sidebar, setSidebar] = useState(false);
    const { signOut } = useContext(AuthGoogleContext);

    const showSideBar = async () => {
        setSidebar(!sidebar);
    }

    const buttonClick = async (optionTitle) => {
        title = optionTitle;
        setSidebar(false);
    }
    return (
        <>
            <IconContext.Provider value={{ color: "white" }}>
                <header className='navbar' style={{ zIndex: 999 }}>
                    <Link to='#' className='menu-bars' style={{ position: 'fixed' }}>
                        <FaIcons.FaBars onClick={() => showSideBar()} />
                    </Link>
                </header>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={() => showSideBar()}>
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        <div key="sidebar-options">
                            <li key="Perfil" className="nav-text">
                                <button onClick={() => buttonClick("Perfil") && <Navigate to="/home" />}>
                                    <FaIcons.FaUserAlt />
                                    <span>Perfil</span>
                                </button>
                            </li>
                            <li key="Todos" className="nav-text">
                                <button onClick={() => buttonClick("Todos")}>
                                    <ImIcons.ImList2 />
                                    <span>Todos os Jogos</span>
                                </button>
                            </li>
                            <li key="Sair" className="nav-text">
                                <button onClick={() => signOut()}>
                                    <BiIcons.BiLogOut />
                                    <span>Sair</span>
                                </button>
                            </li>
                        </div>
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
}

export default Navbar;