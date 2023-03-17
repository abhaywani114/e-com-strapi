import Image from "next/image"
import styles from "../../../styles/Banner.module.scss";

const Banner = () => {
  return (
    <div className={styles.heroBanner}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h1>Sales</h1>
          <p>Some text here i would like to put if you will allow me. Else the space is going to remain blank</p>
          <div className={styles.ctx}>
            <div className={styles.banner}>Read More</div>
            <div className={`${styles.banner} ${styles.v2}`}>Shop Now</div>
          </div>
        </div>
        <img src="/assets/banner-img.png" className={styles.bannerImg}  alt="..."  />
      </div>
    </div>
  );
};

export default Banner;
