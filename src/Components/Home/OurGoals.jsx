import goalIMG1 from "../../assets/images/icon-goals-item-1.svg";
import goalIMG2 from "../../assets/images/icon-goals-item-2.svg";
import goalPhone from "../../assets/images/icon-phone-accent.svg";
import goalIMG3 from "../../assets/images/our-goals-img-1.jpg";
import goalIMG4 from "../../assets/images/our-goals-img-2.jpg";
import goalIMG5 from "../../assets/images/our-goals-img-3.jpg";
import goalIMG6 from "../../assets/images/our-goals-img-4.jpg";
import goalCircle from "../../assets/images/contact-now-circle.png";
import { Link } from "react-router-dom";

export default function OurGoals() {
  return (
    <>
      <div className="our-goals">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="our-goals-content">
                {/* Section Title Start */}
                <div className="section-title">
                  <h3 className="wow fadeInUp">our goals</h3>
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    Our goals to deliver top-notch
                    <span>electrical solutions</span>
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    Our goal is to be a leader in providing environmentally
                    conscious electrical services. We focus on energy-efficient
                    solutions and sustainable practices to not only meet
                    industry standards but to exceed them.
                  </p>
                </div>
                {/* Section Title End */}

                {/* Goals Content Body Start */}
                <div
                  className="goals-content-body wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  {/* Goals Item Start */}
                  <div className="goals-item">
                    <div className="icon-box">
                      <img src={goalIMG1} alt="" />
                    </div>
                    <div className="goals-item-content">
                      <h3>Commitment to Innovation</h3>
                      <p>We strive to continuously innovate, incorporating.</p>
                    </div>
                  </div>
                  {/* Goals Item End */}

                  {/* Goals Item Start */}
                  <div className="goals-item">
                    <div className="icon-box">
                      <img src={goalIMG2} alt="" />
                    </div>
                    <div className="goals-item-content">
                      <h3>Customer-Centric Focus</h3>
                      <p>
                        We aim to build long-lasting relationships by providing.
                      </p>
                    </div>
                  </div>
                  {/* Goals Item End */}
                </div>
                {/* Goals Content Body End */}

                {/* Goals Content Footer Start */}
                <div
                  className="goals-content-footer wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  {/* Goals Content Button Start */}
                  <div className="goals-content-btn">
                    <Link to="/" className="btn-default">
                      know more
                    </Link>
                  </div>
                  {/* Goals Content Button End */}

                  {/* Contact Now Box Start */}
                  <div className="contact-now-box">
                    <div className="icon-box">
                      <img src={goalPhone} alt="" />
                    </div>
                    <div className="contact-now-box-content">
                      <span>Call Us 24/7</span>
                      <p>
                        <Link to="tel:123456789">+ 0 (123) 456 789</Link>
                      </p>
                    </div>
                  </div>
                  {/* Contact Now Box End */}
                </div>
                {/* Goals Content Footer End */}
              </div>
            </div>

            <div className="col-lg-6">
              {/* Our Goals Images Start */}
              <div className="our-goals-images">
                {/* Goals Image Box Start */}
                <div className="goals-image-box">
                  {/* Goals Img Start */}
                  <div className="goals-img-1">
                    <figure className="image-anime reveal">
                      <img src={goalIMG3} alt="" />
                    </figure>
                  </div>
                  {/* Goals Img End */}

                  {/* Goals Img Start */}
                  <div className="goals-img-2">
                    <figure className="image-anime reveal">
                      <img src={goalIMG4} alt="" />
                    </figure>
                  </div>
                  {/* Goals Img End */}
                </div>
                {/* Goals Image Box End */}

                {/* Goals Image Box Start */}
                <div className="goals-image-box">
                  {/* Goals Img Start */}
                  <div className="goals-img-3">
                    <figure className="image-anime reveal">
                      <img src={goalIMG5} alt="" />
                    </figure>
                  </div>
                  {/* Goals Img End */}

                  {/* Goals Img Start */}
                  <div className="goals-img-4">
                    <figure className="image-anime reveal">
                      <img src={goalIMG6} alt="" />
                    </figure>
                  </div>
                  {/* Goals Img End */}
                </div>
                {/* Goals Image Box End */}

                {/* Contact Nwo Circle Start */}
                <div className="contact-now-circle">
                  <Link to="/">
                    <img src={goalCircle} alt="" />
                  </Link>
                </div>
                {/* Contact Nwo Circle End */}
              </div>
              {/* Our Goals Images End */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
