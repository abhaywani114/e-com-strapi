import getConfig from 'next/config'
import Link from "next/link"
import styles from "./Product.module.scss";

const Product = ({data}) => {
  const {attributes} = data;
  const { publicRuntimeConfig } = getConfig();
  const  BASE_URL = publicRuntimeConfig.BASE_URL;
  const url = attributes.img.data[0].attributes.url;

  return (
    <div className={styles.productCard}>
      <div className={styles.thumbnail}>
        <Link href={`/product/${data.id}`}>
          <img alt="..." src={`${BASE_URL}${url}`} />
        </Link>
      </div>
      <div className={styles.productDetails}>
        <Link href={`/product/${data.id}`}>
          <span className={styles.name}>{attributes.title}</span>
        </Link>
          <span className={styles.price}>&#8377;{attributes.price.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default Product;
