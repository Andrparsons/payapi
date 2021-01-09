import Link from "next/link";
import { useState } from "react";

import styles from "./Header.module.css";

import Container from "../Container/Container";
import MobileMenu from "../MobileMenu/MobileMenu";
import Logo from "../ImgComponents/shared/desktop/Logo";
import Menu from "../ImgComponents/shared/mobile/Menu";
import Button from "../Button/Button";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.flexHeader}>
          <div className={styles.linkGroup}>
            <Link href="/">
              <a className={styles.logoLink}>
                <Logo />
              </a>
            </Link>
            <div className={styles.responsiveLinkGroup}>
              <Link href="/pricing">
                <a className={styles.pageLink}>Pricing</a>
              </Link>
              <Link href="/about">
                <a className={styles.pageLink}>About</a>
              </Link>
              <Link href="/contact">
                <a className={styles.pageLink}>Contact</a>
              </Link>
            </div>
          </div>
          <div className={styles.headerButton}>
            <Button>Schedule a Demo</Button>
          </div>
          <div className={styles.menuWrapper}>
            <Menu className={styles.hamburger} onClick={() => setOpen(!open)} />
            <MobileMenu open={open} setOpen={setOpen} />
          </div>
        </div>
      </Container>
    </header>
  );
}
