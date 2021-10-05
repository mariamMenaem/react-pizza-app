import {Bars, Nav, NavIcon, NavLink} from './NavElement';
const NavBar = () => {
    return ( 
        <div className="navbar">
            <Nav>
                <NavLink to="/">Pizza</NavLink>
                <NavIcon>
                    <p>Menu</p>
                    <Bars></Bars>
                </NavIcon>
            </Nav>
        </div>
     );
}
 
export default NavBar;