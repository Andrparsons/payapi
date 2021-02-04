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
        <div className={styles.titleContainer}>
          <h1 className={styles.aboutTitle}>
            We empower innovators by delivering access to the financial system
          </h1>
        </div>

        <div className={styles.aboutGroups}>
          <div className={styles.aboutGroup}>
            <h4 className={styles.aboutGroupTitle}>Our Vision</h4>
            <p>
              Our main goal is to build beautiful consumer experiences along
              with developer-friendly infrastructure. The result is an
              intelligent tool that gives everyone the ability to create amazing
              products that solve big problems. We are deeply focused on
              democratizing financial services through technology.
            </p>
          </div>
          <div className={styles.aboutGroup}>
            <h4 className={styles.aboutGroupTitle}>Our Business</h4>
            <p>
              At the core of our platform is the technical infrastructure APIs
              that connect consumers. Our innovative product provides key
              insights for businesses and individuals, as well as robust
              reporting for traditional financial institutions and developers.
            </p>
          </div>
        </div>

        <picture>
          <source
            media="(min-width:1100px)"
            srcSet="/about/desktop/image-team-members.jpg"
          />
          <source
            media="(min-width:450px)"
            srcSet="/about/tablet/image-team-members.jpg"
          />

          <img
            className={styles.aboutPicture}
            src="/about/mobile/image-team-members.jpg"
            alt="Team members"
          />
        </picture>

        <div className={styles.statsGroup}>
          <div className={styles.stat}>
            <p className={styles.statTitle}>Team Members</p>
            <h2 className={styles.bigNumber}>300+</h2>
          </div>
          <div className={styles.stat}>
            <p className={styles.statTitle}>Offices in the US</p>
            <h2 className={styles.bigNumber}>3</h2>
          </div>
          <div className={styles.stat}>
            <p className={styles.statTitle}>Transactions analyzed</p>
            <h2 className={styles.bigNumber}>10M+</h2>
          </div>
        </div>

        <div className={styles.aboutGroups}>
          <div className={styles.aboutGroup}>
            <h4 className={styles.aboutGroupTitle}>The Culture</h4>
            <p>
              We strongly believe there's always an opportunity to learn from
              each other outside of day-to-day work, whether it's company-wide
              offsites, internal hackathons, or co-worker meetups. We always
              value cross-team collaboration and diversity of thought, no matter
              the job title.
            </p>
          </div>
          <div className={styles.aboutGroup}>
            <h4 className={styles.aboutGroupTitle}>The People</h4>
            <p>
              We're all passionate about building a more efficient and inclusive
              financial infrastructure together. At PayAPI, we have diverse
              backgrounds and skills.
            </p>
          </div>
        </div>

        <CTA />
      </main>
    </div>
  );
}
