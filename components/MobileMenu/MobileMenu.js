import Link from "next/link";
import styles from "./MobileMenu.module.css";

import Container from "../Container/Container";
import Button from "../Button/Button";
import Close from "../ImgComponents/shared/mobile/Close";

export default function MobileMenu({ open, setOpen }) {
  return (
    <div
      className={styles.mobileMenu}
      style={
        open
          ? { transform: "translateX(0%)" }
          : { transform: "translateX(100%)" }
      }
    >
      <Container>
        <div className={styles.iconContainer}>
          <Close className={styles.close} onClick={() => setOpen(!open)} />
        </div>
        <hr className={styles.menuBorder} />
        <div className={styles.mobileLinks}>
          <Link href="/pricing">
            <a className={styles.mobileLink} onClick={() => setOpen(!open)}>
              Pricing
            </a>
          </Link>
          <Link href="/about">
            <a className={styles.mobileLink} onClick={() => setOpen(!open)}>
              About
            </a>
          </Link>
          <Link href="/contact">
            <a className={styles.mobileLink} onClick={() => setOpen(!open)}>
              Contact
            </a>
          </Link>
          <Button>Schedule a Demo</Button>
        </div>
      </Container>
    </div>
  );
}
