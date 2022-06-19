import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import miere1 from '../images/miere3.jpg'

const CarouselComp = () => {
  return (
    <Carousel fade className="carousel">
  <Carousel.Item>
    <img
      className="d-block carouselImg"
      src="https://edesia.ro/wp-content/uploads/2021/01/edesia.ro-20210105-mierea-de-albine-cateva-beneficii-surprinzatoare-cover.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Beautiful golden color</h3>
      <p>A natural color produced in natural means.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block carouselImg"
      src={miere1}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>A multitude of options</h3>
      <p>You have a lot of different types of honey to choose from.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block carouselImg"
      src='https://www.pbc.org.pk/wp-content/uploads/potential-of-honey-in-pakistan-1440x500.jpg'
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Trustworthy and bio-friendly</h3>
      <p>Products made naturally in the countriside without additives.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  );
};

export default CarouselComp;
