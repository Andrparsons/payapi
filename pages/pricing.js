import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Pricing() {
  return (
    <div className={styles.container}>
      <Head>
        <title>payapi | Pricing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Pricing</h1>
      </main>
    </div>
  )
}
