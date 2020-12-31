import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

import Container from "../components/Container/Container";
import Button from "../components/Button/Button";
import CTA from "../components/CTA/CTA";
import IllustrationPhoneMockup from '../components/ImgComponents/home/desktop/IllustrationPhoneMockup'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>payapi | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Container>
          <IllustrationPhoneMockup />
          <div className={styles.introGroup}>
            <h1>Start building with our APIs for absolutely free.</h1>
            <form>
              <input type="email" placeholder="Enter email address" />
              <Button>Schedule a Demo</Button>
            </form>
            <p>
              Have any questions? <Link href="/contact">Contact Us</Link>
            </p>
          </div>
        </Container>

        <div className={styles.partners}>
          <Container>
            <h2>Who we work with</h2>
            <p>
              Today, millions of people around the world have successfully
              connected their accounts to apps they love using our API. We
              provide developers with the tools they need to create easy and
              accessible experiences for their users.
            </p>
            <div>
              <img src="/shared/desktop/tesla.svg" />
              <img src="/shared/desktop/microsoft.svg" />
              <img src="/shared/desktop/hewlett-packard.svg" />
              <img src="/shared/desktop/oracle.svg" />
              <img src="/shared/desktop/google.svg" />
              <img src="/shared/desktop/nvidia.svg" />
            </div>
            <Button>About Us</Button>
          </Container>
        </div>

        <div className={styles.features}>
          <Container>
            <div className={styles.featureGroup}>
              <img src="/home/desktop/illustration-easy-to-implement.svg" />
              <h2>Easy to implement</h2>
              <p>
                Our API comes with just a few lines of code. You’ll be up and
                running in no time. We built our documentation page to integrate
                payments functionality with ease.
              </p>
            </div>
            <div className={styles.featureGroup}>
              <img src="/home/desktop/illustration-simple-ui.svg" />
            </div>
          </Container>
        </div>

        <div className={styles.uses}>
          <Container>
            <div className={styles.use}>
              <img src="/home/desktop/icon-personal-finances.svg" />
              <h3>Personal Finances</h3>
              <p>
                Consolidate financial data from multiple sources and categorize
                transactions up to 2 years of history. Analyze reports to
                reconcile activities in your account.
              </p>
            </div>
            <div className={styles.use}>
              <img src="/home/desktop/icon-banking-and-coverage.svg" />
              <h3>Banking & Coverage</h3>
              <p>
                With our platform, you can speed up account onboarding and
                support ongoing payments for checking, savings, credit card, and
                brokerage accounts.
              </p>
            </div>
            <div className={styles.use}>
              <img src="/home/desktop/icon-consumer-payments.svg" />
              <h3>Consumer Payments</h3>
              <p>
                It’s easier to set up secure bank payments with us through a
                flow designed with the user experience in mind. Customers could
                instantly authenticate their account.
              </p>
            </div>
          </Container>
        </div>
        <CTA />
      </main>
    </div>
  );
}
