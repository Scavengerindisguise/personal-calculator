import React from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse,Nav, NavItem,
         NavLink} from 'reactstrap';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false
        };
     this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <Navbar dark color="dark" expand="md">
                <NavbarBrand href="/">Personal Calculator</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink className="active">Dashboard</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default Header;