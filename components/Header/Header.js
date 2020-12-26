import styles from "./Header.module.css";

import Container from '../Container/Container'

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.flexHeader} >
          <img src='/shared/desktop/logo.svg' alt='payapi logo' />
          <img src='/shared/mobile/menu.svg' alt='' />
        </div>
      </Container>
    </header>
  )
}