import styles from "./AppLayout.module.css";
import { useRouter } from "next/router";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const AppLayout = ({ children }) => {
  const router = useRouter();
  console.log(router);
  let backgroundStyle = 'appBackground';

  if (router.route === '/') {
    backgroundStyle = 'homeBackground';
  } else {
    backgroundStyle = 'appBackground'
  }

  return (
    <div className={styles[backgroundStyle]}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export const getLayout = (page) => <AppLayout>{page}</AppLayout>;

export default AppLayout;
