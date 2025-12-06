import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/client/assets/img/logo.png"; // đường dẫn alias Vite

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="row">
          
          {/* Logo */}
          <div className="col-lg-2 col-md-2">
            <div className="header__logo">
              <Link to="/">
                <img src={logo} alt="Logo" />
              </Link>
            </div>
          </div>

          {/* Nav */}
          <div className="col-lg-10 col-md-10">
            <div className="header__nav">

              {/* Mobile button */}
              <button 
                className="mobile-menu-btn"
                onClick={() => setOpen(!open)}
              >
                <i className="fa fa-bars"></i>
              </button>

              <nav className={`header__menu ${open ? "active" : ""}`}>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/discography">Discography</Link></li>
                  <li><Link to="/tours">Tours</Link></li>
                  <li><Link to="/videos">Videos</Link></li>

                  {/* Dropdown */}
                  <li className="has-dropdown">
                    <button className="dropdown-btn">Pages</button>
                    <ul className="dropdown">
                      <li><Link to="/about">About</Link></li>
                      <li><Link to="/blog">Blog</Link></li>
                      <li><Link to="/blog-details">Blog Details</Link></li>
                    </ul>
                  </li>

                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </nav>

              {/* Social icons */}
              <div className="header__right__social">
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-instagram"></i></a>
                <a href="#"><i className="fa fa-dribbble"></i></a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;
