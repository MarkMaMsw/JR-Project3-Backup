<<<<<<< HEAD
// import React from "react";
import Style from "./style.module.scss";
||||||| merged common ancestors
import React from "react";
// import Style from "./style.module.scss";
=======
import React from 'react';
// import Style from "./style.module.scss";
>>>>>>> 52bdb007f2b2ca0fbbe5c488c181f44f9687ba16
import { withRouter } from 'react-router-dom';
<<<<<<< HEAD
import React from 'react';



    

||||||| merged common ancestors
// import ReactDOM from "react-dom";
=======
// import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import {
  makeStyles,
  AppBar,
  Tabs,
  Tab,
  Typography,
  Box,
  IconButton,
} from '@material-ui/core';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import MenuIcon from '@material-ui/icons/Menu';
import Style from './style.module.scss';
>>>>>>> 52bdb007f2b2ca0fbbe5c488c181f44f9687ba16

<<<<<<< HEAD
class _NavBar extends React.Component {
    constructor(props) { 
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div>    
            </div>
            
        );
    }
||||||| merged common ancestors
class _NavBar extends React.Component {
    render() {
        return <>
        </>
    }
=======
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
>>>>>>> 52bdb007f2b2ca0fbbe5c488c181f44f9687ba16
}

<<<<<<< HEAD
const NavBar = withRouter(_NavBar);
export { NavBar };
||||||| merged common ancestors
const FootBar = withRouter(_NavBar);

export { FootBar };
=======
const useStyles = makeStyles(theme => ({
  appbar: {
    boxShadow: 'none',
  },
  indicator: {
    backgroundColor: 'black',
    height: '5px',
  },
  tab: {
    fontSize: '1.4rem',
  },
  icon: {
    height: '50px',
  },
  grayBar: {
    height: '8vh',
    backgroundColor: '#f5f5f5',
  },
}));

export default function _NavBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={Style.navbar}>
      <AppBar className={classes.appbar} position="static">
        <Box className={classes.grayBar} />
        <Box className={Style.menu}>
          <img src="favicon.ico" className={classes.icon} />
          <div className={Style.menuItem}>
            <Tabs
              value={value}
              onChange={handleChange}
              classes={{
                indicator: classes.indicator,
              }}
            >
              <Tab
                className={[classes.tab, Style.item].join(' ')}
                disableRipple
                label="Most Popular"
                {...a11yProps(0)}
              />
              <Tab
                className={[classes.tab, Style.item].join(' ')}
                disableRipple
                label="Men"
                {...a11yProps(1)}
              />
              <Tab
                className={[classes.tab, Style.item].join(' ')}
                disableRipple
                label="Women"
                {...a11yProps(2)}
              />
            </Tabs>
          </div>
          <div>
            <IconButton classes={{ label: Style.burgerMenu }}>
              <MenuIcon fontSize="large" />
            </IconButton>
            <IconButton aria-label="account">
              <LocalMallIcon fontSize="large" />
            </IconButton>
          </div>
        </Box>
      </AppBar>
      <Box>
        <Box className={classes.grayBar} />
      </Box>
    </div>
  );
}

const NavBar = withRouter(_NavBar);

export { NavBar };
>>>>>>> 52bdb007f2b2ca0fbbe5c488c181f44f9687ba16
