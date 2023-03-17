import axios from "axios"
import {useState, useEffect} from "react"
import Link from "next/link"
import {searchProduct, withBaseUrl} from "../../../service/strapi"
import {MdClose} from "react-icons/md"
import styles from "./Search.module.scss"

const Search = ({toggleSearch}) => {
  const [query, setQuery] = useState("");
  const handleOnChange = (e) => {
       setQuery(e.target.value);
  };

  let [htmlRendered, setHTMLRendered] = useState("");
  useEffect( () => {
    if (query == "") { setHTMLRendered(""); return}
    axios.get(`/api/search/${query}`).then( ({data}) => {
      let html = []
      for(let key in data) {
        const p = data[key];
         html.push(<div className={styles.searchResultItem} key={p.id}>
               <div className={styles.imgContainer}>
                    <img alt=".." src={withBaseUrl(p.attributes.img.data[0].attributes.url)} />
                </div>
                <Link href={`/product/${p.id}`} onClick={toggleSearch}>
                <div className={styles.details}>
                    <span className={styles.name}>{p.attributes.title}</span>
                    <span className={styles.description}>{p.attributes.desc}</span>
                  </div>
                </Link>
            </div>
         );
      }
      setHTMLRendered(html);
      });
  }, [query]);

  return (
    <div className={styles.searchModal}>
      <div className={styles.formField}>
        <input type="text" placeholder="Search for products" autoFocus onChange={handleOnChange} value={query} />
        <MdClose onClick={toggleSearch} />
      </div>
      <div className={styles.searchResultContent}>
        <div className={styles.searchResult}>
          {htmlRendered}
        </div>
      </div>
    </div>
  );
};

export default Search;
