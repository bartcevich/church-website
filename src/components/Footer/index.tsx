'use client';
import styles from './styles.module.scss'
export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.text}>
        <h3 className={styles.textH3}>Jeste li slobodni ove nedjelje?</h3>
        <h2 className={styles.textH2}>DOĐITE I PRIDRUŽITE NAM SE</h2>
        <h4 className={styles.textH4}>9 Špira Mugoše, Podgorica, MNE 81000</h4>
        <h4 className={styles.textH4}>jc.rijec.bozija@gmail.com +382 69 69 59 69</h4>
      </section>
  </div>
  );
}