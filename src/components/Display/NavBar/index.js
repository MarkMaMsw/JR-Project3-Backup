// import React, { useState } from 'react';
// // import Style from "./style.module.scss";
// import { withRouter } from 'react-router-dom';
// // import ReactDOM from "react-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
// import Style from './style.module.scss';

// const BlurBackgroundHover = props => {
//   return (
//     <div
//       className={props.isHover ? Style.blurMaskHover : Style.blurMaskUnHover}
//     ></div>
//   );
// };

// const BlurBackground = props => {
//   return (
//     <div
//       className={
//         props.open
//           ? [Style.blurMask, Style.blurMaskOpen].join(' ')
//           : [Style.blurMask, Style.blurMaskClosed].join(' ')
//       }
//     ></div>
//   );
// };

// const RenderNavLinks = props => {
//   return (
//     <div
//       className={
//         props.open
//           ? [Style.menu__section, Style.menuSectionOpen].join(' ')
//           : [Style.menu__section, Style.menuSectionClosed].join(' ')
//       }
//     >
//       <ul className={Style.menuList}>
//         <li
//           id={Style.menuOne}
//           // onMouseEnter={() => props.setIsHover(!props.isHover)}
//           // onMouseLeave={() => props.setIsHover(props.isHover)}
//         >
//           <a class={Style.menuLink}>Most Popular</a>
//           <div id={Style.subMenuOne} className={Style.subMenuWrapper}>
//             <ul className={Style.subMenuList}>
//               <li>
//                 <a>Lifestyle</a>
//               </li>
//               <li>
//                 <a>Running</a>
//               </li>
//               <li>
//                 <a>Basketball</a>
//               </li>
//             </ul>
//           </div>
//         </li>
//         <li id={Style.menuTwo}>
//           <a class={Style.menuLink}>Men</a>
//           <div id={Style.subMenuTwo} className={Style.subMenuWrapper}>
//             <ul className={Style.subMenuList}>
//               <li>
//                 <a>Lifestyle</a>
//               </li>
//               <li>
//                 <a>Running</a>
//               </li>
//               <li>
//                 <a>Basketball</a>
//               </li>
//             </ul>
//           </div>
//         </li>
//         <li id={Style.menuThree}>
//           <a class={Style.menuLink}>Women</a>
//           <div id={Style.subMenuThree} className={Style.subMenuWrapper}>
//             <ul className={Style.subMenuList}>
//               <li>
//                 <a>Lifestyle</a>
//               </li>
//               <li>
//                 <a>Running</a>
//               </li>
//               <li>
//                 <a>Basketball</a>
//               </li>
//             </ul>
//           </div>
//         </li>
//       </ul>
//       <div className={Style.joinMessage}>
//         Become our member for the best products, inspiration and stories in
//         Sports.
//         <a> Learn more</a>
//       </div>
//     </div>
//   );
// };

// const ShowBurgerMenu = props => {
//   return (
//     <button
//       className={Style.burgerMenu}
//       onClick={() => props.setOpen(!props.open)}
//     >
//       <FontAwesomeIcon icon={faBars} />
//     </button>
//   );
// };

// function _NavBar() {
//   const [open, setOpen] = useState(false);
//   // const [isHover, setIsHover] = useState(false);

//   return (
//     <div>
//       {/* <BlurBackgroundHover isHover={isHover} /> */}
//       <div className={Style.blurMaskHoverTry}></div>
//       <div className={Style.navbar}>
//         <BlurBackground open={open} />
//         <div className={Style.navbar__top}>
//           <div className={Style.navbar__top__item}>Join Us</div>
//           <span className={Style.navbar__top__divider}>|</span>
//           <div className={Style.navbar__top__item}>Sign In</div>
//         </div>
//         <div className={Style.navbar__bottom}>
//           <div className={Style.logo__section}>
//             <img src="favicon.ico" className={Style.logo} />
//           </div>
//           <RenderNavLinks
//             open={open}
//             // isHover={isHover}
//             // setIsHover={setIsHover}
//           />
//           <div className={Style.icon__section}>
//             <ShowBurgerMenu open={open} setOpen={setOpen} />
//             <a>
//               <FontAwesomeIcon icon={faShoppingBag} />
//             </a>
//           </div>
//         </div>
//         <div className={Style.banner__section}></div>
//       </div>
//     </div>
//   );
// }

/********** New NavBar ***********/

import React from 'react';
import Style from './style.module.scss';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faUserCircle } from '@fortawesome/free-solid-svg-icons';

function _NavBar() {
  return (
    <header>
      <div className={Style.outerWrapper}>
        <div className={Style.innerWrapper}>
          <div className={Style.logoSection}>
            <a>
              <img
                src="favicon.ico"
                alt="GonnaBuy"
                className={Style.logoImage}
              />
              <span>GonnaBuy</span>
            </a>
          </div>
          <div className={Style.searchSection}>
            <div className={Style.searchSectionInner}>
              <div className={Style.dropdownGroup}>
                <label
                  className={[Style.dropdownToggle, Style.dropdownBtn].join(
                    ' '
                  )}
                >
                  Games<span> ▾ </span>
                </label>
                <div className={Style.dropdownContent}>
                  <ul className={Style.dropdownList}>
                    <li className={Style.dropdownItem}>
                      <label className={Style.dropdownLabel}>
                        <FontAwesomeIcon
                          icon={faUserCircle}
                          className={Style.dropdownIcon}
                        />
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
              <span className={Style.searchSectionDivider}></span>
              <div className={Style.searchGroup}>
                <label
                  for="search-input"
                  aria-label="search-input"
                  className={Style.searchInputLabel}
                >
                  <FontAwesomeIcon icon={faGamepad} className={Style.gamepad} />
                </label>

                <input
                  id="search-input"
                  className={Style.searchInput}
                  type="text"
                  aria-label="search"
                  placeholder="Find your games..."
                />
              </div>
            </div>
          </div>
          <div className={Style.accountSection}>
            <div className={Style.accountPanel}>
              <a href="#" className={Style.btnLogin}>
                LOG IN
              </a>
              <a href="#" className={Style.btnSignup}>
                SIGN UP
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

const NavBar = withRouter(_NavBar);

export { NavBar };
