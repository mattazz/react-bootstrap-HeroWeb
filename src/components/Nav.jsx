import { Container, Navbar } from "react-bootstrap"

function Nav(){
    return(
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar" />
            </Container>

        </Navbar>
    )
}

export default Nav