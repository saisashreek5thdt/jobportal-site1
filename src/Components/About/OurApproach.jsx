import mission from "../../assets/images/icon-our-mission.svg";
import vision from "../../assets/images/icon-our-vision.svg";
import approachIMG1 from "../../assets/images/approach-image-1.jpg";
import approachIMG2 from "../../assets/images/approach-image-2.jpg";
import approachIMG3 from "../../assets/images/contact-now-circle.png";
import { Link } from "react-router-dom";

export default function OurApproach() {
  return (
    <>
      <div className="our-approach bg-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="our-approach-content">
                {/* Section Title Start */}
                <div className="section-title">
                  <h3 className="wow fadeInUp">our approach</h3>
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    Powering communities with
                    <span>safe & reliable solutions</span>
                  </h2>
                </div>
                {/* Section Title End */}

                {/* Mission Vision Box List Start */}
                <div className="mission-vision-box-list">
                  {/* Mission Vision Box Start */}
                  <div
                    className="mission-vision-box wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <div className="mission-vision-header">
                      <div className="icon-box">
                        <img src={mission} alt="" />
                      </div>
                      <div className="mission-vision-title">
                        <h3>Our mission</h3>
                      </div>
                    </div>
                    <div className="mission-vision-body">
                      <p>
                        Our mission is to deliver, reliable and high-quality
                        ensuring efficiency and excellence in every project we
                        undertake.
                      </p>
                    </div>
                  </div>
                  {/* Mission Vision Box End */}

                  {/* Mission Vision Box Start */}
                  <div
                    className="mission-vision-box wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <div className="mission-vision-header">
                      <div className="icon-box">
                        <img src={vision} alt="" />
                      </div>
                      <div className="mission-vision-title">
                        <h3>Our vision</h3>
                      </div>
                    </div>
                    <div className="mission-vision-body">
                      <p>
                        Our vision is to deliver, reliable and high-quality
                        ensuring efficiency and excellence in every project we
                        undertake.
                      </p>
                    </div>
                  </div>
                  {/* Mission Vision Box End */}
                </div>
                {/* Mission Vision Box List End */}
              </div>
            </div>

            <div className="col-lg-6">
              {/* Our Approach Images Start */}
              <div className="our-approach-images">
                {/* Approach Image 1 Start */}
                <div className="approach-img-1">
                  <figure className="image-anime reveal">
                    <img src={approachIMG1} alt="" />
                  </figure>
                </div>
                {/* Approach Image 1 End */}

                {/* Approach Image 2 Start */}
                <div className="approach-img-2">
                  <figure className="image-anime">
                    <img src={approachIMG2} alt="" />
                  </figure>

                  <div className="contact-now-circle">
                    <Link to="/about">
                      <img src={approachIMG3} alt="" />
                    </Link>
                  </div>
                </div>
                {/* Approach Image 2 End */}
              </div>
              {/* Our Approach Images End */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
