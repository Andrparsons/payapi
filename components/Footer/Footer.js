import styles from "./Footer.module.css";
import Link from 'next/link';

import Container from '../Container/Container'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.flexHeader} >
          <img src='/shared/desktop/logo.svg' alt='payapi logo' />
          <div>
            <Link href="/pricing">
              <a>Pricing</a>
            </Link>
            <Link href="/about">
              <a>About</a>
            </Link>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </div>
        </div>
        <div>
          <img src='/shared/desktop/facebook.svg' />
          <img src='/shared/desktop/twitter.svg' />
          <img src='/shared/desktop/linkedin.svg' />
        </div>
      </Container>
    </footer>
  )
}