import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SimpleBarReact from "simplebar-react";
import { StlyleBar, Headline } from "./styles/Simplebar.styled";


const SimpleBar = () => {
  return (
    <StlyleBar>
      <Headline>
        <h1>React Simplebar 👉👉🏼</h1>
      </Headline>
      <SimpleBarReact style={{ maxHeight: 300 }}>
        <Container className="mt-3">
          <Row>
            <Col className="md">
              <Card style={{ width: "15rem" }}>
                <Card.Img variant="top" src="https://picsum.photos/100/100" />
                <Card.Body>
                  <Card.Title>The beauti ful Senerio of nature</Card.Title>
                  <Card.Text>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
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
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
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
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col className="md">
              <Card style={{ width: "15rem" }}>
                <Card.Img variant="top" src="https://picsum.photos/100/100" />
                <Card.Body>
                  <Card.Title>The beautiful Senerio of nature</Card.Title>
                  <Card.Text>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
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
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
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
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col className="md">
              <Card style={{ width: "15rem" }}>
                <Card.Img variant="top" src="https://picsum.photos/100/100" />
                <Card.Body>
                  <Card.Title>The beautiful Senerio of nature</Card.Title>
                  <Card.Text>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
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
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
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
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
     
      </SimpleBarReact>
    </StlyleBar>
  );
};

export default SimpleBar;
