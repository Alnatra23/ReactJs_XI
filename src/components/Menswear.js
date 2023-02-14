import { Card, Col, Container, Row, Image } from "react-bootstrap";
import WomenImage from "../assets/bg/WomenFash.jpg";
import ManImage from "../assets/bg/Man.jpg";
import KidsImage from "../assets/bg/Kids.jpg";
const Menswear = () => {
  return (
    <Container>
      <br/>
      <h1 className="text-white">Fashion Series</h1>
      <br/>
      <Row>
        <Col md={4} className="WomenWrapper" id="Women">
          <Card className="WomenImg">
            <Image src={WomenImage}alt="Women image" className="images"/>
             <div className="bg-dark">
                <div className="p-2 m-1 text-white ">
              <Card.Title className="text-center">Women</Card.Title>
              <Card.Text className="text-left">
                This is Fashion For Women
              </Card.Text>
              <Card.Text text-left>Last updated 3 mins ago</Card.Text>
              </div>
          </div>
          </Card>
        </Col>

        <Col md={4} className="ManWrapper" id="Man">
          <Card className="ManImg">
            <Image src={ManImage}alt="Man image" className="images"/>
             <div className="bg-dark">
                <div className="p-2 m-1 text-white ">
              <Card.Title className="text-center">Man</Card.Title>
              <Card.Text className="text-left">
                This is Fashion For Man
              </Card.Text>
              <Card.Text text-left>Last updated 3 mins ago</Card.Text>
              </div>
          </div>
          </Card>
        </Col>

        <Col md={4} className="KidsWrapper" id="Kids">
          <Card className="KidsImg">
            <Image src={KidsImage}alt="Kids image" className="images"/>
             <div className="bg-dark">
                <div className="p-2 m-1 text-white ">
              <Card.Title className="text-center">Kids</Card.Title>
              <Card.Text className="text-left">
                This is Fashion For Kids
              </Card.Text>
              <Card.Text text-left>Last updated 3 mins ago</Card.Text>
              </div>
          </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default Menswear;
