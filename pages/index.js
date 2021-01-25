import { useState } from "react";

import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

import Container from "../components/Container/Container";
import Button from "../components/Button/Button";
import CTA from "../components/CTA/CTA";
import FormInput from "../components/FormInput/FormInput";

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
  const [email, setEmail] = useState("");
  return (
    <div>
      <Head>
        <title>payapi | Home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main className={styles.main}>
        <Container>
          <div className={styles.intro}>
            <div className={styles.mockupContainer}>
              <IllustrationPhoneMockup
                viewBox="-25 -25 419 655"
                width="auto"
                height="auto"
              />
            </div>
            <div className={styles.introGroup}>
              <h1 className={styles.introTitle}>
                Start building with our APIs for absolutely free.
              </h1>
              <form className={styles.emailForm}>
                <FormInput
                  placeholder="Enter email address"
                  type="email"
                  value={email}
                  setValue={setEmail}
                />
                <Button>Schedule a Demo</Button>
              </form>
              <p className={styles.questions}>
                Have any questions?{" "}
                <Link href="/contact">
                  <a className={styles.inlineLink}>Contact Us</a>
                </Link>
              </p>
            </div>
          </div>
        </Container>

        <div className={styles.partners}>
          <Container>
            <div className={styles.partnerFlex}>
              <div className={styles.partnerLogos}>
                <Tesla />
                <Microsoft />
                <HewlettPackard />
                <Oracle />
                <Google />
                <Nvidia />
              </div>
              <div className={styles.partnerContent}>
                <h2 className={styles.partnerTitle}>Who we work with</h2>
                <p className={`${styles.darkText} ${styles.partnerText}`}>
                  Today, millions of people around the world have successfully
                  connected their accounts to apps they love using our API. We
                  provide developers with the tools they need to create easy and
                  accessible experiences for their users.
                </p>
                <Link href="/about">
                  <a>
                    <Button btnStyle="secondary">About Us</Button>
                  </a>
                </Link>
              </div>
            </div>
          </Container>
        </div>

        <div className={styles.features}>
          <div className={styles.featureContainer}>
            <div className={styles.featureGroup}>
              <div className={styles.implementMockup}>
                <IllustrationEasyToImplement
                  viewBox="27 55 500 325"
                  width="auto"
                  height="auto"
                />
              </div>
              <div className={styles.featureContent}>
                <h2 className={styles.featureGroupTitle}>Easy to implement</h2>
                <p>
                  Our API comes with just a few lines of code. You’ll be up and
                  running in no time. We built our documentation page to
                  integrate payments functionality with ease.
                </p>
              </div>
            </div>

            <div className={styles.featureGroup}>
              <div className={styles.uiMockup}>
                <IllustrationSimpleUi
                  viewBox="25 55 625 560"
                  width="auto"
                  height="auto"
                />
              </div>
              <div className={styles.featureContent}>
                <h2 className={styles.featureGroupTitle}>Simple UI & UX</h2>
                <p>
                  Our pre-built form is easy to integrate in your app or
                  website’s checkout flow and designed to optimize conversion.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Container>
          <div className={styles.uses}>
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
          </div>
        </Container>

        <CTA />
      </main>
    </div>
  );
}
