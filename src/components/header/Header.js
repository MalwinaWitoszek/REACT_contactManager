import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const Header = ({ brand }) => {
  return (
    <nav className="header">
      <span className="header-hamburger">
        <i className="material-icons">menu</i>
      </span>
      <a href="/" className="header-logo">
        {brand}
      </a>
      <ul className="header-nav">
        <li>
          <Link to="/" className="header-nav-link">
            <i className="material-icons">home</i>
          </Link>
        </li>
        <li>
          <Link to="/contact/add" className="header-nav-link">
            Nowy
          </Link>
        </li>
        <li>
          <Link to="/about" className="header-nav-link">
            Info
          </Link>
        </li>
      </ul>
    </nav>
  );
};

Header.defaultProps = {
  brand: "Moja aplikacja"
};

Header.propTypes = {
  brand: PropTypes.string.isRequired
};

export default Header;

// jak dodac js kod do przełącznia menu-hamburger???
// let headerNav=document.querySelector('.header-nav');
// let headerHamburger=document.querySelector('.header-hamburger');

// function toggle(){

//       if(this.classList.contains('active')){
//         headerNav.style.display="none";
//           this.classList.remove('active');
//       }
//       else{
//         headerNav.style.display="flex";
//           this.classList.add('active');

//       }
//   }

// headerHamburger.addEventListener('click',toggle());
