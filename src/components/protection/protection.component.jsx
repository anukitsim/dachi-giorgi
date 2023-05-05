import { Container, Row, Col } from "react-bootstrap";
import Home from "../home/home.component";
import "./protection.styles.css";
import protectionImg1 from "../../imgs/protection1.png";
import protectionImg2 from "../../imgs/protection2.png";

const Protection = () => {
  return (
    <Container fluid>
      <Row>
        <Col
          className="home-container"
          xs={12}
          md={4}
          lg={2}
          xxl={2}
          style={{ paddingLeft: 0 }}
        >
          <Home />
        </Col>
        <Col
          sm={{ span: 6 }}
          md={{ span: 6 }}
          lg={{ span: 9 }}
          xl={{ span: 9 }}
          className="protection-container"
        >
      
        
        </Col>
      </Row>
    </Container>
  );
};

export default Protection;
