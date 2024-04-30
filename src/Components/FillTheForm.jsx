import React, {useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css";



const FillTheForm = () => {
  useEffect(() => {
    Aos.init({ once: true, duration: 2000});
  }, []);
  return (


    <>
  
  <section className="form">
  <div className="container-fluid">
    <div className="row">
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="cat-heading-wrapper">
          <h4>BOOK US AND GET THE BROCHURE</h4>
          <h2>FILL THE FORM AND DOWNLOAD <br />  THE BROCHURE CONTENT</h2>
        </div>
      </div>
      <div className="cat-booking-from-inner">
        <div className="row">
          <section className="contact_us">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12" data-aos="flip-up" data-aos-duration="3000">
                  <div className="contact_inner">
                    <div className="row">
                      <div className="col-md-10">
                        <div className="contact_form_inner">
                          <div className="contact_field">
                            <input
                              type="text"
                              name="name"
                              placeholder="Your Name"
                              className="form-control form-group"
                              required=""
                            />
                            <input
                              type="email"
                              name="email"
                              placeholder="Email Address"
                              className="form-control form-group"
                              required=""
                            />
                            <input
                              type="tel"
                              name="phone"
                              placeholder="Phone Number"
                              className="form-control form-group"
                              required=""
                            />
                            <input
                              type="text"
                              name="sub"
                              placeholder="Subject"
                              className="form-control form-group"
                              required=""
                            />
                            <textarea
                              className="form-control form-group"
                              placeholder="Message"
                              defaultValue={""}
                            />
                            <button className="contact_form_submit">
                              Send
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div className="right_conatct_social_icon d-flex align-items-end">
                          <div className="socil_item_inner d-flex">
                            <ul>
                              <li>
                                <a href="#">
                                  <i className="fa fa-facebook-square" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-instagram" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-twitter" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="contact_info_sec">
                      <h4>Contact Info</h4>
                      <div className="d-flex info_single align-items-center">
                        <i className="fas fa-headset" />
                        <span>+91 9910371444</span>
                      </div>
                      <div className="d-flex info_single align-items-center">
                        <i className="fas fa-envelope-open-text" />
                        <span>info@punitbuilder.com</span>
                      </div>
                      <div className="d-flex info_single align-items-center">
                        <i className="fas fa-map-marked-alt" />
                        <span>
                          (10 AM - 10 PM) <br /> Mon - Sat (10 AM - 10 PM){" "}
                          <br />
                          <strong>
                            {" "}
                            Please Contact And Get 20% Offers! With Us Hurry Up
                          </strong>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12" data-aos="flip-down" data-aos-duration="3000">
                  <div className="map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28018.555002405756!2d77.33974500701794!3d28.62018866514737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5456ef36d9f%3A0x3b7191b1286136c8!2sSector%2062%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1702902067331!5m2!1sen!2sin"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</section>



      
    </>
  )
}

export default FillTheForm
