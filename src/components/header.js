import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

class Header extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Navbar dark color="dark">
                <div className="container">
                    <NavbarBrand href="/">Personal Calculator</NavbarBrand>
                </div>
            </Navbar>
        );
    }
}

export default Header;