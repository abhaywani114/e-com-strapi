import Image from "next/image"
import Link from "next/link"
import {useContext, useState, useEffect} from "react"

import {TbSearch} from "react-icons/tb"
import {CgShoppingCart} from "react-icons/cg"
import {AiOutlineHeart} from "react-icons/ai"

import Search from "./Search/Search"
import Cart from "../Cart/Cart"
import {AppContext, AppAction} from "../../context/AppContext"


import styles from "../../styles/Header.module.scss";

const Header = () => {
  const {state:appState, dispatch} = useContext(AppContext);
  const [scrolled, setScrolled] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const handleScroll = () => {
      const offset = window.scrollY;
    if (offset > 175) setScrolled(true)
    else setScrolled(false);
  }

  const handleCart = () => {
    setShowCart( t => !t);
  }

  const handleSearch = () => {
    setShowSearch ( t => !t);
  }

  useEffect( () => {
    window.addEventListener("scroll", handleScroll);
    const savedCart =  JSON.parse(localStorage.getItem("cartDetails"))
    dispatch({action: AppAction.LOAD_LOCAL_STORAGE, payload: savedCart});
  },  []);

  return (
    <>
      <header className={` ${styles.mainHeader} ${scrolled ? styles.stickyHeader:''}`}>
        <div className={styles.mainContent}>
          <ul className={styles.left}>
            <li>Home</li>
            <li>About</li>
            <li>Categories</li>
          </ul>

          <div className={styles.center}>
            <Link href="/" >ABZStore</Link>
          </div>

          <div className={styles.right}>
            <TbSearch onClick={handleSearch} />
            <AiOutlineHeart/>
            <span className={styles.cartIcon} onClick={handleCart}>
              <CgShoppingCart/>
              {
                appState.cartItems.length > 0 &&
                  <span>{appState.cartItems.length}</span>
              }
            </span>
          </div>
        </div>
    </header>
    { showCart && <Cart toggleCart={handleCart} /> }
    { showSearch && <Search toggleSearch={handleSearch} /> }
    </>
  );
};

export default Header;
