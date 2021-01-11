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
              <h3>Free Plan</h3>
              <p>
                Build and test using our core set of products with up to 100 API
                requests
              </p>
              <h2>$0.00</h2>

              <hr />
              <ul>
                <li>Transactions</li>
                <li>Auth</li>
                <li>Identity</li>
                <li>Investments</li>
                <li>Assets</li>
                <li>Liability</li>
                <li>Liability</li>
              </ul>
              <hr />
              <Button>Request Access</Button>
            </div>

            <div className={styles.pricingGroup}>
              <h3>Basic Plan</h3>
              <p>
                Launch your project with unlimited requests and no contractual
                minimums
              </p>
              <h2>$249.00</h2>

              <hr />
              <ul>
                <li>Transactions</li>
                <li>Auth</li>
                <li>Identity</li>
                <li>Investments</li>
                <li>Assets</li>
                <li>Liability</li>
                <li>Liability</li>
              </ul>
              <hr />
              <Button>Request Access</Button>
            </div>

            <div className={styles.pricingGroup}>
              <h3>Premium Plan</h3>
              <p>
                Get tailored solutions, volume pricing, and dedicated support
                for your team
              </p>
              <h2>$499.00</h2>

              <hr />
              <ul>
                <li>Transactions</li>
                <li>Auth</li>
                <li>Identity</li>
                <li>Investments</li>
                <li>Assets</li>
                <li>Liability</li>
                <li>Liability</li>
              </ul>
              <hr />
              <Button>Request Access</Button>
            </div>
          </div>
        </Container>

        <CTA />
      </main>
    </div>
  );
}
