import location from "../../assets/images/icon-location.svg";
import mail from "../../assets/images/icon-mail.svg";

export default function Topbar() {
  return (
    <>
      <div className="topbar">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-9">
              {/* Topbar Contact Information Start */}
              <div className="topbar-contact-info">
                <ul>
                  <li>
                    <img src={location} alt="" />
                    25 Jump St, NY 1001
                  </li>
                  <li>
                    <a href="mailto:info@domainname.com">
                      <img src={mail} alt="" />
                      info@domainname.com
                    </a>
                  </li>
                </ul>
              </div>
              {/* Topbar Contact Information End */}
            </div>

            <div className="col-md-3">
              {/* Topbar Social Links Start */}
              <div className="topbar-social-links">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-dribbble"></i>
                    </a>
                  </li>
                </ul>
              </div>
              {/* Topbar Social Links End */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
