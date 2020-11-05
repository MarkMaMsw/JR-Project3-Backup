<<<<<<< HEAD
import React from 'react';
import { NavBar } from '../../../components/Display/NavBar';
import Style from './style.module.scss';

function Home() {
  return (
    <div>
      <NavBar />
      <div>Home</div>
    </div>
  );
}

export default Home;
=======
// import React from 'react';
// import {NavBar} from '../../../components/Display/NavBar/index'
// // import NavBar from '../../components/Display/NavBar/index';
// import Style from './style.module.scss'
// import Button from '@material-ui/core/Button';
// import AddIcon from '@material-ui/icons/Add';
// import { useTheme } from '@material-ui/core/styles';
// import MobileStepper from '@material-ui/core/MobileStepper';
// import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
// import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
// import {MainRectangleCard1} from '../../../components/Display/MainRectangleCard1/index.js';
// import {ProductRectangleCard2} from '../../../components/Display/ProductRectangleCard2/index.js';
// import Grid from '@material-ui/core/Grid';


// // function DotsMobileStepper() {
// //   // const classes = useStyles();
// //   const theme = useTheme();
// //   const [activeStep, setActiveStep] = React.useState(3);

// //   const handleNext = () => {
// //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
// //     // this.props.parent.getChildrenMsg(this,activeStep)
// //   };

// //   const handleBack = () => {
// //     setActiveStep((prevActiveStep) => prevActiveStep - 1);
// //     // this.props.parent.getChildrenMsg(this,activeStep)
// //     console.log(this.props)
// //   };

// //   return (
// //     <MobileStepper
// //       variant="dots"
// //       steps={product_list.length}
// //       position="static"
// //       activeStep={activeStep}
// //       // className={classes.root}
// //       nextButton={
// //         <Button size="small" onClick={handleNext} disabled={activeStep === product_list.length}>
// //           Next
// //           {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
// //         </Button>
// //       }
// //       backButton={
// //         <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
// //           {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
// //           Back
// //         </Button>
// //       }
// //     />
// //   );
// // }

// // class Slide extends React.Component {
// //   constructor(props) { 
// //     super(props)
// //     this.state = {
// //       index: this.props.index,
// //       // title: this.props.title
// //     }
// //   }

// //   render() {
// //     return (
// //       <div className={Style.scroller} >
// //           {product_list.map((src,index) => { 
// //             return (<div className={Style.productInfo} index={index} src={src} onMouseMove={this.getIndex}>
// //               <div  className={Style.productInfo__img_container}><img key={index} src={require(`${src}`)} alt='hhhh' /></div>
// //               <div  className={Style.productInfo__text_container}>
// //                 <div  className={Style.productInfo__text}>
// //                   <h3 ref='title'>{index}</h3>
// //                   <h3>☆☆☆☆☆</h3>
// //                   <p ref='price'>$280</p>
// //                   <p>description</p>
// //                 </div>
// //                 <div className={Style.productInfo__addBag}><Button color='primary'><AddIcon/></Button></div>
// //               </div>
// //             </div>
// //           )})}
// //       </div>
// //     )
// //    }
// // }

// // class ProductBigBox extends React.Component { 
// //   constructor(props){
// //     super(props)
// //     this.state = {
// //     }
// //   }

// //   render() { 
// //     return (
// //       <div className={Style.homeContainer__productBigBox} onMouseMove={this.showTitle}>
// //         {this.props.title}
// //       </div>     
// //     )
// //   }
// // }


// class Homepage extends React.Component { 
//   constructor(props) { 
//     super(props)
//     this.state = {
//       index: 0,
//       path: '',
//       name: '',
//       price: '',
//     }
//   }

//   getChildrenMsg = (result, index, src, name, price) => {
//     // console.log(result, msg)
//     // 很奇怪这里的result就是子组件那bind的第一个参数this，msg是第二个参数
//     this.setState({
//       index: index,
//       path: src,
//       name: name,
//       price: price,
//     })
//   }


// componentWillMount() { 
//   this.setState({
//     index: 1,
//     path: require("../../../images/shoes/4d-run-1.0-parley-shoes.png"),
//     name: "Nike Blazer Mid",
//     price: 100,
//   })
// }

// componentDidMount() { 
//   this.timer = setInterval(() => {
//     let { index } = this.state;
//     index += 1;
//     if (index === 6) { index = 1 };
//     this.setState({
//       index: index,
//       path: this.refs[index].props.imgPath,
//       name: this.refs[index].props.name,
//       price: this.refs[index].props.price,
//     })
//   }, 5000);
// }

//   componentWillUnmount() { 
//     clearInterval(this.timer);
//   }

