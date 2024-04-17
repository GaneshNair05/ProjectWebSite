import express from "express";

const app = express();
const port = 3000; //add your port here
const PUBLISHABLE_KEY = "pk_test_51P5COmSG9M21Fk2RfYHBu6wTUwzbOVY0PbBT5t29cyKGSaGqGYsOOczVyAFMOWRiyohjviYBH8Ng7fDdLcBwmn6n00kcUOiGfg";
const SECRET_KEY = "sk_test_51P5COmSG9M21Fk2R12d1pfuGddGPUS3w1BN7EBqiTczOvrqnwyRYFaFlkst9O3MABICyQnCUTF4KpQKtz4c77DtP00EmhgOD3J";
import Stripe from "stripe";

//Confirm the API version from your stripe dashboard
const stripe = new Stripe(SECRET_KEY, { apiVersion: "2024-04-10" });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost: ${port}`);
});

app.post("/create-payment-intent", async (_req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1099, //lowest denomination of particular currency
      currency: "usd",
      payment_method_types: ["card"], //by default
    });

    const clientSecret = paymentIntent.client_secret;

    res.json({
      clientSecret: clientSecret,
    });
  } catch (e) {
    console.log(e.message);
    res.json({ error: e.message });
  }
});