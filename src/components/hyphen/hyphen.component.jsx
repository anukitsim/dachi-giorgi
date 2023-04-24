import { Container, Row, Col } from 'react-bootstrap';
import Home from "../home/home.component";
import hyphenImg from "../../imgs/hyphenImg.png";
import './hyphen.styles.css';

const Hyphen = () => {
    return (
        <Container>
      <Row>
        <Col xs={12} md={2} lg={2} className='home-container'>
          <Home />
       </Col>
       <Col xs={12} md={10} lg={10} className="witness-container">
       <img className="hyphen-img" src={hyphenImg} alt="hyphen-img" />
       </Col>
       </Row>
       </Container>
    )
    }
export default Hyphen;