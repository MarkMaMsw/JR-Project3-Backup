import React, { useState } from 'react';
// import Style from "./style.module.scss";
import { withRouter } from 'react-router-dom';
// import ReactDOM from "react-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import Style from './style.module.scss';

const RenderNavLinks = props => {
  return (
    <ul
      className={
        props.open
          ? [Style.navLinks, Style.navLinksOpen].join(' ')
          : [Style.navLinks, Style.navLinksClosed].join(' ')
      }
    >
      <li id={Style.menuOne}>
        <a class={Style.menuLink}>Most Popular</a>
        <div id={Style.subMenuOne} className={Style.subMenuWrapper}>
          <ul className={Style.subMenuItem}>
            <li>
              <a>Lifestyle</a>
            </li>
            <li>
              <a>Running</a>
            </li>
            <li>
              <a>Basketball</a>
            </li>
          </ul>
        </div>
      </li>
      <li id={Style.menuTwo}>
        <a class={Style.menuLink}>Men</a>
        <div id={Style.subMenuTwo} className={Style.subMenuWrapper}>
          <ul className={Style.subMenuItem}>
            <li>
              <a>Lifestyle</a>
            </li>
            <li>
              <a>Running</a>
            </li>
            <li>
              <a>Basketball</a>
            </li>
          </ul>
        </div>
      </li>
      <li id={Style.menuThree}>
        <a class={Style.menuLink}>Women</a>
        <div id={Style.subMenuThree} className={Style.subMenuWrapper}>
          <ul className={Style.subMenuItem}>
            <li>
              <a>Lifestyle</a>
            </li>
            <li>
              <a>Running</a>
            </li>
            <li>
              <a>Basketball</a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  );
};

const ShowBurgerMenu = props => {
  return (
    <button
      className={Style.burgerMenu}
      onClick={() => props.setOpen(!props.open)}
    >
      <FontAwesomeIcon icon={faBars} />
    </button>
  );
};

function _NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <div className={Style.navbar}>
      <div className={Style.navbar__top}>
        <div className={Style.navbar__top__item}>Join Us</div>
        <span className={Style.navbar__top__divider}>|</span>
        <div className={Style.navbar__top__item}>Sign In</div>
      </div>
      <div className={Style.navbar__bottom}>
        <div className={Style.logo}>
          <img src="favicon.ico" className={Style.logo__image} />
        </div>
        <RenderNavLinks open={open} />
        <div className={Style.navIcons}>
          <ShowBurgerMenu open={open} setOpen={setOpen} />
          <a>
            <FontAwesomeIcon icon={faShoppingBag} />
          </a>
        </div>
      </div>
      <div className={Style.banner}></div>
    </div>
  );
}

const NavBar = withRouter(_NavBar);

export { NavBar };
