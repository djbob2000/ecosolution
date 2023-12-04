import styles from './HomePage.module.scss';
import Main from '../../sections/Main/Main';
import About from '../../sections/About/About';
import Electricity from '../../sections/Electricity/Electricity';
import FAQ from '../../sections/Faq/Faq';
import Cases from '../../sections/Cases/Cases';
import Footer from '../../sections/Footer/Footer';
import ContactUs from '../../sections/ContactUs/ContactUs';
import { Header } from '../../sections/Header/Header';

const HomePage = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Main />
        <About />
        <Electricity />
        <Cases />
        <FAQ />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
