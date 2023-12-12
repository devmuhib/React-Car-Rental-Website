import React from "react";

import Slider from "react-slick";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

import "../../styles/hero-slider.css";

const HeroSlider = () => {
  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <Slider {...settings} className="hero__slider">
      <div className="slider__item slider__item-01 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">For Contact A Day</h4>
            <h1 className="text-light mb-4">Mohammad Asaduzzaman takes charge as the President of BRAMA</h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/cars"> For Details</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-02 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">For Given A Day</h4>
            <h1 className="text-light mb-4">BRAMA urges expats to invest in Bangladesh to strengthen economy</h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/cars">For Details</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-03 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">For Given A Day</h4>
            <h1 className="text-light mb-4">BRAMA urges expats to invest in Bangladesh to strengthen economy</h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/cars">For Details</Link>
            </button>
          </div>
        </Container>
      </div>
    </Slider>
  );
};

export default HeroSlider;
