import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";

function Login() {
    return (
        //TODO CODE HERE
        <Container fluid="lg" className="mt-2">
            <Row xs={1} md={2}>
                <Col md={5}>
                    <Image src="https://images.pexels.com/photos/8448236/pexels-photo-8448236.jpeg" fluid rounded></Image>
                </Col>
                <Col md={7}>
                    <Row className="justify-content-md-center mt-6">
                        <Col xs="auto">
                            <Image src="/images/1.png" fluid rounded></Image>
                        </Col>
                    </Row>
                    <Form className="mt-4">
                        <Row className="m-4">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label 
                                    htmlFor="log-mail" 
                                    className="label-tv"
                                >Email</Form.Label>
                                <Form.Control 
                                    id="log-mail" 
                                    type="email" 
                                    placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label 
                                    htmlFor="log-password" 
                                    className="label-tv">Password</Form.Label>
                                <Form.Control 
                                    id="log-password" 
                                    type="password" 
                                    placeholder="Password" />
                            </Form.Group>
                        </Row>

                        <Row className="justify-content-md-center">
                            <Button className="w-25" variant="danger" type="submit">
                                Ingresar
                            </Button>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;