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
          className="protection-col"
        >
          <Col sm={8} className="protection1">
            <img
              src={protectionImg1}
              alt="protection-img1"
              className="protection-img1"
            />
          </Col>
          <Col sm={5} className="protection2">
          <img src={protectionImg2} alt="protection-img2" className="protection-img2" />
            <p className="protection-text">
              Currently Handlet is owned by Sadie Sink on the random day on
              which we have stumbled into each other she became captivated with
              the piece, while to me handled had lost its objective to protect
              me once I left Georgia and became a sole reminder of what I have
              achieved in the land that was landed to me. For her it must find
              its own purpose and this stands at the base of all of my
              creations, as they are not meant to be hold onto but be
              transported from one story to another. connecting all the previous
              owners with an invisible string of history.
            </p>
            <p className="protection-text2">As witnessed on The Hollywood Reporter release Its journey is in good hands</p>
        
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default Protection;