//   render() { 
//     return (
//       <React.Fragment>
//         <NavBar />
//         <div className={Style.homeContainer} >
//           <div className={Style.homeContainer__productContainer}>
//             <div className={Style.homeContainer__imgContainer} >
//                 <img src={require('./BackImg.jpg')} alt="error"/>
//             </div>
//             <div  className={Style.homeContainer__cardContainer}>
//             {/* <MainRectangleCard1 name={'NIke Blazer MID'} imgPath={require('../../../images/shoes/zx-2k-4d-shoes.png')} price='260'/> */}
//               <MainRectangleCard1 parent={this} index={this.state.index} name={this.state.name} imgPath={this.state.path} price={this.state.price}/>
//             </div>
//           </div>
//           {/* <div className={Style.list}><h3>0{index}/0{totalProducts}</h3></div> */}
//           <div className={Style.homeContainer__slide}>
//           <ProductRectangleCard2 ref={1} index={1} parent={this} name = "Nike Blazer Mid" imgPath={require("../../../images/shoes/4d-run-1.0-parley-shoes.png")} price = "100" rate = "3.4" numofColor = "4"/>
//           <ProductRectangleCard2 ref={2} index={2} parent={this} name = "Blue Bag Awesome" imgPath={require("../../../images/shoes/ultraboost-20-shoes.png")} price = "200" rate = "3.4" numofColor = "4"/>
//           <ProductRectangleCard2 ref={3} index={3} parent={this} name = "White Bag Awesome" imgPath={require("../../../images/shoes/zx-2k-4d-shoes.png")} price = "300" rate = "3.4" numofColor = "4"/>
//           <ProductRectangleCard2 ref={4} index={4} parent={this} name = "Black Bag Awesome" imgPath={require("../../../images/shoes/4d-run-1.0-parley-shoes.png")} price = "400" rate = "3.4" numofColor = "4"/>
//           <ProductRectangleCard2 ref={5} index={5} parent={this} name = "Black Bag Awesome" imgPath={require("../../../images/shoes/4d-run-1.0-parley-shoes.png")} price = "400" rate = "3.4" numofColor = "4"/>
//           </div>
//            {/* <Grid container spacing={2}>
//         <Grid item xs={12} sm={6} md={6} lg={4}>
//         <ProductRectangleCard2 ref={1} index={1} parent={this} name = "Nike Blazer Mid" imgPath={require("../../../images/shoes/4d-run-1.0-parley-shoes.png")} price = "100" rate = "3.4" numofColor = "4"/>
//         </Grid>
//         <Grid item xs={12} sm={6} md={6} lg={4}>
//         <ProductRectangleCard2 ref={2} index={2} parent={this} name = "Blue Bag Awesome" imgPath={require("../../../images/shoes/ultraboost-20-shoes.png")} price = "200" rate = "3.4" numofColor = "4"/>
//         </Grid>
//         <Grid item xs={12} sm={6} md={6} lg={4}>
//         <ProductRectangleCard2 ref={3} index={3} parent={this} name = "White Bag Awesome" imgPath={require("../../../images/shoes/zx-2k-4d-shoes.png")} price = "300" rate = "3.4" numofColor = "4"/>
//         </Grid>
//         <Grid item xs={12} sm={6} md={6} lg={6}>
//         <ProductRectangleCard2 ref={4} index={4} parent={this} name = "Black Bag Awesome" imgPath={require("../../../images/shoes/4d-run-1.0-parley-shoes.png")} price = "400" rate = "3.4" numofColor = "4"/>
//         </Grid>
//         <Grid item xs={12} sm={6} md={6} lg={6}>
//         <ProductRectangleCard2 ref={5} index={5} parent={this} name = "Black Bag Awesome" imgPath={require("../../../images/shoes/4d-run-1.0-parley-shoes.png")} price = "400" rate = "3.4" numofColor = "4"/>
//         </Grid>
//       </Grid> */}
//         </div>

//       </React.Fragment>
//     )
//   }
// }


// export default Homepage;

import React from 'react'
import HomepageImg from './nike-homepage.png'
import Style from './style.module.scss'
import ControlledCarousel from '../../../components/Display/ControlledCarousel'


class Homepage extends React.Component {

//read from database later
homepageProducts = [
  {
    name: "Nike Blazer Mid",
    imgPath: require("../../../images/shoes/4d-run-1.0-parley-shoes.png"),
    price: "100",
    rate: "3.4",
    numofColor: "4"
  },

  {
    name: "Nike Blazer Mid",
    imgPath: require("../../../images/shoes/4d-run-1.0-parley-shoes.png"),
    price: "100",
    rate: "3.4",
    numofColor: "4"
  },

  {
    name: "White Bag Awesome",
    imgPath: require("../../../images/shoes/zx-2k-4d-shoes.png"),
    price: "300",
    rate: "3.4",
    numofColor: "4"
  },

  {
    name: "Nike Blazer Mid",
    imgPath: require("../../../images/shoes/4d-run-1.0-parley-shoes.png"),
    price: "100",
    rate: "3.4",
    numofColor: "4"
  },

  {
    name: "Blue Bag Awesome",
    imgPath: require("../../../images/shoes/ultraboost-20-shoes.png"),
    price: "200",
    rate: "3.4",
    numofColor: "4"
  },
  {
    name: "Blue Bag Awesome",
    imgPath: require("../../../images/shoes/ultraboost-20-shoes.png"),
    price: "200",
    rate: "3.4",
    numofColor: "4"
  },
  {
    name: "White Bag Awesome",
    imgPath: require("../../../images/shoes/zx-2k-4d-shoes.png"),
    price: "300",
    rate: "3.4",
    numofColor: "4"
  },
  {
    name: "White Bag Awesome",
    imgPath: require("../../../images/shoes/zx-2k-4d-shoes.png"),
    price: "300",
    rate: "3.4",
    numofColor: "4"
  }

]

  constructor() {
    super()
  }

  render() {
    return <>
      <div className={Style.homeContainer}>
        <div className={Style.homeContainer__homeImgContainer}>
          <img src={HomepageImg} alt={'Homepage'}></img>
        </div>
        <div className={Style.homeContainer__sloganContainer}>
          <h1>FIND THE MOST LOVED</h1>
          <h2>Our most popular and loved shoes for every styling, runing and sports.</h2>
        </div>
        <div className={Style.homeContainer__carouselContainer}>
          <h3>Most Popular</h3>
          <ControlledCarousel items={this.homepageProducts}/>
        </div>
      </div>

    </>
  }
}

export default Homepage
>>>>>>> 2cb1d6ceed889e67abb4e7716e7faa833b8c8e21
