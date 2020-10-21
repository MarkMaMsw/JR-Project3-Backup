import React from 'react';
import ReactDOM from 'react-dom';
import Style from './style.module.scss';
import PriceSlider from './../../Basic/Filter/Price';

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
        </div>
      </>
     );
  }
}
 
export default CategoryDisplay;