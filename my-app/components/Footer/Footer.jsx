import style from "./Footer.module.scss";
import {imgPayment} from "../../public/assets/payments.png"
import {FaLocationArrow, FaMobileAlt, FaEnvelope} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={style.footerSecion}>
      <div className={style.footerContent}>
        <div className={style.col}>
          <div className={style.title}>About</div>
          <div className={style.text}>Some text here i would like to put if you will allow me. Else the space is going to remain blank.Some text here i would like to put if you will allow me. Else the space is going to remain blank</div>
        </div>
        
        <div className={style.col}>
          <div className={style.title}>Content</div>
          <div className={style.cItems}>
            <FaLocationArrow />
            <div className={style.text}>Sogam Lolab, Kupwara, Jammu and Kashmir - 193223</div>
          </div>
        
          <div className={style.cItems}>
            <FaMobileAlt/>
            <div className={style.text}>+91 7889480433</div>
          </div>
  
          <div className={style.cItems}>
            <FaEnvelope />
            <div className={style.text}>abhaywani114@gmail.com</div>
          </div>

        </div>
        
        <div className={`${style.col} ${style.link}`}>
          <div className={style.title}>Categories</div>
            <div className={style.text}>Menu Item 1</div>
            <div className={style.text}>Menu Item 2</div>
            <div className={style.text}>Menu Item 3</div>
            <div className={style.text}>Menu Item 4</div>
            <div className={style.text}>Menu Item 5</div>
            <div className={style.text}>Menu Item 6</div>
        </div>

        <div className={`${style.col} ${style.link}`}>
          <div className={style.title}>Pages</div>
          <div className={style.text}>Home</div>
          <div className={style.text}>About</div>
          <div className={style.text}>Return</div>
          <div className={style.text}>Contact Us</div>
          <div className={style.text}>Privacy Policy</div>
          <div className={style.text}>Terms and Condition</div>
        </div>
      </div>
      <div className={style.bottomBar}>
        <div className={style.bottomBarContent}>
          <div className={style.text}>Copyright 2023. Devloped by Abrar Osmanli</div>
          <img src="../../assets/payments.png" alt="..." />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
