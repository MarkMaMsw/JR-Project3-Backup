import React from 'react';
import ReactDOM from 'react-dom';
import Style from './style.module.scss';
import PriceSlider from './../../Basic/Filter/Price';
import GenderSelect from './../../Basic/Filter/Gender';
import ColorSelect from './../../Basic/Filter/Color';
import { ProductCardMode1 } from "./../ProductCardMode1";
import Grid from '@material-ui/core/Grid';
import FakeCard from '../../Basic/Filter/FakeCard';

class CategoryDisplay extends React.Component {
  constructor() {
    super();

  }
  render() { 
    return ( 
      <div className={Style.root}>
        <Grid className={Style.container} container spacing={2}>
          <Grid item sm={3}>
          <h3 className={Style.side__title}>Lifestyle (3)</h3>
            <div>
              <PriceSlider />
              <GenderSelect />
              <ColorSelect />
            </div>
          </Grid>
          <Grid item sm={9}>
            <h2 className={Style.main__title}>3 Lifestyle Sneakers</h2>
            <Grid container>
              <Grid className={Style.main__product} xs={12} sm={6} md={4}>
                <FakeCard
                  name="Ultraboost 20 Shoes"
                  imgURL={require("./../../../images/shoes/ultraboost-20-shoes.png")}
                  imgAlt="Ultraboost 20 Shoes"
                  price="$220"
                />
              </Grid>
              <Grid className={Style.main__product} xs={12} sm={6} md={4}>
                <FakeCard 
                  name="ZX 2K 4D Shoes"
                  imgURL={require("./../../../images/shoes/zx-2k-4d-shoes.png")}
                  imgAlt="ZX 2K 4D Shoes"
                  price="$320"
                />
              </Grid>
              <Grid className={Style.main__product} xs={12} sm={6} md={4}>
                <FakeCard 
                  name="4D RUN 1.0 Parley Shoes"
                  imgURL={require("./../../../images/shoes/4d-run-1.0-parley-shoes.png")}
                  imgAlt="4D RUN 1.0 Parley Shoes"
                  price="$220"
                />
              </Grid>
              <Grid className={Style.main__product} xs={12} sm={6} md={4}>
                <FakeCard
                  name="Ultraboost 20 Shoes"
                  imgURL={require("./../../../images/shoes/ultraboost-20-shoes.png")}
                  imgAlt="Ultraboost 20 Shoes"
                  price="$220"
                />
              </Grid>
              <Grid className={Style.main__product} xs={12} sm={6} md={4}>
                <FakeCard 
                  name="ZX 2K 4D Shoes"
                  imgURL={require("./../../../images/shoes/zx-2k-4d-shoes.png")}
                  imgAlt="ZX 2K 4D Shoes"
                  price="$320"
                />
              </Grid>
              <Grid className={Style.main__product} xs={12} sm={6} md={4}>
                <FakeCard 
                  name="4D RUN 1.0 Parley Shoes"
                  imgURL={require("./../../../images/shoes/4d-run-1.0-parley-shoes.png")}
                  imgAlt="4D RUN 1.0 Parley Shoes"
                  price="$220"
                />
              </Grid>
              <Grid className={Style.main__product} xs={12} sm={6} md={4}>
                <FakeCard
                  name="Ultraboost 20 Shoes"
                  imgURL={require("./../../../images/shoes/ultraboost-20-shoes.png")}
                  imgAlt="Ultraboost 20 Shoes"
                  price="$220"
                />
              </Grid>
              <Grid className={Style.main__product} xs={12} sm={6} md={4}>
                <FakeCard 
                  name="ZX 2K 4D Shoes"
                  imgURL={require("./../../../images/shoes/zx-2k-4d-shoes.png")}
                  imgAlt="ZX 2K 4D Shoes"
                  price="$320"
                />
              </Grid>
              <Grid className={Style.main__product} xs={12} sm={6} md={4}>
                <FakeCard 
                  name="4D RUN 1.0 Parley Shoes"
                  imgURL={require("./../../../images/shoes/4d-run-1.0-parley-shoes.png")}
                  imgAlt="4D RUN 1.0 Parley Shoes"
                  price="$220"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
     );
  }
}
 
export default CategoryDisplay;