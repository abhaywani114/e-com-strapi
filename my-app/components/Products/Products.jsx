import Product from "./Product/Product"
import styles from "./Products.module.scss";
import Link from "next/link"
const Products = ({data, CategoryName, page}) => {
  const renderHtml = data.map( p => {
        return <Product key={p.id} data={p} />
  });

  return (
    <div className={styles.productContainer}>
      <div className={styles.secHeading}>{!CategoryName ? "Section Heading":CategoryName}</div>
      <div className={styles.products}>
        {renderHtml}
      </div>
    </div>
  );
};

export default Products;
