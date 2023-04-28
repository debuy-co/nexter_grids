import React from "react";

function Footer() {
  return (
    <footer className="footer">
      {/*if we have an "li" element than it shall always be contained into an "ul" element*/}
      <ul className="nav">
        <li className="nav__item">
          <a href="#1" className="nav__link">
            Footer link
          </a>
        </li>
        <li className="nav__item">
          <a href="#1" className="nav__link">
            Footer link
          </a>
        </li>
        <li className="nav__item">
          <a href="#1" className="nav__link">
            Footer link
          </a>
        </li>
        <li className="nav__item">
          <a href="#1" className="nav__link">
            Footer link
          </a>
        </li>
        <li className="nav__item">
          <a href="#1" className="nav__link">
            Footer link
          </a>
        </li>
      </ul>
      <p className="copyright">Made in China &copy;</p>
    </footer>
  );
}

export default Footer;
