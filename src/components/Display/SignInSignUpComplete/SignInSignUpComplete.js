import React, { useState } from 'react';
import styles from './SignInSignUpComplete.module.scss'
import Grid from '@material-ui/core/Grid';


const SignInSignUpComplete = () => {
    return (
        <Grid container justify="center" className={styles.contact_body}>
            <Grid item xs={12} md={6} container justify="center" className={styles.card_left} alignContent="center">
                <Grid xs={8} className={styles.card_content_left}>
                    <h1>Welcome!</h1>
                </Grid>
            </Grid>

            <Grid item xs={12} md={6} container justify="center" className={styles.card_right} alignContent="center">
            <Grid className={styles.card_content_right} xs={10}>
                <h1>Hi, Friend!</h1>
                <p>Nice to meet you.</p>
                <button className={styles.start_shopping_btn}>START SHOPING!</button>
            </Grid>
            </Grid>
        </Grid>
    );
}

export default SignInSignUpComplete;