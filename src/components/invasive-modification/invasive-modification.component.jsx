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

  const handleClick = (index) => {
    setCurrentImage(images[index]);
    setActiveIndex(index);
  };

  return (
    <Container>
      <Row>
        <Col xs={12} md={2} lg={2} className="home-container">
          <Home />
        </Col>
        <Col xs={12} md={10} lg={9} className="invasiveModification-container">
          <h2 className="invasiveModification-header">
            Set Design for the Georgian footwear brand Invasive Modifications
          </h2>
          <img src={img1} alt="img1" className="img1" />

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
           
          />

          <img
            src={currentImage}
            alt="img1"
            className="card-images"
            onClick={() =>
              handleClick(
                activeIndex === images.length - 1 ? 0 : activeIndex + 1
              )
            }
            onTouchStart={() =>
                handleClick(
                  activeIndex === images.length - 1 ? 0 : activeIndex + 1
                )
              }

          />
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
          <div className="card-text">
            <div className="line-container">
              <div className="name">Photography:</div>
              <div className="category">
                Giorgi Nakashidze
                <br />
                Ika Khargelia
                <br />
                Luka Pantskhava
              </div>
            </div>
            <div className="line-container">
              <div className="name">Prop Assistant:</div>
              <div className="category">Polina Zhuravkova</div>
            </div>
            <div className="line-container">
              <div className="name">Invasive Modification:</div>
              <div className="category">
                Nicolas Grigorian
                <br />
                Nina Ivanovna
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default InvasiveModification;