import styles from "./CTA.module.css";

import Container from "../Container/Container";
import Button from '../Button/Button'

const CTA = () => {
  return (
    <div className={styles.CTA}>
      <Container>
        <h2>Ready to start?</h2>
        <form>
          <input type="email" placeholder="Enter email address" />
          <Button>Schedule a Demo</Button>
        </form>
      </Container>
    </div>
  );
};

export default CTA;
