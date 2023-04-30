import { useState, useRef } from "react";
import "./invasive-modification.styles.css";
import { Container, Row, Col } from "react-bootstrap";
import img1 from "../../imgs/1.jpg";
import ReactPlayer from "react-player";
import cardImage1 from "../../imgs/card1.jpg";
import cardImage2 from "../../imgs/card2.jpg";
import cardImage3 from "../../imgs/card3.jpg";
import cardImage4 from "../../imgs/card4.jpg";
import cardImage5 from "../../imgs/card5.jpg";
import cardImage6 from "../../imgs/card6.jpg";
import cardImage7 from "../../imgs/card7.jpg";
import cardImage8 from "../../imgs/card8.jpg";
import cardImage9 from "../../imgs/card9.jpg";
import Home from "../home/home.component";

const InvasiveModification = () => {
  const [currentImage, setCurrentImage] = useState(cardImage1);

  const [activeIndex, setActiveIndex] = useState(0);
  const playerRef = useRef(null);

  const isPlaying = true;

  const images = [
    cardImage1,
    cardImage2,
    cardImage3,
    cardImage4,
    cardImage5,
    cardImage6,
    cardImage7,
    cardImage8,
    cardImage9,
  ];

  const handleClick = (index, event) => {
    event.preventDefault();
    setCurrentImage(images[index]);
    setActiveIndex(index);
  };

  return (
    <Container fluid>
      <Row>
        <Col className="home-container" xs={12} md={6} lg={2} xxl={2}>
          <Home />
        </Col>
        <Col
          className="invasiveModification-container d-flex 
         "
          xs={12}
          md={6}
          lg={10}
          xxl={10}
        >
          <div className="div1">
            <h2 className="invasiveModification-header">
              Set Design for the Georgian footwear brand Invasive Modifications
            </h2>
            <img src={img1} alt="img1" className="img1" />
          </div>
          <div className="div2">
            <h2 className="video-text">
              Translating language at the core of brands world through artefacts
              within the current realm
            </h2>
            <ReactPlayer
              ref={playerRef}
              url="https://vimeo.com/818864881"
              className="invasiveModification-video"
              controls={false}
              volume={0}
              playing={isPlaying}
              loop={true}
              width="100%"
              height="50vh"
            />
          </div>
          <div className="div3">
            <img
              src={currentImage}
              alt="img1"
              className="card-images"
              onClick={(event) =>
                handleClick(
                  activeIndex === images.length - 1 ? 0 : activeIndex + 1,
                  event
                )
              }
              onTouchStart={(event) =>
                handleClick(
                  activeIndex === images.length - 1 ? 0 : activeIndex + 1,
                  event
                )
              }
            />

            <div className="div4">
              <p>Photography:</p>
              <p>Giorgi Nakashidze</p>
              <p>Ika Khargelia</p>
              <p>Luka Pantskhava</p>
              <br />
              <p>Prop Assistant:</p>
              <p>Polina Zhuravkova</p>
              <br />
              <p>Invasive Modification:</p>
              <p>Nicolas Grigorian</p>
              <p>Nina Ivanovna</p>
            </div>
          </div>
          <div className="carousel-bullets">
            {images.map((image, index) => (
              <button
                key={index}
                className={`carousel-bullet ${
                  index === activeIndex ? "active-bullet" : ""
                }`}
                onClick={() => handleClick(index)}
              />
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default InvasiveModification;
