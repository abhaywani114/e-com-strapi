import {useRouter} from "next/router"
import Layout from "../../components/Layout"
import style from "../../styles/Home.module.scss"
import SingleProduct from "../../components/SingleProduct/SingleProduct"

import {getProducts, getProductById, getRelatedProducts} from "../../service/strapi.js"

export async function getStaticPaths(req, res) {
  const {data:products} = await getProducts();
  
  const paths = products.map((product) => ({
    params: { productId: product.id.toString() },
  }))

  return { paths, fallback: false }

}

export async function getStaticProps(req, res) {
  const {productId} = req.params;
  const {data} = await getProductById(productId);
  const catId =  data?.attributes.categories.data[0].id
  const {data:relatedProducts} = await getRelatedProducts(productId, catId);
  return {
    props: {
      data, relatedProducts
    }
  }
}

export default function Home({data, relatedProducts}) {
  return (
    <Layout title={data.attributes.title}>
      <div className={style.mainContent}>
        <div className={style.layout}>
          <SingleProduct data={data} relatedProducts={relatedProducts} /> 
        </div>
      </div>
    </Layout>
  )
}
