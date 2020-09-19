import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe  = price * 100;
    const publishableKey = "pk_test_51HT5CSGE8zvtrWJsfDSO2E6yTxxatHm87AezSjLnEMUH5MtCssXFLoxpWEvXxISLxHfenAu7Ek7WGkrTmxqgZNYH00dKW5hITY"
    
    const onToken = token =>{
        console.log(token);
        alert("Payment successful")
    }
    
    return(
        <StripeCheckout
            label="Pay Now"
            name="Crown Commerce Ltd."
            billingAddress
            shippingAddress
            image="https://sendeyo.com/up/d/f3eb2117da"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton