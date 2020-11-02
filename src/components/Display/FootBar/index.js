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

class _FootBar extends React.Component {
  render() {
    return (
      <div class={Style.footbar}>
        <div class={Style.footbar__top}>
          <div class={Style.helpLink}>
            <a>Become a member</a>
            <a>Send us feedback</a>
          </div>
          <div class={Style.social}>
            <ul>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faInstagramSquare} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class={Style.footbar__bottom}>
          <p>Australia</p>
          <p class={Style.copyright}>©2020 JR INGENUITY PROJECT</p>
        </div>
      </div>
    );
  }
}

const FootBar = withRouter(_FootBar);

export { FootBar };
