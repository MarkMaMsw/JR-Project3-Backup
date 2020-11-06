import React from 'react';
import PaymentComponent from '../../../components/Display/PaymentComponent/index';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

// import Style from "./style.module.scss"
const publishableKey =
  'pk_test_51HdsiiImefoL55jVX4NRQezFpZ9K4Uw5q4OLgVzuBeJT7wHgl6yn2vEISgKhPUU8HiJxE1MuXjXefnEehG4jFIQO00CzhX3Rys';
const stripePromise = loadStripe(publishableKey);

function Payment() {
  return (
    <>
      <Elements stripe={stripePromise}>
        <PaymentComponent
          formStyle="background-color: #2E3749"
          inputStyle="background-color: #2E3749"
          labelStyle="color: #A5A8B1"
        />
      </Elements>
    </>
  );
}

export default Payment;
