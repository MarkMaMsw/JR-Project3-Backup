import React from 'react';

import FiberManualRecordRoundedIcon from '@material-ui/icons/FiberManualRecordRounded';

function ColorSelect() {
const colors = ["red", "green", "white"];


return(
  <div>
    {colors.map((color) => 
      <FiberManualRecordRoundedIcon 
        style={{color: color}}
      />)}
{/* 
    <FiberManualRecordRoundedIcon color='primary' /> */}
  </div>
)


}

export default ColorSelect;

