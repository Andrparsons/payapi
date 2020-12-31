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
        <div className={styles.flexHeader}>
          <Logo />
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
          <Facebook />
          <Twitter />
          <Linkedin />
        </div>
      </Container>
    </footer>
  );
}
