import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as ImIcons from "react-icons/im";

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