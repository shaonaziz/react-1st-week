import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col,Card,} from "react-bootstrap";

function App() {
  return (
    <Container className="mt-3">
      <Row>
        <Col className="md">
          <Card style={{ width: "15rem" }}>
            <Card.Img variant="top" src="https://picsum.photos/100/100" />
            <Card.Body>
              <Card.Title>The beautiful Senerio of nature</Card.Title>
              <Card.Text>
                Lorem, ipsum dolor sit amet consectetur adipisicing.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="md p-1">
          <Card style={{ width: "15rem" }}>
            <Card.Img
              variant="top"
              src="https://picsum.photos/100/100/?blur=2"
            />
            <Card.Body>
              <Card.Title>The beautiful Senerio of nature</Card.Title>
              <Card.Text>
                Lorem, ipsum dolor sit amet consectetur adipisicing.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="md p-1">
          <Card style={{ width: "15rem" }}>
            <Card.Img variant="top" src="https://picsum.photos/100" />
            <Card.Body>
              <Card.Title>The beautiful Senerio of nature</Card.Title>
              <Card.Text>
                Lorem, ipsum dolor sit amet consectetur adipisicing.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
