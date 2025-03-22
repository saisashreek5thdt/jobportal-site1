import serviceIMG1 from "../../assets/images/service-image-1.jpg";
import serviceIMG2 from "../../assets/images/service-image-2.jpg";
import serviceIMG3 from "../../assets/images/service-image-3.jpg";
import serviceIMG4 from "../../assets/images/service-image-4.jpg";
import serviceIMG5 from "../../assets/images/service-image-5.jpg";
import serviceIMG6 from "../../assets/images/service-image-6.jpg";

export default function OurServices() {
  return (
    <>
      {/* Our Services Section Start */}
      <div className="our-services bg-section dark-section">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-12">
              {/* Section Title Start */}
              <div className="section-title section-title-center">
                <h3 className="wow fadeInUp">Our Services</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Specialized services for <span>every industry</span>
                </h2>
              </div>
              {/* Section Title End */}
            </div>
          </div>
        </div>

        {/* Services Menu Start */}
        <div className="page-services">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                {/* Service Item Start */}
                <div className="service-item wow fadeInUp">
                  {/* Service Image Start */}
                  <div className="service-image">
                    <a href="service-single.html" data-cursor-text="View">
                      <figure className="image-anime">
                        <img src={serviceIMG1} alt="" />
                      </figure>
                    </a>
                  </div>
                  {/* Service Image End */}

                  {/* Service Number Start */}
                  <div className="service-no">
                    <h2>01</h2>
                  </div>
                  {/* Service Number End */}

                  {/* Service Content Start */}
                  <div className="service-content">
                    <h3>
                      <a href="service-single.html">Electrical Repairing</a>
                    </h3>
                    <p>
                      From new installations to repairs, we ensure your home is
                      safe and fully
                    </p>
                  </div>
                  {/* Service Content End */}
                </div>
                {/* Service Item End */}
              </div>

              <div className="col-lg-4 col-md-6">
                {/* Service Item Start */}
                <div
                  className="service-item wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  {/* Service Image Start */}
                  <div className="service-image">
                    <a href="service-single.html" data-cursor-text="View">
                      <figure className="image-anime">
                        <img src={serviceIMG2} alt="" />
                      </figure>
                    </a>
                  </div>
                  {/* Service Image End */}

                  {/* Service Number Start */}
                  <div className="service-no">
                    <h2>02</h2>
                  </div>
                  {/* Service Number End */}

                  {/* Service Content Start */}
                  <div className="service-content">
                    <h3>
                      <a href="service-single.html">Commercial Services</a>
                    </h3>
                    <p>
                      From new installations to repairs, we ensure your home is
                      safe and fully
                    </p>
                  </div>
                  {/* Service Content End */}
                </div>
                {/* Service Item End */}
              </div>

              <div className="col-lg-4 col-md-6">
                {/* Service Item Start */}
                <div
                  className="service-item wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  {/* Service Image Start */}
                  <div className="service-image">
                    <a href="service-single.html" data-cursor-text="View">
                      <figure className="image-anime">
                        <img src={serviceIMG3} alt="" />
                      </figure>
                    </a>
                  </div>
                  {/* Service Image End */}

                  {/* Service Number Start */}
                  <div className="service-no">
                    <h2>03</h2>
                  </div>
                  {/* Service Number End */}

                  {/* Service Content Start */}
                  <div className="service-content">
                    <h3>
                      <a href="service-single.html">Industrial Services</a>
                    </h3>
                    <p>
                      From new installations to repairs, we ensure your home is
                      safe and fully
                    </p>
                  </div>
                  {/* Service Content End */}
                </div>
                {/* Service Item End */}
              </div>

              <div className="col-lg-4 col-md-6">
                {/* Service Item Start */}
                <div
                  className="service-item wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  {/* Service Image Start */}
                  <div className="service-image">
                    <a href="service-single.html" data-cursor-text="View">
                      <figure className="image-anime">
                        <img src={serviceIMG4} alt="" />
                      </figure>
                    </a>
                  </div>
                  {/* Service Image End */}

                  {/* Service Number Start */}
                  <div className="service-no">
                    <h2>04</h2>
                  </div>
                  {/* Service Number End */}

                  {/* Service Content Start */}
                  <div className="service-content">
                    <h3>
                      <a href="service-single.html">Power Restoration</a>
                    </h3>
                    <p>
                      From new installations to repairs, we ensure your home is
                      safe and fully
                    </p>
                  </div>
                  {/* Service Content End */}
                </div>
                {/* Service Item End */}
              </div>

              <div className="col-lg-4 col-md-6">
                {/* Service Item Start */}
                <div
                  className="service-item wow fadeInUp"
                  data-wow-delay="0.8s"
                >
                  {/* Service Image Start */}
                  <div className="service-image">
                    <a href="service-single.html" data-cursor-text="View">
                      <figure className="image-anime">
                        <img src={serviceIMG5} alt="" />
                      </figure>
                    </a>
                  </div>
                  {/* Service Image End */}

                  {/* Service Number Start */}
                  <div className="service-no">
                    <h2>05</h2>
                  </div>
                  {/* Service Number End */}

                  {/* Service Content Start */}
                  <div className="service-content">
                    <h3>
                      <a href="service-single.html">Circuit Maintenance</a>
                    </h3>
                    <p>
                      From new installations to repairs, we ensure your home is
                      safe and fully
                    </p>
                  </div>
                  {/* Service Content End */}
                </div>
                {/* Service Item End */}
              </div>

              <div className="col-lg-4 col-md-6">
                {/* Service Item Start */}
                <div className="service-item wow fadeInUp" data-wow-delay="1s">
                  {/* Service Image Start */}
                  <div className="service-image">
                    <a href="service-single.html" data-cursor-text="View">
                      <figure className="image-anime">
                        <img src={serviceIMG6} alt="" />
                      </figure>
                    </a>
                  </div>
                  {/* Service Image End */}

                  {/* Service Number Start */}
                  <div className="service-no">
                    <h2>06</h2>
                  </div>
                  {/* Service Number End */}

                  {/* Service Content Start */}
                  <div className="service-content">
                    <h3>
                      <a href="service-single.html">Energy Repairs</a>
                    </h3>
                    <p>
                      From new installations to repairs, we ensure your home is
                      safe and fully
                    </p>
                  </div>
                  {/* Service Content End */}
                </div>
                {/* Service Item End */}
              </div>

              <div className="col-lg-12">
                {/* Section Footer Text Start */}
                <div
                  className="section-footer-text wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <p>
                     For More Information. {" "}
                    <a href="/">Contact us today!</a>
                  </p>
                </div>
                {/* Section Footer Text End */}
              </div>
            </div>
          </div>
        </div>
        {/* Services Menu End */}
      </div>
      {/* Our Services Section End */}
    </>
  );
}
