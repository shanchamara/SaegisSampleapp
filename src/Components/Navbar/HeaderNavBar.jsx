import React from 'react';
import {Container,Navbar,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function HeaderNavBar() {
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">React Tutorial</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link eventKey={1} to='/' as={Link} >Home</Nav.Link>
                        <Nav.Link eventKey={2} to='/About' as={Link}>About</Nav.Link>
                        <Nav.Link eventKey={3} to="Document" as={Link} >Document</Nav.Link>
                        <Nav.Link eventKey={4} to="/StudentData" as={Link} >Student List</Nav.Link>

                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
