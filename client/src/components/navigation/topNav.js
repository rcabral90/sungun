import React from 'react';
import {Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';

const renderDropDown = (props) => {
    if (props) {
        return (
            <NavDropdown eventKey={1} title="userName" id="userSettings">
                <MenuItem eventKey={1.1}>changePassword</MenuItem>
                <MenuItem eventKey={1.2}>Another action</MenuItem>
                <MenuItem eventKey={1.3}>Something else here</MenuItem>
                <MenuItem divider/>
                <MenuItem eventKey={1.3}>Separated link</MenuItem>
            </NavDropdown>
        )
    } else {
        return (
            <NavItem eventKey={1} href="/login">
                Login
            </NavItem>
        )
    }
}

const Top_nav = () => {
    return (
        <div>
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#main">SUN GUN!</a>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#">
                            My Workouts
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            Top Workouts
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            Friends Workouts
                        </NavItem>
                    </Nav>
                    <Nav pullRight>
                        {renderDropDown()}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Top_nav;
