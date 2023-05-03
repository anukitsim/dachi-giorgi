import "./obj.styles.css";
import { Container, Row, Col } from "react-bootstrap";
import objImg1 from "../../imgs/obj1.png";
import objText from "../../imgs/Text.png";
import objImg2 from "../../imgs/obj2.png";
import objImg3 from "../../imgs/obj3.png";
import objImg4 from "../../imgs/obj4.png";
import objImg5 from "../../imgs/obj5.png";

import Home from "../home/home.component";

const Obj = () => {
  return (
    <Container fluid>
      <Row>
        <Col
          xs={12}
          md={6}
          lg={2}
          xxl={2}
          className="home-container"
          style={{ paddingLeft: 0 }}
        >
          <Home />
        </Col>

        <Col xs={12} md={6} lg={8} xxl={9} className="obj-container">
        
        </Col>
      </Row>
    </Container>
  );
};

export default Obj;
