import { loadStripe } from "@stripe/stripe-js";
import {useContext, useEffect} from "react"
import getConfig from 'next/config'
import axios from "axios"

import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";

import styles from "./Cart.module.scss";
import CartItem from "./CartItem/CartItem"

import {AppContext, AppAction} from "../../context/AppContext"
const Cart = ({toggleCart, stripePromiseKey}) => {
  const {state, dispatch} = useContext(AppContext);

    const handlePayment = async () => {
        try {
          const {data:stripeOrderData} = await axios.post("/api/payment", {
            cartItems: state.cartItems 
          });

          const { publicRuntimeConfig } = getConfig();
          const stripePromise = loadStripe(publicRuntimeConfig.STRIPE_PUBKEY);
          const stripe = await stripePromise;
          await stripe.redirectToCheckout({
              sessionId: stripeOrderData.sessionID,
          });

        } catch (err) {
            console.log(err);
        }
    };

  
  return (
    <div className={styles.cartPannel}>
      <div className={styles.opacLayer}></div>
      <div className={styles.cartContent}>
        
        <div className={styles.headerSection}>
          <span className={styles.title}>Shopping Cart</span>
          <span className={styles.closeBtn} onClick={toggleCart}>
            <span className={styles.closeText}>Close</span>
            <MdClose />
          </span>
        </div>

        { state.cartItems.length < 1 &&
        <div className={styles.emptyCart}>
          <BsCartX />
          <span>No products in the cart</span>
          <button>Return to shop</button>
        </div>
        }
        <>
        <div className={styles.middle}>
          <CartItem />
        </div>
          <div className={styles.cartFotter}>
            <div className={styles.subtotal}>
              <span className={styles.text}>Subtotal:</span>
              <span className={`${styles.text} ${styles.total}`}>&#8377; {state.cartSubTotal}</span>
            </div>
            <div className={styles.checkoutButtonContainer}>
              <button onClick={handlePayment}>Checkout</button>
            </div>
          </div>
        </>

      </div>
    </div>
  );
};

export default Cart;
