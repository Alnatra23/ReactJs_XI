import { Button, Col, Container, Row } from "react-bootstrap";
const  Intro = () => {
    return (
        <div className="intro">
        <Container className="text-white d-flex justify-content-center text-center text-align-center">
            <Row>
              <Col>
              <div className="title text-align-center">You Are Your Style!</div>
              <div className="IntroButton mt-4 text-center">
                <Button variant="dark">Check Your Fashion</Button>
              </div>
              </Col>
            </Row>
          </Container>
        </div>
    )

}
export default Intro