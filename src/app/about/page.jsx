import Image from "next/image";
import React from "react";
import styles from "./about.module.css";

const descInfo = [
  {
    id: 1,
    htag: "10 K+",
    ptag: "Years of Experience",
  },
  {
    id: 2,
    htag: "11 K+",
    ptag: "Years of Experience",
  },
  {
    id: 3,
    htag: "14 K+",
    ptag: "Years of Experience",
  },
];

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subTitle}>About Our Agency</h2>
        <h1 className={styles.title}>We help things happen</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis
          eos libero dolores fugit maiores eaque.
        </p>
        <div className={styles.boxes}>
          {descInfo.map(({ id, htag, ptag }) => {
            return (
              <div className={styles.box} key={id}>
                <h1>{htag}</h1>
                <p>{ptag}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="" fill className={styles.img} />
      </div>
    </div>
  );
};

export default AboutPage;
