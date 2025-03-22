import whoIMG1 from "../../assets/images/trusted-expert-image.jpg";
import whoIMG2 from "../../assets/images/icon-project-complete-1.svg";
import whoIMG3 from "../../assets/images/icon-project-complete-2.svg";
import whoIMG4 from "../../assets/images/icon-trusted-expert-body-1.svg";
import whoIMG5 from "../../assets/images/icon-trusted-expert-body-2.svg";
import phone from "../../assets/images/icon-phone-accent.svg";

export default function WhoWeAre() {
  return (
    <>
      <div className="trusted-expert">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              {/* Trusted Expert Content Images Start */}
              <div className="trusted-expert-images">
                <div className="trusted-expert-image">
                  <figure className="image-anime reveal">
                    <img src={whoIMG1} alt="" />
                  </figure>
                </div>

                {/* Exprience Box Start */}
                <div className="exprience-box">
                  <h3>2017 from our exprience</h3>
                  <p>Since</p>
                </div>
                {/* Exprience Box End */}

                {/* Project Complete List Start */}
                <div className="project-complete-list">
                  {/* Project Complete Item Start */}
                  <div className="project-complete-item">
                    <img src={whoIMG2} alt="" />
                    <h2>
                      <span className="counter">500</span>+
                    </h2>
                    <p>projects completed</p>
                  </div>
                  {/* Project Complete Item End */}

                  {/* Project Complete Item Start */}
                  <div className="project-complete-item">
                    <img src={whoIMG3} alt="" />
                    <h2>
                      <span className="counter">1000</span>+
                    </h2>
                    <p>projects completed</p>
                  </div>
                  {/* Project Complete Item End */}
                </div>
                {/* Project Complete List End */}
              </div>
              {/* Trusted Expert Content Images End */}
            </div>

            <div className="col-lg-6">
              {/* Trusted Expert Content Start */}
              <div className="trusted-expert-content">
                {/* Section Title Start */}
                <div className="section-title">
                  <h3 className="wow fadeInUp">Who we are</h3>
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    Trusted experts in electrical <span>services</span>
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    From small repairs to large-scale installations, our
                    experienced electricians provide tailored solutions to power
                    your home.
                  </p>
                </div>
                {/* Section Title End */}

                {/* Trusted Expert List Start */}
                <div
                  className="trusted-expert-list wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <ul>
                    <li>
                      Committed to delivering safe and efficient electrical
                      solutions.
                    </li>
                    <li>
                      Backed by years of expertise and professional excellence.
                    </li>
                    <li>
                      Focused on innovation and customer satisfaction at every
                      step.
                    </li>
                  </ul>
                </div>
                {/* Trusted Expert List End */}

                {/* Trusted Expert Body Start */}
                <div
                  className="trusted-expert-body wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  {/* Trusted Expert Body Item Start */}
                  <div className="trusted-expert-item">
                    <div className="icon-box">
                      <img src={whoIMG4} alt="" />
                    </div>
                    <div className="trusted-expert-title">
                      <h3>We understand that every project.</h3>
                    </div>
                  </div>
                  {/* Trusted Expert Body Item End */}

                  {/* Trusted Expert Body Item Start */}
                  <div className="trusted-expert-item">
                    <div className="icon-box">
                      <img src={whoIMG5} alt="" />
                    </div>
                    <div className="trusted-expert-title">
                      <h3>deliver outstanding contribute.</h3>
                    </div>
                  </div>
                  {/* Trusted Expert Body Item End */}
                </div>
                {/* Trusted Expert Body End */}

                {/* Trusted Expert Footer Start */}
                <div
                  className="trusted-expert-footer wow fadeInUp"
                  data-wow-delay="0.8s"
                >
                  {/* Goals Content Button Start */}
                  <div className="trusted-expert-btn">
                    <a href="projects.html" className="btn-default">
                      know more
                    </a>
                  </div>
                  {/* Goals Content Button End */}

                  {/* Contact Now Box Start */}
                  <div className="contact-now-box">
                    <div className="icon-box">
                      <img src={phone} alt="" />
                    </div>
                    <div className="contact-now-box-content">
                      <span>Call Us 24/7</span>
                      <p>
                        <a href="tel:123456789">+ 0 (123) 456 789</a>
                      </p>
                    </div>
                  </div>
                  {/* Contact Now Box End */}
                </div>
                {/* Trusted Expert Footer End */}
              </div>
              {/* Trusted Expert Content End */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
