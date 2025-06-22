import { NavLink, useLocation } from 'react-router-dom';
import Times from '../Times';
import { useTime } from '../Time';

function TabRecentes() {
    const time = useTime().time;
    const location = useLocation();
    const showSubTabs = location.pathname === '/jogosquefui/' || location.pathname === '/jogosquefui/proximos';

    if (!showSubTabs) {
        return null;
    }

    return (
        <nav className="container" style={{ color: Times(time).letterColor, backgroundColor: Times(time).backgroundColor, border: "3px", marginTop: '20px' }}>
            <div className="container" style={{ border: "3px", maxWidth: '80%', marginBottom: '20px' }}>
                <div className="bloc-tabs">
                    <NavLink
                        id="tab"
                        to="/jogosquefui/"
                        end
                        className={({ isActive }) => (isActive ? "tabs active-tabs" : 'tabs')}
                        style={{ textDecoration: 'none' }}
                    >
                        Últimos Jogos
                    </NavLink>
                    <NavLink
                        id="tab"
                        to="proximos"
                        className={({ isActive }) => (isActive ? "tabs active-tabs" : 'tabs')}
                        style={{ textDecoration: 'none' }}
                    >
                        Próximos Jogos
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}

export default TabRecentes;