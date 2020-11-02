import React, { useState } from 'react';
import styles from './ContactComponent.module.scss'
import Grid from '@material-ui/core/Grid';

const BeforeSend = (props) => {
    return (
        <Grid className={styles.card_content_right} xs={6} >
            <input type="text" placeholder="Name" className={styles.inputbox}></input>
            <input type="email" placeholder="Email" className={styles.inputbox}></input>
            <textarea placeholder="Hey, I wanna say..." className={styles.textbox}></textarea>
            <button className={styles.sendbtn} onClick={() => {props.setSend(!props.send)}}>SEND</button>
        </Grid>
    );
};

const AfterSend = () => {
    return (
        <Grid className={styles.card_content_right} xs={8} >
            <p>Thank you.</p>
            <p>we will get back to you within 2~3 business days.</p>
            <button className={styles.steart_shopping_btn}>START SHOPING!</button>
        </Grid>
    );
};


const ContactComponent = () => {
    const [send, setSend] = useState(false);

    return (
        <Grid container justify="center" className={styles.contact_body}>
            <Grid item xs={6} container justify="center" className={styles.card_left} alignContent="center">
                <Grid xs={8} className={styles.card_content_left}>
                    <h1>Have something to share?</h1>
                    <p>Send us feedback and we will get in touch soon.</p>
                </Grid>
            </Grid>

            <Grid item xs={6} container justify="center" className={styles.card_right} alignContent="center">
                {send ? <AfterSend/> : <BeforeSend setSend={setSend} send={send}/>}
            </Grid>
        </Grid>
    );
}

export default ContactComponent;