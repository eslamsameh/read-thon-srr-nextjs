
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import InputComponent from './input';
import { addPaymentApi } from './services';

const CheckoutForm = () => {

    const stripe = useStripe();
    const elements = useElements();
    const [billingDetails, setBillingDetails] = useState({
        email: "",
        fname: "",
        lname: "",
        amount: "",
    });
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const cardElement = elements.getElement(CardElement);
        const { token } = await stripe.createToken(cardElement);
        
        console.log(token);
        const data = {
            stripeToken: token.id,
            fname: billingDetails.fname,
            lname: billingDetails.lname,
            stripeEmail: billingDetails.email,
            amount: billingDetails.amount,
            email: billingDetails.email
        };
        addPaymentApi(data).then((Res) => {
            console.log(Res);
        })
    };

    return (
        <form onSubmit={handleSubmit} style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            margin: "50px",
        }}>
             
             <div style={{ width: "100%", margin: "20px 0px" }}>
                <CardElement  />
            </div>
            <InputComponent type="text"
                onChange={(value) => setBillingDetails({ ...billingDetails, email: value })}
                placeholder={"Email Address"}
            />
            <InputComponent type="text"
                onChange={(value) => setBillingDetails({ ...billingDetails, fname: value })}
                placeholder={"First Name"}
            />
            <InputComponent type="text"
                onChange={(value) => setBillingDetails({ ...billingDetails, lname: value })}
                placeholder={"Last Name"}
            />
            <InputComponent type="number"
                onChange={(value) => setBillingDetails({ ...billingDetails, amount: value })}
                placeholder={"Amount"}
            />
           

            <div style={{ width: "100%", margin: "20px 0px" }}>
                <button style={{
                    width: "300px",
                    padding: "10px",
                    textAlign: "20px",
                    fontSize: "20px",
                    background: "red",
                    color: "#fff",
                    border: "none",
                    outline: "none"
                }} type="submit" disabled={!stripe || !billingDetails.email || !billingDetails.fname || !billingDetails.lname || !billingDetails.amount}> Pay</button>

            </div>
        </form>
    );
}



export default CheckoutForm




