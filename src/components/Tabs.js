import { NavLink } from 'react-router-dom';
import Times from '../Times';
import { useTime } from '../Time';

function TabComponent() {
    const time = useTime().time;
    return (
        <nav className="container" style={{ color: Times(time).letterColor, backgroundColor: Times(time).backgroundColor, border: "3px" }}>
            <div className="bloc-tabs">
                <NavLink
                    id="tab"
                    to="proximos" // Rota relativa à rota pai (que é Principal)
                    className={({ isActive }) => (isActive ? "tabs active-tabs" : 'tabs')}
                    style={{ textDecoration: 'none' }}
                >
                    Recentes
                </NavLink>
                <NavLink
                    id="tab"
                    to="anos"
                    className={({ isActive }) => (isActive ? "tabs active-tabs" : 'tabs')}
                    style={{ textDecoration: 'none' }}
                >
                    Anos
                </NavLink>
                <NavLink
                    id="tab"
                    to="estadios"
                    className={({ isActive }) => (isActive ? "tabs active-tabs" : 'tabs')}
                    style={{ textDecoration: 'none' }}
                >
                    Estádios
                </NavLink>
                <NavLink
                    id="tab"
                    to="adversarios"
                    className={({ isActive }) => (isActive ? "tabs active-tabs" : 'tabs')}
                    style={{ textDecoration: 'none' }}
                >
                    Adversários
                </NavLink>
            </div>
        </nav>
    );
}

export default TabComponent;