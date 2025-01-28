import { Container, Navbar, Nav, Modal, Button } from "react-bootstrap"
import { useState } from "react";
import { Link } from "react-router-dom";
function CustomNav() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Navbar expand="lg" className="" bg="danger" variant="dark" >
                <Container>
                    <Navbar.Brand href="#home">Matthew Azada</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/hero">Hero Page</Nav.Link>
                            <Nav.Link href="#pop-upCopyright" className="" onClick={handleShow}>Copyright</Nav.Link>
                            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                    <Modal.Title>Copyright Information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>© 2023 Matthew Azada. All rights reserved.</p>
                    <p>This website and its content are protected by copyright law.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CustomNav