import React, {useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import Carousel from 'react-bootstrap/Carousel';

const CommercialDevelopment = () => {
  useEffect(() => {
    Aos.init({ once: true, duration: 2000});
  }, []);
  return (
    <>
       <section className="cat-menu-wrapper cat-section-spacer bg-2">
  <div className="container-fluid">
    <div className="row">
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="cat-heading-wrapper">
          <h4>Commercial Development</h4>
          <h2>AS PER MASTER PLAN NOIDA AUTHORITY 2031 </h2>
        </div>
      </div>
      <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-duration="3000">
        <div className="video-wrapper">
          
          <video loop autoPlay muted>
            <source src={('img/cyber-video-1.mp4')} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="col-lg-6 col-md-6" data-aos="fade-down" data-aos-duration="3000">
        <div className="slider-container">
         
        <Carousel data-bs-theme="dark">
    <Carousel.Item>
        <img className="d-block w-100"
             src="img/map-1.jpg"
             alt="First slide" /> 
    </Carousel.Item>
    <Carousel.Item>
        <img className="d-block w-100"
             src="img/map-2.jpg"
             alt="Second slide" /> 
    </Carousel.Item> 
</Carousel>
          
        </div>
      </div> 
    </div>
  </div>
</section>




    </>
  )
}

<>

</>


export default CommercialDevelopment
