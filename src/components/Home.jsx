import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import Footer from './Footer';
import '../CSS/Home.css';

function Home() {
  return (
    <div className="home-container">
      
      <Carousel className="home-carousel" interval={700} controls={true} indicators={true}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img2.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Primera Diapositiva</h3>
            <p>Descripción de la primera diapositiva.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="chart-3149003_1280.png"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Segunda Diapositiva</h3>
            <p>Descripción de la segunda diapositiva.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./chart-3149003_1280.png"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Tercera Diapositiva</h3>
            <p>Descripción de la tercera diapositiva.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Container className="home-promo">
        <Row>
          <Col md={4} className="promo-box">
            <h4>Producto 1</h4>
            <p>Descripción del producto 1.</p>
          </Col>
          <Col md={4} className="promo-box">
            <h4>Producto 2</h4>
            <p>Descripción del producto 2.</p>
          </Col>
          <Col md={4} className="promo-box">
            <h4>Producto 3</h4>
            <p>Descripción del producto 3.</p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
