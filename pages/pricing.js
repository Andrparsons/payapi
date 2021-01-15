import Head from "next/head";
import styles from "../styles/Home.module.css";

import Container from "../components/Container/Container";
import Button from "../components/Button/Button";
import CTA from "../components/CTA/CTA";

export default function Pricing() {
  return (
    <div className={styles.container}>
      <Head>
        <title>payapi | Pricing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Container>
          <h1>Pricing</h1>
          <div className={styles.pricingGroups}>
            <div className={styles.pricingGroup}>
              <h4 className={styles.highlight}>Free Plan</h4>
              <p>
                Build and test using our core set of products with up to 100 API
                requests
              </p>
              <h2 className={styles.bigNumber}>$0.00</h2>

              <hr />
              <ul className={styles.pricingList}>
                <li className={styles.checkedList}>Transactions</li>
                <li className={styles.checkedList}>Auth</li>
                <li className={styles.checkedList}>Identity</li>
                <li>Investments</li>
                <li>Assets</li>
                <li>Liabilities</li>
                <li>Income</li>
              </ul>
              <hr />
              <Button btnStyle="secondary">Request Access</Button>
            </div>

            <div className={styles.pricingGroup}>
              <h4 className={styles.highlight}>Basic Plan</h4>
              <p>
                Launch your project with unlimited requests and no contractual
                minimums
              </p>
              <h2 className={styles.bigNumber}>$249.00</h2>

              <hr />
              <ul className={styles.pricingList}>
                <li className={styles.checkedList}>Transactions</li>
                <li className={styles.checkedList}>Auth</li>
                <li className={styles.checkedList}>Identity</li>
                <li className={styles.checkedList}>Investments</li>
                <li className={styles.checkedList}>Assets</li>
                <li>Liabilities</li>
                <li>Income</li>
              </ul>
              <hr />
              <Button btnStyle="secondary">Request Access</Button>
            </div>

            <div className={styles.pricingGroup}>
              <h4 className={styles.highlight}>Premium Plan</h4>
              <p>
                Get tailored solutions, volume pricing, and dedicated support
                for your team
              </p>
              <h2 className={styles.bigNumber}>$499.00</h2>

              <hr />
              <ul className={styles.pricingList}>
                <li className={styles.checkedList}>Transactions</li>
                <li className={styles.checkedList}>Auth</li>
                <li className={styles.checkedList}>Identity</li>
                <li className={styles.checkedList}>Investments</li>
                <li className={styles.checkedList}>Assets</li>
                <li className={styles.checkedList}>Liabilities</li>
                <li className={styles.checkedList}>Income</li>
              </ul>
              <hr />
              <Button btnStyle="secondary">Request Access</Button>
            </div>
          </div>
        </Container>

        <CTA />
      </main>
    </div>
  );
}
