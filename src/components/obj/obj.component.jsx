import "./obj.styles.css";
import { Container, Row, Col } from 'react-bootstrap';
import objImg1 from "../../imgs/obj1.png";
import objImg2 from "../../imgs/obj2.png";
import objImg3 from "../../imgs/obj3.png";
import objImg4 from "../../imgs/obj4.png";
import Home from "../home/home.component";

const Obj = () => {
    return (
        <Container>
        <Row>
          <Col xs={12} md={2} lg={2} className='home-container'>
            <Home />
         </Col>
         <Col xs={12} md={10} lg={10} className="witness-container">
         <div className="obj-container">
      <div className="obj-img1-container">
        <img src={objImg1} alt="obg-img-1" className="obj-img1" />
        <div className="obj-text1-container">
        <p>
          1 <span>Animal Cuff Inspired Design</span>
        </p>
        <p>
          2{" "}
          <span>
            Limited use of aluminium with AI optimised topology for a
            comfortable weight
          </span>
        </p>
        <p>
          3 <span>Carbon fibre for flexibility</span>
        </p>
        <p>
          4 <span>EPDM recycled rubber for better grip</span>
        </p>
        
        </div>
     
      </div>
      <div className="obj-img2-container">
        <h2 className="obg-img2-header">Roots.obj</h2>
        <img src={objImg2} alt="obg-img-1" className="obj-img2" />
      </div>
      <div className="obj-img3-container">
      <h2 className="obg-img3-header">Flask.obj</h2>
      <img src={objImg3} alt="obg-img-1" className="obj-img3" />
      <p className="obj-text3">Deciding whether to bring a bag for my bottle or buy one and contribute to environmental pollution with unnecessary plastic was an everyday dilemma. Drawing inspiration from a military-style flask, an ergonomic bottle that attaches to the side of the bottle came to existence.</p>
      <p className="obj-text3-part2">The holder for a metal bottle is constructed from sturdy resin and features a metal plate that securely clasps the bottle. By gently squeezing the holder from both sides, the bottle can be easily removed and reattached with equal simplicity.</p>
      </div>
      <div className="obg-last-imgs-contaiener">
      <img src={objImg4} alt="obg-img-1" className="obj-img4" />
      
      </div>

    </div>
          </Col>
        </Row>
      </Container>
    )
}

export default Obj;