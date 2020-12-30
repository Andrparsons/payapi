import Head from "next/head";
import styles from "../styles/Home.module.css";

import Container from "../components/Container/Container";
import CTA from "../components/CTA/CTA";
import Button from "../components/Button/Button";

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

        <CTA />
      </main>
    </div>
  );
}
