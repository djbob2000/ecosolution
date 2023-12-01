import styles from './HomePage.module.scss';
import Main from '../../sections/Main/Main';
import About from '../../sections/About/About';
import Electricity from '../../sections/Electricity/Electricity';
const HomePage = () => {
  return (
    <>
      <main className={styles.main}>
        <Main />
        <About />
        <Electricity />
      </main>
      <footer className="footer"></footer>
    </>
  );
};

export default HomePage;
