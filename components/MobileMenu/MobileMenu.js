import Link from "next/link";
import styles from "./MobileMenu.module.css";

import Container from "../Container/Container";
import Button from "../Button/Button";
import Close from "../ImgComponents/shared/mobile/Close";

export default function MobileMenu({ open, setOpen }) {
  
  return (
    <div className={styles.mobileMenu} style={ open? {transform: 'translateX(0%)'} : {transform:'translateX(100%)' }}>
      <Container>
        <div className={styles.iconContainer}>
          <Close className={styles.close} onClick={() => setOpen(!open)} />
        </div>
        <hr />
        <div className={styles.mobileLinks}>
          <Link href="/pricing">
            <a className={styles.mobileLink}>Pricing</a>
          </Link>
          <Link href="/about">
            <a className={styles.mobileLink}>About</a>
          </Link>
          <Link href="/contact">
            <a className={styles.mobileLink}>Contact</a>
          </Link>
        </div>
        <Button>Schedule a Demo</Button>
      </Container>
    </div>
  );
}
