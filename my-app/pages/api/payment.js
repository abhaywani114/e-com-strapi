import {makePaymentRequest} from "../../service/strapi"
import { loadStripe } from "@stripe/stripe-js"

const handlePayment = async (cartItems) => {
  try {
      const res = await makePaymentRequest.post("/api/orders", {
          products: cartItems,
      });
    return res.data.stripeSession.id
  } catch (err) {
      console.log(err);
  }
};


export default async function handler(req, res) {
  const data = await handlePayment(req.body.cartItems) 
  res.status(200).json({ sessionID: data})
}
