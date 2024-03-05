import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import HomeLogo from '../assets/home-nav.png'



export const NavBar = () => {
    return (
            <Navbar expand="lg" className="bg-body-tertiary" style={{"position":"fixed", "width":"100%", "zIndex":"9999"}}>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" className='home-link'><img className='home-img' src={HomeLogo} /></Nav.Link>
                            <Nav.Link href="#about">About me</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    )
};