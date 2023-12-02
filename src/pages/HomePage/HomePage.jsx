import styles from './HomePage.module.scss';
import Main from '../../sections/Main/Main';
import About from '../../sections/About/About';
import Electricity from '../../sections/Electricity/Electricity';
import FAQ from '../../sections/Faq/Faq';
const HomePage = () => {
  return (
    <>
      <main className={styles.main}>
        <Main />
        <About />
        <Electricity />
        <FAQ />
      </main>
      <footer className="footer"></footer>
    </>
  );
};

export default HomePage;
