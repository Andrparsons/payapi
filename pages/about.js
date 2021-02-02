import Head from "next/head";
import styles from "../styles/About.module.css";

import Container from "../components/Container/Container";
import CTA from "../components/CTA/CTA";

export default function About() {
  return (
    <div>
      <Head>
        <title>payapi | About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Container>
          <h1 className={styles.aboutTitle}>
            We empower innovators by delivering access to the financial system
          </h1>
        </Container>

        <Container>
          <div className={styles.aboutGroup}>
            <h4>Our Vision</h4>
            <p>
              Our main goal is to build beautiful consumer experiences along
              with developer-friendly infrastructure. The result is an
              intelligent tool that gives everyone the ability to create amazing
              products that solve big problems. We are deeply focused on
              democratizing financial services through technology.
            </p>
          </div>
          <div className={styles.aboutGroup}>
            <h4>Our Business</h4>
            <p>
              At the core of our platform is the technical infrastructure APIs
              that connect consumers. Our innovative product provides key
              insights for businesses and individuals, as well as robust
              reporting for traditional financial institutions and developers.
            </p>
          </div>
        </Container>

        <img
          srcSet="
                  /about/mobile/image-team-members.jpg 375w,
                  /about/tablet/image-team-members.jpg 769w,
                  /about/desktop/image-team-members.jpg 1440w"
          src="/about/mobile/image-team-members.jpg"
          alt="Team members"
        />

        <div className={styles.statsGroup}>
          <Container>
            <div className={styles.stat}>
              <hr />
              <p>Team Members</p>
              <h2 className={`${styles.bigNumber} ${styles.highlight}`}>300+</h2>
            </div>
            <div className={styles.stat}>
              <p>Offices in the US</p>
              <h2 className={`${styles.bigNumber} ${styles.highlight}`}>3</h2>
            </div>
            <div className={styles.stat}>
              <p>Transactions analyzed</p>
              <h2 className={`${styles.bigNumber} ${styles.highlight}`}>10M+</h2>
              <hr />
            </div>
          </Container>
        </div>

        <Container>
          <div className={styles.aboutGroup}>
            <h4>The Culture</h4>
            <p>
              We strongly believe there's always an opportunity to learn from
              each other outside of day-to-day work, whether it's company-wide
              offsites, internal hackathons, or co-worker meetups. We always
              value cross-team collaboration and diversity of thought, no matter
              the job title.
            </p>
          </div>
          <div className={styles.aboutGroup}>
            <h4>The People</h4>
            <p>
              We're all passionate about building a more efficient and inclusive
              financial infrastructure together. At PayAPI, we have diverse
              backgrounds and skills.
            </p>
          </div>
        </Container>

        <CTA />
      </main>
    </div>
  );
}
