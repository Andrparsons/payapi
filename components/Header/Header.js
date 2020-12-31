import Link from "next/link";

import styles from "./Header.module.css";

import Container from "../Container/Container";
import Logo from '../ImgComponents/shared/desktop/Logo'
import Menu from '../ImgComponents/shared/mobile/Menu'

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.flexHeader}>
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
          <Menu className={styles.hamburger} />
        </div>
      </Container>
    </header>
  );
}
