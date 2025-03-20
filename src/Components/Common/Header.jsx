import logo from "../../assets/images/logo.svg";
import phone from "../../assets/images/icon-phone.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="main-header">
        <div className="header-sticky">
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              {/* Logo Start */}
              <a className="navbar-brand" href="./">
                <img src={logo} alt="Logo" />
              </a>
              {/* Logo End */}

              {/* Main Menu Start */}
              <div className="collapse navbar-collapse main-menu">
                <div className="nav-menu-wrapper">
                  <ul className="navbar-nav mr-auto" id="menu">
                    <li className="nav-item">
                      <Link className="nav-link" to="/">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/">
                        About Us
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/">
                        Services
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Header Contact Btn Start */}
                <div className="header-contact-btn">
                  <Link to="tel:123456789" className="header-contact-now">
                    <img src={phone} alt="" />
                    (123) 456 - 789
                  </Link>
                  <Link to="/" className="btn-default">
                    book now
                  </Link>
                </div>
                {/* Header Contact Btn End */}
              </div>
              {/* Main Menu End */}
              <div className="navbar-toggle"></div>
            </div>
          </nav>
          <div className="responsive-menu"></div>
        </div>
      </header>
    </>
  );
}
