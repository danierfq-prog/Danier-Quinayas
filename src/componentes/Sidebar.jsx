import {opcionesMenu} from '../data/menu.js';
function Sidebar(){
    return(
        <aside className ="sidebar">
            <h3 className="sidebar-titulo">Menu</h3>
            <nav>
                <ul className="sider-menu">
                    {opcionesMenu.map((opcion)=>(
                        <li key={opcion.id}>
                            <a href={opcion.url}>
                                {opcion.icono} {opcion.texto}
                            </a>
                        </li>
                    ))}

                </ul>
            </nav>
            <p className="sidebar-pie"> 3312943 - ADSO</p>
        </aside>
    )
}

export default Sidebar;