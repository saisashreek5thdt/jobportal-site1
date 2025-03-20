import heroIMG from "../../assets/images/hero-img.png";
import custIMG1 from "../../assets/images/customer-img-1.jpg";
import custIMG2 from "../../assets/images/customer-img-2.jpg";
import custIMG3 from "../../assets/images/customer-img-3.jpg";
import custIMG4 from "../../assets/images/customer-img-4.jpg";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <>
      <div className="hero bg-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              {/* Hero Content Start */}
              <div className="hero-content">
                {/* Section Title Start */}
                <div className="section-title">
                  <h1 className="text-anime-style-2" data-cursor="-opaque">
                    Your trusted partner for all your electrical needs
                  </h1>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    From small repairs to large-scale installations, our
                    experienced electricians provide tailored solutions to power
                    your home or business efficiently and safely.
                  </p>
                </div>
                {/* Section Title End */}

                {/* Hero Content Body Start */}
                <div className="hero-body wow fadeInUp" data-wow-delay="0.4s">
                  {/* Hero Button Start */}
                  <div className="hero-btn">
                    <Link
                      to="/"
                      className="btn-default btn-highlighted"
                    >
                      Request A Quote
                    </Link>
                  </div>
                  {/* Hero Button End */}

                  {/* Video Play Button Start */}
                  <div className="video-play-button">
                    <a
                      href="https://www.youtube.com/watch?v=Y-x0efG1seA"
                      className="popup-video"
                      data-cursor-text="Play"
                    >
                      <i className="fa-solid fa-play"></i>
                    </a>
                    <p>Watch Our Work</p>
                  </div>
                  {/* Video Play Button End */}
                </div>
                {/* Hero Content Body End */}

                {/* Satisfied Customer Box Start */}
                <div
                  className="satisfied-customer-box wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  {/* Customer Experience Content Start */}
                  <div className="customer-image-content">
                    <p>Recommended By :</p>
                  </div>
                  {/* Customer Experience Content End */}

                  {/* Customer Review Images Start */}
                  <div className="satisfied-customer-images">
                    {/* Customer Image Start */}
                    <div className="customer-image">
                      <figure className="image-anime">
                        <img src={custIMG1} alt="" />
                      </figure>
                    </div>
                    {/* Customer Image End */}

                    {/* Customer Image Start */}
                    <div className="customer-image">
                      <figure className="image-anime">
                        <img src={custIMG2} alt="" />
                      </figure>
                    </div>
                    {/* Customer Image End */}

                    {/* Customer Image Start */}
                    <div className="customer-image">
                      <figure className="image-anime">
                        <img src={custIMG3} alt="" />
                      </figure>
                    </div>
                    {/* Customer Image End */}

                    {/* Customer Image Start */}
                    <div className="customer-image">
                      <figure className="image-anime">
                        <img src={custIMG4} alt="" />
                      </figure>
                    </div>
                    {/* Customer Image End */}
                  </div>
                  {/* Customer Review Images End */}
                </div>
                {/* Satisfied Customer Box End */}
              </div>
              {/* Hero Content End */}
            </div>

            <div className="col-lg-5">
              {/* Hero Image Start */}
              <div className="hero-image">
                <img src={heroIMG} alt="" />
              </div>
              {/* Hero Image End */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
