import {useState, useContext} from "react"
import {AppContext, AppAction} from "../../context/AppContext"
import {withBaseUrl} from "../../service/strapi"
import styles from "./SingleProduct.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus
} from "react-icons/fa"

import RelatedProducts from "./RelatedProducts/RelatedProducts"

const SingleProduct = ({data, relatedProducts}) => {
  const {state, dispatch} = useContext(AppContext);

  const [qty, setQty] = useState(1);
  if (qty < 1 ) setQty(1);

  const {attributes:productAttribute} = data;
  const {data:categories} = productAttribute.categories;
  const {data:images}  = productAttribute.img;

  const handleAddCartBtn = () => {
    dispatch({action: AppAction.ADD_CART, payload: {product: data, quantity: qty}});
    setQty(1);
  }
  
  return (
    <>
    <div className={styles.singleProductContainer}>
      <div className={styles.left}>
        <Carousel showIndicators={false}>
          {
            images.map( i=> {
              return (
                  <img alt={i.attributes.alternativeText} src={withBaseUrl(i.attributes.url)} />
              )
            })}
        </Carousel>
      </div>
      <div className={styles.right}>
        <div className={styles.name}>{productAttribute.title}</div>
        <div className={styles.price}>&#8377;{productAttribute.price}</div>
        <div className={styles.desc}>{productAttribute.desc}</div>
        <div className={styles.cartButtons}>
          <div className={styles.quantityButtons}>
            <span onClick={() => setQty(q => --q)}>-</span>
            <span>{qty}</span>
            <span onClick={() => setQty( q => ++q)}>+</span>
          </div>
          <button className={styles.addToCart} onClick={handleAddCartBtn}><FaCartPlus size={20} /> ADD TO CART</button>
        </div>

        <span className={styles.divider} />

        <div className={styles.infoItems}>
          <span className={styles.textBold}>
            Category
            <span className={styles.text}>{categories[0].attributes.title}</span>
          </span>
          <span className={styles.textBold}>
            Share
            <span className={styles.socialIcons}>
              <FaFacebookF size={16} />
              <FaTwitter size={16} />
              <FaInstagram size={16} />
              <FaLinkedinIn size={16} />
              <FaPinterest size={16} />           
            </span>
          </span>
        </div>
      </div>
    </div>
    <RelatedProducts styles={styles} relatedProducts={relatedProducts} />
    </>
  );
};

export default SingleProduct;
