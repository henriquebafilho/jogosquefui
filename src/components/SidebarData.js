import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as FbIcons from "react-icons/tb";
import * as BsIcons from "react-icons/bs";
import * as ImIcons from "react-icons/im";
import * as BiIcons from "react-icons/bi";

export const SidebarData = [
    {
        title: 'Meus Jogos',
        path: '/meusJogos',
        icon: <FaIcons.FaUserAlt/>,
        cName: 'nav-text'
    },
    {
        title: 'Jogos do Botafogo',
        path: '/jogosDoBotafogo',
        icon: <ImIcons.ImList2/>,
        cName: 'nav-text'
    }
]