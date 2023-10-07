import styles from './styles.module.scss'
export default function Map() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.text}>
        <h4>Drago nam je &scaron;to ste ovdje</h4>
        <h4>Službe: nedjeljom u 10:00 sati.</h4>
        <h4>Na&scaron;a misija:</h4>
        <h4>Učeći Riječ Božiju živimo.</h4>
        <h4>Riječ Božija je vrijedna da je izučavamo i poučavamo.</h4>
        <h4>Samo silom Riječi Božije možemo da živimo život</h4>
        <h4>koji je na slavu Božiju.</h4>
      </section>
    <div>
      <iframe
        width="300"
        height="200"
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1472.2946482998245!2d19
        .25659104417604!3d42.43647620194799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4
        v1577381747681!5m2!1sen!2s">
      </iframe>
    </div>
  </div>
  );
}
