import React, { Fragment, useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import css from "../Navbar.module.css";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [transitionNavbar, setTransitionNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 150) {
      setTransitionNavbar(true);
    } else {
      setTransitionNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <Fragment>
      <div className={css.page}>
        <nav
          className={transitionNavbar? `${css.navbar} ${css.active}` : `${css.navbar}`}
        >
          <h1>
            Downtown<span>.</span>
          </h1>
          <div
            className={menu ? `${css.menu} ${css.mobilemenu}` : `${css.menu}`}
          >
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <a href="/">agents</a>
              </li>
              <li>
                <a href="/">About Us</a>
              </li>
            </ul>
            <div className={css.btn}>
              <a href="#">Add Property</a>
            </div>
          </div>
          <HiOutlineMenu onClick={() => setMenu(!menu)} className={css.icon} />
        </nav>
      </div>
    </Fragment>
  );
};

export default Navbar;
