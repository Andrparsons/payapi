import Head from "next/head";
import styles from "../styles/Pricing.module.css";

import Container from "../components/Container/Container";
import Button from "../components/Button/Button";
import CTA from "../components/CTA/CTA";

export default function Pricing() {
  return (
    <div>
      <Head>
        <title>payapi | Pricing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Container>
          <h1 className={styles.pricingTitle}>Pricing</h1>
          <div className={styles.pricingGroups}>
            <div className={styles.pricingGroup}>
              <h4 className={styles.highlight}>Free Plan</h4>
              <p>
                Build and test using our core set of products with up to 100 API
                requests
              </p>
              <h2 className={styles.bigNumber}>$0.00</h2>
              <div className={styles.pricingBorder}>
                <ul className={styles.pricingList}>
                  <li className={styles.checkedListItem}>Transactions</li>
                  <li className={styles.checkedListItem}>Auth</li>
                  <li className={styles.checkedListItem}>Identity</li>
                  <li className={styles.uncheckedListItem}>Investments</li>
                  <li className={styles.uncheckedListItem}>Assets</li>
                  <li className={styles.uncheckedListItem}>Liabilities</li>
                  <li className={styles.uncheckedListItem}>Income</li>
                </ul>
              </div>
              <Button btnStyle="secondary">Request Access</Button>
            </div>

            <div className={styles.pricingGroup}>
              <h4 className={styles.highlight}>Basic Plan</h4>
              <p>
                Launch your project with unlimited requests and no contractual
                minimums
              </p>
              <h2 className={styles.bigNumber}>$249.00</h2>

              <div className={styles.pricingBorder}>
                <ul className={styles.pricingList}>
                  <li className={styles.checkedListItem}>Transactions</li>
                  <li className={styles.checkedListItem}>Auth</li>
                  <li className={styles.checkedListItem}>Identity</li>
                  <li className={styles.checkedListItem}>Investments</li>
                  <li className={styles.checkedListItem}>Assets</li>
                  <li className={styles.uncheckedListItem}>Liabilities</li>
                  <li className={styles.uncheckedListItem}>Income</li>
                </ul>
              </div>

              <Button btnStyle="secondary">Request Access</Button>
            </div>

            <div className={styles.pricingGroup}>
              <h4 className={styles.highlight}>Premium Plan</h4>
              <p>
                Get tailored solutions, volume pricing, and dedicated support
                for your team
              </p>
              <h2 className={styles.bigNumber}>$499.00</h2>

              <div className={styles.pricingBorder}>
                <ul className={styles.pricingList}>
                  <li className={styles.checkedListItem}>Transactions</li>
                  <li className={styles.checkedListItem}>Auth</li>
                  <li className={styles.checkedListItem}>Identity</li>
                  <li className={styles.checkedListItem}>Investments</li>
                  <li className={styles.checkedListItem}>Assets</li>
                  <li className={styles.checkedListItem}>Liabilities</li>
                  <li className={styles.checkedListItem}>Income</li>
                </ul>
              </div>

              <Button btnStyle="secondary">Request Access</Button>
            </div>
          </div>
        </Container>

        <CTA />
      </main>
    </div>
  );
}
