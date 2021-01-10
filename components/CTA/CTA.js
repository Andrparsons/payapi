import { useState } from "react";
import styles from "./CTA.module.css";

import Container from "../Container/Container";
import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";

const CTA = () => {
  const [email, setEmail] = useState("");

  return (
    <div className={styles.CTA}>
      <Container>
        <h2>Ready to start?</h2>
        <form>
          <FormInput
            placeholder="Enter email address"
            type="email"
            value={email}
            setValue={setEmail}
          />
          <Button>Schedule a Demo</Button>
        </form>
      </Container>
    </div>
  );
};

export default CTA;
