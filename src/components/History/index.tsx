'use client';
import styles from './styles.module.scss'
export default function History() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.textH1} id="no-banner-title">Istorija</h1>
      <p className={styles.textP}>Jevandjeoska crkva Riječ Božija registrovana je u Podgorici od 08.okt.2001.</p>
      <p className={styles.textP}>Prva okupljanja sa nekolicinom zainteresovanih pojedinaca za proučavanje Sv. Pisma desila su se 
  tokom 1993 god. Skromni počeci su trajali nekoliko godina dok se nisu stekli uslovi da se iznajmi 
  prva javna prostorija za okupljanje članova i simpatizera.&nbsp;</p>
      <p className={styles.textP}>Iako sporo, zajednici vjernika priključivale su se osobe koje su spoznale da je Isus Hrist, Spasitelj 
  njihove du&scaron;e i Gospodar njihovih života.&nbsp;</p>
  </div>
  );
}