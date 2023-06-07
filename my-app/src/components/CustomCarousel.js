import React from 'react';
import { Container } from 'react-bootstrap'; 
import '../css/carousel.css'; // Create a CSS file for your component styles
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import logo from "../assets/logo.png";
import icon from "../assets/circle.svg";
import "../css/reset.css";



const CustomCarousel = () => {
  return (
    <div className="section-wrapper">
      <div className='section-overlay'>
      <Container>
        <div className='py-4'></div>
        <h2 className="text-center text-light fs-1 fw-bold font-monospace pt-5 pb-3">Produits Dinox</h2>
        <img src={icon} alt="Icon" height="65" className="mx-auto d-block pb-5" />
        <div className="slider">
        <Carousel
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            showArrows={true}
            // autoPlay={true}
            infiniteLoop={true}
            centerMode={true}
            showPartialVisibility={true}
            centerSlidePercentage={30}
            swipeScrollTolerance={5}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                  <button
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                    className="btn  btn-outline-light left rounded-circle px-3 py-2 border-2" // Add "left" class for the previous button
                  >
                    <i class="fa fa-angle-left"></i>
                  </button>
                )
              }
              renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                  <button
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                    className="btn  btn-outline-light right rounded-circle px-3 py-2 border-2" // Add "right" class for the next button
                  >
                    <i class="fa fa-angle-right"></i>
                  </button>
                )
              }
            responsive={{
              desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 4,
                partialVisibilityGutter: 10,
              },
              tablet: {
                breakpoint: { max: 1024, min: 768 },
                items: 2,
                partialVisibilityGutter: 10,
              },
              mobile: {
                breakpoint: { max: 767, min: 0 },
                items: 2,
                partialVisibilityGutter: 10,
              },
            }}
            className="custom-carousel"
          >
            {Array.from({ length: 5 }, (_, index) => (
          <div className=''>
          <img src={logo} alt={`Item  ${index +1}`} className="rounded-5" style={{width: '95%'}} />
          <p className="text-start text-light ms-3 mt-2 fw-bold fs-5">{`Item  ${index+1} Name`}</p>
        </div>
        ))}

          </Carousel>
        </div>
        <div className='py-4'></div>
      </Container>
      </div>
    </div>
  );
};

export default CustomCarousel;
