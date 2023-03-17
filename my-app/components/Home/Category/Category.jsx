import {useContext} from "react"
import {AppContext, AppAction} from "../../../context/AppContext"
import style from "./Category.module.scss";
import Link from "next/link"
import getConfig from 'next/config'


const Category = ({baseUrl}) => {
  const {state, dispatch} = useContext(AppContext);
  const {categories} = state;

  const renderedHtml = categories.map( (c) => {
      const { publicRuntimeConfig } = getConfig();
      const  BASE_URL = publicRuntimeConfig.BASE_URL;

      const {attributes} = c;
      const url = attributes.img.data[0].attributes.url;

      return (<div className={style.category} key={c.id}>
          <Link href={`/category/${c.id}`}>
            <img alt="..." src={`${BASE_URL}${url}`}/>
          </Link>
        </div>);
  });
  
  return (
    <div className={style.shopByCategory}>
      <div className={style.categories}>
        {renderedHtml}
      </div>
    </div>

  );
};

export default Category;
