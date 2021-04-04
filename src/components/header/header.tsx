import React from 'react';
import { Container, Navbar, Nav, Form } from 'react-bootstrap';
import LogOut from './logout';
const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="light">
                <Navbar.Brand href="#home">MindKeeper</Navbar.Brand>
                <Nav className="mr-auto">

                </Nav>
                <Form inline>
                    <LogOut />
                </Form>
            </Navbar>
        </>
    )
}
export default Header;