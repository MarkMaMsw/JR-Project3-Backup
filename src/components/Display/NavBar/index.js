import React from 'react';
// import Style from "./style.module.scss";
import { withRouter } from 'react-router-dom';
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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

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
