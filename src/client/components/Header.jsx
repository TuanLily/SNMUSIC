// import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Breadcrumb from "@/client/components/Breadcrumb";
// import logo from "@/client/assets/img/logo.png"; // đường dẫn alias Vite

function Header({ showBreadcrumb = false, breadcrumbMap = {}, breadcrumbItems }) {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const headerStyle = { position: "sticky", top: 0, zIndex: 1030 };

  return (
    <header
      className="header header--normal sticky-top shadow-sm"
      style={headerStyle}
    >
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark px-0 header__nav">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            {/* <img src={logo} alt="Logo" height="40" className="me-2" /> */}
            <span className="fw-semibold">SNMUSIC</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setExpanded((prev) => !prev)}
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className={`collapse navbar-collapse${expanded ? " show" : ""}`}>
            <div className="header__menu ms-auto mb-2 mb-lg-0">
              <ul>
                <li>
                  <Link
                    className={`nav-link nav-link-underline${isActive("/") ? " nav-link-active" : ""}`}
                    to="/"
                    onClick={() => setExpanded(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className={`nav-link nav-link-underline${isActive("/library") ? " nav-link-active" : ""}`}
                    to="/library"
                    onClick={() => setExpanded(false)}
                  >
                    Library
                  </Link>
                </li>
                <li>
                  <Link
                    className={`nav-link nav-link-underline${isActive("/videos") ? " nav-link-active" : ""}`}
                    to="/videos"
                    onClick={() => setExpanded(false)}
                  >
                    Videos
                  </Link>
                </li>
                <li>
                  <Link
                    className={`nav-link nav-link-underline${isActive("/contact") ? " nav-link-active" : ""}`}
                    to="/contact"
                    onClick={() => setExpanded(false)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="header__right__social ms-lg-3">
              <a href="#" aria-label="Facebook">
                <i className="fa fa-facebook" />
              </a>
              <a href="#" aria-label="Twitter">
                <i className="fa fa-twitter" />
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fa fa-instagram" />
              </a>
              <a href="#" aria-label="Dribbble">
                <i className="fa fa-dribbble" />
              </a>
            </div>
          </div>
        </nav>
        {showBreadcrumb && (
          <div className="pt-2">
            <Breadcrumb mapLabels={breadcrumbMap} items={breadcrumbItems} />
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
