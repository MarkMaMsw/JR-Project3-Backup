import React from 'react';
import Slider from '@material-ui/core/Slider';
import Style from './style.module.scss';
import ReactDOM from "react-dom";
import { makeStyles } from '@material-ui/core/styles';


// const useStyles = makeStyles({
//   root: {
//     width: 150,
//     color: "red",
//   },
// })


function valuetext(value) {
  return `${value}C`
}

function PriceSlider() {
  // const classes = useStyles();
  const [value, setValue] = React.useState([0, 500]);

  const updateRange = (e, newValue) => {
    setValue(newValue);
  }

  return (
      <div className={Style.container}>
      <h3 className={Style.title}>Price</h3>
      <Slider 
        className={Style.slider}
        value={value}
        onChange={updateRange}
        valueLabelDisplay='on'
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        max={1000}
      />
    </div>
  )
}


// class PriceSlider extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       value: [100, 1000],
//     }

//   }

//   updateRange = (newValue) => {
//     this.setState({
//       value: newValue
//     })
//   }



//   render() {
//     const { value, updateRange } = this.state;
//     return(
//       <div ref={this.container} className={Style.container}>
//         <h3>Price</h3>
//           <Slider 
//               value={value}
//               onChange={updateRange}
//               valueLabelDisplay='auto'
//               aria-labelledby="range-slider"
//               // getAriaLabel={valuetext}
//               max={1000}
//           />
//     </div>)
//   }
// }

export default PriceSlider;