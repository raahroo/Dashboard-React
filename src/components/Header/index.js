import React from 'react';
import  { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Gear from './../../images/gearwheels.svg';

export default class Header extends React.Component{
    render(){
        return(
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">
                            <img src={Gear} className="Header__icon" alt="DashApp" />
                            DashApp
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                    <NavItem eventKey={1} href="/dashboards">
                        Dashboards
                    </NavItem>
                   { /*
                    <NavItem eventKey={2} href="#">
                       Section one
                   </NavItem>
                   <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                       <MenuItem eventKey={3.1}>Action</MenuItem>
                       <MenuItem eventKey={3.2}>Another action</MenuItem>
                       <MenuItem eventKey={3.3}>Something else here</MenuItem>
                       <MenuItem divider />
                       <MenuItem eventKey={3.3}>Separated link</MenuItem>
                   </NavDropdown>*/
                   
                   } 
                   </Nav>
                    <Nav pullRight>
                    <NavItem eventKey={2} href="/profile">
                        My account
                    </NavItem>
                    <NavItem eventKey={3} href="#">
                        <span className="glyphicon glyphicon-log-out" aria-hidden="true"></span>
                    </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }

}