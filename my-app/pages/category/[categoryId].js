import Layout from "../../components/Layout"
import Products from "../../components/Products/Products"
import Pagination from "../../components/Pagination/Pagination"
import style from "../../styles/Home.module.scss"
import {getCategoryProduct} from "../../service/strapi"
import {useRouter} from "next/router"

export async function getServerSideProps(req, res) {
  const {categoryId} = req.query;
  let {page} =  req.query;
  page = page == undefined ? 1:page;
  const {data, meta} = await getCategoryProduct(categoryId, page);
  return {
    props: {
      categoryName: data?.[0]?.attributes?.categories?.data?.[0]
                            ?.attributes?.title ?? "No Products Available Right now",
      data, 
      categoryId,
      pageCount: meta.pagination.pageCount,
      page: Number(page)
    }
  }
}

export default function CategoryName({categoryName, data, page, pageCount, categoryId}) {
  return (
    <Layout title={`Products: ${categoryName.toUpperCase()}`}>
      <div className={style.mainContent}>
        <div className={style.layout}>
          <Products CategoryName={categoryName} data={data} page={page} />
          <Pagination page={page} pageCount={pageCount}
              next={`/category/${categoryId}/?page=${page+1}`} 
              prev={`/category/${categoryId}/?page=${page-1}`}/>
        </div>
      </div>
    </Layout>
  )
}
