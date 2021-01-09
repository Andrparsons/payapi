import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

import Container from "../components/Container/Container";
import Button from "../components/Button/Button";
import CTA from "../components/CTA/CTA";

import {
  IllustrationEasyToImplement,
  IllustrationPhoneMockup,
  IllustrationSimpleUi,
  IconPersonalFinances,
  IconBankingAndCoverage,
  IconConsumerPayments,
} from "../components/ImgComponents/home/desktop/index";
import {
  Tesla,
  Microsoft,
  HewlettPackard,
  Oracle,
  Google,
  Nvidia,
} from "../components/ImgComponents/shared/desktop/index";

export default function Home() {
  return (
    <div>
      <Head>
        <title>payapi | Home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main>
        <Container>
          <div className={styles.mockupContainer}>
            <IllustrationPhoneMockup
              viewBox="-25 0 419 655"
              width="auto"
              height="auto"
            />
          </div>
          <div className={styles.introGroup}>
            <h1 className={styles.introTitle}>Start building with our APIs for absolutely free.</h1>
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
              <Tesla />
              <Microsoft />
              <HewlettPackard />
              <Oracle />
              <Google />
              <Nvidia />
            </div>
            <Button>About Us</Button>
          </Container>
        </div>

        <div className={styles.features}>
          <Container>
            <div className={styles.featureGroup}>
              <IllustrationEasyToImplement
                viewBox="0 0 605 444"
                width="auto"
                height="auto"
              />
              <h2>Easy to implement</h2>
              <p>
                Our API comes with just a few lines of code. You’ll be up and
                running in no time. We built our documentation page to integrate
                payments functionality with ease.
              </p>
            </div>
            <div className={styles.featureGroup}>
              <IllustrationSimpleUi
                viewBox="0 0 722 660"
                width="auto"
                height="auto"
              />
              <h2>Simple UI & UX</h2>
              <p>
                Our pre-built form is easy to integrate in your app or website’s
                checkout flow and designed to optimize conversion.
              </p>
            </div>
          </Container>
        </div>

        <div className={styles.uses}>
          <Container>
            <div className={styles.use}>
              <IconPersonalFinances />
              <h3>Personal Finances</h3>
              <p>
                Consolidate financial data from multiple sources and categorize
                transactions up to 2 years of history. Analyze reports to
                reconcile activities in your account.
              </p>
            </div>
            <div className={styles.use}>
              <IconBankingAndCoverage />
              <h3>Banking & Coverage</h3>
              <p>
                With our platform, you can speed up account onboarding and
                support ongoing payments for checking, savings, credit card, and
                brokerage accounts.
              </p>
            </div>
            <div className={styles.use}>
              <IconConsumerPayments />
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
