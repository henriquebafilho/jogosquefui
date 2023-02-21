import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import '../Navbar.css';
import { IconContext } from 'react-icons';

function Navbar(props) {
    const [sidebar, setSideBar] = useState(false);

    const showSideBar = () => setSideBar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{ color: "white" }}>
                <header className='navbar'>
                    <Link to='#' className='menu-bars' style={{ position: 'fixed' }}>
                        <FaIcons.FaBars onClick={showSideBar} />
                    </Link>
                </header>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSideBar}>
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            let meuTime = props.meuTime;
                            return (<div key={item}>
                                {item.title === "Anos" && <span style={{color: 'white'}}>Meus Jogos</span>}
                                {item.title === "Próximos Jogos" && <span style={{color: 'white'}}>Meu Time</span>}
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title === "Todos os Jogos" ? "Jogos do " + meuTime : item.title}</span>
                                    </Link>
                                </li>
                            </div>)
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
}

export default Navbar;