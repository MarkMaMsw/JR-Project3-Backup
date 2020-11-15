import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Container } from '@material-ui/core';
import { FootBar } from '../../../components/Display/FootBar';
import { NavBar } from '../../../components/Display/NavBar';
import SideBar from './SideBar';
import MyOrders from './MyOrders';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#141922'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const UserDashBoard = () => {
    const classes = useStyles();

    return (
    <>
    <NavBar/>
    <div className={classes.root}>
        <Container maxWidth="lg">
            <Grid container spacing={0}>
                <Grid item xs={12} sm={3}>
                    <SideBar/>
                </Grid>
                <Grid item xs={12} sm={9}>
                    <MyOrders/>
                </Grid>
            </Grid>
        </Container>
    </div>
    <FootBar/>
    </>
    );
}

export default UserDashBoard;
