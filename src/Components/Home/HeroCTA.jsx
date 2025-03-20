import { Link } from "react-router-dom";
import contactIMG from "../../assets/images/icon-contact-now.svg";
import location from "../../assets/images/icon-location.svg";

export default function HeroCTA() {
  return (
    <>
      <div className="hero-cta-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 order-lg-1 order-2">
              <div className="hero-cta-info">
                {/* Hero Cta Item Start */}
                <div className="hero-cta-item wow fadeInUp">
                  {/* Hero Cta Item Header Start */}
                  <div className="hero-cta-item-header">
                    <div className="icon-box">
                      <img src={contactIMG} alt="" />
                    </div>
                    <div className="hero-cta-item-title">
                      <h3>Contact Us</h3>
                    </div>
                  </div>
                  {/* Hero Cta Item Header End */}

                  {/* Hero Cta Item Content Start */}
                  <div className="hero-cta-item-content">
                    <p>
                      <Link to="mailto:info@domainname.com">
                        <span>Email:</span> info@domainname.com
                      </Link>
                    </p>
                    <p>
                      <Link to="mailto:123456789">
                        <span>Phone:</span> (123) 465 - 798
                      </Link>
                    </p>
                  </div>
                  {/* Hero Cta Item Content End */}
                </div>
                {/* Hero Cta Item End */}

                {/* Hero Cta Item Start */}
                <div
                  className="hero-cta-item wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  {/* Hero Cta Item Header Start */}
                  <div className="hero-cta-item-header">
                    <div className="icon-box">
                      <img src={location} alt="" />
                    </div>
                    <div className="hero-cta-item-title">
                      <h3>Our Location</h3>
                    </div>
                  </div>
                  {/* Hero Cta Item Header End */}

                  {/* Hero Cta Item Content Start */}
                  <div className="hero-cta-item-content">
                    <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
                  </div>
                  {/* Hero Cta Item Content End */}
                </div>
                {/* Hero Cta Item End */}
              </div>
            </div>

            <div className="col-lg-5 order-lg-2 order-1">
              {/* Our Expert Box Start */}
              <div className="our-expert-box">
                <h2 className="wow fadeInUp" data-wow-delay="0.4s">
                  Contact our expert handyman today!
                </h2>
                <a
                  href="contact.html"
                  className="btn-default btn-highlighted wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  book-now
                </a>
              </div>
              {/* Our Expert Box End */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
