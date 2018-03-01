import React from 'react';
import {Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';

const renderDropDown = (props) => {
    if (props) {
        return (
            <NavDropdown eventKey={1} title="userName" id="userSettings">
                <MenuItem eventKey={1.1}>Change Password</MenuItem>
                <MenuItem divider/>
                <MenuItem eventKey={1.2}>Sign Out</MenuItem>
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

const TopNav = () => {
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
                        <NavDropdown eventKey={1} title="My Workouts" id="myWorkOutsMenu">
                            <MenuItem eventKey={1.1}>Recent</MenuItem>
                            <MenuItem eventKey={1.2}>Favorites</MenuItem>
                            <MenuItem divider/>
                            <MenuItem eventKey={1.3}>Create New</MenuItem>
                        </NavDropdown>
                        <NavItem eventKey={2} href="#">
                            Popular Workouts
                        </NavItem>
                        <NavItem eventKey={3} href="#">
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

export default TopNav;
