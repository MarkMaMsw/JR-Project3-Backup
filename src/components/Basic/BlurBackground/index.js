import React from 'react';
import Style from './style.module.scss';

function BlurBackground(props) {
  return <div className={Style.blurBackground}>{props.children}</div>;
}

export default BlurBackground;
