// Importo il ile CSS dedicato alla Navbar

import styles from "./Navbar.module.css"

// Inizializzo componente Navbar

function Navbar() {
  // variabili per navLinks

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Servizi", href: "#servizi" },
    { label: "Offerte", href: "#offerte" },
    { label: "Contatti", href: "#contatti" },
  ]

  // Ritorno il componente che dovrà montarsi

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <a href="#home" className={styles.logo}>
            DevLaunch
          </a>

          <nav className={styles.nav}>
            {navLinks.map((navLink) => (
              <a
                key={navLink.label}
                href={navLink.href}
                className={styles.link}
              >
                {navLink.label}
              </a>
            ))}
          </nav>

          <a href="#offerte" className={styles.cta}>
            Inizia ora
          </a>
        </div>
      </header>
    </>
  )
}

export default Navbar
