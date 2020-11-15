import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 360,
    backgroundColor: '#141922',
    color: '#fff',
    width: '290px',
    marginTop: '10px'
  },
  icon: {
      color: '#FFA300',
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(1),
  },
  icon_hover: {
      color: 'black',
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(1),
  },
  list_text_hover: {
    color: 'black',
  },
  list_item: {
    marginBottom: '3px',
    backgroundColor: '#191F2B',
    transition: 'ease-in-out 0.3s',
  },
  list_item_hover: {
    marginBottom: '3px',
    backgroundColor: '#FFA300',
    transition: 'ease-in-out 0.3s',
  },
  logout: {
    color: '#FFA300',
    '&:hover': {
        color: '#FFA300',
    },
  },
  nested: {
    paddingLeft: theme.spacing(8),
  },
  emptyspace: {
      height: '200px',
  }
}));

const SideBar = () => {
  const classes = useStyles();
  const [orderopen, setOrderpen] = useState(false);
  const [accountopen, setAccountopen] = useState(false);
  const [orderhovered, setOrderhovered] = useState(false);
  const [accounthovered, setAccounthovered] = useState(false);
  const orders = ["My Orders (buying)", "My Orders (selling)", "Disputes"];
  const account = ["My Store", "Customize Store", "My Reputation", "Account Settings", "Block members"];

  const toggleOrder = () => {
    if (orderopen){
        setOrderpen(false);
    } else {
        setOrderpen(true);
        setAccountopen(false);
    }
  };

  const toggleAccount = () => {
      if (accountopen){
          setAccountopen(false);
      } else {
          setAccountopen(true);
          setOrderpen(false);
      }
  }

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >

      <ListItem 
        onClick={toggleOrder} 
        className={(orderhovered || orderopen) ? classes.list_item_hover : classes.list_item} 
        onMouseEnter={() => setOrderhovered(true)} 
        onMouseLeave={() => setOrderhovered(false)}
      >
        <ShoppingCartIcon className={(orderhovered || orderopen) ? classes.icon_hover : classes.icon}/>
        <ListItemText primary="Orders" className={(orderhovered || orderopen) && classes.list_text_hover }/>
        {orderopen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={orderopen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {orders.map(order => {
              return (
                <ListItem button className={classes.nested}>
                    <ListItemText primary={order} />
                </ListItem>);
          })}  
        </List>
      </Collapse>

      <ListItem 
        onClick={toggleAccount} 
        className={(accounthovered || accountopen) ? classes.list_item_hover : classes.list_item}
        onMouseEnter={() => setAccounthovered(true)} 
        onMouseLeave={() => setAccounthovered(false)}
      >
        <PersonOutlineIcon className={(accounthovered || accountopen) ? classes.icon_hover : classes.icon}/>
        <ListItemText primary="Account" className={(accounthovered || accountopen) && classes.list_text_hover }/>
        {accountopen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={accountopen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            {account.map(acc => {
                return (
                    <ListItem button className={classes.nested}>
                        <ListItemText primary={acc} />
                    </ListItem>);
            })}
        </List>
      </Collapse>

      <ListItem className={classes.list_item}>
          <Link className={classes.logout}>Log Out</Link>
      </ListItem>
      <ListItem className={classes.list_item}>
          <div className={classes.emptyspace}></div>
      </ListItem>

    </List>
  );
}

export default SideBar;