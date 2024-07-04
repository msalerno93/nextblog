import Image from "next/image"
import styles from "./postCard.module.css"
import Link from "next/link"


const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="/contact.png" alt="" fill className={styles.img}/>
        </div>
        <span className={styles.date}></span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Hello</h1>
        <p className={styles.desc}>Description here</p>
        <Link href="/" className={styles.link}>READ MORE</Link>
      </div>
    </div>
  )
}

export default PostCard