import {useContext} from "react"
import styles from "./CartItem.module.scss"
import {MdClose} from "react-icons/md"

import {AppContext, AppAction} from "../../../context/AppContext"
import {withBaseUrl} from "../../../service/strapi"

const CartItem = () => {
  const {state, dispatch} = useContext(AppContext);
  const {cartItems} = state;
  const renderedHTML = cartItems.map( p => {
      const handleRemoveBtn = () => {
        dispatch({action: AppAction.REMOVE_CART, payload: {product: p}});
      }
    
    const handleQtyBtn = (t) => {
              dispatch({action: AppAction.UPDATE_CART, payload: {product: p, type: t}});
      }



      const images = p.attributes.img.data[0].attributes;
      return (
        <div className={styles.cartProducts}>
          <div className={styles.product}>
            <div className={styles.imgContainer}>
                <img alt={images.alternateText} src={withBaseUrl(images.url)} />
            </div>
            <div className={styles.details}>
              <span className={styles.name}>{p.attributes.title}</span>
              <MdClose onClick={handleRemoveBtn} className={styles.closeBtn} />
              <div className={styles.quantityButtons}>
                <span onClick={() => handleQtyBtn('dec')}>-</span>
                <span>{p.attributes.quantity}</span>
                <span onClick={() => handleQtyBtn('inc')}>+</span>
              </div>
              <div className={styles.text}>
                <span>{p.attributes.quantity}</span>
                <span>x</span>
                <span className={styles.highlight}>&#8377; {p.attributes.price}</span>
                <span>=</span>
                <span className={styles.highlight}>&#8377; {p.attributes.quantity * p.attributes.price}</span>
              </div>
            </div>
          </div>
        </div>
      );
  });

  return (<>{renderedHTML}</>);
};

export default CartItem;
