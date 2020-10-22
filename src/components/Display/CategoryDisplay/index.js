import React from 'react';
import ReactDOM from 'react-dom';
import Style from './style.module.scss';
import PriceSlider from './../../Basic/Filter/Price';
import GenderSelect from './../../Basic/Filter/Gender';
import ColorSelect from './../../Basic/Filter/Color';

class CategoryDisplay extends React.Component {
  constructor() {
    super();

  }
  render() { 
    return ( 
      <>
        <div></div>
        <div>
          <PriceSlider />
          <GenderSelect />
          <ColorSelect />
        </div>
      </>
     );
  }
}
 
export default CategoryDisplay;