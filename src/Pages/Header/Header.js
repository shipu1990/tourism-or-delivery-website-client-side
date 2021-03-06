import React from 'react';
import { Col, Container,  Nav,  Navbar, NavDropdown, Row, Button } from 'react-bootstrap';
import './Header.css';
import Logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <div>
            <div className="header-top"></div>

            <Container className="mt-2">
                <Row>
                    <Col sm={3}>
                        <img className="logo" src={Logo} alt="Logo" />
                    </Col>
                    <Col sm={9}>
                        <Nav className="mt-4">
                            <Link to="/home">Home</Link>
                            <Link to="/destination">Destination</Link>
                            <Link to="/contact">Contact Us</Link>
                            {user?.email? 
                            <NavDropdown title="User Details" id="basic-nav-dropdown">
                                 <Link to="/myorder">My Order</Link>
                                 <Link to="/allorder">All Order</Link>
                                <Link to="/addorder">Add New Order</Link>
                                <Button onClick={logOut} variant="light">LogOut</Button>
                            </NavDropdown>: 
                             <Link to="/login">Log In</Link>
                            }
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Header;