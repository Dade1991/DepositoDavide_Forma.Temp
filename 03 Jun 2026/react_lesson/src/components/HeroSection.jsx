// Importo il ile CSS dedicato alla HeroSection

import styles from "./HeroSection.module.css"

// Inizializzo componente HeroSection

function HeroSection() {
  // Inzializzo varibili dinamiche

  const brand = "DevLaunch"
  const focus = "più veloce"
  const value = "più chiaro"
  const target = "più professionale"
  const slogan = `Il tuo progetto web, ${focus}, ${value}, ${target}.`

  // Ritorno il componente che dovrà montarsi

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <span className={styles.badge}>Soluzioni digitali su misura</span>

        <h1 className={styles.title}>
          Porta online il tuo servizio con {brand}
        </h1>

        <p className={styles.subtitle}>
          {slogan} Creiamo interfacce moderne, performanti e orientate alla
          conversione per freelance, startup e piccole aziende.
        </p>

        <div className={styles.actions}>
          <a href="#offerte" className={styles.primaryBtn}>
            Scopri le offerte
          </a>

          <a href="#contatti" className={styles.secondaryBtn}>
            Prenota una call
          </a>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
