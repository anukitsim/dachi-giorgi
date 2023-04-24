import { useState, useEffect } from 'react';
import { Link,  useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './home.styles.css';
import backgroundVideo from '../../video/background-video.mp4';
import backgroundImg from '../../imgs/background-img.png';
import march32Background from '../../imgs/march32.png';

const Home = () => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  const [showMarch32Background, setShowMarch32Background] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
  };

  useEffect(() => {
    const body = document.querySelector('body');
    if (location.pathname === '/invasive-modification') {
      body.classList.add('invasive-modification-body');
    } else {
      body.classList.remove('invasive-modification-body');
    }
    setShowBackground(location.pathname === '/hyphen');
    setShowMarch32Background(location.pathname === '/march32');
  }, [location.pathname]);

  return (
    <Container>

      <Row>
        <Col xs={12} md={2} lg={2} className="home-container">
        {showBackground && (
        <div className="background-container">
           <video
      className='background-video'
        id="fullscreen-video"
        src={backgroundVideo}
        style={{ position: 'absolute',  width: '100%', height: '100%', objectFit: 'cover' }}
        autoPlay
        loop
        muted
      />
      <img
      className='background-img'
        src={backgroundImg}
        alt="background"
        style={{ position: 'absolute',  width: '100%', height: '160%', opacity: 0.4, objectFit: 'cover' }}
      />
        </div>
      )}
       {showMarch32Background && (
         <img
         className='march-background-img'
         src={march32Background}
         alt="background"
         style={{ position: 'absolute',  width: '100%', height: 'auto', objectFit: 'cover' }}
       />
       )}
        <h1 className="title">
            <Link to="/" className="title-link">
              DACHI-GIORGI GARUCHAVA
            </Link>
          </h1>
          <div className={isMobileMenuVisible ? 'mobile-menu visible' : 'mobile-menu'}>
            <button className="menu-button" onClick={toggleMobileMenu}>
              Menu
            </button>
           
            <ul className={isMobileMenuVisible ? 'info-links show' : 'info-links'}>
            
         
              <li>
                <Link to="/contact" className="info-link">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/cv" className="info-link">
                  CV
                </Link>
              </li>
            </ul>
           
          <ul className={isMobileMenuVisible ? 'project-links show' : 'project-links'}>
         
           <li><Link to='/thewitness' className={location.pathname === '/thewitness' ? 'project-link current-page' : 'project-link'}>The Witness</Link></li>
           <li><Link to='/invasive-modification' className={location.pathname === '/invasive-modification' ? 'project-link current-page' : 'project-link'}>Invasive Modification</Link></li>
           <li><Link to='/STEPS' className={location.pathname === '/STEPS' ? 'project-link current-page' : 'project-link'}>STEPS</Link></li>
           <li><Link to='/hyphen' className={location.pathname === '/hyphen' ? 'project-link current-page' : 'project-link'}>Hyphen</Link></li>
           <li><Link to='/i-need-protection' className={location.pathname === '/i-need-protection' ? 'project-link current-page' : 'project-link'}>I Need Protection</Link></li>
           <li><Link to='/obj' className={location.pathname === '/obj' ? 'project-link current-page' : 'project-link'}>.OBJ</Link></li>
           <li><Link to='/french-lessons' className={location.pathname === '/french-lessons' ? 'project-link current-page' : 'project-link'}>French Lessons</Link></li>
           <li><Link to='/garbage-throne' className={location.pathname === '/garbage-throne' ? 'project-link current-page' : 'project-link'}>Garbage Throne</Link></li>
           <li><Link to='/in-luce-side' className={location.pathname === '/in-luce-side' ? 'project-link current-page' : 'project-link'}>in Luce Side</Link></li>
           <li><Link to='/psr' className={location.pathname === '/psr' ? 'project-link current-page' : 'project-link'}>PSR</Link></li>
           <li><Link to='/dead-vase' className={location.pathname === '/dead-vase' ? 'project-link current-page' : 'project-link'}> Dead Vase</Link></li>
           <li><Link to='/broken-city' className={location.pathname === '/broken-city' ? 'project-link current-page' : 'project-link'}> Broken City</Link></li>
           <li><Link to='/march32' className={location.pathname === '/march32' ? 'project-link current-page' : 'project-link'}>March32</Link></li>
          
           </ul>
        </div>
      
        </Col>
       
      </Row>
    </Container>
  );
};

export default Home;