
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';

const InputComponent = ({ type, onChange, placeholder }) => {




    return (
        <input style={{
            border: "none",
            margin: "20px 0px",
            fontSize: "16px",
            outline: "none",
            boxShadow: "none",
            width: "100%"
        }} type={type} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
    );
}



export default InputComponent




