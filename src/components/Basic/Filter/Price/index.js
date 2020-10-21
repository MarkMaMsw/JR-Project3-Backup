import React from 'react';
import Slider from '@material-ui/core/Slider';


function valuetext(value) {
  return `${value}C`
}

function PriceSlider() {
  const [value, setValue] = React.useState([0, 500]);

  const updateRange = (e, newValue) => {
    setValue(newValue);
  }

  return (
    <div>
      <h3>Price</h3>
      <Slider 
        value={value}
        onChange={updateRange}
        valueLabelDisplay='auto'
        // aria-labelledby="range-slider"
        // getAriaLabel={valuetext}
        max={1000}
      />
    </div>
  )
}

export default PriceSlider;