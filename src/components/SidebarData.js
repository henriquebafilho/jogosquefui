import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as FbIcons from "react-icons/tb";
import * as BsIcons from "react-icons/bs";
import * as ImIcons from "react-icons/im";

export const SidebarData = [
    {
        title: 'Perfil',
        path: '/perfil',
        icon: <FaIcons.FaUserAlt/>,
        cName: 'nav-text'
    },
    {
        title: 'Anos',
        path: '/anos',
        icon: <BsIcons.BsCalendarDate/>,
        cName: 'nav-text'
    },
    {
        title: 'Estádios',
        path: '/estadios',
        icon: <FbIcons.TbSoccerField/>,
        cName: 'nav-text'
    },
    {
        title: 'Adversários',
        path: '/adversarios',
        icon: <FaIcons.FaFlagCheckered/>,
        cName: 'nav-text'
    },
    {
        title: 'Próximos Jogos',
        path: '/proximosJogos',
        icon: <FaIcons.FaCalendarAlt/>,
        cName: 'nav-text'
    },
    {
        title: 'Todos os Jogos',
        path: '/todosOsJogos',
        icon: <ImIcons.ImList2/>,
        cName: 'nav-text'
    },
]