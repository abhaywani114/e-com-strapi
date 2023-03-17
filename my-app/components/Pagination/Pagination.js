import styles from "./pagination.module.scss"
import Link from 'next/link'
export default function Pagination({page, next, prev, pageCount}) {

  return (<div className={styles.pagination}>
        { (page) > 1 &&
          <Link href={prev} scroll={false} className={styles.link}>
            <span className={styles.prev}>{"<<"}</span>
          </Link>
        }
        <span className={styles.page_no}>{ Number(page)}</span>
        { page < pageCount &&
          <Link href={next} scroll={false} className={styles.link}>
            <span className={styles.next}>{">>"}</span>
          </Link>
          }
        </div>
  )

}
