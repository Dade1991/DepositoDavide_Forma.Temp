// Importo il ile CSS dedicato alla CardCustom

import styles from "./CardCustom.module.css"

// Inizializzo componente CardCustom

function CardCustom() {
  // Ritorno il componente che dovrà montarsi

  return (
    <article className={styles.card}>
      <div className={styles.top}>
        <h3 className={styles.title}>Piano Business</h3>
        <p className={styles.description}>
          Una soluzione completa per presentare i tuoi servizi in modo chiaro,
          moderno e orientato alla conversione.
        </p>
      </div>

      <p className={styles.price}>€599</p>

      <ul className={styles.featureList}>
        <li className={styles.featureItem}>Design responsive</li>
        <li className={styles.featureItem}>Sezioni personalizzate</li>
        <li className={styles.featureItem}>Call to action efficaci</li>
      </ul>

      <a href="#contatti" className={styles.button}>
        Scegli piano
      </a>
    </article>
  )
}

export default CardCustom
