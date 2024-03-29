import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import "./Navbar.css";
import { Link } from "react-scroll";

export function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="app_navbar" id="Navbar">
      <div className="app_logo">
        <img src={images.gericht} alt="app logo" />
      </div>

      <ul className="app_links">
        <Link spy={true} to="Navbar" activeClass="activeClass" smooth={true} style={{textDecorationLine:'none', color:"#fff"}}>
          <li>Home</li>
        </Link>

        <Link spy={true} to="About" smooth={true}>
          <li>About</li>
        </Link>
        <Link spy={true} to="Menu" smooth={true}>
          <li>Menu</li>
        </Link>
        <Link spy={true} to="Awards" smooth={true}>
          <li>Awards</li>
        </Link>
        <Link spy={true} to="Contact" smooth={true}>
          <li>Contact</li>
        </Link>
      </ul>

      {/* login and register  */}
      <div className="app_login">
        <a href="login">Login / Register</a>
        <div /> {/* It is an empty div for a vertical line   */}
        <a href="/" onClick={() => alert("Table booked")}>
          Book Table
        </a>
      </div>
      <div className="app_smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => {
            setToggleMenu(true);
          }}
        />
        {toggleMenu && (
          <div className="app__navbar__smallscreen__overlay flex-center slide-bottom">
            <MdOutlineRestaurantMenu
              onClick={() => {
                setToggleMenu(false);
              }}
              fontSize={27}
              className="overlay__close"
            />

            <ul className="app_smallscreen_links">
              <Link
                spy={true}
                style={{textDecorationLine:'none'}}
                to="Navbar"
                smooth={true}
                onClick={() => {
                  setToggleMenu(false);
                }}
              >
                <li>Home</li>
              </Link>
              <Link
                spy={true}
                to="About"
                smooth={true}
                onClick={() => {
                  setToggleMenu(false);
                }}
              >
                <li>About</li>
              </Link>
              <Link
                spy={true}
                to="Menu"
                smooth={true}
                onClick={() => {
                  setToggleMenu(false);
                }}
              >
                <li>Menu</li>
              </Link>
              <Link
                spy={true}
                to="Awards"
                smooth={true}
                onClick={() => {
                  setToggleMenu(false);
                }}
              >
                <li>Awards</li>
              </Link>
              <Link
                spy={true}
                to="Contact"
                smooth={true}
                onClick={() => {
                  setToggleMenu(false);
                }}
              >
                <li>Contact</li>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
