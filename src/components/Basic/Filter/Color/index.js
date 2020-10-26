import React from 'react';

import FiberManualRecordRoundedIcon from '@material-ui/icons/FiberManualRecordRounded';
import { IconButton } from '@material-ui/core';
import Style from './style.module.scss';

function ColorSelect() {
const colors = ["#F1F1F1", "#CBCBCB", "#EAE1BE","FFD632", "D9AF01", "7DBA3D", "1990CB", "DA2A91", "7F8004", "E7352B", "777777", "825E42", "121212", "F6A522", "6F6F6F"];


return(
  <div className={Style.container}>
    <h3 className={Style.title}>Color</h3>
    {colors.map((color) => 
      <IconButton>
        <FiberManualRecordRoundedIcon 
          style={{color: color}}/>
      </IconButton>
    )}
  </div>
)


}

export default ColorSelect;

