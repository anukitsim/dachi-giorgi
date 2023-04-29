import "./obj.styles.css";
import { Container, Row, Col } from "react-bootstrap";
import objImg1 from "../../imgs/obj1.png";
import objImg2 from "../../imgs/obj2.png";
import objImg3 from "../../imgs/obj3.png";
import objImg4 from "../../imgs/obj4.png";
import Home from "../home/home.component";

const Obj = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={6} lg={3} xxl={3} className="home-container">
          <Home />
        </Col>
        <Col xs={12} md={6} lg={9} xxl={8} className="obj-container">
          <div className="obj-imj1-container">
          <img src={objImg1} alt="obg-img-1" className="obj-img1" />
        
            {/* <div className="obj1-text"> */}
            <p>1.</p>
            <p>Animal Cuff Inspired Design</p>
            <p>2.</p>
            <p>Limited use of aluminium with AI optimised topology for a comfortable weight</p>
            <p>3.</p>
            <p>Carbon fibre for flexibility</p>
            <p>4.</p>
            <p>EPDM recycled rubber for better grip</p>
            </div>
           
          {/* </div> */}
          <div className="obj-img2-container">
          <h2 className="obg-img2-header">Roots.obj</h2>
        <img src={objImg2} alt="obg-img-2" className="obj-img2" />
          </div>
        </Col>
      </Row>
      
    </Container>
  );
};

export default Obj;
