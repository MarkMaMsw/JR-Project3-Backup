import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        color: 'white',
        margin: '10px',
    },
    header: {
        fontSize: '20px'
    },
    search_form: {
        height: '200px',
        backgroundColor: '#263044',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    label: {
        color: '#B3B3B3',
        width: '95px',
    },
    select: {
        backgroundColor: '#202635',
        color: 'white',
        border: 'none',
        height: '40px',
        margin: '0 20px',
    },
    search_btn: {
        height: '40px',
        backgroundColor: '#FFA300',
        padding: '0 30px',
        margin: '0 20px',
        borderRadius: '5px',
        border: 'none',
    },
    table_head: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        listStyle: 'none',
        marginTop: '10px',
        padding: '0 10px',
        height: '50px',
        backgroundColor: '#263044',
    },
  }));

const MyOrders = () => {
    const classes = useStyles();
    const [status, setStatus] = useState('all')

    const changeStatus = (e) => {
        setStatus(e.target.value);
    }

    return (
        <div className={classes.root}>
            <header className={classes.header}>My Orders (buying)</header>
            <div className={classes.search_form}>
                <div className={classes.form_row}>
                    <label className={classes.label}>Order Status: </label>
                    <select value={status} onChange={changeStatus} className={classes.select}>
                        <option value="all">All</option>
                        <option value="pending">Pending Payment</option>
                        <option value="dispute">Disputing</option>
                        <option value="wait">Waiting for Feedback</option>
                    </select>
                </div>
                <div className={classes.form_row}> 
                    <label className={classes.label}>From</label>
                    <input className={classes.select}/>
                    <label className={classes.label}>To</label>
                    <input className={classes.select}/>
                    <button className={classes.search_btn}>SEARCH</button>
                </div>
            </div>

            <ul className={classes.table_head}>
                <li>Order Title</li>
                <li>Seller</li>
                <li>Price</li>
                <li>Quantity</li>
                <li>Order Status</li>
                <li>Action</li>
            </ul>
        </div>
    );
}

export default MyOrders;