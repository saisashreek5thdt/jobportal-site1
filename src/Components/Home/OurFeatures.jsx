import videoBG from "../../assets/images/intro-bg-image.jpg";
import featureIMG1 from "../../assets/images/icon-features-list-1.svg";
import featureIMG2 from "../../assets/images/icon-features-list-2.svg";
import featureIMG3 from "../../assets/images/icon-features-list-3.svg";
import featureIMG4 from "../../assets/images/icon-features-list-4.svg";

export default function OurFeatures() {
  return (
    <>
      <div className="our-features bg-section">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-12">
              {/* Section Title Start */}
              <div className="section-title section-title-center">
                <h3 className="wow fadeInUp">our features</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Features that define our quality <span>and reliability</span>
                </h2>
              </div>
              {/* Section Title End */}
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              {/* Intro Video Box Start */}
              <div className="intro-video-box">
                <div className="intro-bg-image">
                  <a
                    href="https://www.youtube.com/watch?v=Y-x0efG1seA"
                    className="popup-video"
                    data-cursor-text="Play"
                  >
                    <figure className="image-anime">
                      <img src={videoBG} alt="" />
                    </figure>
                  </a>
                </div>
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
              {/* Intro Video Box End */}

              {/* Our Features List Start */}
              <div className="our-features-list">
                {/* Features Item Start */}
                <div className="features-item wow fadeInUp">
                  <div className="icon-box">
                    <img src={featureIMG1} alt="" />
                  </div>
                  <div className="features-item-content">
                    <h3>24/7 Emergency Services</h3>
                    <p>
                      We're here for you any time, day or night, to resolve
                      urgent issues.
                    </p>
                  </div>
                </div>
                {/* Features Item End */}

                {/* Features Item Start */}
                <div
                  className="features-item wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div className="icon-box">
                    <img src={featureIMG2} alt="" />
                  </div>
                  <div className="features-item-content">
                    <h3>Advanced Technology</h3>
                    <p>
                      We use state-of-the-art tools and techniques to deliver
                      efficient.
                    </p>
                  </div>
                </div>
                {/* Features Item End */}

                {/* Features Item Start */}
                <div
                  className="features-item wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <div className="icon-box">
                    <img src={featureIMG3} alt="" />
                  </div>
                  <div className="features-item-content">
                    <h3>Safety First Approach</h3>
                    <p>
                      Your safety is our top priority. We follow strict industry
                      standards.
                    </p>
                  </div>
                </div>
                {/* Features Item End */}

                {/* Features Item Start */}
                <div
                  className="features-item wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  <div className="icon-box">
                    <img src={featureIMG4} alt="" />
                  </div>
                  <div className="features-item-content">
                    <h3>Customizable Solutions</h3>
                    <p>We provide tailored electrical services designed.</p>
                  </div>
                </div>
                {/* Features Item End */}
              </div>
              {/* Our Features List End */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
