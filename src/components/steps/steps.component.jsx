import "./steps.styles.css";
import ReactPlayer from "react-player";
import { Container, Row, Col } from "react-bootstrap";
import Home from "../home/home.component";

const Steps = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={2} lg={2} className="home-container">
          <Home />
        </Col>
        <Col xs={12} md={10} lg={10} className="steps-container">
          <ReactPlayer
            url="https://vimeo.com/818803846"
            className="video-steps"
            controls
            volume={1}
            width="100%"
            height="40rem"
          />
          <div className="caption-container">
            <p className="steps-caption1">Animated and Produced for</p>
            <p className="steps-caption2">
              <a
                className="music-link"
                href="https://www.youtube.com/watch?v=lBEGDRO8N2g"
              >
                Steps ft. MNEK & Saul Williams
              </a>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Steps;
