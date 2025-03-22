import iconBox from "../../assets/images/icon-about-experience.svg";
import abtIMG from "../../assets/images/about-image-1.jpg";
import abtIMG2 from "../../assets/images/about-image-2.jpg";
import serviceIcon1 from "../../assets/images/icon-about-service-1.svg";
import serviceIcon2 from "../../assets/images/icon-about-service-2.svg";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <div className="about-us">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              {/* About Images Start */}
              <div className="about-images">
                {/* About Experience Box Start */}
                <div className="about-experience-box wow fadeInUp">
                  <div className="icon-box">
                    <img src={iconBox} alt="" />
                  </div>
                  <div className="about-experience-content">
                    <h3>
                      <span className="counter">25</span>+ Years Of Experience
                    </h3>
                    <p>
                      Trusted electrical experts with 25+ years of experience.
                    </p>
                  </div>
                </div>
                {/* About Experience Box End */}

                {/* About Video Image Start */}
                <div
                  className="about-video-image wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <figure className="image-anime">
                    <img src={abtIMG} alt="" />
                  </figure>

                  {/* Video Play Button Start */}
                  <div className="video-play-button btn-effect">
                    <a
                      href="https://www.youtube.com/watch?v=Y-x0efG1seA"
                      className="popup-video"
                      data-cursor-text="Play"
                    >
                      <i className="fa-solid fa-play"></i>
                    </a>
                  </div>
                  {/* Video Play Button End */}
                </div>
                {/* About Video Image End */}

                {/* About Image Start */}
                <div className="about-image">
                  <figure className="image-anime reveal">
                    <img src={abtIMG2} alt="about services picture" />
                  </figure>
                </div>
                {/* About Image End */}
              </div>
              {/* About Images End */}
            </div>

            <div className="col-lg-6">
              {/* About Us Content Start */}
              <div className="about-us-content">
                {/* Section Title Start */}
                <div className="section-title">
                  <h3 className="wow fadeInUp">about us</h3>
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    Complete electrical services for <span>every need</span>
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    From small repairs to large-scale installations our
                    experienced electricians provide tailored solutions to power
                    your home.
                  </p>
                </div>
                {/* Section Title End */}

                {/* About Content Body Start */}
                <div
                  className="about-content-body wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  {/* About Service Item Start */}
                  <div className="about-service-item">
                    <div className="icon-box">
                      <img src={serviceIcon1} alt="" />
                    </div>
                    <div className="about-service-item-content">
                      <h3>Providing Awesome Service</h3>
                      <p>
                        Skilled professionals dedicated to delivering quality.
                      </p>
                    </div>
                  </div>
                  {/* About Service Item End */}

                  {/* About Service Item Start */}
                  <div className="about-service-item">
                    <div className="icon-box">
                      <img src={serviceIcon2} alt="" />
                    </div>
                    <div className="about-service-item-content">
                      <h3>24/7 Our Support</h3>
                      <p>
                        Round-the-clock support for all your urgent repair
                        needs.
                      </p>
                    </div>
                  </div>
                  {/* About Service Item End */}
                </div>
                {/* About Content Body End */}

                {/* About Content Button Start */}
                <div
                  className="about-content-btn wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  <Link to="/" className="btn-default">
                    more about us
                  </Link>
                </div>
                {/* About Content Button End */}
              </div>
              {/* About Us Content End */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
