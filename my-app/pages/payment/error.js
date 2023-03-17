import Banner from "../../components/Home/Banner/Banner"
import Layout from "../../components/Layout"
import style from "../../styles/Home.module.scss"
import customStyle from "./payment.module.scss"
import {RxCrossCircled} from "react-icons/rx"

export default function Error() {
  return (
    <Layout title="ABZStore - the complete online store">
      <div className={style.mainContent}>
        <div className={style.layout}>
          <div className={`${customStyle.paymentStatusDiv}`}>
            <div className={customStyle.paymentStatusContent}>
              <div className={customStyle.bgError}></div>
              <div className={customStyle.innerContent}>
                <RxCrossCircled className={customStyle.error} />
                <h1>Failed to receive your payment.</h1>
                <h2>Please try again.</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>

  );
}
