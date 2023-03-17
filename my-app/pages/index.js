import {useEffect, useContext} from "react"
import Layout from "../components/Layout"
import Banner from "../components/Home/Banner/Banner"
import Products from "../components/Products/Products"
import Pagination from "../components/Pagination/Pagination"
import Category from "../components/Home/Category/Category"
import style from "../styles/Home.module.scss"
import {getCategories, getProducts} from "../service/strapi"
import {AppContext, AppAction} from "../context/AppContext"

import Link from "next/link"

export async function getServerSideProps(req, res) {
  let {page} =  req.query;
  page = page == undefined ? 1:page;
  const {data:categories} = await getCategories();
  const {data:products, meta} = await getProducts(page);
  return {
    props: {
      categories: categories,
      products: products,
      page: Number(page),
      pageCount: meta.pagination.pageCount,
    }
  }
}

export default function Home({categories, products, page, pageCount, meta}) {
  const {dispatch} = useContext(AppContext);
  useEffect( () => {
    dispatch({action: AppAction.ADD_CATEGORY, payload: categories});
    dispatch({action: AppAction.ADD_PRODUCTS, payload: products});
  }, [categories, products]);

  return (
    <Layout title="ABZStore - the complete online store">
      <Banner />
      <div className={style.mainContent}>
        <div className={style.layout}>
          <Category />  
          <>
            <Products data={products} CategoryName="Our Products" />
            <Pagination page={page} next={`?page=${page+1}`} prev={`?page=${page-1}`} pageCount={pageCount}/>
          </>
        </div>
      </div>
    </Layout>
  )
}
