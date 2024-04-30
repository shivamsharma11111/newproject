import React, {useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
const HomeHeader = () => {
    useEffect(() => {
        Aos.init({ duration: 2000});
      }, []);
    
  return (
    <>
    <div class="cat-main-wrapper"> 
       <section className="cat-banner-wrapper">
            <div className="cat-banner-social">
                <ul>
                    <li><a href="javascript:void(0);">Facebook</a></li>
                    <li><a href="javascript:void(0);">Twitter</a></li>
                    <li><a href="javascript:void(0);">Instagram</a></li>
                </ul>
            </div>
            <div className="container">
                <div className="cat-banner-section">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="cat-banner-text">
                                <div className="cat-banner-text-inner"> 
                                    <h1 className="cat-banner-title" data-aos="fade-up" data-aos-duration="3000">
                                    50 STORIES FROM OF THE FUTURE THE MAKERS OF CYBERTHUM
                                         
                                    </h1>
                                    <p data-aos="fade-up" data-aos-duration="2800">A SMART BUILDING WITH ARTIFICIAL INTELLIGENCE THAT CUSTOMISES YOUR EXPERIENCE TO YOU..</p>
                                    <div className="cat-banner-btn-wrap">
                                        <a href="about.html" className="cat-btn bookNow">
                                            About Us
                                        </a>
                                        <a href="product.html" className="cat-btn btn-black">
                                            Contact Us
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="banner-img animate__animated animate__fadeInRight">
                                <img src="img/slider-1.jpg" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <a href="#scroll-down-section" className="scroll-down-section">
                <span></span>
            </a>
            <a href="javascript:void(0);" className="cat-banner-contact">
                <i className="fa fa-phone" aria-hidden="true"></i>
                <span>
                    +91 687 6543 321
                </span>
            </a>
        </section> 
    </div>
    </>
  )
}

export default HomeHeader
