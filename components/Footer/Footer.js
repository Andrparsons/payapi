import styles from "./Footer.module.css";
import Link from "next/link";

import Container from "../Container/Container";

// svg imgs
import Logo from "../ImgComponents/shared/desktop/Logo";
import Facebook from "../ImgComponents/shared/desktop/Facebook";
import Twitter from "../ImgComponents/shared/desktop/Twitter";
import Linkedin from "../ImgComponents/shared/desktop/Linkedin";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.flexFooter}>
          <div className={styles.footerLinks}>
            <Link href="/">
              <a>
                <Logo className={styles.footerLogo} />
              </a>
            </Link>
            <Link href="/pricing">
              <a className={styles.footerLink}>Pricing</a>
            </Link>
            <Link href="/about">
              <a className={styles.footerLink}>About</a>
            </Link>
            <Link href="/contact">
              <a className={styles.footerLink}>Contact</a>
            </Link>
          </div>
          <div className={styles.footerIcons}>
            <Facebook />
            <Twitter />
            <Linkedin />
          </div>
        </div>
      </Container>
    </footer>
  );
}
