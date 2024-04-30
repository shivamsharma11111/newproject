import React, {useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: false,
    navText: ["<img src='img/arrow-left-2.png' />", "<img src='img/arrow-right-2.png' />"],
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 1,
        },
        700: {
            items: 2,
        },
        1000: {
            items: 3,
  
        }
    },
  };
const OurProjects = () => {
    useEffect(() => {
        Aos.init({ once: true, duration: 2000});
      }, []);
  return (
    <>
    <section className="cat-team-wrapper cat-section-spacer">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="cat-heading-wrapper">
                    <h4>Our PROJECTS</h4>
                    <h2>Sector 140-A,Noida </h2>
                </div>
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" data-aos="fade-down" data-aos-duration="3000">
                <div className="row">
                    <OwlCarousel className="slider-items owl-carousel" {...options}>
                        <div class="item">
                            <div className="mlf-team-section">
                                <div className="mlf-team-img">
                                    <img src="img/property-1.jpg" alt="" />
                                    <ul className="cat-team-social">
                                        <li className="share">
                                            <i className="fa fa-share-alt" />
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">
                                                <i className="fa fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">
                                                <i className="fa fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">
                                                <i className="fa fa-instagram" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div className="mlf-team-section">
                                <div className="mlf-team-img">
                                    <img src="img/property-2.jpg" alt="" />
                                    <ul className="cat-team-social">
                                        <li className="share">
                                            <i className="fa fa-share-alt" />
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">
                                                <i className="fa fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">
                                                <i className="fa fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">
                                                <i className="fa fa-instagram" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div className="mlf-team-section">
                                <div className="mlf-team-img">
                                    <img src="img/property-3.jpg" alt="" />
                                    <ul className="cat-team-social">
                                        <li className="share">
                                            <i className="fa fa-share-alt" />
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">
                                                <i className="fa fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">
                                                <i className="fa fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">
                                                <i className="fa fa-instagram" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div className="mlf-team-section">
                                <div className="mlf-team-img">
                                    <img src="img/property-4.jpg" alt="" />
                                    <ul className="cat-team-social">
                                        <li className="share">
                                            <i className="fa fa-share-alt" />
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">
                                                <i className="fa fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">
                                                <i className="fa fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">
                                                <i className="fa fa-instagram" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div className="mlf-team-section">
                                <div className="mlf-team-img">
                                    <img src="img/property-5.jpg" alt="" />
                                    <ul className="cat-team-social">
                                        <li className="share">
                                            <i className="fa fa-share-alt" />
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">
                                                <i className="fa fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">
                                                <i className="fa fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">
                                                <i className="fa fa-instagram" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div className="mlf-team-section">
                                <div className="mlf-team-img">
                                    <img src="img/property-6.jpg" alt="" />
                                    <ul className="cat-team-social">
                                        <li className="share">
                                            <i className="fa fa-share-alt" />
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">
                                                <i className="fa fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">
                                                <i className="fa fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">
                                                <i className="fa fa-instagram" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div className="mlf-team-section">
                                <div className="mlf-team-img">
                                    <img src="img/property-7.jpg" alt="" />
                                    <ul className="cat-team-social">
                                        <li className="share">
                                            <i className="fa fa-share-alt" />
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">
                                                <i className="fa fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">
                                                <i className="fa fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">
                                                <i className="fa fa-instagram" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div className="mlf-team-section">
                                <div className="mlf-team-img">
                                    <iframe src='https://www.youtube.com/embed/u7Hon3hVpLU?si=rTAC39s-j61mk1qR' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen title='video' />
                                    <ul className="cat-team-social">
                                        <li className="share">
                                            <i className="fa fa-share-alt" />
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">
                                                <i className="fa fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">
                                                <i className="fa fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">
                                                <i className="fa fa-instagram" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div className="mlf-team-section">
                                <div className="mlf-team-img">
                                    <iframe src='https://www.youtube.com/embed/XiQ1rb2OikE?si=cbrUz4dt_6HCpBRw' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen title='video' />

                                    <ul className="cat-team-social">
                                        <li className="share">
                                            <i className="fa fa-share-alt" />
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">
                                                <i className="fa fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">
                                                <i className="fa fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">
                                                <i className="fa fa-instagram" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </div>
    </div>
</section>


     <>
 
</>



    </>
  )
}

export default OurProjects
