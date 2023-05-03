import { Container, Row, Col } from 'react-bootstrap';
import Home from "../home/home.component";


const Psr = () => {
    return (
        <Container fluid>
        <Row>
          <Col className='home-container' sm={{ span: 2  }}  md={{ span: 4  }} lg={{span: 2 }} xl={{span: 2}} style={{ paddingLeft: 0 }} >
            <Home />
          </Col>
        
        </Row>
      </Container>
    )
}

export default Psr;