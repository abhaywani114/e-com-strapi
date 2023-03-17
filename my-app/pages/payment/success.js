import {useContext, useEffect} from "react"
import Banner from "../../components/Home/Banner/Banner"
import Layout from "../../components/Layout"
import style from "../../styles/Home.module.scss"
import customStyle from "./payment.module.scss"
import {AiFillCheckCircle} from "react-icons/ai"
import {AppContext, AppAction} from "../../context/AppContext"

export default function Success() {
  const {dispatch} = useContext(AppContext);
  useEffect( () => {
    dispatch({action: AppAction.RESET_CART});
  }, []);
  return (
    <Layout title="ABZStore - the complete online store">
      <div className={style.mainContent}>
        <div className={style.layout}>
          <div className={`${customStyle.paymentStatusDiv}`}>
            <div className={customStyle.paymentStatusContent}>
              <div className={customStyle.bgSuccess}></div>
              <div className={customStyle.innerContent}>
                <AiFillCheckCircle className={customStyle.success} />
                <h1>We have received your payment</h1>
                <h2>Your Order is on the way</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>

  );
}
