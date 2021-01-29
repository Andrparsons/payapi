import { useState } from "react";
import styles from "./CTA.module.css";

import Container from "../Container/Container";
import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";

const CTA = () => {
  const [email, setEmail] = useState("");

  return (
    <div className={styles.CTA}>
      <div className={styles.CTAcontainer}>
        <h2 className={styles.CTATitle}>Ready to start?</h2>
        <form className={styles.emailForm}>
          <FormInput
            placeholder="Enter email address"
            type="email"
            value={email}
            setValue={setEmail}
            style='ctaSpace'
          />
          <Button>Schedule a Demo</Button>
        </form>
      </div>
    </div>
  );
};

export default CTA;
