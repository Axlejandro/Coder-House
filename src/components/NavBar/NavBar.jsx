import CardWidget from "../CardWidget";
import './navbar.css'

function NavBar() {
    return (
        
        <nav>

            <ul className="menu">
                <a href="/">
                    <h4>Logo Mi Tienda</h4>
                </a>
                <li>
                    <a href="/">Computadoras</a>
                </li>
                <li>
                    <a href="/">Telefonos</a>
                </li>
                <li>
                    <a href="/">Televisores</a>
                </li>
            </ul>
            <CardWidget/>
        </nav>
    );

}

export default NavBar;