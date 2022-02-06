import React , { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import Slider from "react-slick";

import { SliderStyled } from "./styles/Slider.styled";


const SlickSlider = () => {
  const customeSlider = useRef();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
  };

  const previous = () => {
    customeSlider.current.slickNext();
  };

  const next = () => {
    customeSlider.current.slickPrev();
  };
  

  return (
    <SliderStyled>
      <div>
        <h1>React Slick Slider</h1>
        <Slider {...settings} ref={customeSlider}>
          <div>
            <Card style={{ width: "25rem" }}>
              <Card.Img variant="top" src="https://picsum.photos/100/100" />
              <Card.Body>
                <Card.Title>The beautiful Senerio of nature</Card.Title>
                <Card.Text>
                  Lorem, ipsum dolor sit amet consectetur adipisicing.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: "25rem" }}>
              <Card.Img
                variant="top"
                src="https://picsum.photos/100/100/?blur=2"
              />
              <Card.Body>
                <Card.Title>The beautiful Senerio of nature</Card.Title>
                <Card.Text>
                  Lorem, ipsum dolor sit amet consectetur adipisicing.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: "25rem" }}>
              <Card.Img variant="top" src="https://picsum.photos/100" />
              <Card.Body>
                <Card.Title>The beautiful Senerio of nature</Card.Title>
                <Card.Text>
                  Lorem, ipsum dolor sit amet consectetur adipisicing.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: "25rem" }}>
              <Card.Img variant="top" src="https://picsum.photos/100/100" />
              <Card.Body>
                <Card.Title>The beautiful Senerio of nature</Card.Title>
                <Card.Text>
                  Lorem, ipsum dolor sit amet consectetur adipisicing.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: "25rem" }}>
              <Card.Img variant="top" src="https://picsum.photos/100/100" />
              <Card.Body>
                <Card.Title>The beautiful Senerio of nature</Card.Title>
                <Card.Text>
                  Lorem, ipsum dolor sit amet consectetur adipisicing.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: "25rem" }}>
              <Card.Img
                variant="top"
                src="https://picsum.photos/100/100/?blur=2"
              />
              <Card.Body>
                <Card.Title>The beautiful Senerio of nature</Card.Title>
                <Card.Text>
                  Lorem, ipsum dolor sit amet consectetur adipisicing.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Slider>
        <button onClick={next}>⬅</button>
        <button onClick={previous}>➡</button>
      </div>
    </SliderStyled>
  );
};

export default SlickSlider;
