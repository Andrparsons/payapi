import Header from '../Header/Header';
import Footer from '../Footer/Footer'

const  AppLayout = ({children}) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>

);

export const getLayout = page => <AppLayout>{page}</AppLayout>;

export default AppLayout;