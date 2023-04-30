import "./obj.styles.css";
import { Container, Row, Col } from "react-bootstrap";

import Home from "../home/home.component";

const Obj = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={6} lg={3} xxl={3} className="home-container">
          <Home />
        </Col>
        <Col xs={12} md={6} lg={9} xxl={8} className="obj-container">
        
        </Col>
      </Row>
      
    </Container>
  );
};

export default Obj;
