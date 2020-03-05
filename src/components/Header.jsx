import React from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    Collapse
} from 'reactstrap';
import {Link} from 'react-router-dom';

export default class Header extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = {
            isBlNavOpen: false
        };
        this.toggleBlNav = this.toggleBlNav.bind(this);
    }
    toggleBlNav(){
        this.setState({
            isBlNavOpen: !this.state.isBlNavOpen
        })
    }
    render(){
        return (
            <React.Fragment>
            <Navbar expand="lg" className="bg-dark-blue book-lib-app__navbar">
                        <NavbarBrand href="home">Aravind Book Library</NavbarBrand>
                        <NavbarToggler onClick={this.toggleBlNav}/>
                        <Collapse isOpen={this.state.isBlNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink tag={Link} to='/'>Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to='/manage'>Manage</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
            </React.Fragment>
        )
    }
}
