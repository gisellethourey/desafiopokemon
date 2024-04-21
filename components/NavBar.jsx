import { NavLink } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

export default function NavBar() {
    const setActiveClass = ({ isActive }) => (isActive ? "active" : "undefined");

    return (
        <Navbar bg="secondary" expand="lg" fixed="top">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink className={setActiveClass} to="/" style={{ textDecoration: 'none' }}>
                        <div style={{ color: 'white', marginLeft: '10px', marginRight: '5px' }}>
                            ⚲
                        </div>
                    </NavLink>
                </Nav>
                <Nav className="ms-auto ">
                    <NavLink className={setActiveClass} to="/home" style={{ textDecoration: 'none' }}> <h6 >Home </h6></NavLink> 
                    <NavLink 
                        className={setActiveClass} 
                        to="/pokemones"
                        style={{ marginLeft: '10px', marginRight: '10px', textDecoration: 'none' }}> 
                        <div style={{ marginLeft: '10px', marginRight: '10px' }}>
                            <h6>Pokemones </h6>
                        </div>
                    </NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
