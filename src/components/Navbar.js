import React, {useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import Times from '../Times';

function Navbar (props){
    const [sidebar, setSideBar] = useState(false);

    const showSideBar = () => setSideBar(!sidebar);

    return (
        <>
        <IconContext.Provider value={{color: Times(props.meuTime).backgroundColor}}>
            <div className='navbar' style={{backgroundColor:Times(props.meuTime).letterColor}}>
                <Link to='#' className='menu-bars'>
                    <FaIcons.FaBars onClick={showSideBar}/>
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} style={{backgroundColor:Times(props.meuTime).letterColor}}>
                <ul className='nav-menu-items' onClick={showSideBar}>
                    <li className='navbar-toggle' style={{backgroundColor:Times(props.meuTime).letterColor}}>
                        <Link to='#' className='menu-bars'>
                            <AiIcons.AiOutlineClose/>
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path} style={{color:Times(props.meuTime).backgroundColor}}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </IconContext.Provider>
        </>
    );
}

export default Navbar;