import whyIMG1 from "../../assets/images/why-choose-image.jpg";
import whyIMG2 from "../../assets/images/icon-why-choose-list-1.svg";
import whyIMG3 from "../../assets/images/icon-why-choose-list-2.svg";
import whyIMG4 from "../../assets/images/icon-why-choose-list-3.svg";
import { Link } from "react-router-dom";

export default function WhyChooseUs() {
  return (
    <>
      <div className="why-choose-us">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              {/* Why Choose Image Start */}
              <div className="why-choose-image">
                <figure className="image-anime reveal">
                  <img src={whyIMG1} alt="" />
                </figure>
              </div>
              {/* Why Choose Image End */}
            </div>

            <div className="col-lg-6">
              {/* Why Choose Content Start */}
              <div className="why-choose-content">
                {/* Section Title Start */}
                <div className="section-title">
                  <h3 className="wow fadeInUp">why choose us</h3>
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    Powering progress through <span>excellence</span>
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    Over the years, we've accomplished remarkable milestones in
                    the electrical services industry. From completing complex
                    projects to earning
                  </p>
                </div>
                {/* Section Title End */}

                {/* Why Choose Body Start */}
                <div
                  className="why-choose-body wow fadeInUp"
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
                  </ul>
                </div>
                {/* Why Choose Body End */}

                {/* Why Choose Button Start */}
                <div
                  className="why-choose-button wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  <Link to="/about" className="btn-default">
                    View our milestones
                  </Link>
                </div>
                {/* Why Choose Button End */}
              </div>
              {/* Why Choose Content End */}
            </div>

            <div className="col-lg-12">
              {/* Why Choose List Start */}
              <div
                className="why-choose-list wow fadeInUp"
                data-wow-delay="0.8s"
              >
                {/* Why Choose Item Start */}
                <div className="why-choose-item">
                  <div className="icon-box">
                    <img src={whyIMG2} alt="" />
                  </div>
                  <div className="why-choose-item-content">
                    <h3>Delivering reliable solutions</h3>
                    <p>
                      Expert teams ensuring precision and safety in every
                      project.
                    </p>
                  </div>
                </div>
                {/* Why Choose Item End */}

                {/* Why Choose Item Start */}
                <div className="why-choose-item active">
                  <div className="icon-box">
                    <img src={whyIMG3} alt="" />
                  </div>
                  <div className="why-choose-item-content">
                    <h3>Commitment to excellence</h3>
                    <p>
                      Expert teams ensuring precision and safety in every
                      project.
                    </p>
                  </div>
                </div>
                {/* Why Choose Item End */}

                {/* Why Choose Item Start */}
                <div className="why-choose-item">
                  <div className="icon-box">
                    <img src={whyIMG4} alt="" />
                  </div>
                  <div className="why-choose-item-content">
                    <h3>Your trusted partner</h3>
                    <p>
                      Expert teams ensuring precision and safety in every
                      project.
                    </p>
                  </div>
                </div>
                {/* Why Choose Item End */}
              </div>
              {/* Why Choose List End */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
