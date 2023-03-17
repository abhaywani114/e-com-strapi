import {FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn} from "react-icons/fa"

import styles from "./Newsletter.module.scss";

const Newsletter = () => {
  return (
    <div className={styles.newsletterSecion}>
      <div className={styles.newsletterContent}>
        <div className={styles.smallText}>Newsletter</div>
        <div className={styles.bigText}>Sign up for latest updates and offers</div>
        <div className={styles.form}>
          <input type="text" placeholder="Email address" />
          <button>Subscribe</button>
        </div>
        <div className={styles.text}>Will be used in accordance with our privacy policy</div>
        <div className={styles.socialMediaIcons}>
            <div className={styles.icon}>
              <FaFacebookF size={14} />
            </div>
            <div className={styles.icon}>
              <FaTwitter size={14} />
            </div>
            <div className={styles.icon}>
              <FaInstagram size={14} />
            </div>
            <div className={styles.icon}>
              <FaLinkedinIn size={14} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
