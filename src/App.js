import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";

const width_index = "1020";
const heigth_index = "720";

function App() {
  return (
    //React-boostrap
    <Container className="my-4" fluid>
      <Row>
        <Col>
          <Image
            src="https://images.pexels.com/photos/8448236/pexels-photo-8448236.jpeg"
            fluid
            rounded
            width={width_index}
            height={heigth_index}
          ></Image>
        </Col>
        <Col>
          <Row className="justify-content-center mt-5">
            <Image className="w-75" src="/images/1.png" fluid rounded></Image>
          </Row>
          <Form>
            <Row className="m-4">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className="label-tv">Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label className="label-tv">Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Row>

            <Row className="justify-content-center">
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

export default App;
