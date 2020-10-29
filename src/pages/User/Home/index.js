import React from 'react';
import {NavBar} from '../../../components/Display/NavBar/index'
// import NavBar from '../../components/Display/NavBar/index';
import Style from './style.module.scss'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';


const product_list = ['./1.png', './2.png', './3.png', './4.png', './5.png'];
// const product_list = ['./1.png'];

function Home() {
  return (
    <React.Fragment>
      <NavBar/>
      {/* <Login/> */}
    </React.Fragment>
  );
}

function DotsMobileStepper() {
  // const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(3);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // this.props.parent.getChildrenMsg(this,activeStep)
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    // this.props.parent.getChildrenMsg(this,activeStep)
    console.log(this.props)
  };

  return (
    <MobileStepper
      variant="dots"
      steps={product_list.length}
      position="static"
      activeStep={activeStep}
      // className={classes.root}
      nextButton={
        <Button size="small" onClick={handleNext} disabled={activeStep === product_list.length}>
          Next
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          Back
        </Button>
      }
    />
  );
}




class Slide extends React.Component {
  constructor(props) { 
    super(props)
    this.state = {
      index: this.props.index,
      // title: this.props.title
    }
  }
  
  getIndex = (event) => { 
    // alert(+event.currentTarget.getAttribute('index')+1)
    this.props.parent.getChildrenMsg(this, (+event.currentTarget.getAttribute('index')+1),
      event.currentTarget.getAttribute('src'),
      this.refs.title.innerHTML,
      this.refs.price.innerHTML,
      )
    this.setState({
      index: (+event.currentTarget.getAttribute('index')+1),
    })
    // alert(this.refs.title.innerHTML)
  }

  // showIndex=()=>{ 
  //   alert(typeof this.state.index)
  // }

  render() {
    return (
      <div className={Style.scroller} >
          {product_list.map((src,index) => { 
            return (<div className={Style.productInfo} index={index} src={src} onMouseMove={this.getIndex}>
              <div  className={Style.productInfo__img_container}><img key={index} src={require(`${src}`)} alt='hhhh' /></div>
              <div  className={Style.productInfo__text_container}>
                <div  className={Style.productInfo__text}>
                  <h3 ref='title'>{index}</h3>
                  <h3>☆☆☆☆☆</h3>
                  <p ref='price'>$280</p>
                  <p>description</p>
                </div>
                <div className={Style.productInfo__addBag}><Button color='primary'><AddIcon/></Button></div>
              </div>
            </div>
          )})}
      </div>
    )
   }
}

class ProductBigBox extends React.Component { 
  constructor(props){
    super(props)
    this.state = {
    }
  }

  // showTitle = () => { 
  //   alert(this.props.title)
  // }

  render() { 
    return (
      <div className={Style.homeContainer__productBigBox} onMouseMove={this.showTitle}>
        {this.props.title}
      </div>     
    )
  }
}


class Homepage extends React.Component { 
  constructor(props) { 
    super(props)
    this.state = {
      product_list : ['./1.png', './2.png', './3.png', './4.png', './5.png'],
      index:1,
      currentImg: './1.png',
      productTitle: '',
      productPrice: '',
    }
  }

  getChildrenMsg = (result, msg, src, title, price) => {
    // console.log(result, msg)
    // 很奇怪这里的result就是子组件那bind的第一个参数this，msg是第二个参数
    this.setState({
      index: msg,
      currentImg: src,
      productTitle: title,
      productPrice: price,
    })
    // alert(this.state.productTitle)
  }

//   showImg = () => {
//     // console.log(result, msg)
//     // 很奇怪这里的result就是子组件那bind的第一个参数this，msg是第二个参数
//     alert(this.state.currentImg)
//     // alert(this.state.index)
// }

  // componentDidMount() { 
  //   setInterval(() => {
  //     let { index } = this.state;
  //     const length = this.state.product_list.length
  //     index += 1;
  //     if (index > length) { index = 1 };
  //     this.setState({index})
  //   }, 5000);
  // }

  componentWillUnmount() { 
    document.getElementById('root');
  }

  // hhh=(event)=>{ 
  //   alert(event.target.nodeName)
  // }

  render() { 
    const totalProducts = this.state.product_list.length
    const { product_list, index, currentImg } = this.state
    // let small_list = product_list.map((item, imgIndex) => {
    //   if ((imgIndex + 1) === index) {
    //     return null;
    //   } else {
    //     return <div className={Style.imgBox}>
    //       <img src={require(`${item}`)} key={imgIndex} className='img'  alt='why'/>
    //     </div>
    //   }
    // })
    return (
      <React.Fragment>
        <Home/>
        <div className={Style.homeContainer} >
          {/* style={{ backgroundImage: `url(${require(`${currentImg}`)})` }} onClick={this.showImg} */}
          <ProductBigBox parent={this} title={this.state.productTitle} price={this.state.productPrice} src={this.state.src}/>
          {/* {(() => {
            return <div>
              
            </div>}
            )()} */}
          <div className={Style.homeContainer__slide}>
            <div><h3>0{index}/0{totalProducts}</h3></div>
            {/* <DotsMobileStepper parent={this}/> */}
            {/* {small_list} */}
            <Slide index={this.state.index} parent={this}/>
          </div>
        </div>

      </React.Fragment>
    )
  }
}


export default Homepage;