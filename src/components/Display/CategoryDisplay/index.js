import React from 'react';
import ReactDOM from 'react-dom';
import Style from './style.module.scss';
import PriceSlider from './../../Basic/Filter/Price';
import GenderSelect from './../../Basic/Filter/Gender';
import ColorSelect from './../../Basic/Filter/Color';
import Grid from '@material-ui/core/Grid';
import CategorySquareCard1 from './../CategorySquareCard1';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CancelIcon from '@material-ui/icons/Cancel';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';


class CategoryDisplay extends React.Component {
  constructor() {
    super();
    this.state = {
      mobileOpen: false
    }
  }


  handleDrawerToggle = () => {
    this.setState({mobileOpen: true})
  };

  handleDrawerClose = (e) => {
    this.setState({mobileOpen: false})
  }


  setContainer = () => {
    const container = window !== undefined ? () => window().document.body : undefined;
    return container;
  }

  render() { 
    
    return ( 
      <div>
        <Grid className={Style.container} container spacing={2}>
          {/* filter drawer for screen below xs */}
          <Hidden smUp implementation="css">
            <Drawer
              // container={this.setContainer()}
              variant="temporary"
              anchor='left'
              open={this.state.mobileOpen}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={this.handleDrawerClose}
                className={Style.menuButton}
                >
                <CancelIcon />
              </IconButton>
              <PriceSlider />
              <GenderSelect />
              <ColorSelect />
            </Drawer>
          </Hidden>

          
          <Grid className={Style.side} item sm={3}>
          <Hidden xsDown implementation="css">
            {/* <Drawer
              variant="permanent"
              open
            >
           */}
          <h3 className={Style.side__title}>Lifestyle (3)</h3>
              <PriceSlider />
              <GenderSelect />
              <ColorSelect />
             
            {/* </Drawer> */}
            </Hidden>
            </Grid>
          

         
          <Grid className={Style.main} item xs={12} sm={9}>
            <h2 className={Style.main__title}>3 Lifestyle Sneakers</h2>
            <Hidden mdUp>
              <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={this.handleDrawerToggle}
              className={Style.menuButton}
              >
              <MenuIcon />
            </IconButton>
          </Hidden>



            <Grid container>
              <CategorySquareCard1 
                name = "Ultraboost 20 Shoes"
                imgPath={require("../../../images/shoes/ultraboost-20-shoes.png")}
                price = "340"
                rate = "3.4"
                numofColor = "8"
              />
              <CategorySquareCard1 
                name = "Ultraboost 20 Shoes"
                imgPath={require("../../../images/shoes/ultraboost-20-shoes.png")}
                price = "340"
                rate = "3.4"
                numofColor = "8"
              />
              <CategorySquareCard1 
                name = "Ultraboost 20 Shoes"
                imgPath={require("../../../images/shoes/ultraboost-20-shoes.png")}
                price = "340"
                rate = "3.4"
                numofColor = "8"
              />
              <CategorySquareCard1 
                name = "Ultraboost 20 Shoes"
                imgPath={require("../../../images/shoes/ultraboost-20-shoes.png")}
                price = "340"
                rate = "3.4"
                numofColor = "8"
              />
              <CategorySquareCard1 
                name = "Ultraboost 20 Shoes"
                imgPath={require("../../../images/shoes/ultraboost-20-shoes.png")}
                price = "340"
                rate = "3.4"
                numofColor = "8"
              />
            </Grid>
          </Grid>
        </Grid>
      </div>
     );
  }
}
 
export default CategoryDisplay;