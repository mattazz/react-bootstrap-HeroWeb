import { Container, Row, Col } from 'react-bootstrap';

function CustomFooter() {
    return (
        <footer className="bg-danger text-white mt-5 p-4 text-center">
            <Container>
                <Row>
                    <Col>
                        <p>© 2023 Matthew Azada. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default CustomFooter;