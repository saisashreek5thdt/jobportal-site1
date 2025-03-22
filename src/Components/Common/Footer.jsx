import footLogo from "../../assets/images/footer-logo.svg";
import location from "../../assets/images/icon-location-accent.svg";
import mail from "../../assets/images/icon-mail-accent.svg";
import phone from "../../assets/images/icon-phone-accent.svg";

export default function Footer() {
  return (
    <>
      <footer className="main-footer bg-section dark-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-12">
              {/* About Footer start */}
              <div className="about-footer">
                {/* Footer Logo Start */}
                <div className="footer-logo">
                  <img src={footLogo} alt="" />
                </div>
                {/* Footer Logo End */}

                {/* Footer Contact Box Start */}
                <div className="about-footer-content">
                  <p>
                    Licensed electricians delivering exceptional service and
                    peace of mind. Contact us anytime!
                  </p>
                </div>
                {/* Footer Contact Box End */}
              </div>
              {/* About Footer End */}
            </div>

            <div className="col-lg-3 col-md-5">
              {/* Footer Links Start */}
              <div className="footer-links">
                <h3>quick link</h3>
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="about.html">About us</a>
                  </li>
                  <li>
                    <a href="services.html">our services</a>
                  </li>
                  <li>
                    <a href="projects.html">Latest projects</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact us</a>
                  </li>
                </ul>
              </div>
              {/* Footer Links End */}
            </div>

            <div className="col-lg-3 col-md-7">
              {/* Footer Links Start */}
              <div className="footer-links">
                <h3>contact us</h3>
                {/* Footer Contact Item Start */}
                <div className="footer-contact-item">
                  <div className="icon-box">
                    <img src={location} alt="" />
                  </div>
                  <div className="footer-contact-content">
                    <p>3891 Ranchview Dr. richardson, california 17</p>
                  </div>
                </div>
                {/* Footer Contact Item End */}

                {/* Footer Contact Item Start */}
                <div className="footer-contact-item">
                  <div className="icon-box">
                    <img src={mail} alt="" />
                  </div>
                  <div className="footer-contact-content">
                    <p>
                      <a href="mailto:info@domain.com">
                        support@domainname.com
                      </a>
                    </p>
                    <p>
                      <a href="mailto:info@domain.com">info@domain.com</a>
                    </p>
                  </div>
                </div>
                {/* Footer Contact Item End */}

                {/* Footer Contact Item Start */}
                <div className="footer-contact-item">
                  <div className="icon-box">
                    <img src={phone} alt="" />
                  </div>
                  <div className="footer-contact-content">
                    <p>
                      <a href="tel:+456785889">+01 456 785 889</a>
                    </p>
                  </div>
                </div>
                {/* Footer Contact Item End */}
              </div>
              {/* Footer Links End */}
            </div>

            <div className="col-lg-3 col-md-12">
              {/* Footer Newsletter Form Start */}
              <div className="footer-links footer-newsletter-form">
                <h3>Get in touch</h3>
                <p>
                  Sign up for alerts, our latest blogs, thoughts, and insights
                </p>
                <form id="newslettersForm" action="#" method="POST">
                  <div className="form-group">
                    <input
                      type="email"
                      name="mail"
                      className="form-control"
                      id="mail"
                      placeholder="Enter your email"
                      required
                    />
                    <button type="submit" className="btn-default">
                      subscribe
                    </button>
                  </div>
                </form>
              </div>
              {/* Footer Newsletter Form End */}
            </div>

            <div className="col-lg-12">
              {/* Footer Copyright Section Start */}
              <div className="footer-copyright">
                {/* Footer Copyright Text Start */}
                <div className="footer-copyright-text">
                  <p>Copyright © 2025 All Rights Reserved.</p>
                </div>
                {/* Footer Copyright Text End */}

                {/* Footer Social Link Start */}
                <div className="footer-social-links">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-dribbble"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Footer Social Link End */}
              </div>
              {/* Footer Copyright Section End */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
