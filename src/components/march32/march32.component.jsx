import Home from "../home/home.component";
import { Container, Row, Col } from 'react-bootstrap';

const March32 = () => {
    return (
        <Container>
        <Row>
          <Col xs={12} md={2} lg={2} className='home-container'>
            <Home />
         </Col>
         </Row>
         </Container>
    )
}

export default March32;