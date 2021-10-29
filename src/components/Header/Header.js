import React from 'react';
import './Header.css';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png';

const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <div>
            <Navbar bg="primary" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <img height="60px" src={logo} alt="" />
                    <Navbar.Brand className='t-color' as={Link} to="/home">TravelTrip</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className='t-color' as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link className='t-color' as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link className='t-color' as={Link} to="/addService">Add Service</Nav.Link>
                        <Nav.Link className='t-color' as={Link} to="/manage">Manage All Orders</Nav.Link>
                        <Nav.Link className='t-color' as={Link} to="/about">About Us</Nav.Link>
                        {
                            user.email ? <Button onClick={logOut} variant='primary'>Log Out</Button> : <Nav.Link className='t-color' as={Link} to="/login">login</Nav.Link>
                        }

                        <Navbar.Text className='t-color'>
                            <span className='t-color'>
                                Signed in as:{user.email && <span>{user.displayName}</span>}
                            </span>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;