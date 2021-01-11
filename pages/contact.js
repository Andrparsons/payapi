import Head from "next/head";
import styles from "../styles/Home.module.css";

import Container from "../components/Container/Container";
import CTA from "../components/CTA/CTA";
import Button from "../components/Button/Button";

import {
  Tesla,
  Microsoft,
  HewlettPackard,
  Oracle,
  Google,
  Nvidia,
} from "../components/ImgComponents/shared/desktop/index";

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>payapi | Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Container>
          <h1>Submit a help request and we'll get in touch shortly.</h1>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email Address" />
            <input type="text" placeholder="Company Name" />
            <input type="text" placeholder="Title" />
            <textarea placeholder="Message" />
            <input type="check" />
            <label>
              Stay up-to-date with company announcements and updates to our API
            </label>
            <Button>Submit</Button>
          </form>
        </Container>

        <div>
          <Container>
            <h2>Join the thousands of innovators already building with us</h2>
            <div className={styles.partnerLogos}>
              <Tesla />
              <Microsoft />
              <HewlettPackard />
              <Oracle />
              <Google />
              <Nvidia />
            </div>
          </Container>
        </div>

        <CTA />
      </main>
    </div>
  );
}
