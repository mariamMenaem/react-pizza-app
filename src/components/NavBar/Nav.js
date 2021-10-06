import {Bars, Nav, NavIcon, NavLink} from './NavElement';
const NavBar = (props) => {
    console.log(props);
    return ( 
        <div className="navbar">
            <Nav>
                <NavLink to="/">PizzaLover</NavLink>
                <NavIcon onClick={props.toggle}>
                    <p>Menu</p>
                    <Bars></Bars>
                </NavIcon>
            </Nav>
        </div>
     );
}
 
export default NavBar;