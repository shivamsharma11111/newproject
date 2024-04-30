import React, {useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

const HomeAbout = () => {
    useEffect(() => {
        Aos.init({ once: true, duration: 2000});
      }, []);

  return (
    <>
      
<section className="cat-about-wrapper cat-section-spacer">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12" data-aos="fade-right" data-aos-duration="3000">
        <div className="imgs-grid">
          <div className="grid grid-1">
            <img src="img/about.jpg" alt="Untree.co" />
          </div> 
        </div>
      </div>
      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12" data-aos="fade-left" data-aos-duration="3000">
        <div className="cat-story-info">
          <div className="cat-heading-wrapper">
            <h4>OF THE FUTURE</h4>
            <h2>Trusted By 200 + satisfied clients Tallest Commercial Tower in NCR Region</h2>
          </div>
          <p className="mb-3">
          AN ICON IN ETERNITY Going to the mall will be a technology enabled experience Everything, from payment platforms to
          delivery mechanisms will be techenabled Mall in the sky At Cyberthum, shopping will elevate itself to meet theemotional
          needs of the consumer
          </p>
          <div className="cat-banner-btn-wrap" style={{ margin: 20 }}>
            <a href="about.html" className="cat-link">
              Read More
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width={28}
                  height={18}
                  viewBox="0 0 28 18"
                  xmlSpace="preserve"
                >
                  <path d="M27.6,8.5c-5.5,0-9.5-8.1-9.5-8.2C17.9,0,17.7,0,17.5,0.1c-0.2,0.1-0.3,0.4-0.1,0.7c0.1,0.3,2.7,5.5,6.7,7.7H0.4C0.2,8.5,0,8.7,0,9c0,0.3,0.2,0.5,0.4,0.5h23.7c-4,2.2-6.6,7.4-6.7,7.7c-0.1,0.2,0,0.5,0.1,0.7c0.2,0.1,0.4,0.1,0.6-0.2c0-0.1,4.1-8.2,9.5-8.2C27.8,9.5,28,9.3,28,9C28,8.7,27.8,8.5,27.6,8.5z" />
                  <path d="M27.6,8.5c-5.5,0-9.5-8.1-9.5-8.2C17.9,0,17.7,0,17.5,0.1c-0.2,0.1-0.3,0.4-0.1,0.7c0.1,0.3,2.7,5.5,6.7,7.7H0.4C0.2,8.5,0,8.7,0,9c0,0.3,0.2,0.5,0.4,0.5h23.7c-4,2.2-6.6,7.4-6.7,7.7c-0.1,0.2,0,0.5,0.1,0.7c0.2,0.1,0.4,0.1,0.6-0.2c0-0.1,4.1-8.2,9.5-8.2C27.8,9.5,28,9.3,28,9C28,8.7,27.8,8.5,27.6,8.5z" />
                </svg>
              </span>
            </a>
          </div>
          <ul className="cat-story-list">
            <li>
              <span>
                <svg
                  enableBackground="new 0 0 512 512"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path d="m271.176 121.396c-150.205 7.822-271 132.495-271 284.604v106l37.925-88.29c44.854-89.692 133.847-147.041 233.075-152.314v121.318l240.648-196.714-240.648-196z" />
                  </g>
                </svg>
              </span>{" "}
              Leed platinum certified building
            </li>
            <li>
              <span>
                <svg
                  enableBackground="new 0 0 512 512"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path d="m271.176 121.396c-150.205 7.822-271 132.495-271 284.604v106l37.925-88.29c44.854-89.692 133.847-147.041 233.075-152.314v121.318l240.648-196.714-240.648-196z" />
                  </g>
                </svg>
              </span>{" "}
              Constructed with the dry wall system technique
            </li>
            <li>
              <span>
                <svg
                  enableBackground="new 0 0 512 512"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path d="m271.176 121.396c-150.205 7.822-271 132.495-271 284.604v106l37.925-88.29c44.854-89.692 133.847-147.041 233.075-152.314v121.318l240.648-196.714-240.648-196z" />
                  </g>
                </svg>
              </span>{" "}
              Breathable double skin strategy
            </li>
            <li>
              <span>
                <svg
                  enableBackground="new 0 0 512 512"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path d="m271.176 121.396c-150.205 7.822-271 132.495-271 284.604v106l37.925-88.29c44.854-89.692 133.847-147.041 233.075-152.314v121.318l240.648-196.714-240.648-196z" />
                  </g>
                </svg>
              </span>{" "}
              Double glazed unitized façade system
            </li>
            <li>
              <span>
                <svg
                  enableBackground="new 0 0 512 512"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path d="m271.176 121.396c-150.205 7.822-271 132.495-271 284.604v106l37.925-88.29c44.854-89.692 133.847-147.041 233.075-152.314v121.318l240.648-196.714-240.648-196z" />
                  </g>
                </svg>
              </span>{" "}
              A helipad and simple parking facilities

            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default HomeAbout
