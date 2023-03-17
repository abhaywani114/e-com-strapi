import Products from "../../Products/Products"

const RelatedProducts = ({styles, relatedProducts}) => {

  return <div className={styles.relatedProducts}>
      <Products CategoryName="Related Product" data={relatedProducts} />
    </div>;
};

export default RelatedProducts;
