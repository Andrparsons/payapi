import { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import Container from "../components/Container/Container";
import CTA from "../components/CTA/CTA";
import Button from "../components/Button/Button";
import FormInput from "../components/FormInput/FormInput";
import FormTextarea from "../components/FormInput/FormTextarea";

import {
  Tesla,
  Microsoft,
  HewlettPackard,
  Oracle,
  Google,
  Nvidia,
} from "../components/ImgComponents/shared/desktop/index";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [check, setCheck] = useState(false);

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
            <FormInput
              type="text"
              placeholder="Name"
              required={true}
              value={name}
              setValue={setName}
              style='contactInput'
            />
            <FormInput
              type="email"
              placeholder="Email Address"
              required={true}
              value={email}
              setValue={setEmail}
              style='contactInput'
            />
            <FormInput
              type="text"
              placeholder="Company Name"
              value={company}
              setValue={setCompany}
              style='contactInput'
            />
            <FormInput
              type="text"
              placeholder="Title"
              value={title}
              setValue={setTitle}
              style='contactInput'
            />
            <FormTextarea
              placeholder="Message"
              value={message}
              setValue={setMessage}
              style='contactInput'
            />
            <input type="checkbox" />
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
