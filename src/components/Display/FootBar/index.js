// import React from 'react';
// // import Style from "./style.module.scss";
// import { withRouter } from 'react-router-dom';
// // import ReactDOM from "react-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faTwitter,
//   faFacebook,
//   faInstagramSquare,
// } from '@fortawesome/free-brands-svg-icons';
// import Style from './style.module.scss';

// class _FootBar extends React.Component {
//   render() {
//     return (
//       <div class={Style.footbar}>
//         <div class={Style.footbar__top}>
//           <div class={Style.helpLink}>
//             <a>Become a member</a>
//             <a>Send us feedback</a>
//           </div>
//           <div class={Style.social}>
//             <ul>
//               <li>
//                 <a href="#">
//                   <FontAwesomeIcon icon={faTwitter} />
//                 </a>
//               </li>
//               <li>
//                 <a href="#">
//                   <FontAwesomeIcon icon={faFacebook} />
//                 </a>
//               </li>
//               <li>
//                 <a href="#">
//                   <FontAwesomeIcon icon={faInstagramSquare} />
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div class={Style.footbar__bottom}>
//           <p>Australia</p>
//           <p class={Style.copyright}>©2020 JR INGENUITY PROJECT</p>
//         </div>
//       </div>
//     );
//   }
// }

/*********** New Footer ***********/

import React from 'react';
// import Style from "./style.module.scss";
import { withRouter } from 'react-router-dom';
// import ReactDOM from "react-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebook,
  faInstagramSquare,
} from '@fortawesome/free-brands-svg-icons';
import Style from './style.module.scss';
import PaymentImg from './payment-gray-2020.webp';

class _FootBar extends React.Component {
  render() {
    return (
      <footer id={Style.footer}>
        <div className={Style.footerTop}>
          <ul className={Style.footerMenu}>
            <li className={Style.footerMenuList}>
              <div>GonnaBuy</div>
              <ul className={Style.footerListItem}>
                <li>
                  <a>About Us</a>
                </li>
                <li>
                  <a>Game Index</a>
                </li>
              </ul>
            </li>
            <li className={Style.footerMenuList}>
              <div>Support</div>
              <ul className={Style.footerListItem}>
                <li>
                  <a>Help Center</a>
                </li>
                <li>
                  <a>Contact Us</a>
                </li>
              </ul>
            </li>
            <li className={Style.footerMenuList}>
              <div>Legal</div>
              <ul className={Style.footerListItem}>
                <li>
                  <a>Privacy Policy</a>
                </li>
                <li>
                  <a>Copyright Policy</a>
                </li>
              </ul>
            </li>
          </ul>
          <div className={Style.paymentInfo}>
            <div>Payment Methods</div>
            <img src={PaymentImg} />
          </div>
        </div>
        <div className={Style.footerBottom}>
          <div className={Style.footerBottomInner}>
            <div className={Style.socialIconBox}>
              <ul>
                <li>
                  <a>
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className={Style.socialIcon}
                    />
                  </a>
                </li>
                <li>
                  <a>
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className={Style.socialIcon}
                    />
                  </a>
                </li>
                <li>
                  <a>
                    <FontAwesomeIcon
                      icon={faInstagramSquare}
                      className={Style.socialIcon}
                    />
                  </a>
                </li>
              </ul>
            </div>
            <p className={Style.copyright}>
              Copyright 2020. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

const FootBar = withRouter(_FootBar);

export { FootBar };
